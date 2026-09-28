# Product


## Platform

web

## Users

- Parents of children and adolescents in and around Modena who notice emotional, behavioural, attention, executive-function or school difficulties (with or without an ADHD/autism diagnosis) and are looking for a concrete, individualised path.
- Adults who recently received a diagnosis of ADHD, autism, AuDHD or giftedness and want post-diagnostic psychoeducation, often online from anywhere in Italy.
- Secondary: adults and young adults seeking psychological support; people in a pre/post bariatric-surgery path; older adults (or their families) interested in cognitive wellbeing in physiological ageing.
- They usually arrive from Google (local and topical searches) or Instagram, often on mobile, often worried, and need to understand quickly whether this psychologist fits their situation and how to get in touch.

## Product Purpose

The professional website of Dott.ssa Giulia Boccolari, Psicologa (Albo Psicologi Emilia-Romagna n. 12922 A), in Modena and online. It must make clear that she works in a particularly concrete, operative way with children, adolescents and families, while keeping adult neurodivergence psychoeducation and psychological support visible. Success: a visitor understands her areas and method, trusts her professionalism, and requests a first conversation.

## Positioning

"Comprendere il funzionamento. Costruire strumenti. Favorire cambiamenti concreti." The work is individualised and goal-oriented: understand the need, observe functioning, define observable goals, build activities and tools (games, visual materials, worksheets, exercises), involve parents/school/educators, and verify over time what changes. The thread that joins prior psychoeducational/behaviour-analytic experience with ongoing systemic-relational training.

## Operating Context

- Studio at Via Vignolese 1109, Corte dei Pini, Modena; in-person and online sessions. "In presenza a Modena + online" must always be visible.
- Path with children: SCOPRIRE/COMPRENDERE → OSSERVARE → DEFINIRE OBIETTIVI → INTERVENIRE → GENERALIZZARE → VERIFICARE (the brief asks for this sequence to be graphically evident).
- Contact via email giulia.boccolari@gmail.com, phone 342 9238516, Instagram @giuliaboccolari.psicologa, and a contact form (name, email/phone, age band, reason, in-person/online preference, privacy consent).

## Capabilities and Constraints

- React + TypeScript + Vite + Tailwind CSS v4 + React Router SPA; 100% static, built with `npm run build`, hosted on Hostinger shared hosting. No backend.
- Routes are fixed and must not change: `/`, `/chi-sono`, `/come-lavoro`, `/eta-evolutiva`, `/neurodivergenze-adulti`, `/invecchiamento-attivo`, `/supporto-psicologico`, `/bariatrica`, `/risorse`, `/risorse/:slug` (13 articles in `src/data/articles.ts`), `/contatti`, `/privacy`, `/cookie`.
- No content text may be rewritten, summarised or rephrased (pages, articles, footer). Only markup/structure may change.
- Information architecture (which sections exist and their order) stays; presentation is free.
- One H1 per page; per-page SEO title/description; descriptive alt text; mobile-first.
- Hierarchy: età evolutiva is the primary visual focus; adult neurodivergence second; supporto psicologico, bariatrica and invecchiamento attivo present with authority but graphically secondary.

## Brand Commitments

- Fixed palette from the client's brief: salvia #A8B7A1, terracotta #C8795A, rosa antico #CFA7A0, crema #F6F0E8, antracite #3E4541. Usage and proportion may be reinterpreted; the palette may not be replaced.
- Tone: "caldo, naturale, pulito, contemporaneo — professionale ma non sanitario o freddo".
- Logo: the client's line drawing of two facing profiles forming a brain (`src/assets/logo-giulia.png`, cropped from `Giulia Boccolari/bozzasito/LOGO.png`) is shown in the header by explicit user decision (2026-09-28); it is the one allowed exception to the brain-imagery ban.
- Style preference (user, 2026-09-28): serious, traditional, institutional; fixed rectilinear shapes, nothing caricatural.
- Banned: brain icons (other than the client logo), puzzle pieces, hands on head, therapy couches, over-dramatic/emotional stock photos, cartoon or childish icons. Icons, when used, are linear.
- Deontology: use "Psicologa"; never "Psicoterapeuta", "Analista del comportamento", "Terapia ABA" as a current service, "diagnosi completa", or neuropsychology terms as offered services; no promises of results. Assessment is "Valutazione del funzionamento e progettazione dell'intervento". Ongoing training is stated as ongoing; IESCUM master "a gennaio 2027 è previsto l'inizio".

## Evidence on Hand

- One real professional photo of Giulia: `src/assets/foto-giulia.jpg` (duplicate in `src/assets/images/`). Logo: `src/assets/logo.svg`.
- No studio, materials or workspace photos yet (the brief asks for 2–3 later). Do not use stock imagery; leave clearly marked places for future studio photos.
- No testimonials, reviews, patient numbers or outcome statistics exist; none may be invented.
- Client brief: `C:\Users\Usuário\Desktop\Giulia Boccolari\Brief_sito_Giulia_Boccolari_PT-BR.pdf`.

## Product Principles

1. Concreteness over reassurance: show the method and the tools, not generic calm.
2. Children and families first, adults clearly served.
3. Say only what is verifiable today; separate current practice from ongoing training.
4. Every page leads calmly to a first conversation, in person in Modena or online.
5. A site that grows: blog and service pages must extend without redesign.

## Accessibility & Inclusion

Audience includes neurodivergent adults and worried parents: high legibility, calm motion (respect `prefers-reduced-motion`), clear focus states, WCAG AA contrast, no sensory overload.
