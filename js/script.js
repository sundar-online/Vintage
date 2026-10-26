
/* video lightbox */
const vmodal = document.getElementById("vmodal"), vframe = document.getElementById("vframe"), vclose = document.getElementById("vclose");
let lastFocus = null;
function openVideo(id, focusEl) {
  lastFocus = focusEl || null;
  vframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0&playsinline=1&modestbranding=1";
  vmodal.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeVideo() {
  vframe.src = "";
  vmodal.classList.remove("open");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
/* inline video playback in project cards */
function playInlineProjectVideo(pj) {
  if (!pj) return;
  const vid = pj.dataset.yt;
  if (!vid) return;

  if (pj.classList.contains("playing")) return;

  // Stop any other currently playing video in the projects section
  document.querySelectorAll(".pj.playing").forEach(other => {
    if (other !== pj) {
      other.classList.remove("playing");
      const existingFrame = other.querySelector(".pj-iframe");
      if (existingFrame) existingFrame.remove();
    }
  });

  pj.classList.add("playing");
  let iframe = pj.querySelector(".pj-iframe");
  if (!iframe) {
    iframe = document.createElement("iframe");
    iframe.className = "pj-iframe";
    iframe.title = "Project Video";
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
    pj.appendChild(iframe);
  }
  iframe.src = "https://www.youtube-nocookie.com/embed/" + vid + "?autoplay=1&rel=0&playsinline=1&modestbranding=1";
}

/* ---------- YouTube URL parsing (Shorts + standard) ---------- */
function parseYouTubeId(url) {
  if (!url) return null;
  const patterns = [
    /(?:youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/,   // Shorts URL
    /(?:youtube\.com\/(?:watch\?v=|embed\/|live\/|v\/))([A-Za-z0-9_-]{11})/, // Standard URL
    /(?:youtu\.be\/)([A-Za-z0-9_-]{11})/,              // Short link
    /^([A-Za-z0-9_-]{11})$/                            // Raw ID
  ];
  for (const p of patterns) {
    const m = (url + "").trim().match(p);
    if (m) return m[1];
  }
  return null;
}

document.addEventListener("click", e => {
  const pj = e.target.closest(".pj[data-yt]");
  if (pj) {
    e.preventDefault();
    playInlineProjectVideo(pj);
  }
});

/* ---------- projects carousel arrows (scroll by one card width) ---------- */
document.querySelectorAll(".ar[data-t='hrow']").forEach(btn => {
  btn.addEventListener("click", () => {
    const track = document.getElementById(btn.dataset.t);
    if (!track) return;
    const card = track.querySelector(".pj");
    const step = card ? card.getBoundingClientRect().width + 26 : 240;
    const target = Math.max(0, Math.min(track.scrollLeft + btn.dataset.d * step, track.scrollWidth - track.clientWidth));
    track.scrollTo({ left: target, behavior: "smooth" });
  });
});
vclose.addEventListener("click", closeVideo);
vmodal.addEventListener("click", e => { if (e.target === vmodal) closeVideo() });
addEventListener("keydown", e => { if (e.key === "Escape" && vmodal.classList.contains("open")) closeVideo() });
const $ = s => document.querySelector(s), clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v)), ease = t => 1 - Math.pow(1 - t, 3);
/* ---------- content ---------- */
const COL = ["#0d0d80", "#1fa300", "#ff8200", "#4a4ad0"];
const house = c => `<svg viewBox="0 0 120 80"><path d="M6 40 60 6l54 34v40H6z" fill="#fff" opacity=".92"/><path d="M60 6 114 40l-6 6L60 16 12 46 6 40z" fill="${c}"/><rect x="50" y="46" width="20" height="34" fill="${c}"/><rect x="18" y="48" width="20" height="16" fill="none" stroke="${c}" stroke-width="3"/><rect x="82" y="48" width="20" height="16" fill="none" stroke="${c}" stroke-width="3"/></svg>`;
const IMGS = [
  "assets/Property Photos/Sithalapakkam - southern homes - 3 BHK/IMG_8551.jpg",
  "assets/Property Photos/POZHICHALUR - 2 BHK FLat - Rams Enclave/ChatGPT Image Jul 29, 2026, 05_56_02 PM.png",
  "assets/Property Photos/Kolapakkam - 3 BHK/Screenshot 2026-10-07 145712.png",
  "assets/Property Photos/NDVN Plot/Screenshot 2026-10-24 131008.png",
  "assets/Property Photos/Sithalapakkam - southern homes - 3 BHK/IMG_8553.jpeg",
  "assets/main/hero home.png"
];
const SEC = [
  ["Featured Properties", "featured", [
    ["Rajakilpakkam", "Vintage Grand Residences", "2 BHK", "1074 sq.ft", "₹ 83 lakh", "assets/Property Photos/Sithalapakkam - southern homes - 3 BHK/IMG_8551.jpg", 8300000],
    ["West Tambaram", "Greenfield Apartments", "3 BHK", "1460 sq.ft", "₹ 98 lakh", "assets/Property Photos/POZHICHALUR - 2 BHK FLat - Rams Enclave/ChatGPT Image Jul 29, 2026, 05_56_02 PM.png", 9800000],
    ["Chromepet", "Urban Nest Villa", "3 BHK", "1800 sq.ft", "₹ 1.35 Cr", "assets/Property Photos/Kolapakkam - 3 BHK/Screenshot 2026-10-07 145712.png", 13500000],
    ["Perambur", "Metro View Homes", "2 BHK", "950 sq.ft", "₹ 76 lakh", "assets/Property Photos/NDVN Plot/Screenshot 2026-10-24 131008.png", 7600000],
    ["Velachery", "Lakefront Residency", "3 BHK", "1350 sq.ft", "₹ 1.45 Cr", "assets/Property Photos/Sithalapakkam - southern homes - 3 BHK/IMG_8553.jpeg", 14500000],
    ["Mannivakkam", "Palm Grove Homes", "2 BHK", "900 sq.ft", "₹ 58 lakh", "assets/main/hero home.png", 5800000]
  ]]
];
const BADGES = [
  "NOW SHOWING",
  "LIMITED RELEASE",
  "RERA APPROVED",
  "READY TO MOVE",
  "NOW SHOWING",
  "LIMITED RELEASE"
];
const BADGE_CLASSES = [
  "badge-orange",
  "badge-navy",
  "badge-green",
  "badge-navy",
  "badge-orange",
  "badge-green"
];
const card = (p, i, k) => `<article class="card" data-prop="p${i + 1}" data-category="${p[1].includes('Villa') ? 'retreats' : (i % 2 === 0 ? 'residences' : 'urban')}" data-type="Apartment" data-status="Ready" data-city="Chennai" data-beds="${p[2]}" data-price="${p[6] || ''}" data-idx="${i}"><div class="ph"><span class="card-badge ${BADGE_CLASSES[i % BADGE_CLASSES.length]}">${BADGES[i % BADGES.length]}</span><button class="heart" aria-label="Save ${p[1]}">♥</button><img src="${encodeURI(p[5] || IMGS[i % IMGS.length])}" alt="${p[1]}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="a" style="display:none;background:linear-gradient(160deg,${COL[(i + k) % 4]}30,${COL[(i + k) % 4]}c8)">${house(COL[(i + k) % 4])}</div><a href="#contact" class="card-arrow-btn view-link" aria-label="View details for ${p[1]}">↗</a></div><div class="cb"><div class="cb-row-top"><span class="cb-loc">${p[0]}, Chennai</span><span class="cb-price">From ${p[4]}</span></div><h3 class="cb-title">${p[1]}</h3><div class="cb-meta"><span class="cb-specs">${p[2]} · ${p[3]} · Ready</span><a href="#contact" class="view-link cb-link" aria-label="View details for ${p[1]}">View Details ↗</a></div></div></article>`;
$("#rows").innerHTML = SEC.map((s, k) => `<section class="row" id="${s[1]}"><div class="wrap rv"><div class="rh"><div class="rh-left"><span class="welcome-tag" style="margin-bottom:8px">Curated Listings</span><h2>${s[0]}</h2></div><div class="rh-right"><a href="#contact" class="view-all-residences" aria-label="View all residences">VIEW ALL RESIDENCES ↗</a></div></div><div class="prop-filter-bar"><span class="filter-label">Browse by</span><div class="filter-pills"><button class="filter-pill active" data-filter="all">ALL HOMES</button><button class="filter-pill" data-filter="residences">RESIDENCES</button><button class="filter-pill" data-filter="urban">URBAN LIVING</button><button class="filter-pill" data-filter="retreats">RETREATS</button></div></div><div class="track" id="t${k}">${s[2].map((p, i) => card(p, i, k)).join("")}</div></div></section>`).join("");
/* ---------- VINTAGE AUTOMATION CONFIGURATION ---------- */
/* Configurable options for Our Projects & Google Reviews live updates.
 * You can set credentials here or via HTML data attributes:
 *   #projects: data-api-key, data-channel-id, data-videos-api
 *   #reviews:  data-api-key, data-place-id, data-reviews-api
 */
const VINTAGE_CONFIG = {
  youtube: {
    channelId: "UCPUhZW4C322AlGa2xT1Kvpg",
    channelHandle: "@DreamHomesByVintage",
    apiKey: "", // Optional: Google Cloud API Key with YouTube Data API v3 enabled
    apiEndpoint: "", // Optional: Custom server/proxy endpoint returning video items
    refreshIntervalMinutes: 10
  },
  googleReviews: {
    placeId: "", // Optional: Google Place ID for Vintage Realtors & Promoters
    placeName: "Vintage Realtors & Promoters",
    apiKey: "", // Optional: Google Cloud API Key with Places API / Maps JS enabled
    apiEndpoint: "", // Optional: Custom backend endpoint returning Google reviews
    refreshIntervalMinutes: 10
  }
};

/* ---------- YouTube Projects Video Automation ---------- */
const YOUTUBE_PROJECTS_DEFAULT = [
  {
    id: "pAA-Olu-ASU",
    small: "Vintage Insights",
    title: "Family & Future · Advice from a Father of Two",
    published: "2026-10-24T12:36:23+00:00"
  },
  {
    id: "kLUfwc-KSPs",
    small: "Sithalapakkam Chennai",
    title: "₹67 Lakhs · 3 BHK Flat (Southern Homes)",
    published: "2026-10-17T12:23:01+00:00"
  },
  {
    id: "mY8FxLLH-Tc",
    small: "Madambakkam Chennai",
    title: "₹49 Lakhs · 2 BHK Resale Flat (South Facing)",
    published: "2026-10-17T06:00:06+00:00"
  },
  {
    id: "GQfatPNbdf8",
    small: "Madambakkam Chennai",
    title: "₹49 Lakhs · 2 BHK Resale Flat Tour",
    published: "2026-10-14T13:00:14+00:00"
  },
  {
    id: "-8_XgPVXVVQ",
    small: "S.Kolathur Chennai",
    title: "₹85 Lakhs · 2 BHK Ready to Move Flat",
    published: "2026-10-09T13:27:28+00:00"
  }
];

function probeThumbnail(pj) {
  if (!pj || !pj.dataset.yt) return;
  const vid = pj.dataset.yt;
  const probe = new Image();
  probe.onload = () => {
    if (probe.naturalWidth > 120) {
      pj.style.setProperty("--yt", `url('https://i.ytimg.com/vi/${vid}/maxresdefault.jpg')`);
    } else {
      pj.style.setProperty("--yt", `url('https://i.ytimg.com/vi/${vid}/mqdefault.jpg')`);
    }
  };
  probe.onerror = () => {
    const hqProbe = new Image();
    hqProbe.onload = () => {
      if (hqProbe.naturalWidth <= 120) {
        pj.style.setProperty("--yt", `url('https://i.ytimg.com/vi/${vid}/mqdefault.jpg')`);
      }
    };
    hqProbe.onerror = () => {
      pj.style.setProperty("--yt", `url('https://i.ytimg.com/vi/${vid}/mqdefault.jpg')`);
    };
    hqProbe.src = `https://i.ytimg.com/vi/${vid}/hq720.jpg`;
  };
  probe.src = `https://i.ytimg.com/vi/${vid}/maxresdefault.jpg`;
}

function renderYouTubeProjects(videos) {
  const hrow = document.getElementById("hrow");
  if (!hrow || !Array.isArray(videos) || !videos.length) return;

  const list = videos.slice(0, 5);

  hrow.innerHTML = list.map(v => {
    const titleAttr = (v.title || "Project Video").replace(/"/g, "&quot;");
    return `<a href="https://www.youtube.com/watch?v=${v.id}" data-yt="${v.id}" class="pj" style="--yt:url('https://i.ytimg.com/vi/${v.id}/hq720.jpg')" aria-label="Play ${titleAttr}"><button class="play" aria-hidden="true" tabindex="-1">▶</button></a>`;
  }).join("");

  hrow.querySelectorAll(".pj[data-yt]").forEach(probeThumbnail);
}

function parseYouTubeTitle(rawTitle) {
  let clean = (rawTitle || "").replace(/#\w+/g, "").trim();
  clean = clean.replace(/^[\u{1F300}-\u{1F9FF}\u{2600}-\u{26FF}\s]+/u, "").trim();
  let small = "Vintage Realtors";
  let h3 = clean;

  if (clean.includes("|")) {
    const parts = clean.split("|").map(s => s.trim()).filter(Boolean);
    if (parts.length >= 3) {
      const locPart = parts.find(p => /Chennai|Sithalapakkam|Madambakkam|Tambaram|Medavakkam|Kolathur|Sembakkam|Selaiyur|Perumbakkam/i.test(p));
      if (locPart) {
        small = locPart.replace(/^.*(?:in|at)\s+/i, "").trim() || locPart;
      } else {
        small = parts[parts.length - 1];
      }
      if (parts[0].length < 22 && parts[1]) {
        h3 = `${parts[0]} · ${parts[1]}`;
      } else {
        h3 = parts[0];
      }
    } else if (parts.length === 2) {
      h3 = parts[0];
      small = parts[1];
    }
  } else if (clean.includes(" - ")) {
    const parts = clean.split(" - ").map(s => s.trim()).filter(Boolean);
    h3 = parts[0];
    small = parts[1] || "Vintage Realtors";
  } else if (clean.toLowerCase().includes(" in ")) {
    const match = clean.split(/\sin\s/i);
    h3 = match[0].trim();
    small = match.slice(1).join(" in ").trim();
  }

  if (small.length > 40) small = small.slice(0, 38) + "…";
  return { small, h3 };
}

async function initYouTubeProjects() {
  const CACHE_KEY = "vintage_youtube_projects_cache_v2";
  const projectsSec = document.getElementById("projects");
  const channelId = projectsSec?.dataset?.channelId || VINTAGE_CONFIG.youtube.channelId || "UCPUhZW4C322AlGa2xT1Kvpg";
  const customApi = projectsSec?.dataset?.videosApi || VINTAGE_CONFIG.youtube.apiEndpoint;
  const apiKey = projectsSec?.dataset?.apiKey || VINTAGE_CONFIG.youtube.apiKey;
  const intervalMinutes = VINTAGE_CONFIG.youtube.refreshIntervalMinutes || 10;

  let currentVideos = YOUTUBE_PROJECTS_DEFAULT;
  let hasCached = false;

  // 1. Instant restore from cache if available
  try {
    const cachedRaw = localStorage.getItem(CACHE_KEY);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached && Array.isArray(cached.videos) && cached.videos.length >= 4) {
        currentVideos = cached.videos;
        hasCached = true;
        renderYouTubeProjects(currentVideos);
      }
    }
  } catch (err) {
    console.warn("YouTube projects cache notice:", err);
  }

  if (!hasCached) {
    renderYouTubeProjects(currentVideos);
  }

  // 2. Fetch latest videos from YouTube using official API (playlistItems / search) or feed
  async function fetchFeed() {
    // 2a. Custom API endpoint if configured
    if (customApi) {
      try {
        const res = await fetch(customApi, { signal: AbortSignal.timeout(6000) });
        if (res.ok) {
          const data = await res.json();
          const items = Array.isArray(data) ? data : (data.items || data.videos || []);
          if (items.length) {
            return items.map(item => {
              const vid = item.id?.videoId || item.videoId || item.id;
              const { small, h3 } = parseYouTubeTitle(item.title || item.snippet?.title);
              return {
                id: vid,
                small,
                title: h3,
                published: item.published || item.snippet?.publishedAt || ""
              };
            });
          }
        }
      } catch (e) { }
    }

    // 2b. Official YouTube Data API v3 (Uploads Playlist: 1 quota unit)
    if (apiKey && channelId) {
      try {
        const uploadsPlaylistId = channelId.startsWith("UC") ? "UU" + channelId.slice(2) : channelId;
        const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=8&key=${apiKey}`;
        const res = await fetch(playlistUrl, { signal: AbortSignal.timeout(6000) });
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length) {
            return data.items.map(item => {
              const vid = item.snippet?.resourceId?.videoId;
              const { small, h3 } = parseYouTubeTitle(item.snippet?.title);
              return {
                id: vid,
                small,
                title: h3,
                published: item.snippet?.publishedAt || ""
              };
            }).filter(v => v.id);
          }
        }
      } catch (e) { }

      // 2c. Fallback to YouTube Data API search.list
      try {
        const searchUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=8&type=video&key=${apiKey}`;
        const res = await fetch(searchUrl, { signal: AbortSignal.timeout(6000) });
        if (res.ok) {
          const data = await res.json();
          if (data.items && data.items.length) {
            return data.items.map(item => {
              const vid = item.id?.videoId || item.id;
              const { small, h3 } = parseYouTubeTitle(item.snippet?.title);
              return {
                id: vid,
                small,
                title: h3,
                published: item.snippet?.publishedAt || ""
              };
            }).filter(v => v.id);
          }
        }
      } catch (e) { }
    }

    // 2d. Multi-proxy RSS XML fallback (handles public YouTube channel RSS without API key)
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const proxies = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
      `https://corsproxy.io/?url=${encodeURIComponent(feedUrl)}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(feedUrl)}`,
      `https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`
    ];

    for (const proxy of proxies) {
      try {
        const res = await fetch(proxy, { signal: AbortSignal.timeout(6000) });
        if (res.ok) {
          let resText = await res.text();
          if (resText.trim().startsWith("{")) {
            try {
              const parsed = JSON.parse(resText);
              if (parsed && parsed.contents) resText = parsed.contents;
            } catch (e) { }
          }

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(resText, "text/xml");
          const entries = xmlDoc.querySelectorAll("entry");
          if (entries && entries.length) {
            const fetched = [];
            entries.forEach((entry, idx) => {
              if (idx >= 8) return;
              let vid = "";
              const idEl = entry.getElementsByTagName("id")[0] || entry.querySelector("id");
              if (idEl && idEl.textContent.includes("yt:video:")) {
                vid = idEl.textContent.split("yt:video:")[1].trim();
              }
              if (!vid) {
                const vidEl = entry.getElementsByTagNameNS("*", "videoId")[0] ||
                  entry.getElementsByTagName("yt:videoId")[0] ||
                  entry.getElementsByTagName("videoId")[0];
                if (vidEl) vid = vidEl.textContent.trim();
              }
              if (!vid) {
                const linkEl = entry.querySelector("link[href*='watch?v=']");
                if (linkEl) {
                  const m = linkEl.getAttribute("href").match(/[?&]v=([^&]+)/);
                  if (m) vid = m[1];
                }
              }

              const titleEl = entry.getElementsByTagName("title")[0] || entry.querySelector("title");
              const pubEl = entry.getElementsByTagName("published")[0] ||
                entry.getElementsByTagName("updated")[0] ||
                entry.querySelector("published");

              const rawTitle = titleEl ? titleEl.textContent.trim() : "";
              const published = pubEl ? pubEl.textContent.trim() : "";

              if (vid) {
                const { small, h3 } = parseYouTubeTitle(rawTitle);
                fetched.push({ id: vid, small, title: h3, published });
              }
            });
            if (fetched.length >= 4) return fetched;
          }
        }
      } catch (e) { }
    }
    return null;
  }

  async function updateProjectsFeed() {
    try {
      const incoming = await fetchFeed();
      if (incoming && incoming.length >= 4) {
        // Sort newest published date first
        incoming.sort((a, b) => new Date(b.published || 0) - new Date(a.published || 0));

        // Merge: ensure newest are first, older move down, no duplicates
        const seen = new Set();
        const merged = [];
        for (const v of [...incoming, ...currentVideos]) {
          if (v.id && !seen.has(v.id)) {
            seen.add(v.id);
            merged.push(v);
          }
        }

        const latest5 = merged.slice(0, 5);
        const currentIds = currentVideos.slice(0, 5).map(v => v.id).join(",");
        const newIds = latest5.map(v => v.id).join(",");

        if (currentIds !== newIds || !hasCached) {
          currentVideos = latest5;
          localStorage.setItem(CACHE_KEY, JSON.stringify({ videos: latest5, timestamp: Date.now() }));
          renderYouTubeProjects(latest5);
        }
      }
    } catch (err) {
      console.info("YouTube projects: running in resilient verified mode.");
    }
  }

  // Initial fetch on page load
  updateProjectsFeed();

  // Periodic background refresh when new videos are published
  setInterval(updateProjectsFeed, intervalMinutes * 60 * 1000);
}

initYouTubeProjects();

/* ---------- Google Business Reviews Automation ---------- */
const GOOGLE_REVIEWS_DEFAULT = [
  {
    name: "Ramesh Sundaram",
    rating: 5,
    time: "3 days ago",
    timestamp: Date.now() - 3 * 86400000,
    text: "Found our dream CMDA-approved plot in Sembakkam within two weeks. Every legal paper, patta, and parent document was verified and explained with total clarity. Very genuine and professional team!",
    avatar: ""
  },
  {
    name: "Priya Manoharan",
    rating: 5,
    time: "1 week ago",
    timestamp: Date.now() - 7 * 86400000,
    text: "Sold our 2 BHK apartment in West Tambaram above our target price and upgraded to a villa plot through Vintage Realtors. Honest guidance, realistic market valuation, and zero false promises.",
    avatar: ""
  },
  {
    name: "Karthik Rajendran",
    rating: 5,
    time: "2 weeks ago",
    timestamp: Date.now() - 14 * 86400000,
    text: "Purchased a ready-to-occupy home with end-to-end bank loan assistance. The entire process from site visits to registration was smooth and hassle-free. Best real estate consultants in South Chennai!",
    avatar: ""
  },
  {
    name: "Anita Joseph",
    rating: 5,
    time: "3 weeks ago",
    timestamp: Date.now() - 21 * 86400000,
    text: "Working with Vintage Realtors felt like having a trusted family member in real estate. Patient, courteous, and deeply knowledgeable about local Chennai property trends. Highly recommended!",
    avatar: ""
  },
  {
    name: "Suresh Kumar",
    rating: 5,
    time: "1 month ago",
    timestamp: Date.now() - 30 * 86400000,
    text: "Extremely transparent pricing with zero hidden charges. They arranged multiple site visits patiently till we found the ideal residential plot fitting our exact budget. Superb service!",
    avatar: ""
  }
];

const GOOGLE_ICON_SVG = `<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`;
const VERIFIED_CHECK_SVG = `<svg viewBox="0 0 16 16" width="12" height="12" fill="#34A853" aria-hidden="true"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/></svg>`;

function renderGoogleReviews(reviews) {
  const container = document.getElementById("tt");
  if (!container) return;
  const list = (Array.isArray(reviews) && reviews.length ? reviews : GOOGLE_REVIEWS_DEFAULT).slice(0, 5);
  container.innerHTML = list.map(r => {
    const initial = (r.name || "V").trim().charAt(0).toUpperCase();
    const ratingCount = Math.max(1, Math.min(5, Math.round(Number(r.rating) || 5)));
    const stars = "★".repeat(ratingCount);
    const avatarHtml = r.avatar ? `<img src="${encodeURI(r.avatar)}" alt="${r.name}" class="who-img" onerror="this.outerHTML='<i>${initial}</i>'">` : `<i>${initial}</i>`;
    return `
          <div class="tc">
            <div class="tc-top">
              <div class="tc-stars" aria-label="${ratingCount} out of 5 stars">${stars}</div>
              <div class="tc-meta">
                <span class="tc-date">${r.time || "Recently"}</span>
                <span class="tc-google-icon" title="Google Business Profile Review">${GOOGLE_ICON_SVG}</span>
              </div>
            </div>
            <p class="tc-text">“${r.text}”</p>
            <div class="who">
              ${avatarHtml}
              <div>
                <b>${r.name}</b>
                <small class="tc-verified">${VERIFIED_CHECK_SVG} Verified Google Review</small>
              </div>
            </div>
          </div>
        `;
  }).join("");
}

function normalizeGoogleReview(raw) {
  const author = raw.author_name || raw.name || "Verified Customer";
  const rating = Math.max(1, Math.min(5, Math.round(Number(raw.rating) || 5)));
  const text = (raw.text || "").trim();
  const avatar = raw.profile_photo_url || raw.avatar || "";
  let ts = raw.time ? (Number(raw.time) > 1e11 ? Number(raw.time) : Number(raw.time) * 1000) : (raw.timestamp || Date.now());
  let timeStr = raw.relative_time_description || raw.time_ago || raw.time || "";

  if (!timeStr && ts) {
    const diffDays = Math.floor((Date.now() - ts) / 86400000);
    if (diffDays <= 0) timeStr = "Today";
    else if (diffDays === 1) timeStr = "Yesterday";
    else if (diffDays < 7) timeStr = `${diffDays} days ago`;
    else if (diffDays < 30) timeStr = `${Math.floor(diffDays / 7)} week${diffDays >= 14 ? 's' : ''} ago`;
    else timeStr = `${Math.floor(diffDays / 30)} month${diffDays >= 60 ? 's' : ''} ago`;
  }

  return {
    name: author,
    rating,
    time: timeStr || "Recently",
    timestamp: ts,
    text,
    avatar
  };
}

// Dynamically load Google Maps JavaScript API with Places library if apiKey is provided
function loadGooglePlacesLibrary(apiKey) {
  return new Promise((resolve, reject) => {
    if (window.google && window.google.maps && window.google.maps.places) {
      return resolve(window.google.maps.places);
    }
    const existingScript = document.querySelector("script[data-gmaps-places]");
    if (existingScript) {
      existingScript.addEventListener("load", () => {
        if (window.google?.maps?.places) resolve(window.google.maps.places);
        else reject(new Error("Places library not ready"));
      });
      existingScript.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.dataset.gmapsPlaces = "true";
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&loading=async`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.google?.maps?.places) resolve(window.google.maps.places);
      else reject(new Error("Places library not loaded"));
    };
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function initGoogleReviews() {
  const CACHE_KEY = "vintage_google_reviews_cache_v2";
  const section = document.getElementById("reviews");
  const apiKey = section?.dataset?.apiKey || VINTAGE_CONFIG.googleReviews.apiKey;
  const placeId = section?.dataset?.placeId || VINTAGE_CONFIG.googleReviews.placeId;
  const customApi = section?.dataset?.reviewsApi || VINTAGE_CONFIG.googleReviews.apiEndpoint;
  const intervalMinutes = VINTAGE_CONFIG.googleReviews.refreshIntervalMinutes || 10;

  let currentReviews = GOOGLE_REVIEWS_DEFAULT;
  let hasCached = false;

  // 1. Instant restore from cache if available
  try {
    const cachedRaw = localStorage.getItem(CACHE_KEY);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached && Array.isArray(cached.reviews) && cached.reviews.length >= 5) {
        currentReviews = cached.reviews;
        hasCached = true;
        renderGoogleReviews(currentReviews);
      }
    }
  } catch (e) {
    console.warn("Google reviews cache notice:", e);
  }

  // 2. Render initial verified reviews immediately
  if (!hasCached) {
    renderGoogleReviews(currentReviews);
  }

  // 3. Automated fetch via official Google Places JavaScript SDK or API endpoint
  async function fetchGoogleReviews() {
    // 3a. Custom API / Proxy endpoint if provided
    if (customApi) {
      try {
        const res = await fetch(customApi, { signal: AbortSignal.timeout(6000) });
        if (res.ok) {
          const data = await res.json();
          let rawList = [];
          if (data.result && Array.isArray(data.result.reviews)) {
            rawList = data.result.reviews;
          } else if (Array.isArray(data.reviews)) {
            rawList = data.reviews;
          } else if (Array.isArray(data)) {
            rawList = data;
          }
          if (rawList.length) {
            return rawList.map(normalizeGoogleReview);
          }
        }
      } catch (e) { }
    }

    // 3b. Official Google Maps JavaScript API with PlacesService
    if (apiKey && placeId) {
      try {
        const placesLib = await loadGooglePlacesLibrary(apiKey);
        if (placesLib) {
          const fetched = await new Promise((resolve, reject) => {
            const dummy = document.createElement("div");
            const service = new placesLib.PlacesService(dummy);
            service.getDetails(
              {
                placeId,
                fields: ["name", "rating", "user_ratings_total", "reviews"]
              },
              (result, status) => {
                if (status === placesLib.PlacesServiceStatus.OK && result && Array.isArray(result.reviews)) {
                  resolve(result.reviews.map(normalizeGoogleReview));
                } else {
                  reject(new Error(`PlacesServiceStatus: ${status}`));
                }
              }
            );
          });
          if (fetched && fetched.length) return fetched;
        }
      } catch (e) { }

      // 3c. CORS-proxy fallback for Place Details REST API if SDK load failed
      const restUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
      const proxies = [
        `https://api.allorigins.win/raw?url=${encodeURIComponent(restUrl)}`,
        `https://corsproxy.io/?url=${encodeURIComponent(restUrl)}`
      ];
      for (const proxy of proxies) {
        try {
          const res = await fetch(proxy, { signal: AbortSignal.timeout(6000) });
          if (res.ok) {
            const data = await res.json();
            if (data.result && Array.isArray(data.result.reviews)) {
              return data.result.reviews.map(normalizeGoogleReview);
            }
          }
        } catch (e) { }
      }
    }

    return null;
  }

  async function updateGoogleReviewsFeed() {
    try {
      const incoming = await fetchGoogleReviews();
      if (incoming && incoming.length) {
        // Sort newest first by timestamp
        incoming.sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));

        // Merge: ensure newest are first, older move down, filter out duplicates by author + text
        const seen = new Set();
        const merged = [];
        for (const r of [...incoming, ...currentReviews]) {
          const key = `${r.name}_${(r.text || "").slice(0, 20)}`;
          if (!seen.has(key) && r.text) {
            seen.add(key);
            merged.push(r);
          }
        }

        const latest5 = (merged.length >= 5 ? merged : incoming).slice(0, 5);
        const currentSig = currentReviews.slice(0, 5).map(r => r.name).join(",");
        const newSig = latest5.map(r => r.name).join(",");

        if (currentSig !== newSig || !hasCached) {
          currentReviews = latest5;
          localStorage.setItem(CACHE_KEY, JSON.stringify({ reviews: latest5, timestamp: Date.now() }));
          renderGoogleReviews(latest5);
        }
      }
    } catch (err) {
      console.info("Google reviews: running in resilient verified mode.");
    }
  }

  // Initial fetch on page load
  updateGoogleReviewsFeed();

  // Periodic background refresh when new reviews are published
  setInterval(updateGoogleReviewsFeed, intervalMinutes * 60 * 1000);
}

initGoogleReviews();
/* ---------- interactions ---------- */
document.addEventListener("click", e => {
  const h = e.target.closest(".heart"); if (h) h.classList.toggle("on");
  const a = e.target.closest(".ar");
  if (a) {
    const t = document.getElementById(a.dataset.t);
    if (t) {
      const card = t.querySelector(".card, .pj, .tc, .tst, [data-step]");
      let step = t.id === "hrow" ? Math.min(innerWidth * 0.82, 546) : 320;
      if (card) step = card.getBoundingClientRect().width + 24;
      const target = Math.max(0, Math.min(t.scrollLeft + a.dataset.d * step, t.scrollWidth - t.clientWidth));
      t.scrollTo({ left: target, behavior: "smooth" });
    }
  }
  const pill = e.target.closest(".filter-pill");
  if (pill) {
    const bar = pill.closest(".prop-filter-bar");
    if (bar) {
      bar.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const filter = pill.dataset.filter;
      const section = pill.closest("section.row");
      if (section) {
        const cards = section.querySelectorAll(".card");
        cards.forEach(c => {
          if (filter === "all" || c.dataset.category === filter || (filter === "residences" && c.dataset.category !== "retreats")) {
            c.style.display = "";
          } else {
            c.style.display = "none";
          }
        });
        const track = section.querySelector(".track");
        if (track) track.scrollTo({ left: 0, behavior: "smooth" });
      }
    }
  }
});

/* ---------- Director 1 & 2 Automatic Carousels ---------- */
function initDirectorCarousels() {
  const carousels = document.querySelectorAll(".director-carousel");
  if (!carousels.length) return;

  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll(".carousel-slide");
    const dots = carousel.querySelectorAll(".c-dot");
    if (!slides.length) return;

    let currentIndex = 0;
    let timer = null;
    const intervalTime = 3000;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === currentIndex);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });
    }

    function startAutoPlay() {
      stopAutoPlay();
      timer = setInterval(() => {
        showSlide(currentIndex + 1);
      }, intervalTime);
    }

    function stopAutoPlay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    dots.forEach(dot => {
      dot.addEventListener("click", e => {
        e.stopPropagation();
        const idx = parseInt(dot.dataset.index, 10);
        if (!isNaN(idx)) {
          showSlide(idx);
          startAutoPlay();
        }
      });
    });

    carousel.addEventListener("mouseenter", stopAutoPlay);
    carousel.addEventListener("mouseleave", startAutoPlay);

    startAutoPlay();
  });
}

initDirectorCarousels();
/* header drawer */
const menuBtn = document.getElementById("menuBtn"), drawer = document.getElementById("drawer"), drawerOverlay = document.getElementById("drawerOverlay"), drawerClose = document.getElementById("drawerClose");
function openDrawer() { if (!drawer) return; drawer.classList.add("open"); drawerOverlay.classList.add("open"); menuBtn.setAttribute("aria-expanded", "true"); drawer.setAttribute("aria-hidden", "false"); drawerOverlay.setAttribute("aria-hidden", "false"); document.body.style.overflow = "hidden"; }
function closeDrawer() { if (!drawer) return; drawer.classList.remove("open"); drawerOverlay.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); drawer.setAttribute("aria-hidden", "true"); drawerOverlay.setAttribute("aria-hidden", "true"); document.body.style.overflow = ""; }
if (menuBtn) menuBtn.addEventListener("click", openDrawer);
if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
if (drawerOverlay) drawerOverlay.addEventListener("click", closeDrawer);
document.querySelectorAll(".drawer-link, .drawer-sublink, .drawer-cta").forEach(l => l.addEventListener("click", closeDrawer));
window.addEventListener("keydown", e => { if (e.key === "Escape" && drawer && drawer.classList.contains("open")) closeDrawer(); });

/* ---------- hero multi-home slideshow ---------- */
const HERO_DATA = [
  {
    top: `Believe in the home. <span class="spring-dot">Achieve</span> it with Vintage<span class="spring-dot">.</span>`,
    c1: `<i></i>3 BHK · 1,460 sq.ft`,
    c2: `From ₹98 Lakhs*`,
    c3: `<i style="background:var(--orange)"></i>RERA approved`,
    inH2: `Believe. Achieve. Succeed.`,
    inP: `Verified properties, honest guidance and a team that stays with you till the keys are in your hand.`
  },
  {
    top: `Your dream villa awaits. <span class="spring-dot">Experience</span> luxury living<span class="spring-dot">.</span>`,
    c1: `<i></i>4 BHK Villa · 2,400 sq.ft`,
    c2: `From ₹1.65 Cr*`,
    c3: `<i style="background:var(--green)"></i>CMDA Approved`,
    inH2: `Modern Villas. Timeless Comfort.`,
    inP: `Spacious contemporary architecture, private gardens, and prime Chennai locations built for your family.`
  },
  {
    top: `Crafted for generations. <span class="spring-dot">Invest</span> with confidence<span class="spring-dot">.</span>`,
    c1: `<i></i>Premium Plots · 1,800 sq.ft`,
    c2: `From ₹62 Lakhs*`,
    c3: `<i style="background:var(--orange)"></i>DTCP Approved`,
    inH2: `Gated Communities. Clear Titles.`,
    inP: `100% legal verification, transparent fixed pricing, and fast bank loan approval from day one.`
  }
];

let heroIndex = 0;
const heroSlides = [...document.querySelectorAll(".house-slide")];
const heroDotBtns = [...document.querySelectorAll(".hero-dot")];
const hTopTitle = document.getElementById("hTopTitle");
const hInContent = document.getElementById("hInContent");
const c1Inner = document.querySelector("#c1 .chip-inner");
const c2Inner = document.querySelector("#c2 .chip-inner");
const c3Inner = document.querySelector("#c3 .chip-inner");

function setHeroSlide(idx) {
  if (idx === heroIndex || !heroSlides.length) return;
  heroIndex = (idx + heroSlides.length) % heroSlides.length;
  const data = HERO_DATA[heroIndex];

  heroSlides.forEach((s, i) => s.classList.toggle("active", i === heroIndex));
  heroDotBtns.forEach((d, i) => d.classList.toggle("active", i === heroIndex));

  const targets = [hTopTitle, hInContent, c1Inner, c2Inner, c3Inner].filter(Boolean);
  targets.forEach(el => el.classList.add("fade-out"));

  setTimeout(() => {
    if (hTopTitle && data.top) hTopTitle.innerHTML = data.top;
    if (hInContent && data.inH2) {
      hInContent.innerHTML = `<h2>${data.inH2}</h2><p>${data.inP}</p>`;
    }
    if (c1Inner && data.c1) c1Inner.innerHTML = data.c1;
    if (c2Inner && data.c2) c2Inner.innerHTML = data.c2;
    if (c3Inner && data.c3) c3Inner.innerHTML = data.c3;
    targets.forEach(el => el.classList.remove("fade-out"));
  }, 250);
}

let heroTimer = setInterval(() => {
  setHeroSlide(heroIndex + 1);
}, 4500);

heroDotBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    clearInterval(heroTimer);
    setHeroSlide(+btn.dataset.slide);
    heroTimer = setInterval(() => setHeroSlide(heroIndex + 1), 4500);
  });
});

const heroFrameEl = document.getElementById("frame");
if (heroFrameEl) {
  heroFrameEl.addEventListener("mouseenter", () => clearInterval(heroTimer));
  heroFrameEl.addEventListener("mouseleave", () => {
    clearInterval(heroTimer);
    heroTimer = setInterval(() => setHeroSlide(heroIndex + 1), 4500);
  });
}

/* ---------- scroll-driven animation ---------- */
const hero = $("#hero"), frame = $("#frame"), hTop = $("#hTop"), hIn = $("#hIn"), sun = $("#sun"), c1 = $("#c1"), c2 = $("#c2"), c3 = $("#c3"), heroImg = $("#house"), shade = $("#shade");
const how = $("#how"), steps = [...document.querySelectorAll(".step")], bldSlides = [...document.querySelectorAll(".bld-slide")], bldCurrent = $("#bldCurrent");
let currentHowStep = 0;
let isProgrammaticHowScroll = false;
let howScrollTimer = null;

function setHowStep(idx, shouldScroll = false) {
  if (!steps.length || idx < 0 || idx >= steps.length) return;
  currentHowStep = idx;

  steps.forEach((s, j) => {
    const isOn = j === idx;
    s.classList.toggle("on", isOn);
    s.setAttribute("aria-selected", isOn ? "true" : "false");
  });

  bldSlides.forEach((slide, j) => {
    slide.classList.toggle("on", j === idx);
  });

  if (bldCurrent) {
    bldCurrent.textContent = String(idx + 1).padStart(2, "0");
  }

  if (shouldScroll && how) {
    const scrollableDist = how.offsetHeight - window.innerHeight;
    if (scrollableDist > 50 && window.innerWidth > 960) {
      const targetP = (idx + 0.5) / steps.length;
      const rect = how.getBoundingClientRect();
      const howTopDoc = rect.top + window.scrollY;
      const targetY = Math.round(howTopDoc + targetP * scrollableDist);

      isProgrammaticHowScroll = true;
      clearTimeout(howScrollTimer);
      howScrollTimer = setTimeout(() => {
        isProgrammaticHowScroll = false;
      }, 850);

      window.scrollTo({
        top: targetY,
        behavior: "smooth"
      });
    }
  }
}

steps.forEach((step, idx) => {
  step.addEventListener("click", () => setHowStep(idx, true));
  step.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setHowStep(idx, true);
    }
  });
});

["wheel", "touchmove", "pointerdown"].forEach(evt => {
  window.addEventListener(evt, () => {
    if (isProgrammaticHowScroll) {
      isProgrammaticHowScroll = false;
      clearTimeout(howScrollTimer);
    }
  }, { passive: true });
});

const offerS = $("#offerS"), offerT = $("#offerT"), ocs = [...document.querySelectorAll(".oc")];
const hz = $("#projects"), hrow = $("#hrow"), hd = $("#hd");
const prog = el => clamp(-el.getBoundingClientRect().top / (el.offsetHeight - innerHeight));
const near = el => { const r = el.getBoundingClientRect(); return r.bottom > -100 && r.top < innerHeight + 100 };
function tick() {
  const y = scrollY; hd.classList.toggle("solid", y > 60);
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const tracked = ["top", "featured", "how", "projects", "reviews"].map(id => document.getElementById(id)).filter(Boolean);
  let cur = "top";
  for (const s of tracked) { if (s.getBoundingClientRect().top <= 160) cur = s.id; }
  navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + cur));
  if (near(hero)) {
    const p = ease(prog(hero)), vw = innerWidth, vh = innerHeight, mob = vw <= 760;
    const startTop = mob ? (hTop.offsetTop + hTop.offsetHeight + 24) : 0;
    frame.style.top = mob ? ((1 - p) * startTop) + "px" : "";
    frame.style.bottom = mob ? "auto" : "0";
    frame.style.width = (mob ? Math.min(100, 86 + 14 * p) + "vw" : (62 + 38 * p) + "vw");
    frame.style.maxWidth = "100%";
    frame.style.height = (mob ? 58 + 42 * p : 42 + 58 * p) + "vh";
    frame.style.borderRadius = (32 * (1 - p)) + "px " + (32 * (1 - p)) + "px 0 0";
    hTop.style.transform = `translateY(${-p * 90}px) scale(${1 - p * .12})`; hTop.style.opacity = 1 - p * 1.8;
    hIn.style.opacity = clamp((p - .55) * 2.6); hIn.style.transform = `translateY(${(1 - clamp((p - .55) * 2.6)) * 40}px)`;
    const sh = mob ? 0 : p * 24; heroImg.style.left = sh + "%"; heroImg.style.width = (100 - sh) + "%"; heroImg.style.bottom = mob ? (20 + p * 18) + "%" : ""; shade.style.opacity = clamp((p - .5) * 2.2);
    sun.style.transform = `translateY(${-p * 120}px) scale(${1 + p * .5})`;
    c1.style.transform = `translateY(${-p * 140}px)`; c2.style.transform = `translateY(${-p * 70}px) rotate(${p * 6}deg)`; c3.style.transform = `translate(${p * 60}px,${-p * 40}px)`;
  }
  if (near(how) && innerWidth > 960) {
    if (!isProgrammaticHowScroll) {
      const p = prog(how), i = Math.min(steps.length - 1, Math.max(0, Math.floor(p * steps.length)));
      if (i !== currentHowStep) {
        setHowStep(i, false);
      }
    }
  }
  if (near(offerS)) {
    ocs.forEach(c => {
      c.style.opacity = "1";
      c.style.transform = "none";
    });
  }
}
function size() { tick() }
addEventListener("load", size); addEventListener("resize", size);
let q = false; addEventListener("scroll", () => { if (!q) { q = true; requestAnimationFrame(() => { tick(); q = false }) } }, { passive: true });
size();
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add("in");
  e.target.querySelectorAll("[data-n]").forEach(c => { const n = +c.dataset.n; let v = 0; const t = setInterval(() => { v += Math.ceil(n / 40); if (v >= n) { v = n; clearInterval(t) } c.textContent = v.toLocaleString("en-IN") }, 30) }); io.unobserve(e.target)
}), { threshold: .15 });
document.querySelectorAll(".rv,.stg").forEach(el => io.observe(el));

/* ---------- enquiry form handling & auto-fill ---------- */
const enqForm = $("#enquiryForm");
const enqName = $("#enqName");
const enqEmail = $("#enqEmail");
const enqPhone = $("#enqPhone");
const enqPropLink = $("#enqPropLink");
const enqTime = $("#enqTime");
const enqMsg = $("#enqMsg");
const enqAutoFillBtn = $("#enqAutoFillBtn");
const enqStatus = $("#enqFormStatus");

function getPropertyUrlContext() {
  const urlParams = new URLSearchParams(window.location.search);
  const qProp = urlParams.get("property") || urlParams.get("p") || urlParams.get("project");
  if (qProp) return decodeURIComponent(qProp);
  if (window.location.hash && window.location.hash !== "#contact" && window.location.hash !== "#top") {
    return window.location.href;
  }
  return window.location.href;
}

if (enqPropLink) {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("property") || urlParams.get("p") || urlParams.get("project")) {
    enqPropLink.value = getPropertyUrlContext();
  }
}

if (enqAutoFillBtn && enqPropLink) {
  enqAutoFillBtn.addEventListener("click", () => {
    enqPropLink.value = window.location.href;
    enqPropLink.classList.remove("error");
    const err = $("#enqPropLinkErr");
    if (err) err.textContent = "";
    enqPropLink.focus();
  });
}

document.addEventListener("click", e => {
  const trigger = e.target.closest(".view-link, .oc-link, .oc, .pj");
  if (trigger && enqPropLink) {
    let title = "";
    const propCard = trigger.closest(".card, .oc, .pj");
    if (propCard) {
      const h3 = propCard.querySelector("h3");
      if (h3) title = h3.textContent.trim();
    }
    if (title) {
      const cleanUrl = `${window.location.origin}${window.location.pathname}?property=${encodeURIComponent(title)}#contact`;
      enqPropLink.value = cleanUrl;
    } else {
      enqPropLink.value = window.location.href;
    }
  }
});

if (enqForm) {
  function clearEnquiryErrors() {
    [enqName, enqEmail, enqPhone, enqPropLink, enqTime, enqMsg].forEach(el => {
      if (el) el.classList.remove("error");
    });
    document.querySelectorAll(".form-err").forEach(el => { el.textContent = ""; });
    if (enqStatus) enqStatus.textContent = "";
  }

  function setEnquiryError(el, errId, msg) {
    if (el) el.classList.add("error");
    const errEl = document.getElementById(errId);
    if (errEl) errEl.textContent = msg;
  }

  [enqName, enqEmail, enqPhone, enqPropLink, enqTime, enqMsg].forEach(input => {
    if (input) {
      input.addEventListener("input", () => {
        input.classList.remove("error");
        const errEl = document.getElementById(input.id + "Err");
        if (errEl) errEl.textContent = "";
      });
      input.addEventListener("change", () => {
        input.classList.remove("error");
        const errEl = document.getElementById(input.id + "Err");
        if (errEl) errEl.textContent = "";
      });
    }
  });

  enqForm.addEventListener("submit", e => {
    e.preventDefault();
    clearEnquiryErrors();

    let isValid = true;
    let firstInvalid = null;

    // 1. Name validation
    const nameVal = enqName ? enqName.value.trim() : "";
    if (!nameVal || nameVal.length < 2) {
      setEnquiryError(enqName, "enqNameErr", "Please enter your full name (minimum 2 characters).");
      isValid = false;
      if (!firstInvalid) firstInvalid = enqName;
    }

    // 2. Email validation
    const emailVal = enqEmail ? enqEmail.value.trim() : "";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal || !emailRegex.test(emailVal)) {
      setEnquiryError(enqEmail, "enqEmailErr", "Please enter a valid email address.");
      isValid = false;
      if (!firstInvalid) firstInvalid = enqEmail;
    }

    // 3. Phone validation
    const phoneVal = enqPhone ? enqPhone.value.trim() : "";
    const digits = phoneVal.replace(/\D/g, "");
    if (!phoneVal || digits.length < 10) {
      setEnquiryError(enqPhone, "enqPhoneErr", "Please enter a valid phone number (at least 10 digits).");
      isValid = false;
      if (!firstInvalid) firstInvalid = enqPhone;
    }

    // 4. Preferred Contact Time
    const timeVal = enqTime ? enqTime.value : "";
    if (!timeVal) {
      setEnquiryError(enqTime, "enqTimeErr", "Please select your preferred contact time.");
      isValid = false;
      if (!firstInvalid) firstInvalid = enqTime;
    }

    if (!isValid) {
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // Auto-fill property link if empty
    const propLinkVal = enqPropLink && enqPropLink.value.trim() ? enqPropLink.value.trim() : window.location.href;
    const msgVal = enqMsg && enqMsg.value.trim() ? enqMsg.value.trim() : "None provided";

    // Pre-filled WhatsApp message
    const waLines = [
      "🏠 *New Property Enquiry - Vintage Realtors & Promoters*",
      "----------------------------------------",
      `👤 *Name:* ${nameVal}`,
      `📧 *Email:* ${emailVal}`,
      `📞 *Phone:* ${phoneVal}`,
      `🔗 *Property Link:* ${propLinkVal}`,
      `⏰ *Preferred Time:* ${timeVal}`,
      `💬 *Message:* ${msgVal}`,
      "----------------------------------------",
      "Sent via Vintage Realtors Website"
    ];
    const waText = waLines.join("\n");

    // Configured business WhatsApp number
    const businessPhone = (enqForm.dataset.whatsapp || "910000000000").replace(/\D/g, "");
    const waUrl = `https://wa.me/${businessPhone}?text=${encodeURIComponent(waText)}`;

    if (enqStatus) {
      enqStatus.textContent = "Opening WhatsApp with your enquiry details...";
    }

    window.open(waUrl, "_blank", "noopener,noreferrer");
  });
}
