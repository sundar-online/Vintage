# Vintage Realtors & Promoters — Website Details & Requirements

> **Source basis:** Client Requirements Checklist (18 Oct 2026), Sold Out Property Details, VINTAGE LIVE PROPERTY MIS, Vintage Realtors & Promoters company profile, and the supplied 3D/WebGL research and prompting resources.
>
> **Important:** This document distinguishes confirmed source information from items that still require client confirmation. It does not invent missing business, legal, contact, pricing, branding, or workflow details.

---

## 1. Project Overview

### Business
**Vintage Realtors & Promoters**

### Brand positioning
**Your Property Dreams. Our Local Expertise.**

The supplied company profile states that Vintage Realtors & Promoters has **over 4 years of real-estate expertise**, has served **50+ customers**, and focuses on affordable property options and customer-oriented guidance across **South Chennai**.

The stated positioning is:
- Accessible property buying, selling, and investment guidance.
- Budget-conscious property options.
- Personalised assistance.
- Local market knowledge.
- Customer-first decision support.

### Mission
To make property buying, selling, and investment opportunities more accessible through budget-conscious property options, personalised guidance, and a customer-first approach.

### Vision
To become a trusted real estate partner across South Chennai by helping more people discover suitable properties, make informed decisions, and take confident steps towards their property goals.

### Website objective
Build a modern real-estate website that:
1. Presents available properties clearly.
2. Separates live/available inventory from sold properties.
3. Captures property enquiries and site-visit leads.
4. Communicates the company's local expertise and credibility.
5. Supports property discovery by location, type, budget, and relevant attributes.
6. Provides clear pathways for buyers, sellers, partners, investors, and loan enquiries.
7. Can support a future admin/CRM-style workflow without compromising the public website experience.

---

# 2. Confirmed Company Content

## About Vintage Realtors & Promoters

**Headline:** Your Property Dreams. Our Local Expertise.

Suggested source-faithful About section:

Vintage Realtors & Promoters believes that finding the right property should be an achievable and confident experience for everyone. With over 4 years of expertise in the real estate field, the company helps individuals, families, and investors explore property opportunities aligned with their budgets, goals, and future aspirations.

The company focuses on affordable property options and customer-oriented guidance, helping customers discover suitable residential plots, land, homes, and investment opportunities across South Chennai.

Having served 50+ customers, Vintage Realtors & Promoters continues to build its business around personalised assistance, local market knowledge, and a commitment to helping customers make informed property decisions.

### Our Story
Real estate is more than buying and selling properties — it is about helping people find a place to call home, identify investment opportunities, and plan for the future.

Vintage Realtors & Promoters aims to understand each customer's requirements, financial priorities, and long-term ambitions and present relevant property options rather than taking a one-size-fits-all approach.

The company serves first-time homebuyers, experienced land investors, and property owners with a focus on convenience, transparency, and customer-oriented service.

---

# 3. Public Website Information Architecture

Recommended primary navigation:

- Home
- Properties
- About Us
- Services
- Construction
- Joint Venture
- Investors
- Home Loans
- Partners
- Careers
- Contact

Recommended property discovery categories:

- All Properties
- Apartments / Flats
- Plots
- Villas / Houses
- Resale
- Land / Agriculture
- Gated Communities

Recommended curated sections, subject to client confirmation:
- Trending
- Budget Homes
- Chennai Prime
- RERA Approved

The client checklist explicitly asks which properties should appear in these sections; the current source files do not provide the final categorisation rules.

---

# 4. Home Page Requirements

## Hero section
The home page should immediately communicate:
- Real-estate expertise.
- South Chennai focus.
- Property discovery.
- Strong enquiry CTA.

Potential CTA structure:
- Explore Properties
- Book a Site Visit
- Talk to an Expert

**Do not hard-code these as final copy until the client approves the wording.**

## Property discovery
Provide a prominent search/filter experience using available inventory fields such as:
- Property type
- Location
- Budget
- BHK
- Size
- Facing
- Approval
- Availability/status

## Trust / credibility
Use only verified metrics supplied by the client:
- 4+ years of experience
- 50+ customers

Do not add unsupported claims such as number of projects, total properties sold, years of construction experience, or RERA count.

## Featured properties
Use live inventory rather than sold inventory.

## Other home sections
Potential sections based on the checklist:
- Services
- Construction
- Joint Venture
- Investor opportunities
- Home loans
- Testimonials
- Latest properties
- Blog / insights
- Contact / enquiry

Client content is still required for several of these sections.

---

# 5. Property Data Model

The supplied live-property MIS demonstrates the following inventory fields:

- Seller name
- Seller contact
- Project name
- Location
- Executive name
- Years old
- Plot / flat / house
- Cost
- BUA
- UDS
- Facing
- Unit
- Total units
- Land area
- Floor
- Car parking
- Lift
- Visited status
- Video taken
- Banner ready
- Instagram
- YouTube
- Facebook

The sold-property sheet adds:

- Customer name
- Final rate
- Booking date
- Registration date
- Seller name
- Seller contact
- Project name
- Location
- Referred by
- Plot / flat / house
- Floor
- BUA
- UDS
- Facing
- Years old
- Car parking
- Lift

The client requirements checklist additionally requests:
- Property title
- Type
- Status
- City
- Area
- Landmark
- BHK
- Size
- Price
- Approval (CMDA / DTCP / RERA)
- Builder
- Amenities
- Plot dimensions
- Facing
- Road width
- Road type
- Photos
- Videos
- Floor plans
- Brochures

### Canonical property object

```text
Property
├── id
├── title
├── project_name
├── status
├── property_type
├── listing_type
├── city
├── locality
├── landmark
├── address
├── latitude
├── longitude
├── price
├── price_label
├── bhk
├── built_up_area
├── uds
├── land_area
├── plot_dimensions
├── road_width
├── road_type
├── facing
├── floor
├── total_floors
├── unit_number
├── total_units
├── age_years
├── car_parking
├── lift
├── approval_type
├── approval_number
├── builder
├── amenities[]
├── description
├── images[]
├── video_url
├── floor_plan_url
├── brochure_url
├── seller
├── assigned_executive
├── source
├── created_at
├── updated_at
└── publication_flags
```

---

# 6. Current Inventory — Live Property MIS

The live MIS contains a mixture of fully populated and partially populated records. It should **not** be treated as a clean production database until verified.

## Fully/mostly populated examples

### RAMS ENCLAVE
- Seller: Vignesh
- Contact: 9092599445
- Location: Pozhichalur
- Executive: Mamtha Mam
- Age: 13 years
- Type: 2 BHK Flat
- Cost: 46 LACK
- BUA: 900
- UDS: 504
- Facing: North
- Unit: 6
- Total units: 1
- Floor: F-3
- Car parking: Yes
- Lift: No
- Visited: Yes
- Video taken: Yes
- Banner ready: Yes
- Instagram: Yes
- YouTube: Yes
- Facebook: Yes

### NDVN PAPAMMAL
- Seller: Bathrinarayanan
- Contact: 9500523454
- Project: NDVN Papammal
- Location: Back side of VIT College
- Executive: Mamtha Mam
- Age: New
- Type: Plot
- Cost: 4500/-
- Facing: All Face
- Unit: 50
- Land area: 1200
- Visited: Yes
- Banner ready: Yes
- YouTube: Yes
- Facebook: Yes

### SUMANGALI / CBI COLONY
- Seller: Kamala
- Contact: 9677053464
- Location: Medavakkam
- Executive: Mamtha Mam
- Age: 15 years
- Type: 2 BHK Flat
- Cost: 69.80 LACK
- BUA: 1118
- UDS: 561
- Facing: East
- Unit: 6
- Total units: 1
- Floor: F2
- Car parking: Yes
- Lift: No
- Visited: Yes

### SOUTHERN HOME
- Seller: Vintage
- Contact: 9940666458
- Location: Sithalapakkam
- Executive: Mamtha Mam
- Age: 10 years
- Type: 3 BHK Flats
- Cost: 67 LACK
- BUA: 1150
- UDS: 567
- Facing: North
- Unit: 4
- Total units: 1
- Floor: Ground Floor
- Car parking: Yes
- Lift: No

### LAKSHMI NIVAS II
- Seller: Vintage
- Contact: 9940666458
- Location: Kovilancheri
- Executive: Mamtha Mam
- Age: 8 years
- Type: 2 BHK Flat
- Cost: 35 LACK
- BUA: 585
- UDS: 260
- Facing: East
- Unit: 6
- Total units: 1
- Floor: G1
- Car parking: Yes
- Lift: No

### THE MEGEST
- Seller: Sudha
- Contact: 9789537574
- Location: Vignarajapuram
- Executive: Kabilan
- Age: New
- Type: 3 BHK Flats
- Cost: 85 LACK
- BUA: 1110
- UDS: 400
- Facing: North
- Unit: 6
- Total units: 3
- Land area: 2400
- Floor: 3rd
- Car parking: Yes
- Lift: Yes
- Visited: Yes

### DAC
- Seller: Kannan
- Contact: 9381848494
- Location: Medavakkam
- Executive: Kabilan
- Age: New
- Type: 2 BHK Flats
- Cost: 1.15 CR
- BUA: 1041
- UDS: 371
- Facing: East
- Unit: 120
- Total units: 1
- Floor: 303
- Car parking: Yes
- Lift: Yes

### VARSHIDHI STAR HOMES
- Seller: Kannan
- Contact: 8939192162
- Location: S. Kolathur
- Executive: Kabilan
- Age: 4 years
- Type: 2 BHK Flats
- Cost: 85 LACK
- BUA: 1074
- UDS: 457
- Facing: South
- Unit: 12
- Total units: 1
- Floor: S1
- Car parking: Yes
- Lift: Yes
- Visited: Yes
- Video taken: Yes
- Banner ready: Yes
- Facebook: Yes

### SKANDA
- Seller: Vintage
- Contact: 9940666458
- Location: Vajbai Street / Perungalathur Arasan Avenue area
- Executive: Saran
- Age: New
- Type: Flat
- Cost: 78 LACKS
- BUA: 1075
- UDS: 410
- Facing: North
- Unit: 3
- Total units: 3
- Floor: F, S, T
- Car parking: 2 cars
- Lift: Yes
- Visited: Yes

### BLUCON PRISTINE
- Seller: Manoj
- Seller contact: 9381213812
- Tenant contact: 9650617567
- Location: Kolapakkam
- Executive: Saran
- Age: 4 years
- Type: 3 BHK Flats
- Cost: 99 LACK
- BUA: 1330
- UDS: 586
- Facing: South
- Unit: 40
- Total units: 1
- Floor: S2 / C4
- Car parking: 3 cars
- Lift: Yes
- Visited: Yes
- Video taken: Yes
- Instagram: Yes
- YouTube: Yes
- Facebook: Yes

## Additional partially populated live records

The MIS also lists:
- Tellus — Murugamangalam
- Alagappa Nagar — Kairamedu
- Revolutions One — OMR Padur
- Choolaimedu — SS
- Melkottaiyur — House
- Hasthinapuram — Seller: Selvaraj
- Sholinganallur TNHB — Seller: Sharma, Flat
- Vengambakkam

These records require completion and verification before publication.

**Source note:** The original MIS contains inconsistent numbering/order and several blank cells. Preserve the underlying information, but normalise it only after client verification.

---

# 7. Sold Property / Closed Transactions

The supplied sold-property sheet contains 8 records.

## Sold record summary

1. **Mrs. Bhavani**
   - Final rate: 28 LACK
   - Booking: 05-04-2026
   - Registration: 30.04.2026
   - Seller: Sridvi
   - Contact: 9941085209
   - Project: Sabari Jothy
   - Location: Rajakilpakkam
   - Referred by: Housing.com
   - Type: 1 BHK Flat
   - Floor/unit: G1
   - BUA: 607
   - UDS: 275
   - Facing: East
   - Age: 13
   - Parking: No
   - Lift: No

2. **Mr. Jaffer**
   - Booking: 04.03.2026
   - Registration: 20.05.2026
   - Seller: Mr. Belfin
   - Contact: 9940666458
   - Project: Tellus Athreya
   - Location: Kandigai
   - Referred by: Mr. Belfin
   - Type: Plot
   - Unit: A5
   - UDS: 1090
   - Facing: East
   - Age: New
   - Parking/Lift: NA

3. **Mr. Prabhakaran**
   - Final rate: 93 LACK
   - Booking: 16.04.2026
   - Registration: 12.06.2026
   - Seller: Anand
   - Contact: 9962201116
   - Project: Annapoorani
   - Location: Adambakkam
   - Referred by: Housing.com
   - Type: 2 BHK Flat
   - Floor/unit: S2
   - BUA: 1015
   - UDS: 493
   - Facing: East
   - Age: 9
   - Parking: Yes
   - Lift: Yes

4. **Mr. Karthikeyan**
   - Final rate: 1.4CR
   - Booking: 14.04.2026
   - Registration: 29.05.2026
   - Seller: Vintage
   - Contact: 9940666458
   - Project: AK
   - Location: Rajakilpakkam
   - Referred by: Banner
   - Type: 3 BHK Flat
   - Floor/unit: S3
   - BUA: 1410
   - UDS: 567
   - Facing: North
   - Age: 8 months
   - Parking: Yes
   - Lift: Yes

5. **Mr. Anbu**
   - Final rate: 27.70 LACK
   - Booking: 13.05.2026
   - Registration: 20.07.2026
   - Seller: Anand
   - Contact: 9025108324
   - Project: Amaaya Advika
   - Location: Madambakkam
   - Referred by: Housing.com
   - Type: 1 BHK Flat
   - Floor/unit: S2
   - BUA: 200
   - UDS: 579
   - Facing: North
   - Age: 7
   - Parking: No
   - Lift: Yes

6. **Mr. Rahuman**
   - Final rate: 42 LACK
   - Booking: 13.06.2026
   - Registration: 20.07.2026
   - Seller: Vintage
   - Contact: 9940666458
   - Project: Amaaya Advika
   - Location: Madambakkam
   - Referred by: Tenant
   - Type: 2 BHK Flat
   - Floor/unit: S3
   - BUA: 725
   - UDS: 300
   - Facing: North
   - Age: 8 years
   - Parking: Yes
   - Lift: Yes

7. **Ms. Jini**
   - Booking: 14.03.2026
   - Registration: 31.07.2026
   - Seller: Mr. Belfin
   - Contact: 9940666458
   - Project: NDVN (DAC)
   - Location: VIT College
   - Referred by: Mr. Belfin
   - Type: Plot
   - Facing: North
   - Age: New
   - Parking/Lift: NA

8. **Muthulakshmi**
   - Final rate: 53 LACK
   - Booking: 03.06.2026
   - Registration: 17.09.2026
   - Seller: Mrs. Malar
   - Contact: 9486586107
   - Project: MACC SUNSINE
   - Location: Pallikaranai
   - Referred by: Housing.com
   - Type: 2 BHK Flats
   - Floor/unit: S1
   - BUA: 925
   - UDS: 461
   - Facing: East
   - Age: 9 years
   - Parking: Yes
   - Lift: No

### Public-site rule
Customer names, seller contacts, referral details, and internal transaction information should **not automatically be exposed publicly**. Use sold properties as portfolio/case-study content only after confirming what information the client wants displayed and obtaining any required consent.

---

# 8. Property Search & Filters

Minimum recommended filters:

### Location
- City
- Locality / area
- Landmark

### Property
- Apartment / Flat
- Plot
- Villa / House
- Resale
- Land / Agriculture
- Gated community

### Budget
- Min price
- Max price

### Configuration
- BHK
- Built-up area
- UDS
- Land area
- Plot dimensions

### Features
- Facing
- Floor
- Car parking
- Lift
- Age

### Approvals
- CMDA
- DTCP
- RERA

### Status
- Available
- Reserved / under process (if used)
- Sold

Do not publish an approval status until verified against source documents/client confirmation.

---

# 9. Property Detail Page

Each property page should support:

1. Property title
2. Project name
3. Availability/status
4. Price
5. Location
6. Property type
7. BHK
8. BUA
9. UDS
10. Land area
11. Facing
12. Floor/unit
13. Age
14. Parking
15. Lift
16. Approval
17. Builder
18. Amenities
19. Description
20. Photo gallery
21. Video
22. Floor plan
23. Brochure
24. Map
25. Enquiry CTA
26. Site-visit CTA
27. Contact / WhatsApp CTA

### Media requirement
The client checklist requests **6 or more photos per property**, plus videos, floor plans, and brochures.

---

# 10. Lead & Enquiry Flow

The website should support at least:
- Property enquiry
- Call-back request
- WhatsApp enquiry
- Site-visit booking
- Home-loan enquiry
- Partner enquiry
- Investor enquiry
- Joint-venture enquiry

### Site-visit data to confirm
The client checklist specifically asks for the site's visit process and the details collected. Final fields must be supplied by the client.

Possible fields, pending confirmation:
- Name
- Phone
- Email
- Property
- Preferred date
- Preferred time
- Number of visitors
- Notes

---

# 11. Business Workflow

The client must confirm:

- Who calls a new enquiry.
- Expected response time.
- How leads are assigned:
  - city
  - area
  - partner
  - round-robin / turn
- Site-visit booking process.
- Who verifies and approves property listings.
- Commission model:
  - percentage
  - fixed
  - slab
- Commission payment cycle.
- Lead sources:
  - Google
  - Facebook
  - walk-in
  - referral
  - other.

These are business rules, not assumptions.

---

# 12. Services

The checklist requests services including:
- Plumbing
- Electrical
- Interior
- Painting

For each service, collect:
- Description
- Packages
- Pricing/rates if public
- Work photos
- Process
- Contact CTA

Additional service categories must be confirmed by the client.

---

# 13. Construction

Required client inputs:
- Rate per sq.ft.
- Construction process.
- Completed projects.
- Ongoing projects.
- Project photos.
- Project descriptions.
- Contact/enquiry process.

Do not publish construction rates until confirmed.

---

# 14. Joint Venture

Required:
- Joint-venture terms.
- Land-owner eligibility.
- Information required from land owners.
- Documents required.
- Process/timeline.
- Contact person.
- Enquiry form.

---

# 15. Investor Section

Required:
- Investor offers.
- Investment process.
- Eligibility.
- Expected information/documents.
- Contact process.

Do not publish investment returns, guarantees, or financial claims unless explicitly supplied and legally approved by the client.

---

# 16. Business Partner Programme

Required:
- Who can become a partner.
- Partner onboarding.
- Commission rules.
- Lead sharing rules.
- Payment cycle.
- Required documents.
- Partner contact.

---

# 17. Careers

The client checklist requests job openings for the Careers page.

Recommended fields:
- Job title
- Location
- Employment type
- Experience
- Responsibilities
- Requirements
- Application email/form
- Closing date

Final openings and contact details require client input.

---

# 18. Home Loan Page

Required:
- Partner banks / NBFCs and logos.
- Interest-rate range, if publicly displayed.
- Processing fees, if publicly displayed.
- Loan types.
- Documents for salaried customers.
- Documents for self-employed customers.
- Loan enquiry contact person.
- Phone.
- Email.
- Eligibility rule.

The checklist gives **50% of income** only as an example of a possible eligibility rule; it is **not a confirmed Vintage policy**.

---

# 19. Email, SMS & WhatsApp

Client confirmation required for:

### Official email addresses
- info
- sales
- loans
- partners
- careers

### Email infrastructure
- Existing mailbox provider, or
- New mailbox setup

### Alerts
- New enquiries
- Loan leads
- Applications

### SMS / WhatsApp
Potential uses listed by the client:
- OTP
- Visit reminders
- Loan status

### Sender identity
- Sender name
- Email footer
- Signature text

No sender identities or notification rules should be invented.

---

# 20. Admin & CRM Requirements

## Super Admin
Client must specify:
- Number of users.
- Roles such as owner, admin, content manager.
- Permissions.

## Partner / Sales Panel
Potential users listed in the checklist:
- Partners
- Builders
- Sales executives
- Team leads
- Loan officers

### Permissions
For every role define:
- View
- Add
- Edit
- Approve
- Export

### Reports
Client specifically mentions:
- Daily leads
- Sales
- Executive performance
- Partner performance

### Data import
Existing customer/lead data may be supplied as:
- Excel
- CRM export

Import format and field mapping must be confirmed before implementation.

---

# 21. Accounts, Access & Launch

Client must provide or approve:

- Hosting/cloud account.
- Domain login or permission to create/configure it.
- Google Analytics.
- Google Search Console.
- Google Maps.
- Facebook Pixel, if used.
- SMS provider.
- WhatsApp provider.
- Budget range.
- Expected launch date.
- Final approval/sign-off person.

---

# 22. Legal & Trust Content

Required client-provided content:
- Privacy Policy
- Terms & Conditions
- Disclaimer
- RERA registration number
- Other licences/registrations to display

The website must not fabricate or infer regulatory registrations.

---

# 23. Branding & Design Inputs Still Required

Client checklist requests:

- Logo in SVG/PNG.
- Brand colours.
- Brand fonts.
- Design preference.
- Sample websites.
- About Us content.
- MD message.
- Team photos.
- Years of experience.
- Counter numbers:
  - happy customers
  - projects
  - construction
  - interior works
- Home banners.
- Offer/festival pop-up details.
- Testimonials:
  - name
  - photo
  - locality
  - message
  - consent
- Blog topics/articles.
- Blog author.
- Privacy/legal text.
- Languages:
  - English only
  - English + Tamil

The supplied company profile currently supports the 4+ years and 50+ customers claims, but other counters are not confirmed.

---

# 24. 3D / WebGL Visual Direction

The supplied web research recommends a cinematic 3D experience using technologies such as:
- Three.js
- GSAP ScrollTrigger
- Lenis
- React Three Fiber where React integration is useful
- Framer Motion for UI/DOM animation
- PixiJS for 2D WebGL effects

For this real-estate project, use 3D as **progressive enhancement**, not as the sole carrier of important content.

### Recommended experience
- Cinematic but conversion-focused hero.
- Subtle property/building 3D elements.
- Scroll-linked camera movement where it genuinely improves storytelling.
- Parallax layers.
- Pinned transition sections sparingly.
- DOM-based text and CTAs over/around the canvas.
- Static/fallback imagery for mobile or low-power devices.

The supplied research recommends keeping important SEO content outside canvas and providing HTML/ARIA fallbacks because screen readers cannot interpret canvas visuals directly.

---

# 25. 3D Technical Performance Requirements

Target:
- 60 FPS on target devices.
- Approximately 100–150 draw calls maximum as a practical mid-range guideline.
- Around 2M triangles or less as a guideline.

Recommended:
- Cap device pixel ratio at 2.
- Use glTF.
- Use Draco compression for geometry.
- Use KTX2/Basis for textures.
- Use InstancedMesh/BatchedMesh for repeated objects.
- Merge static geometry where appropriate.
- Lazy-load heavy scenes.
- Use CDN/caching for large assets.
- Dispose geometries/materials/textures when scenes are removed.
- Use LOD/frustum culling for heavy scenes.
- Pause/on-demand render when the scene is static.
- Test on real mobile devices.
- Monitor `renderer.info`.
- Run Lighthouse performance/accessibility audits.

---

# 26. 3D Scroll Architecture

Recommended data flow:

```text
User Scroll
   ↓
Lenis Smooth Scroll
   ↓
GSAP ScrollTrigger
   ↓
GSAP Timeline
   ↓
Camera / Object State
   ↓
Three.js Scene Update
   ↓
WebGL Canvas
```

DOM overlay UI should remain available for:
- Headings
- Property details
- Buttons
- Forms
- Accessibility content
- SEO content

### Mobile fallback
Use responsive breakpoints to:
- Disable complex 3D.
- Reduce particles.
- Reduce shader quality.
- Replace 3D with static/video assets where necessary.

---

# 27. AI Image / 3D Asset Prompting Rules

The supplied prompt-engineering resource recommends:

1. Single clear primary subject.
2. Explicit material/surface.
3. Geometry/detail.
4. Pose/orientation.
5. Camera angle and framing.
6. Lighting.
7. Environment/background.
8. Consistent colour palette.
9. Render quality/style.
10. Negative space for UI copy.
11. Restrictions such as:
   - no text
   - no logo
   - no UI
   - no watermark
   - no unnecessary people/objects
   - no crop

Prompts should generally be specific and concise rather than overloaded.

### Real-estate adaptation
Potential subjects:
- Modern apartment building
- Premium villa
- Residential plot
- Architectural site plan
- South Chennai urban landscape
- Construction detail
- Property location marker

The exact visual direction should be confirmed before asset generation.

---

# 28. Recommended Visual System

Because the supplied company materials do not define official brand colours or fonts, do **not** treat any proposed palette as final.

Until the client supplies branding, design exploration may use:
- Premium real-estate aesthetic.
- Strong typography.
- Clean white/light surfaces or a sophisticated dark hero.
- Architectural imagery.
- Restrained accent colour.
- High-quality property photography.
- Subtle 3D depth rather than excessive visual effects.

Final palette and typography must come from client approval.

---

# 29. SEO & Accessibility

## SEO
- Server-render or pre-render important pages where possible.
- Keep critical property text in HTML/DOM.
- Use meaningful page titles and metadata.
- Use structured data where appropriate.
- Do not put core property information only inside WebGL.
- Ensure individual property pages are crawlable.
- Create location/property-type landing pages where justified by actual inventory.

## Accessibility
- Keyboard navigation.
- Skip links.
- Accessible forms.
- Visible focus states.
- ARIA labels where needed.
- Text alternatives for canvas content.
- Captions/transcripts for audio/video when applicable.
- Respect `prefers-reduced-motion`.
- Provide static alternatives to complex 3D motion.

---

# 30. Content Governance

Every property should have an internal publication state:

```text
DRAFT
→ VERIFIED
→ MEDIA_READY
→ APPROVED
→ PUBLISHED
→ RESERVED
→ SOLD
→ ARCHIVED
```

Only approved/verified properties should become public listings.

The current MIS has fields such as "Banner Ready", "Visited", "Video Taken", and social publishing flags. These can become internal content-readiness signals.

---

# 31. Data Quality Rules

Before importing the current spreadsheets/MIS:

- Standardise `LACK` / `LAKH` / `CR` into a consistent internal numeric format.
- Keep original source price text for audit/reference if needed.
- Normalise phone-number formatting.
- Standardise facing values.
- Standardise BHK terminology.
- Standardise floor values.
- Distinguish BUA, UDS, and land area.
- Resolve blank versus `NA`.
- Verify spelling of project and locality names.
- Verify seller contact permissions.
- Verify availability status.
- Verify approval claims.
- Verify photos/media before publishing.

**Do not silently correct source records without preserving the original value or obtaining client confirmation.**

---

# 32. Privacy & Internal Data Separation

The source spreadsheets contain personal contact information for sellers, tenants, executives, and customers.

Implement a strict distinction:

### Public
- Property information approved for publication.
- Public-facing contact channels.
- Approved photos/videos.
- Approved testimonials.

### Internal only
- Seller contacts.
- Tenant contacts.
- Customer names from closed transactions.
- Referral sources where not public.
- Internal executive assignment.
- Commission information.
- Lead-source reporting.
- Internal workflow statuses.

Role-based access should protect internal data.

---

# 33. Recommended Core Routes

```text
/
 /properties
 /properties/[slug]
 /locations/[location]
 /property-types/[type]
 /about
 /services
 /services/[slug]
 /construction
 /joint-venture
 /investors
 /home-loans
 /partners
 /careers
 /blog
 /contact
 /site-visit
 /privacy-policy
 /terms
 /disclaimer
```

Actual route structure can be simplified depending on the final stack and SEO strategy.

---

# 34. Recommended Admin Routes

```text
/admin
/admin/dashboard
/admin/properties
/admin/properties/new
/admin/properties/[id]
/admin/leads
/admin/site-visits
/admin/customers
/admin/sales
/admin/partners
/admin/loan-leads
/admin/content
/admin/testimonials
/admin/blog
/admin/media
/admin/reports
/admin/users
/admin/settings
```

These are proposed architecture only; the client must confirm the required admin scope.

---

# 35. Lead Status Model

Recommended starting model:

```text
NEW
→ CONTACTED
→ QUALIFIED
→ PROPERTY_SHARED
→ SITE_VISIT_BOOKED
→ SITE_VISIT_COMPLETED
→ NEGOTIATION
→ BOOKED
→ REGISTERED
→ CLOSED
```

Alternative terminal states:

```text
LOST
DUPLICATE
NOT_INTERESTED
UNREACHABLE
```

Final statuses and business rules require client confirmation.

---

# 36. Analytics Events

Recommended events:

- Property search
- Filter applied
- Property card clicked
- Property detail viewed
- Call CTA clicked
- WhatsApp CTA clicked
- Enquiry submitted
- Site visit submitted
- Loan enquiry submitted
- Partner enquiry submitted
- Investor enquiry submitted
- JV enquiry submitted
- Brochure opened/downloaded
- Floor plan opened
- Video played
- Map opened

Analytics account ownership and tracking IDs must be provided by the client.

---

# 37. Client Approval Checklist

## Business
- [ ] Company name approved
- [ ] Brand name approved
- [ ] Tagline approved
- [ ] Domain confirmed
- [ ] Address confirmed
- [ ] Phone/WhatsApp confirmed
- [ ] Working hours confirmed
- [ ] Maps location confirmed
- [ ] RERA/licences confirmed
- [ ] Launch cities/areas confirmed
- [ ] Social links confirmed

## Branding
- [ ] Logo received
- [ ] Colours received
- [ ] Fonts received
- [ ] Design references approved
- [ ] Banner direction approved
- [ ] Testimonials approved
- [ ] Blog plan approved
- [ ] Legal content approved
- [ ] Language strategy approved

## Properties
- [ ] Live inventory verified
- [ ] Sold inventory verified
- [ ] Property types confirmed
- [ ] Pricing verified
- [ ] Approval data verified
- [ ] Amenities confirmed
- [ ] Photos received
- [ ] Videos received
- [ ] Floor plans received
- [ ] Brochures received
- [ ] Featured categories approved

## Services
- [ ] Services approved
- [ ] Construction rates approved
- [ ] JV process approved
- [ ] Investor process approved
- [ ] Partner programme approved
- [ ] Careers approved

## Loans
- [ ] Banks/NBFCs approved
- [ ] Loan types approved
- [ ] Rates/fees approved
- [ ] Documents approved
- [ ] Eligibility approved
- [ ] Loan contact approved

## Operations
- [ ] Lead assignment approved
- [ ] Response SLA approved
- [ ] Site-visit workflow approved
- [ ] Property approval workflow approved
- [ ] Commission rules approved
- [ ] Lead sources approved

## Admin
- [ ] Roles approved
- [ ] Permissions approved
- [ ] Reports approved
- [ ] Existing data import approved

## Infrastructure
- [ ] Domain access
- [ ] Hosting access
- [ ] Analytics
- [ ] Search Console
- [ ] Maps
- [ ] Meta/Facebook tracking
- [ ] SMS provider
- [ ] WhatsApp provider
- [ ] Launch date
- [ ] Budget
- [ ] Final sign-off person

---

# 38. Open Questions — Must Be Collected Before Final Build

1. What is the exact registered company/brand name to display?
2. What is the official tagline?
3. What domain will be used?
4. What is the registered office address?
5. What are the official phone/WhatsApp numbers?
6. What are working hours?
7. What is the exact Google Maps location?
8. What RERA number/licences should be shown?
9. Which South Chennai areas are included at launch?
10. What are the official social URLs?
11. What are the official brand colours/fonts?
12. Which reference websites are approved?
13. Should the website be English-only or bilingual English/Tamil?
14. Which properties are currently available?
15. Which records are sold/reserved?
16. What are the correct approval statuses?
17. Which properties belong to Trending/Budget/Chennai Prime/RERA sections?
18. Will external builders/partners add listings?
19. Will resale owners directly submit properties?
20. What are the service packages and prices?
21. What are the construction rates and terms?
22. What are the JV terms?
23. What are investor terms/offers?
24. What are partner commissions?
25. What job openings should be displayed?
26. Which banks/NBFCs are official loan partners?
27. What loan rates/fees can be displayed?
28. What is the loan eligibility policy?
29. Who handles each enquiry type?
30. What is the expected lead-response time?
31. How are leads assigned?
32. What information is required for a site visit?
33. Who approves a property before publication?
34. What is the commission calculation/payment cycle?
35. Which lead sources must be tracked?
36. What admin roles are required?
37. What permissions does each role have?
38. What reports are required?
39. Is existing customer/lead data available for import?
40. Which email accounts are required?
41. Which mailbox provider is used?
42. Who receives alerts?
43. Which SMS/WhatsApp notifications are required?
44. What sender name/footer should be used?
45. Who owns hosting/domain accounts?
46. Which Google accounts are available?
47. Which SMS/WhatsApp providers are available?
48. What is the budget?
49. What is the launch date?
50. Who has final sign-off authority?

---

# 39. Implementation Priorities

## P0 — Required for first public release
- Home page
- Property listing
- Property detail pages
- Property search/filter
- Enquiry/contact
- Site-visit CTA/form
- About page
- Contact information
- Legal pages
- Mobile responsiveness
- SEO basics
- Analytics
- Verified property data
- Basic admin property management

## P1 — High-value additions
- WhatsApp integration
- Home-loan page
- Services
- Construction
- Partner programme
- Investor page
- JV page
- Testimonials
- Blog
- Lead dashboard
- Site-visit management

## P2 — Advanced experience
- Full partner/sales portal
- Advanced CRM workflow
- Commission management
- Automated notifications
- Advanced reporting
- Cinematic 3D/WebGL storytelling
- Scroll-synchronised 3D scenes
- Advanced media pipeline

---

# 40. Final Build Principles

1. **Accuracy before visual effects.**
2. **Live properties and sold properties must be clearly separated.**
3. **Internal seller/customer data must never leak into public pages.**
4. **Only client-confirmed legal, approval, pricing, and business claims should be published.**
5. **Important SEO content must remain in HTML/DOM, not only WebGL.**
6. **3D should enhance the real-estate story, not block navigation or conversion.**
7. **Mobile performance is a first-class requirement.**
8. **Property media should be optimised and lazy-loaded.**
9. **Admin permissions should follow least-privilege principles.**
10. **The current MIS should be treated as source data requiring verification, not as a final production schema.**
11. **Every major visual asset should have a consistent visual DNA and approved prompt/reference before generation.**
12. **No unsupported information should be silently filled in.**

---

## Source Notes

### Client Requirements Checklist
The checklist defines the required business, branding, property, services, loan, notification, workflow, admin, account, budget, and launch inputs. It explicitly requests property fields such as title, type, status, city, area, landmark, BHK, size, price, approval, builder, amenities, plot dimensions, media, and categorisation. It also requests workflow and admin requirements. 

### Sold Property Details
The supplied sold-property table contains 8 closed records with customer, pricing, booking/registration, seller, project, location, property, size, facing, parking, and lift information.

### Live Property MIS
The supplied live-property MIS contains current/working inventory plus internal operational fields including executive, visit, media, and social-publication readiness.

### Vintage Realtors & Promoters
The supplied company profile confirms the positioning, 4+ years of experience, 50+ customers, South Chennai focus, mission, and vision.

### 3D/WebGL Research
The supplied research recommends Three.js + GSAP ScrollTrigger + Lenis patterns, progressive enhancement, HTML fallbacks, performance budgeting, compressed assets, accessibility, and mobile fallbacks.

### Prompt Engineering Research
The supplied prompt resource recommends single-subject prompts with explicit material, geometry, composition, lighting, environment, colour, render quality, negative space, and restrictions, plus a review/approval step before image generation.
