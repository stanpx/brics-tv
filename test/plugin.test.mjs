import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validate } from "../sdk/validate.mjs";
import { validateManifest } from "../sdk/contract.mjs";
import { createKino } from "../sdk/kino-shim.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifestRaw = JSON.parse(readFileSync(join(root, "kino-plugin.json"), "utf8"));
const manifest = validateManifest(JSON.stringify(manifestRaw)).manifest;

const pluginUrl = pathToFileURL(join(root, "plugin.js")).href;
const plugin = await import(pluginUrl);

function setupKino() {
  const k = createKino(manifest);
  globalThis.kino = k.kino;
  return k;
}

test("Kino accepts the manifest and exports", async () => {
  const r = await validate(root, { repo: "stanpx/brics-tv" });
  assert.deepEqual(r.problems, []);
  assert.equal(r.ok, true);
  assert.equal(manifest.id, "brics-tv");
  assert.equal(manifest.version, "0.1.1");
  assert.equal(manifest.apiVersion, 6);
});

test("liveCategories returns all curated categories", async () => {
  setupKino();
  const categories = await plugin.liveCategories();
  assert.ok(Array.isArray(categories));
  assert.ok(categories.length >= 7);
  const ids = categories.map(c => c.id);
  assert.ok(ids.includes("destacados"));
  assert.ok(ids.includes("brics-global"));
  assert.ok(ids.includes("america-latina"));
  assert.ok(ids.includes("todos"));
});

test("liveChannels returns channels for a category with valid streams", async () => {
  setupKino();
  const res = await plugin.liveChannels({ categoryId: "america-latina" });
  assert.ok(res && Array.isArray(res.items));
  assert.ok(res.items.length >= 5);
  for (const item of res.items) {
    assert.ok(item.id);
    assert.ok(item.title);
    assert.ok(item.ref);
    if (item.stream) {
      assert.ok(item.stream.url.startsWith("http"));
      assert.ok(item.stream.mime);
    }
  }
});

test("liveSearch finds relevant channels", async () => {
  setupKino();
  const res = await plugin.liveSearch({ query: "telesur" });
  assert.ok(res && Array.isArray(res.items));
  assert.equal(res.items.length, 1);
  assert.equal(res.items[0].id, "telesur");
});

test("home returns featured live row", async () => {
  setupKino();
  const rows = await plugin.home();
  assert.ok(Array.isArray(rows));
  assert.equal(rows.length, 1);
  assert.equal(rows[0].id, "destacados-brics");
  assert.ok(rows[0].items.length > 0);
  for (const item of rows[0].items) {
    assert.equal(item.kind, "live");
    assert.ok(item.id);
    assert.ok(item.title);
  }
});

test("resolve returns stream for known channel ref and rejects unknown", async () => {
  setupKino();
  const stream = await plugin.resolve("canal:canal-22-ar");
  assert.ok(stream.url);
  assert.equal(stream.mime, "application/vnd.apple.mpegurl");

  await assert.rejects(
    async () => plugin.resolve("canal:inexistente-xyz"),
    (err) => err.code === "not_found"
  );
});
