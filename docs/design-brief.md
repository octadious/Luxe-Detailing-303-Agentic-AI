# Luxe Detailing 303 — Design & UX Brief

**Status:** Phase 2 planning document. Nothing here is implemented. This
defines the website before visual design and content begin, so decisions
get made deliberately instead of discovered mid-build.

**How to read this document:** every claim below is labeled either
**Known** (confirmed by the business/owner) or **Assumption** (a
reasonable default that needs owner sign-off before it drives real work).
Anything not explicitly known is an assumption, even if not restated every
time.

---

## Decisions locked for v1

The owner has now confirmed the items below, superseding the corresponding
"Assumption" labels elsewhere in this document. Sections are left in place
with their full reasoning for context, but these specific points are no
longer open.

| Decision | Direction |
| --- | --- |
| Primary goal | Generate qualified leads + estimates |
| Primary CTA | "Get an Instant Estimate" |
| Secondary CTA | "Book a Detail" |
| Audience priority | Luxury owners + car enthusiasts first; convenience is a secondary benefit, not a distinct primary segment |
| v1 pages | Home, Services, Ceramic Coating, Estimate/Contact |
| Gallery | Homepage section for v1; dedicated `/gallery` page later |
| AI | Planned as a core future product feature (§15); not built in this phase |
| Visuals | Real Luxe vehicle/detailing footage whenever available, supplemented by Higgsfield for cinematic supporting assets |
| Platform direction | Build Luxe first; keep architecture ready for a future multi-business platform (§15) — no multi-tenant build now |
| Current Wix site | Stays live and in production until the new site is proven ready to replace it |

Note on the secondary CTA: "Book a Detail" is decided as CTA *copy* only.
Until a real booking system exists, it routes to the same Estimate/Contact
flow as the primary CTA — see the §15 scope boundary, which still excludes
building booking functionality.

Everything not listed above (exact colors, typography, ceramic coating
tiers, exact service-area boundaries, FAQ content, certifications, etc.)
remains open — see §14.

---

## 1. Brand

**Known:**

- Name: Luxe Detailing 303
- Location: Denver, Colorado
- Service: premium mobile auto detailing
- Brand palette: black + yellow
- Positioning: luxury / enthusiast
- Service model: mobile (the business comes to the vehicle)

**Explicitly not defined yet, and not invented here:** taglines/slogans,
specific service claims, awards, testimonials/reviews, statistics,
certifications, and pricing. None of these appear anywhere in this
document or should appear in the site until the owner supplies real ones.

**Assumption:** "303" refers to the Denver area code, reinforcing local
identity — worth confirming but low-risk to treat as true for copy/tone
purposes.

---

## 2. Primary business goals

Priority order below. The top item and both CTAs are **Decided** (see
"Decisions locked for v1" above); the rest of the ordering/rationale is
still a working assumption.

1. **(Decided)** Generate qualified leads + estimates — the site's top
   job is turning visitors into contactable, quote-ready prospects.
2. **(Decided)** Primary CTA is **"Get an Instant Estimate."** Secondary
   CTA is **"Book a Detail."** Both currently route to the same
   Estimate/Contact flow (§4) — "Book a Detail" is decided as CTA copy
   now, not a signal to build real scheduling/booking yet (§15).
3. **(Assumption)** Showcase premium detailing quality — visual proof
   (vehicles, work) builds the trust a premium price point requires.
4. **(Assumption)** Explain ceramic coating specifically — likely the
   highest-value, most-differentiated service and probably deserves its
   own section/page rather than being buried in a general services list.
5. **(Assumption)** Build general trust/credibility — process
   transparency, service area clarity, professionalism cues.
6. **(Assumption)** Perform well in Denver local SEO — capture
   "mobile detailing Denver" / "ceramic coating Denver" style intent.
7. **(Assumption)** Provide an excellent mobile (device) experience —
   most local-service searches happen on phones.

**Resolved:** primary goal and CTA labels (see above). **Still needs
confirmation:** relative priority of goals 3–7, and the timing for a real
booking/scheduling system behind "Book a Detail" (§14).

---

## 3. Target audiences

**Decided:** messaging leads with luxury vehicle owners and car
enthusiasts; convenience is a secondary benefit woven into that messaging,
not a distinct primary segment or section (see "Decisions locked for v1").

- **(Decided, primary) Luxury vehicle owners** — owners of high-end cars
  who expect a service quality and presentation matching the vehicle.
- **(Decided, primary) Car enthusiasts** — people who care about paint
  condition, correction, and coatings as a hobby/identity, not just upkeep.
- **(Assumption, secondary) Ceramic-coating-curious customers** — people
  actively comparing coating vs. wax/sealant, likely need education, not
  just a sales page. Overlaps heavily with the two primary segments above.
- **(Decided, secondary framing only) Convenience** — the mobile
  service model is a benefit called out for the primary audiences above
  (e.g., busy professionals among luxury/enthusiast owners), not a
  standalone "busy professionals" segment with its own messaging track.

**Still open:** exact relative emphasis between "luxury owner" and "car
enthusiast" framing within the decided priority (they can pull messaging
in slightly different directions — e.g., concierge/prestige vs.
craft/correction quality), and whether ceramic-coating-curious visitors
need dedicated messaging or are adequately served by §4's dedicated
Ceramic Coating page.

---

## 4. Information architecture

Proposed structure, scalable but not all required for v1.

```
/                      Home
/services              Services (overview)
/services/ceramic-coating   Ceramic Coatings (dedicated, high-intent page)
/gallery                Gallery (before/after, process, vehicles)
/about                  About (business story, process, service area)
/faq                    FAQ
/contact                Contact / request an estimate (primary conversion page)
```

**v1 (Decided):** Home, Services, Ceramic Coatings, Contact/Estimate.
These cover the core "what do you do → prove it's good → let me reach
you" journey.

**Gallery (Decided):** ships as a homepage section for v1 (§5), not a
standalone page. A dedicated `/gallery` page is planned for later, once
there's enough real material (§13) to justify its own page and URL.

**Likely v2+ (assumption):** About and FAQ as standalone pages — useful
for trust and SEO, but not required to launch a functioning lead-gen
site. FAQ content could start as a section on Contact or Services instead
of its own page until there's enough content to justify it.

**Not decided:** whether Booking becomes a distinct page/flow (separate
from "request an estimate") once a booking system exists — see §10/§11.
Routing choices here should stay easy to extend (e.g., a `/services/[slug]`
pattern) so additional services can be added without restructuring the
site.

---

## 5. Homepage sections

Proposed sequence, optimized for conversion, trust, clarity, accessibility,
and SEO. This is a **sequence of purposes**, not a layout or visual design.

1. **Hero** — immediate brand identity (name, location, positioning) and
   the primary CTA, **"Get an Instant Estimate"** (Decided, §2), with
   "Book a Detail" available as the secondary action. Must convey
   "premium mobile detailing in Denver" within seconds, including to
   screen reader and low-bandwidth users (real `<h1>`, not an image of
   text).
2. **Service model / value proposition** — mobile convenience explained
   plainly: we come to you, in the Denver area. Answers "how does this
   work" before anything else.
3. **Services overview** — short, scannable summary of service categories
   with a clear path into Ceramic Coatings specifically (per goal
   priority in §2).
4. **Ceramic coating spotlight** — dedicated section elevating the
   highest-value service, linking to its own page for detail.
5. **Proof / visual storytelling** — the decided v1 home for Gallery
   content (§4): real vehicle photography/video, not stock imagery,
   sourced per the decided visuals approach in §6/§13. This is where
   "premium" gets demonstrated rather than claimed.
6. **Trust / process** — how the service works end to end (booking →
   service → result), professionalism signals. No invented certifications
   or claims — only what the business actually confirms.
7. **Service area** — Denver + surrounding area coverage, supports local
   SEO and sets expectations.
8. **FAQ preview (optional, assumption)** — 3–4 common questions,
   link to full FAQ if that page exists.
9. **Final CTA / contact** — low-friction repeat of "Get an Instant
   Estimate" (and "Book a Detail"), included because most visitors won't
   convert on the first CTA.

**Needs owner confirmation:** how much real gallery/proof content exists
at literal launch vs. how much leans on Higgsfield-generated visuals in
the interim (§6/§13/§14) — the section's *placement* is decided, its
initial *content mix* is not.

---

## 6. Visual direction

Target aesthetic: **premium automotive**, not generic SaaS/AI-startup.

- **Foundation:** predominantly black/dark backgrounds — evokes premium
  automotive detailing (showroom, night photography of cars) rather than
  a bright consumer-app feel.
- **Accent:** yellow/gold used deliberately and sparingly — for CTAs, key
  highlights, and brand moments — not as a dominant fill color. Exact hue
  to be finalized against the real logo/brand asset once available (see
  §13); treat any hex value used before then as a placeholder.
- **Imagery (Decided sourcing, §13):** high-quality vehicle
  photography/video is the primary visual language, not illustration or
  iconography — real Luxe vehicle/detailing footage whenever available,
  supplemented by Higgsfield-generated cinematic visuals where real
  footage doesn't yet exist. The site should feel like it's showing real
  work, not decorating around an absence of it.
- **Depth & motion:** subtle only — soft shadows, restrained layering.
  Depth should read as "premium product photography," not "UI panels
  floating in 3D space."
- **Typography:** premium/editorial feel — confident, clean, likely a
  strong sans-serif or a sans + serif pairing for headings vs. body.
  Specific typeface is a decision for the visual design phase, not this
  document.
- **Whitespace & hierarchy:** generous spacing, a clear single focal point
  per section, restrained number of simultaneous visual elements.

**Explicitly avoid** (per direction given): glowing gradients,
glassmorphism, floating cards everywhere, unnecessary 3D effects,
excessive motion, gimmicky animation. The test for any visual effect:
would this look at home on a premium automotive brand site, or does it
read as generic "AI-generated startup template"? If the latter, cut it.

---

## 7. Motion principles

- Motion should **support comprehension or feedback**, not decorate.
  Appropriate uses: hover/focus state feedback, subtle entrance as content
  scrolls into view (once, not repeatedly), smooth transitions between
  states (e.g., menu open/close).
- Motion should **never be required** to perceive or use content — nothing
  should be permanently hidden until an animation completes, and no
  information should exist only in a transient animated state.
- Avoid motion that competes with the content it's near — a hero over
  vehicle photography should let the photography be the "motion" (e.g., a
  slow, subtle video loop) rather than adding separate UI animation on top.
- **`prefers-reduced-motion` is a baseline requirement, not an
  enhancement.** Any non-essential animation (parallax, scroll-triggered
  motion, decorative transitions, autoplay video motion) must be disabled
  or reduced to a simple cross-fade when the user has this preference set.
  This should be established as a project-wide pattern from the first
  animated component, not retrofitted later.
- Duration/easing conventions (e.g., fast for feedback, slightly slower
  for entrances) should be defined once as shared tokens (§12) rather than
  chosen ad hoc per component.

---

## 8. Accessibility principles

Baseline requirements to build in from the start, not audit in afterward:

- **Keyboard navigation:** every interactive element (nav, CTAs, forms,
  gallery/lightbox if used) must be reachable and operable via keyboard
  alone, in a logical order.
- **Focus states:** visible, high-contrast focus indicators on all
  interactive elements — especially important against a dark UI, where
  default browser focus rings can be low-contrast or invisible.
- **Semantic HTML:** real headings (`h1`–`h3` in order), `nav`, `main`,
  `button` vs. `a` used correctly, real form labels — not div-soup with
  visual-only styling.
- **Contrast:** black + yellow is a high-contrast palette by nature, which
  helps, but yellow-on-dark and yellow-on-white combinations must still be
  checked against WCAG AA for actual text use (yellow as a large-scale
  background/accent is more forgiving than yellow as small body text).
- **Readable typography:** sufficient body text size (avoid
  undersized/thin type for the sake of "premium" minimalism), adequate
  line height, and line length.
- **Touch targets:** minimum ~44×44px tappable area for buttons/links on
  mobile, consistent with the mobile-first audience in §3.
- **Reduced motion:** see §7 — treated as an accessibility requirement,
  not a nice-to-have.
- **Alt text:** meaningful alt text on all vehicle photography once real
  assets exist; decorative images marked as such (empty alt) so screen
  readers don't announce noise.
- **Forms (estimate/contact):** clear labels (not placeholder-only
  labels), inline error messaging tied to the field via ARIA, logical tab
  order, and confirmation on submit that doesn't rely on color alone.
- **Mobile usability:** no horizontal scrolling, no content that requires
  precise/fast interaction, comfortable spacing for one-handed use.

---

## 9. SEO principles

Foundation to design for now; **no schema/structured data is written yet**
per scope.

- **Denver local SEO:** location (Denver + service area) should appear in
  real, crawlable text — page titles, headings, and body copy — not only
  in images or metadata. Location context belongs on Home and Contact at
  minimum.
- **Service-specific pages:** dedicated URLs for distinct services (e.g.,
  ceramic coating) give each service its own indexable, linkable page
  rather than burying it in one long services page — supports both SEO
  and clearer analytics later.
- **Semantic HTML:** one `h1` per page, logical heading hierarchy, real
  landmark elements — same foundation as §8, doing double duty for SEO.
- **Metadata:** every page needs a distinct, accurate `<title>` and meta
  description (the project's existing metadata template pattern in
  `src/app/layout.tsx` already supports this — no new mechanism needed).
- **Open Graph:** each page should eventually have OG title/description
  and a representative image for link previews (social shares, texts) —
  planned for when real imagery exists, not implemented yet.
- **Structured data (later):** `LocalBusiness`/`AutoDetailing`-type schema
  is a strong future candidate given the local-service model, but writing
  actual JSON-LD is out of scope for this document and should wait until
  business details (hours, service area, etc.) are confirmed and stable.
- **Internal linking:** homepage service summaries should link to their
  dedicated pages; service pages should link back to Contact — avoid
  orphaned pages.
- **Core Web Vitals:** the visual direction in §6 (real imagery/video,
  motion) directly affects this — plan for optimized image formats,
  deliberate video loading strategy (no heavy autoplay video blocking
  first paint), and avoiding layout shift from late-loading media.
- **Crawlability:** clean, human-readable URLs (`/services/ceramic-coating`,
  not query-string routes), a sitemap and `robots.txt` once the site has
  real pages to index — not needed while the homepage is still a
  placeholder under `noindex` (current state).
- **Image optimization:** plan to use Next.js's built-in image handling
  for real photography once assets exist, rather than raw `<img>` tags,
  to get responsive sizing and lazy loading by default.

---

## 10. Future AI architecture (conceptual only)

**Decided:** AI assistance is planned as a core future product feature —
not a nice-to-have bolt-on — and feeds directly into the broader platform
direction in §15. It is still **not built in this phase**: no
implementation, no packages, no integrations. This section remains a map
of where AI could plug in later, so the IA/content decisions above don't
accidentally foreclose it.

- **AI Detail Advisor:** a conversational helper that asks about a
  vehicle's condition/type and explains which service (or ceramic coating
  tier, if tiers exist) fits — essentially a guided version of the
  Services/Ceramic Coatings content in §4–5. Would consume the same
  service descriptions that power the static pages, not a separate
  content source.
- **AI vehicle estimate flow:** a structured intake (vehicle type, size,
  condition, desired service) that produces a rough estimate range or
  routes to a human for a firm quote. This is the natural evolution of the
  "request an estimate" CTA in §5/§2, not a replacement for it.
- **Lead qualification:** using intake answers (vehicle type, location,
  urgency, budget signals) to prioritize/route leads before a human
  follows up — sits behind the same contact/estimate form, not a new
  entry point.
- **Automated follow-up:** reminders/nurture messages for estimate
  requests that go cold, or post-service follow-up — depends on having
  real lead/customer data (§11) to act on.
- **Booking assistance:** an AI layer that helps a customer pick a time
  and confirm mobile-service logistics (address, access, vehicle
  location) — sits on top of a future booking system, not a replacement
  for one.

Common thread: every AI feature above is an **enhancement layer on top of
content and data that already needs to exist for the non-AI site** (real
service descriptions, a real contact/estimate flow, real lead records).
Building those foundations well now is what makes this layer addable later
without rework.

---

## 11. Future data architecture (conceptual only)

No database, schema, or persistence is implemented at this stage. Entities
that will likely need to exist eventually:

- **Leads** — raw inbound interest (estimate requests, contact form
  submissions) before qualification, including source/campaign context.
- **Customers** — a converted lead once they've booked at least once;
  contact info, service history.
- **Vehicles** — associated with a customer; make/model/size/condition,
  since pricing and time-on-site likely depend on vehicle type.
- **Services** — the canonical list of offerings (including ceramic
  coating tiers if they exist), which should back both the static
  Services/Ceramic Coating pages and any future estimate/booking flow, so
  content and business logic don't drift apart.
- **Estimates** — a quote tied to a lead/customer + vehicle + requested
  service(s), with status (pending, sent, accepted, expired).
- **Appointments** — a scheduled, confirmed booking tied to an accepted
  estimate (or a direct booking, if that path exists); includes the mobile
  service address/location, not just a time slot.
- **Conversations** — any AI-assisted or human message thread tied to a
  lead/customer (advisor chats, follow-ups, booking coordination) — kept
  as its own entity so it can reference leads/customers/estimates without
  being embedded inside them.

---

## 12. Design-system planning

Proposed **structure** for future design tokens — categories and intent
only. Values below are explicitly placeholders, not final decisions, and
are marked as such.

- **Colors:** a small palette built around the two known brand colors —
  a `background`/`surface` scale in black/near-black, a single `accent`
  (yellow/gold, exact value TBD against real brand assets), plus
  `foreground`/text colors with confirmed AA contrast on dark backgrounds,
  and standard `success`/`error`/`warning` for form feedback. *(Proposal
  only — no hex values are being fixed here.)*
- **Typography:** a small type scale (e.g., display/h1/h2/h3/body/small)
  with one heading family and one body family — exact families are a
  visual-design decision, not this document's.
- **Spacing:** a consistent scale (e.g., 4px-based increments) reused
  across margin/padding/gaps, matching the "strong whitespace" direction
  in §6.
- **Radii:** likely small-to-none for a premium/automotive feel (sharp,
  confident shapes) rather than heavily rounded "app-like" corners —
  *proposal*, to be validated visually.
- **Shadows:** minimal, soft, used for subtle separation (e.g., sticky
  nav over content) rather than card-heavy elevation — consistent with
  avoiding "floating cards everywhere" in §6.
- **Motion tokens:** a couple of shared durations/easings (fast for
  feedback, moderate for entrances) plus the reduced-motion fallback
  described in §7, defined once and reused rather than per-component.
- **Breakpoints:** standard mobile-first responsive set (mobile → tablet
  → desktop), matching the "excellent mobile experience" priority in §2/§8.

This section defines *categories the system will need*, not the values —
those get set when visual design starts, informed by real brand assets.

---

## 13. Asset strategy

What the site will eventually need, and what kind of asset each is —
**nothing here is being generated yet**:

- **Photography:** real vehicles, real work (before/after, in-progress
  detailing), ideally shot specifically for this brand rather than stock —
  stock automotive photography tends to undercut the "premium, real work"
  positioning in §6.
- **Video:** short, high-quality loops or clips (e.g., hero background,
  process highlights) — supports the "visual storytelling" goal in §5
  without relying on autoplay motion that hurts performance/accessibility
  (§7, §9).
- **Generated visuals (Decided workflow, not yet executed):** where real
  photography/video isn't yet available, **Higgsfield** produces original
  cinematic-style supporting visuals, directed by the art direction in
  §6 — not generated ad hoc or "make it look cool." The intended division
  of labor: Claude builds the actual website/UI; Higgsfield generates
  specific cinematic assets against that art direction; the owner
  supplies real Luxe vehicle/detailing footage whenever available; the
  owner then reviews the result and directs what gets built/generated
  next. Nothing is being generated as part of this document — this is
  the agreed process for when asset generation starts.
- **Logo:** the current black+yellow brand direction is known, but no
  finalized logo file is confirmed as part of this task — needed before
  final visual design locks in the accent color and typography pairing.
- **Icons:** a small, consistent icon set (likely outline-style, matching
  a premium/restrained aesthetic) for service categories, contact
  methods, and UI affordances — to be sourced/chosen during visual design.
- **UI graphics:** any supporting graphic elements (dividers, background
  textures) should stay minimal and in service of the automotive/premium
  direction in §6, not decorative for its own sake.

---

## 14. Open questions for owner confirmation

Items previously listed here that are now settled (primary goal/CTA
labels, audience priority, v1 page set, gallery placement, AI's product
status, visuals sourcing approach, platform direction, Wix cutover
approach) have moved to "Decisions locked for v1" at the top of this
document and are not repeated below. What remains open, to confirm before
final visual implementation begins:

1. Is a real booking/scheduling system needed soon after launch, or does
   "Book a Detail" route to the Estimate/Contact flow indefinitely for
   v1? (§2, §15)
2. Is there a finalized logo file, and exact brand color values, or should
   visual design proceed from the black+yellow direction and propose
   exact values for approval? (§6, §12, §13)
3. Does ceramic coating have distinct tiers/packages, or is it a single
   offering for messaging purposes? (Affects §4/§5 structure and the
   future estimate flow in §10, without implying pricing is displayed.)
4. What is the actual service area beyond "Denver" — specific
   neighborhoods/suburbs/radius — for local SEO content? (§9)
5. How much real gallery/proof content (photo/video) exists at literal
   launch vs. how much should lean on Higgsfield-generated visuals in the
   interim, and when does a dedicated `/gallery` page become worth
   building? (§4, §5, §13)
6. When do About and FAQ become standalone pages, and if FAQ ships early,
   does the business have real, common questions to source it from
   (rather than invented ones)? (§4, §5)
7. Any existing certifications, product-brand affiliations (e.g., a
   specific ceramic coating product line), or credentials the business
   wants represented — none are assumed or included anywhere in this
   document, but if they exist they should inform IA/content later. (§1)
8. What does "proven ready to replace the Wix site" mean in practice —
   e.g., feature/content parity, stakeholder sign-off, an SEO migration
   plan for the domain switch — so there's a clear cutover trigger rather
   than an indefinite dual-run? (Decisions locked)
9. Which future business model(s) from §15 are actually being pursued
   (subscription, lead-gen service, hybrid, etc.)? Explicitly not decided
   now — listed here as a marker that it will need revisiting, not as a
   near-term blocker.

---

## 15. Future Product Direction — Detailing Business Platform

Luxe Detailing 303 is the first implementation of a longer-term product
vision (Decided platform direction — see "Decisions locked for v1"). The
eventual product may become a reusable software platform for automotive
detailing businesses. Nothing in this section is being built now — it
exists so today's architecture choices don't quietly foreclose it.

**Potential future capabilities** (conceptual only, none implemented):

- AI-powered customer assistance
- Vehicle/service intake
- Photo-assisted estimate requests
- Lead qualification
- Lead CRM
- Customer and vehicle records
- Appointment booking
- Automated follow-up
- Service management
- Analytics
- Business dashboard
- Multi-location support
- Business-specific website configuration
- Customizable branding

### Architectural principle

The current application should remain a Luxe Detailing 303 website, not a
generic SaaS application. However, reusable UI and business logic should
be structured so a future multi-business architecture is possible without
rewriting the entire frontend.

**Avoid:**

- Hardcoding Luxe-specific content into reusable components
- Making assumptions that there will always be only one business
- Coupling visual components directly to future database structures
- Prematurely implementing multi-tenancy

**Prefer:**

- Reusable components
- Data-driven rendering where appropriate
- Centralized business configuration
- Clean separation between presentation and business data
- Clear boundaries for future API/database integrations

### Future business model possibilities

Documented, without implementing, as possibilities the eventual platform
could support:

1. SaaS subscription for detailing businesses.
2. Website + AI lead-generation service.
3. Qualified lead generation / lead-routing model.
4. Hybrid subscription + lead-generation model.

No business-model decision is being made now (see §14, open question 9).

### Future tenant concept

Conceptually, a future business could have its own:

```
Business
 ├── Branding
 ├── Services
 ├── Pricing
 ├── Service Areas
 ├── Gallery
 ├── Leads
 ├── Customers
 ├── Vehicles
 ├── Estimates
 ├── Appointments
 └── AI Settings
```

This is a future architecture concept only — not a database schema, and
not something being built now.

### Current scope boundary

The current project remains: **Luxe Detailing 303 marketing website +
future conversion/AI foundation.**

Do not implement, until explicitly instructed:

- Supabase
- Authentication
- Payments
- Booking
- CRM
- AI
- Multi-tenancy
- Lead routing
- Analytics
