/* ==========================================================
   scrolling.js — scroll-driven hero (Vintage Realtors)
   Plays an image sequence on a <canvas> while the page scrolls.
   Config is read from data-attributes on <section class="sf">:
     data-frames  path template, {n} = frame number   (./assets/frames/f_{n}.webp)
     data-count   number of frames                     (190)
     data-pad     zero padding of {n}                  (3  ->  001)
     data-first   number of the first frame            (1)
     data-header  id of your site header               (hd)
   ========================================================== */
(function () {
  'use strict';
  var cl = function (v, a, b) { a = a === undefined ? 0 : a; b = b === undefined ? 1 : b; return Math.max(a, Math.min(b, v)); };
  var lerp = function (a, b, t) { return a + (b - a) * t; };

  function init(sec) {
    if (!sec) return;
    var $ = function (s) { return sec.querySelector(s); };
    var stage = $('.sf-stage'), win = $('.sf-win'), cv = $('.sf-canvas');
    if (!stage || !win || !cv) return;
    var ctx = cv.getContext('2d');
    if (!ctx) return;

    var intro = $('.sf-intro'), ui = $('.sf-ui'), cue = $('.sf-cue'), loader = $('.sf-loader'), bar = $('.sf-bar'),
        warn = $('.sf-warn'), cards = [].slice.call(sec.querySelectorAll('.sf-card'));
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---- frame config ---- */
    var override = Array.isArray(window.SF_FRAMES) ? window.SF_FRAMES : null;
    var tpl = sec.getAttribute('data-frames') || './assets/frames/f_{n}.webp';
    var count = override ? override.length : parseInt(sec.getAttribute('data-count') || '190', 10);
    var pad = parseInt(sec.getAttribute('data-pad') || '3', 10);
    var first = parseInt(sec.getAttribute('data-first') || '1', 10);
    var hd = document.getElementById(sec.getAttribute('data-header') || 'hd');
    var S = [0.14, 0.36, 0.58, 0.80, 1.0];   /* scroll ranges of the 4 cards */

    /* ---- header offset: keep the hero below a fixed/sticky header ---- */
    var topPx = 0;
    function offsets() {
      var h = 0, fixed = false;
      if (hd) {
        var pos = getComputedStyle(hd).position;
        if (pos === 'fixed' || pos === 'sticky') h = Math.round(hd.getBoundingClientRect().height);
        fixed = pos === 'fixed';
      }
      topPx = h;
      sec.style.setProperty('--sf-top', h + 'px');
      sec.classList.toggle('sf-offset', fixed);
    }

    /* ---- load frames ---- */
    var imgs = new Array(count), ok = new Array(count), loaded = 0, okCount = 0, ready = false;
    function src(n) { return override ? override[n] : tpl.replace('{n}', String(n + first).padStart(pad, '0')); }
    function done(n, good) {
      loaded++;
      if (good) {
        ok[n] = true;
        okCount++;
        if (last < 0) draw(Math.round(cur));
      }
      if (bar) bar.style.width = (loaded / count * 100) + '%';
      if (!ready && (ok[0] || loaded >= Math.min(count, 12))) {
        ready = true;
        size();
        if (loader) loader.classList.add('sf-done');
        draw(Math.round(cur));
      }
      if (loaded === count && okCount === 0) {
        sec.classList.add('sf-noframes');
        if (warn) warn.textContent = 'Frames not found. Check data-frames: ' + tpl;
        console.warn('[scrolling] No frames loaded. Template:', tpl);
      }
    }
    for (var n = 0; n < count; n++) {
      (function (n) {
        var im = new Image(); im.decoding = 'async';
        im.onload = function () { done(n, true); };
        im.onerror = function () { done(n, false); };
        im.src = src(n); imgs[n] = im;
      })(n);
    }

    /* ---- canvas ---- */
    var last = -1;
    function size() {
      var d = Math.min(window.devicePixelRatio || 1, 2);
      var w = cv.clientWidth || stage.clientWidth || window.innerWidth;
      var h = cv.clientHeight || stage.clientHeight || window.innerHeight;
      cv.width = Math.round(w * d);
      cv.height = Math.round(h * d);
      last = -1;
      draw(Math.round(cur));
    }
    function pick(i) {
      if (ok[i]) return i;
      for (var d = 1; d < count; d++) {
        if (i - d >= 0 && ok[i - d]) return i - d;
        if (i + d < count && ok[i + d]) return i + d;
      }
      return -1;
    }
    function draw(i) {
      var k = pick(i); if (k < 0 || k === last) return;
      var im = imgs[k];
      if (!im || !im.naturalWidth || !im.naturalHeight) return;
      var cw = cv.width, ch = cv.height;
      if (!cw || !ch) return;
      var s = Math.max(cw / im.naturalWidth, ch / im.naturalHeight),
          w = im.naturalWidth * s,
          h = im.naturalHeight * s;
      ctx.drawImage(im, (cw - w) / 2, (ch - h) / 2, w, h);
      last = k;
    }

    /* ---- scroll loop ---- */
    var cur = 0;
    var lastP = -1;
    function tick() {
      var r = sec.getBoundingClientRect(), range = sec.offsetHeight - stage.offsetHeight,
          p = range > 0 ? cl((topPx - r.top) / range) : 0, target = p * (count - 1);
      cur = reduce ? target : cur + (target - cur) * 0.12;
      if (Math.abs(target - cur) < 0.01) cur = target;
      draw(Math.round(cur));

      /* Update UI elements when scroll progress changes */
      if (Math.abs(p - lastP) > 0.0001 || last < 0) {
        lastP = p;
        /* window grows from a card to full screen */
        var t = cl(p / 0.12), e = t * t * (3 - 2 * t), W = window.innerWidth, H = stage.clientHeight,
            sx = Math.round(W * (W < 700 ? 0.05 : 0.09) * (1 - e)), top = Math.round(H * 0.38 * (1 - e)), bot = Math.round(H * 0.10 * (1 - e));
        win.style.clipPath = 'inset(' + top + 'px ' + sx + 'px ' + bot + 'px ' + sx + 'px round ' + Math.round(22 * (1 - e)) + 'px)';
        cv.style.transform = 'scale(' + lerp(1.12, 1, e) + ')';
        if (intro) {
          intro.style.opacity = 1 - cl(p / 0.09);
          intro.style.transform = 'translateY(' + (-p * 160) + 'px)';
        }
        if (cue) cue.style.opacity = 1 - cl(p / 0.03);
        if (ui) ui.style.opacity = cl((p - 0.12) / 0.04);

        for (var k = 0; k < cards.length; k++) {
          var a = S[k], b = S[k + 1] + (k === cards.length - 1 ? 1 : 0), o = cl(Math.min((p - a) / 0.04, (b - p) / 0.04));
          cards[k].style.opacity = o;
          cards[k].style.transform = 'translateY(' + ((1 - o) * 14) + 'px)';
          cards[k].style.pointerEvents = o > 0.5 ? 'auto' : 'none';
        }
      }
      requestAnimationFrame(tick);
    }

    window.addEventListener('resize', function () { offsets(); size(); });
    offsets(); size(); requestAnimationFrame(tick);
  }

  function boot() { [].forEach.call(document.querySelectorAll('.sf'), init); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
