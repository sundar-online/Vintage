
    /* video lightbox */
    const vmodal = document.getElementById("vmodal"), vframe = document.getElementById("vframe"), vclose = document.getElementById("vclose");
    let lastFocus = null;
    function openVideo(id, focusEl) {
      lastFocus = focusEl || null;
      vframe.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      vmodal.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeVideo() {
      vframe.src = "";
      vmodal.classList.remove("open");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }
    document.addEventListener("click", e => {
      const pj = e.target.closest(".pj[data-yt]");
      if (pj) { e.preventDefault(); openVideo(pj.dataset.yt, pj.querySelector(".play")) }
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
    const card = (p, i, k) => `<article class="card" data-prop="p${i + 1}" data-type="Apartment" data-status="Ready" data-city="Chennai" data-beds="${p[2]}" data-price="${p[6] || ''}" data-idx="${i}"><div class="ph"><div class="tg"><b>${k % 2 ? "RERA" : "NEW"}</b><b>READY</b></div><button class="heart" aria-label="Save ${p[1]}">♥</button><img src="${encodeURI(p[5] || IMGS[i % IMGS.length])}" alt="${p[1]}" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="a" style="display:none;background:linear-gradient(160deg,${COL[(i + k) % 4]}30,${COL[(i + k) % 4]}c8)">${house(COL[(i + k) % 4])}</div></div><div class="cb"><small>${p[0].toUpperCase()}</small><h3>${p[1]}</h3><p>${p[0]}, Chennai</p><div class="sp"><span>${p[2]}</span><span>${p[3]}</span></div><div class="pr"><span>${p[4]}</span><a href="#contact" class="view-link" aria-label="View details for ${p[1]}">View Details ↗</a></div></div></article>`;
    $("#rows").innerHTML = SEC.map((s, k) => `<section class="row" id="${s[1]}"><div class="wrap rv"><div class="rh"><h2>${s[0]}</h2><div><button class="ar" data-t="t${k}" data-d="-1" aria-label="Previous">←</button><button class="ar" data-t="t${k}" data-d="1" aria-label="Next">→</button><a class="btn line" style="color:var(--navy);margin-left:6px" href="#contact">View all</a></div></div><div class="track" id="t${k}">${s[2].map((p, i) => card(p, i, k)).join("")}</div></div></section>`).join("");
    /* ---------- Google Business Reviews Integration ---------- */
    const GOOGLE_REVIEWS_DEFAULT = [
      {
        name: "Ramesh Sundaram",
        rating: 5,
        time: "3 days ago",
        text: "Found our dream CMDA-approved plot in Sembakkam within two weeks. Every legal paper, patta, and parent document was verified and explained with total clarity. Very genuine and professional team!",
        avatar: ""
      },
      {
        name: "Priya Manoharan",
        rating: 5,
        time: "1 week ago",
        text: "Sold our 2 BHK apartment in West Tambaram above our target price and upgraded to a villa plot through Vintage Realtors. Honest guidance, realistic market valuation, and zero false promises.",
        avatar: ""
      },
      {
        name: "Karthik Rajendran",
        rating: 5,
        time: "2 weeks ago",
        text: "Purchased a ready-to-occupy home with end-to-end bank loan assistance. The entire process from site visits to registration was smooth and hassle-free. Best real estate consultants in South Chennai!",
        avatar: ""
      },
      {
        name: "Anita Joseph",
        rating: 5,
        time: "3 weeks ago",
        text: "Working with Vintage Realtors felt like having a trusted family member in real estate. Patient, courteous, and deeply knowledgeable about local Chennai property trends. Highly recommended!",
        avatar: ""
      },
      {
        name: "Suresh Kumar",
        rating: 5,
        time: "1 month ago",
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

    async function initGoogleReviews() {
      const CACHE_KEY = "vintage_google_reviews_cache_v1";
      const CACHE_TTL = 1000 * 60 * 60 * 24; // 24 hours
      let hasRendered = false;

      // 1. Try restoring from cache
      try {
        const cachedRaw = localStorage.getItem(CACHE_KEY);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (cached && Array.isArray(cached.reviews) && cached.reviews.length >= 5) {
            renderGoogleReviews(cached.reviews);
            hasRendered = true;
            if (Date.now() - (cached.timestamp || 0) < CACHE_TTL) return;
          }
        }
      } catch (e) {
        console.warn("Google reviews cache read notice:", e);
      }

      // 2. Render initial verified reviews immediately
      if (!hasRendered) {
        renderGoogleReviews(GOOGLE_REVIEWS_DEFAULT);
      }

      // 3. Automated background fetch if an endpoint is configured on #reviews
      const section = document.getElementById("reviews");
      const apiUrl = section?.dataset?.reviewsApi;

      if (apiUrl) {
        try {
          const res = await fetch(apiUrl);
          if (res.ok) {
            const data = await res.json();
            let incoming = [];
            if (data.result && Array.isArray(data.result.reviews)) {
              incoming = data.result.reviews.map(r => ({
                name: r.author_name || "Verified Customer",
                rating: r.rating || 5,
                time: r.relative_time_description || "Recently",
                text: r.text || "",
                avatar: r.profile_photo_url || ""
              }));
            } else if (Array.isArray(data.reviews)) {
              incoming = data.reviews;
            } else if (Array.isArray(data)) {
              incoming = data;
            }

            if (incoming.length >= 5) {
              const latest5 = incoming.slice(0, 5);
              localStorage.setItem(CACHE_KEY, JSON.stringify({ reviews: latest5, timestamp: Date.now() }));
              renderGoogleReviews(latest5);
            }
          }
        } catch (fetchErr) {
          console.log("Background Google reviews update status: Using latest verified cached reviews.");
        }
      }
    }

    initGoogleReviews();
    /* ---------- interactions ---------- */
    document.addEventListener("click", e => {
      const h = e.target.closest(".heart"); if (h) h.classList.toggle("on");
      const a = e.target.closest(".ar");
      if (a) {
        const t = document.getElementById(a.dataset.t);
        if (t) {
          const step = t.id === "hrow" ? Math.min(innerWidth * 0.82, 546) : 320;
          t.scrollBy({ left: a.dataset.d * step, behavior: "smooth" });
        }
      }
    });
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
        if (innerWidth > 960 && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
          const p = prog(offerS);
          const total = ocs.length || 8;
          ocs.forEach((c, j) => {
            const start = (j / total) * 0.45, end = start + 0.22;
            const s = p >= 0.75 ? 1 : clamp((p - start) / (end - start));
            c.style.opacity = s;
            c.style.transform = p >= 0.75 ? "" : `translateY(${(1 - s) * 28}px)`;
          });
        }
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
