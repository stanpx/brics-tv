/**
 * Plugin de canales en vivo BRICS TV (Otro mundo) para Kino TV.
 * Señales internacionales de acceso público: noticias y cultura soberana.
 */

const CATEGORIES = [
  { id: "destacados", title: "Destacados" },
  { id: "brics-global", title: "Red BRICS y Aliados" },
  { id: "america-latina", title: "América Latina" },
  { id: "eurasia-oriente", title: "Eurasia y Medio Oriente" },
  { id: "asia-pacifico", title: "Asia y el Pacífico" },
  { id: "africa", title: "África" },
  { id: "todos", title: "Todos los canales" }
];

const CHANNELS = [
  {
    id: "canal-22-ar",
    title: "Canal 22 (Argentina)",
    country: "Argentina",
    url: "https://media.cdnvid.com/public/7c3g8h159tip.m3u8",
    logo: "https://canal22web.com/wp-content/uploads/2024/05/LOGO-CANAL-REBORDE-BLANCO-1.2.png",
    categories: ["destacados", "america-latina"]
  },
  {
    id: "cgtn-espanol",
    title: "CGTN (Español)",
    country: "China",
    url: "https://amg01314-cgtn-amg01314c3-rakuten-uk-1318.playouts.now.amagi.tv/cgtn-es-rakuten/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/23/CGTN_Spanish_logo.svg",
    categories: ["destacados", "brics-global", "asia-pacifico"]
  },
  {
    id: "telesur",
    title: "Telesur",
    country: "Venezuela",
    url: "https://mblesmain01.telesur.ultrabase.net/mbliveMain/480p/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/36/TeleSUR_logo_%28textless%29.svg",
    categories: ["destacados", "america-latina", "brics-global"]
  },
  {
    id: "cubavision-internacional",
    title: "Cubavisión Internacional",
    country: "Cuba",
    url: "https://cdn.teveo.cu/live/video/A36pWmuWvZBQskuZ/ngrp:gppfydfzpSUn9Udy.stream/playlist.m3u8",
    headers: { "Referer": "https://teveo.cu/" },
    logo: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Cvinternacional.png/960px-Cvinternacional.png",
    categories: ["america-latina"]
  },
  {
    id: "tv-brasil",
    title: "TV Brasil",
    country: "Brasil",
    url: "https://tvbrasil-stream.ebc.com.br/EBC_HD-avc1_2300000=10000.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b9/TV_Brasil_logo_2023.svg",
    categories: ["destacados", "america-latina", "brics-global"]
  },
  {
    id: "al-jazeera",
    title: "Al Jazeera",
    country: "Catar",
    url: "https://live-hls-apps-aje-fa.getaj.net/AJE/index.m3u8",
    youtubeUrl: "https://www.youtube.com/channel/UCNye-wNBqNL5ZzHSJj3l8Bg/live",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f2/Aljazeera_eng.svg",
    categories: ["destacados", "eurasia-oriente"]
  },
  {
    id: "nbt-thai",
    title: "NBT THAI",
    country: "Tailandia",
    url: "https://cdn-edge.iiptvcdn.com/live_event/smil:4f6e-aa34-2034-5492-c82d.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/NBT_2025.svg",
    categories: ["asia-pacifico"]
  },
  {
    id: "nbt2-thai",
    title: "NBT2 THAI",
    country: "Tailandia",
    url: "https://cdn-edge.iiptvcdn.com/live_event/smil:f180-054a-38d7-ce66-f7cf.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/NBT_2025.svg",
    categories: ["asia-pacifico"]
  },
  {
    id: "ubc-uganda",
    title: "UBC Uganda",
    country: "Uganda",
    url: "https://channels.ad-ug.com/live/ch03/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/UBC.png",
    categories: ["africa"]
  },
  {
    id: "belarus-24-hd",
    title: "Belarus 24 HD",
    country: "Bielorrusia",
    url: "https://ngtrk.dc.beltelecom.by/ngtrk/smil:belarus24.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Belarus_24_logo.svg",
    categories: ["eurasia-oriente"]
  },
  {
    id: "belarus-24-sd",
    title: "Belarus 24 SD (Opción 2)",
    country: "Bielorrusia",
    url: "http://ott-7.sevstar.net/belarus24/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Belarus_24_logo.svg",
    categories: ["eurasia-oriente"]
  },
  {
    id: "belarus-1",
    title: "Belarus 1",
    country: "Bielorrusia",
    url: "https://ngtrk.dc.beltelecom.by/ngtrk/_definst_/smil:belarus1.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Belarus_24_logo.svg",
    categories: ["eurasia-oriente"]
  },
  {
    id: "uzreport-tv",
    title: "Uzreport TV",
    country: "Uzbekistán",
    url: "https://stream8.cinerama.uz/1015/tracks-v1a1/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/ru/5/57/Uzreport_TV_logo.png",
    categories: ["eurasia-oriente"]
  },
  {
    id: "tvri-indonesia",
    title: "TVRI Indonesia",
    country: "Indonesia",
    url: "https://ott-balancer.tvri.go.id/live/eds/Nasional/hls/Nasional.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/TVRI-World.svg",
    categories: ["asia-pacifico"]
  },
  {
    id: "tvri-world",
    title: "TVRI World",
    country: "Indonesia",
    url: "https://ott-balancer.tvri.go.id/live/eds/TVRIWorld/hls/TVRIWorld.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/TVRI-World.svg",
    categories: ["asia-pacifico"]
  },
  {
    id: "trt-world",
    title: "TRT World",
    country: "Turquía",
    url: "https://tv-trtturk.medya.trt.com.tr/master.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/TRT_World.svg",
    categories: ["eurasia-oriente"]
  },
  {
    id: "bolivia-tv",
    title: "Bolivia TV",
    country: "Bolivia",
    url: "http://190.181.61.93:8000/play/a001/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8a/BTV_logo_2026.png",
    categories: ["america-latina"]
  },
  {
    id: "vietnam-today",
    title: "Vietnam Today",
    country: "Vietnam",
    url: "https://amagi-live.ondemandkorea.com/amgplt0456.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/VietnamTodayVTV.svg",
    categories: ["asia-pacifico"]
  },
  {
    id: "nta-international",
    title: "NTA INTERNATIONAL NIGERIA",
    country: "Nigeria",
    url: "https://api.visionip.tv/live/ASHTTP/visiontvuk-entertainment-ntai-hsslive-25f-4x3-MB/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1c/Logo_of_the_Nigerian_Television_Authority.png",
    categories: ["africa"]
  },
  {
    id: "thai-pbs",
    title: "Thai PBS",
    country: "Tailandia",
    url: "https://live-us1.thaimomo.com/live-as/chThaipbshd-2/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Thai_PBS_Logo_2016.svg",
    categories: ["asia-pacifico"]
  },
  {
    id: "dubai-international-hd",
    title: "Dubai International HD",
    country: "Emiratos Árabes Unidos",
    url: "http://185.9.2.18/chid_139/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Dubai_TV_Logo.svg",
    categories: ["eurasia-oriente"]
  },
  {
    id: "qatar-tv-1",
    title: "Qatar TV",
    country: "Catar",
    url: "https://live.kwikmotion.com/qtv1live/qtv1.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Qatar_TV_logo.png",
    categories: ["eurasia-oriente"]
  },
  {
    id: "qatar-tv-2",
    title: "Qatar TV (Opción 2)",
    country: "Catar",
    url: "https://live.kwikmotion.com/qtv2live/qtv2.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/88/Qatar_TV_logo.png",
    categories: ["eurasia-oriente"]
  },
  {
    id: "presstv",
    title: "PressTV",
    country: "Irán",
    url: "https://live.presstv.ir/hls/presstv_5_482/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Press_TV_logo.svg",
    categories: ["destacados", "eurasia-oriente", "brics-global"]
  },
  {
    id: "hispantv-nexo-latino",
    title: "HispanTV - Nexo Latino",
    country: "Irán / América Latina",
    url: "https://hugh.cdn.rumble.cloud/video/s8/2/2/9/n/S/29nSr.caa.rec.mp4?u=4&b=0",
    mime: "video/mp4",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/da/Hispan_Tv_logo.svg",
    categories: ["america-latina"]
  },
  {
    id: "nile-tv-egypt",
    title: "Nile TV Egypt",
    country: "Egipto",
    url: "http://185.9.2.18/chid_352/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Nile_TV.jpg",
    categories: ["africa"]
  },
  {
    id: "tv-brics-espanol",
    title: "TV BRICS (Español)",
    country: "BRICS",
    url: "https://espbrics.mediacdn.ru/cdn/brics/spanish/tracks-v1a1/mono.ts.m3u8",
    logo: "https://tvbrics.com/local/templates/tvbrics_combo/images/logo-mobile.svg",
    categories: ["destacados", "brics-global"]
  },
  {
    id: "ebs-ethiopia",
    title: "EBS ETHIOPIA",
    country: "Etiopía",
    url: "https://rpn.bozztv.com/ebstv/ebstv/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/en/b/ba/EBS_TV_%28Ethiopia%29.png",
    categories: ["africa"]
  },
  {
    id: "rt-espanol",
    title: "RT Español",
    country: "Rusia",
    url: "https://rt-esp.rttv.com/dvr/rtesp/playlist_4500Kb.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Russia-today-logo.svg",
    categories: ["destacados", "brics-global", "eurasia-oriente"]
  },
  {
    id: "al-ekhbariya",
    title: "Al Ekhbariya (Arabia Saudita)",
    country: "Arabia Saudita",
    url: "https://shd-gcp-live.edgenextcdn.net/live/bitmovin-al-ekhbaria/297b3ef1cd0633ad9cfba7473a686a06/index.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e3/%D8%A7%D9%84%D9%82%D9%86%D8%A7.png",
    categories: ["eurasia-oriente"]
  },
  {
    id: "sabc-news",
    title: "SABC NEWS",
    country: "Sudáfrica",
    url: "https://sabconetanw.cdn.mangomolo.com/news/smil:news.stream.smil/playlist.m3u8",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/SABC_News_logo_2018.jpg",
    categories: ["brics-global", "africa"]
  },
  {
    id: "tv-brics-english",
    title: "TV BRICS (English)",
    country: "BRICS",
    url: "https://engbrics.mediacdn.ru/cdn/brics/english/playlist.m3u8",
    logo: "https://tvbrics.com/local/templates/tvbrics_combo/images/logo-mobile.svg",
    categories: ["destacados", "brics-global"]
  }
];

function channelRef(channel) {
  return "canal:" + channel.id;
}

function toLiveChannel(channel) {
  const item = {
    id: channel.id,
    title: channel.title,
    logo: channel.logo,
    ref: channelRef(channel)
  };

  if (channel.url) {
    item.stream = {
      url: channel.url,
      headers: channel.headers || {},
      mime: channel.mime || "application/vnd.apple.mpegurl"
    };
  }

  return item;
}

/**
 * Categorías para la pestaña "En vivo" de Kino.
 */
export async function liveCategories() {
  await null;
  return CATEGORIES;
}

/**
 * Listado de canales por categoría.
 */
export async function liveChannels({ categoryId, cursor }) {
  await null;
  const filtered = categoryId === "todos"
    ? CHANNELS
    : CHANNELS.filter(c => c.categories.includes(categoryId));

  return {
    items: filtered.map(toLiveChannel)
  };
}

/**
 * Búsqueda de canales en la guía de En vivo.
 */
export async function liveSearch({ query }) {
  await null;
  const q = (query || "").toLowerCase().trim();
  if (q.length < 2) return { items: [] };

  const matches = CHANNELS.filter(c =>
    c.title.toLowerCase().includes(q) ||
    (c.country && c.country.toLowerCase().includes(q))
  );

  return {
    items: matches.map(toLiveChannel)
  };
}

/**
 * Fila de señales destacadas para la pantalla Home de Kino.
 */
export async function home() {
  await null;
  const featured = CHANNELS.filter(c => c.categories.includes("destacados"));
  return [
    {
      id: "destacados-brics",
      title: "BRICS TV — Señales destacadas",
      items: featured.map(c => ({
        id: c.id,
        ref: channelRef(c),
        title: c.title,
        kind: "live",
        poster: c.logo
      }))
    }
  ];
}

/**
 * Resuelve la reproducción de un canal por su referencia.
 */
export async function resolve(ref) {
  await null;

  if (typeof ref !== "string" || !ref) {
    throw kino.error("invalid_request", "Referencia no válida");
  }

  // Manejo de señales que provienen de YouTube mediante kino.browser.capture
  if (ref.startsWith("youtube:")) {
    const targetUrl = ref.slice("youtube:".length);
    if (!kino.browser || typeof kino.browser.capture !== "function") {
      throw kino.error("unavailable", "El navegador oculto de Kino no está disponible en este dispositivo");
    }

    try {
      const page = await kino.browser.capture(targetUrl, { timeoutMs: 20000 });
      if (!page.media || page.media.length === 0) {
        throw kino.error("unavailable", "No se detectó flujo de video en YouTube");
      }
      const stream = page.media[0];
      return {
        url: stream.url,
        headers: stream.headers || {},
        mime: stream.mime || "application/vnd.apple.mpegurl"
      };
    } catch (e) {
      if (e.code === "browser_unavailable") {
        throw kino.error("unavailable", "Navegador web no disponible en este entorno");
      }
      throw e;
    }
  }

  // Búsqueda del canal por su ref o por su ID
  const cleanId = ref.replace(/^canal:/, "");
  const channel = CHANNELS.find(c => channelRef(c) === ref || c.id === cleanId);

  if (!channel || !channel.url) {
    throw kino.error("not_found", "Canal no encontrado");
  }

  return {
    url: channel.url,
    headers: channel.headers || {},
    mime: channel.mime || "application/vnd.apple.mpegurl"
  };
}
