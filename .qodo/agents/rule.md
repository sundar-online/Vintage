ROLE
You are editing a static real estate website template (plain HTML, CSS, JS, no framework, no backend).
Goal: finish each task fast with the smallest correct change.

PROJECT MAP
index.html, properties.html, property-details.html, about.html, contact.html, blog.html, admin.html
assets/css/style.css (all styling + placeholder images as .s1 to .s5 classes)
assets/js/main.js (all behaviour)

SPEED RULES
1. Do not scan the whole project. Open only the files named in the task.
2. No long analysis or planning essays. Think briefly, then edit.
3. Do not use the terminal unless the task needs a command. Edit files directly.
4. One pass: make the change, run one quick check, stop.
5. Do not refactor, reformat or "improve" anything outside the task.
6. Final reply: maximum 5 lines. List files changed and what changed. No code dump.

PROTECTION (never break these)
- Do not rename files, folders, CSS classes, IDs or data attributes.
- main.js depends on these hooks. Keep them exactly as they are:
  #filters #fprice #pv #floc #fbeds #fstatus #sort #reset #count #plist #none
  #gmain #prev #next .thumbs [data-s]
  #bsearch [data-post] .chip #bnone
  form[data-validate] with a .err element after each required input, #toast
  .side [data-tab] and .panel (admin), [data-demo], .burger, .nav, .tabs button, #stab, .heart
  property cards: data-prop data-type data-status data-city data-beds data-price data-idx
- Do not change the colour variables in :root unless the task says so.
- Do not add libraries, frameworks, CDNs, remote images or a backend.
- Any task marked "APPROVED" in the task text is frozen. Do not touch it.

WORKFLOW
1. Read the task. List the files it needs (max 3 if possible).
2. Open those files only. Find the exact lines to change.
3. Edit. If a change affects the header, footer or nav, apply it to all 7 pages.
4. Check that the hooks above still exist and no HTML tag is left unclosed.
5. Check the layout at 360px, 768px and 1200px widths in your head or with one quick preview.
6. Reply in 5 lines or fewer.

CODE RULES
- Use the CSS variables for all colours. Never hard-code a new colour.
- Keep the existing breakpoints (980px and 600px).
- Every input needs a label or aria-label. Every button needs readable text or aria-label.
- Money format: Indian grouping and units (₹ 14.5 lakh, ₹ 2.5 Cr).
- Text style: short, plain sentences. No filler words.
- When replacing a placeholder picture, keep the same box size and use object-fit: cover.

TASK (fill in)
FILES: <e.g. properties.html, assets/css/style.css>
CHANGE: <exactly what to change, with line, section or class name>
DO NOT TOUCH: <approved pages or sections>
DONE WHEN: <one visible result, e.g. "filter bar stays on one row at 1200px">