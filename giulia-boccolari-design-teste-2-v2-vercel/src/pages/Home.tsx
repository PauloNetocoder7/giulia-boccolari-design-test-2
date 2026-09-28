import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Plaque, Door, BayHeading, ClosingDoor } from '../components/Portico';
import fotoGiulia from '../assets/foto-giulia.jpg';

const METHOD_FLOOR = ['COMPRENDERE', 'OSSERVARE', 'DEFINIRE OBIETTIVI', 'INTERVENIRE', 'GENERALIZZARE', 'VERIFICARE'];

export const Home: React.FC = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://giuliaboccolaripsicologa.it/#business',
    name: 'Dott.ssa Giulia Boccolari – Psicologa',
    image: 'https://giuliaboccolaripsicologa.it/favicon.svg',
    url: 'https://giuliaboccolaripsicologa.it/',
    telephone: '+393429238516',
    email: 'giulia.boccolari@gmail.com',
    priceRange: '€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Via Vignolese 1109, Corte dei Pini',
      addressLocality: 'Modena',
      addressRegion: 'MO',
      postalCode: '41125',
      addressCountry: 'IT',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '44.629',
      longitude: '10.952',
    },
    description:
      'Dott.ssa Giulia Boccolari, Psicologa a Modena e online. Età evolutiva, neurodivergenze (ADHD, autismo) e supporto psicologico.',
  };

  return (
    <>
      <SEO
        title="Dott.ssa Giulia Boccolari – Psicologa Modena | Età Evolutiva e Neurodivergenze"
        description="Psicologa a Modena e online. Età evolutiva, neurodivergenze e supporto psicologico. Comprendere il funzionamento. Costruire strumenti. Favorire cambiamenti concreti."
        keywords={[
          'psicologa Modena',
          'psicologa online',
          'età evolutiva',
          'neurodivergenze',
          'psicologa bambini Modena',
        ]}
        jsonLd={jsonLd}
      />

      {/* ============ FACADE: the first viewport ============ */}
      <section className="plaster-rosa limewash overflow-hidden">
        <div className="portico pt-10 sm:pt-14 pb-12 sm:pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-start">
            <div className="lg:col-span-7 xl:col-span-7 space-y-6">
              <h1 className="text-ferro">
                <span className="block font-display text-[1.1rem] sm:text-[1.25rem] leading-snug font-medium">
                  Dott.ssa Giulia Boccolari – Psicologa —
                </span>{' '}
                <span className="block display-xxl mt-2">
                  Età evolutiva, neurodivergenze e supporto psicologico
                </span>
              </h1>

              <p className="font-display italic text-[1.1rem] sm:text-[1.2rem] leading-snug max-w-2xl pt-5 border-t border-ferro/40">
                "Comprendere il funzionamento. Costruire strumenti. Favorire cambiamenti concreti."
              </p>

              <p className="lede text-ferro">
                Lavoro con bambini, ragazzi, adulti e famiglie attraverso percorsi costruiti sul funzionamento individuale, sulle emozioni, sui comportamenti e sui contesti di vita. L'obiettivo è trasformare la comprensione di ciò che accade in strategie e strumenti utilizzabili nella quotidianità.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Door to="/come-lavoro" tone="iron">
                  SCOPRI COME LAVORO
                </Door>
                <Door to="/contatti" tone="terra">
                  CONTATTAMI
                </Door>
              </div>
            </div>

            {/* Giulia's portrait in a plain frame */}
            <div className="lg:col-span-5 xl:col-span-5 lg:order-first relative flex justify-start">
              <figure className="relative w-full max-w-[25rem]">
                <div className="arch-frame">
                  <div className="aspect-[4/5] bg-crema overflow-hidden">
                    <img
                      src={fotoGiulia}
                      alt="Dott.ssa Giulia Boccolari, Psicologa a Modena in studio"
                      className="w-full h-full object-cover object-center"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Street plaque pinned to the pillar */}
                <div className="plaque relative mt-3 w-full !gap-1.5 !px-4 !py-3.5">
                  <span className="font-display italic text-[1.05rem] leading-tight">
                    Psicologa a Modena e online
                  </span>
                  <span className="civic !text-[0.7rem]">IN PRESENZA A MODENA + ONLINE</span>
                  <span className="text-[0.78rem] leading-snug text-antracite-soft">
                    Albo Psicologi Emilia-Romagna n. 12922 A
                  </span>
                </div>

                <figcaption className="pt-3 text-[0.82rem] text-ferro/80">
                  Dott.ssa Giulia Boccolari · Studio in Via Vignolese 1109, Modena
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        {/* The floor of the portico: the method, laid as paving that leads inside */}
        <Link
          to="/come-lavoro"
          className="group block plaster-ferro border-t-[6px] border-terracotta"
        >
          <div className="portico py-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            {METHOD_FLOOR.map((word, i) => (
              <React.Fragment key={word}>
                <span className="civic !text-[0.7rem] sm:!text-[0.74rem] text-crema group-hover:text-marmo">
                  {word}
                </span>
                {i < METHOD_FLOOR.length - 1 && (
                  <ArrowRight className="w-3.5 h-3.5 text-terracotta shrink-0" aria-hidden="true" />
                )}
              </React.Fragment>
            ))}
          </div>
        </Link>
      </section>

      {/* ============ COME POSSO AIUTARTI: hierarchy said by type size ============ */}
      <section className="plaster-crema">
        <div className="portico pt-16 sm:pt-20 pb-10">
          <BayHeading plaque="Aree di intervento" title="Come posso aiutarti?">
            <p className="lede text-antracite">
              Percorsi costruiti sul funzionamento individuale e sui contesti quotidiani.
            </p>
          </BayHeading>
        </div>

        {/* 1. Bambini e ragazzi — the main door */}
        <div className="portico">
          <div className="plaster-salvia limewash px-6 sm:px-10 py-10 sm:py-12">
            <div className="max-w-3xl space-y-5">
              <Plaque quiet>Focus Principale</Plaque>
              <h3 className="display-l text-ferro">Bambini e ragazzi</h3>
              <p className="lede text-ferro">
                Percorsi individualizzati su regolazione emotiva, comportamento, problem solving, funzioni esecutive, autonomie, abilità sociali, scuola e neurodivergenze.
              </p>
              <Link to="/eta-evolutiva" className="walk text-ferro">
                <span>Scopri il percorso per bambini e ragazzi</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2–3. Second rank: two bays */}
        <div className="portico">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-ferro/25">
            <div className="py-10 sm:py-12 md:pr-10 space-y-4 border-b md:border-b-0 md:border-r border-ferro/25">
              <h3 className="display-m text-ferro">Genitori e famiglia</h3>
              <p className="text-antracite measure">
                Supporto alla comprensione dei comportamenti, costruzione di strategie condivise e raccordo con la scuola quando utile.
              </p>
              <Link to="/eta-evolutiva#genitori-rete" className="walk text-salvia-deep">
                <span>Approfondisci il lavoro con la rete</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="py-10 sm:py-12 md:pl-10 space-y-4">
              <h3 className="display-m text-ferro">Neurodivergenze nell'adulto</h3>
              <p className="text-antracite measure">
                Psicoeducazione dopo una diagnosi di ADHD, autismo, AuDHD o plusdotazione: comprendere il proprio funzionamento e costruire strumenti per la vita quotidiana.
              </p>
              <Link to="/neurodivergenze-adulti" className="walk text-terracotta-deep">
                <span>Scopri la psicoeducazione adulti</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4–6. Third rank: the undercard, ruled rows */}
        <div className="portico pb-20 sm:pb-28">
          <div className="ruled [&>*:first-child]:border-t-0">
            {[
              {
                title: 'Supporto psicologico',
                text: 'Uno spazio per comprendere emozioni, relazioni, momenti di cambiamento, sovraccarico e difficoltà personali.',
                to: '/supporto-psicologico',
                link: 'Approfondisci il supporto psicologico',
              },
              {
                title: 'Corpo e percorsi bariatrici',
                text: "Supporto psicologico orientato all'integrazione corpo-mente, con particolare attenzione ai cambiamenti legati al percorso bariatrico e al comportamento alimentare.",
                to: '/bariatrica',
                link: 'Approfondisci il percorso bariatrico',
              },
              {
                title: 'Benessere cognitivo e invecchiamento attivo',
                text: "Percorsi individuali o di gruppo per sostenere memoria, attenzione, linguaggio, ragionamento, organizzazione della quotidianità, autonomie e partecipazione sociale nell'invecchiamento fisiologico.",
                to: '/invecchiamento-attivo',
                link: 'Approfondisci il benessere cognitivo',
              },
            ].map((row) => (
              <div key={row.to} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-3 py-8">
                <h3 className="display-s text-ferro md:pr-10">{row.title}</h3>
                <div className="space-y-3">
                  <p className="text-[0.98rem] text-antracite measure">{row.text}</p>
                  <Link to={row.to} className="walk text-salvia-deep text-[0.9rem]">
                    <span>{row.link}</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IDENTITY: the two questions ============ */}
      <section className="plaster-terracotta limewash">
        <div className="portico py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 items-start">
          <h2 className="display-l text-marmo lg:pr-6">
            Non solo "perché succede?", ma anche "cosa possiamo costruire da qui?"
          </h2>
          <div className="space-y-7">
            <p className="text-[1.08rem] leading-relaxed text-crema">
              Il mio lavoro unisce comprensione psicologica, psicoeducazione e strumenti concreti. Con bambini e ragazzi questo può significare utilizzare attività, giochi, materiali visivi, esercizi e strategie costruite su obiettivi specifici, coinvolgendo i genitori e, quando necessario, la scuola.
            </p>
            <Door to="/come-lavoro" tone="marble">
              Approfondisci il metodo di lavoro
            </Door>
          </div>
        </div>
      </section>

      {/* ============ IN PRESENZA E ONLINE ============ */}
      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-8 items-start">
          <div className="space-y-4">
            <Plaque quiet>In presenza e online</Plaque>
            <h3 className="display-l text-ferro">Ricevo in studio a Modena e a distanza</h3>
          </div>
          <div className="space-y-7 lg:pt-11">
            <p className="text-[1.05rem] text-ferro measure">
              Ricevo in studio a Modena. I percorsi di supporto psicologico, gli incontri con i genitori e la psicoeducazione nelle neurodivergenze adulte possono essere svolti anche online, quando appropriato al tipo di intervento.
            </p>
            <Door to="/contatti" tone="iron">
              Richiedi informazioni
            </Door>
          </div>
        </div>
      </section>

      {/* ============ AUTOREVOLEZZA SOBRIA ============ */}
      <section className="plaster-crema">
        <div className="portico py-16 sm:py-20">
          <div className="space-y-8">
            <h3 className="civic text-salvia-deep !text-[0.78rem] pb-4 border-b border-ferro/25">
              Formazione e Riferimenti Professionali
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="py-5 md:py-0 md:pr-8 space-y-2 border-t md:border-t-0 border-ferro/25">
                <p className="display-s text-ferro">Iscrizione all'Albo</p>
                <p className="text-[0.95rem] text-antracite">Iscritta all'Albo degli Psicologi dell'Emilia-Romagna n. 12922 A.</p>
              </div>
              <div className="py-5 md:py-0 md:px-8 space-y-2 border-t md:border-t-0 md:border-l border-ferro/25">
                <p className="display-s text-ferro">Specializzazione in corso</p>
                <p className="text-[0.95rem] text-antracite">Scuola di Specializzazione in Psicoterapia Sistemico-Relazionale presso ISCRA Modena.</p>
              </div>
              <div className="py-5 md:py-0 md:pl-8 space-y-2 border-t md:border-t-0 md:border-l border-ferro/25">
                <p className="display-s text-ferro">Esperienza sul campo</p>
                <p className="text-[0.95rem] text-antracite">Esperienza consolidata in età evolutiva e in ambito ospedaliero (Ospedale Civile di Baggiovara).</p>
              </div>
            </div>
          </div>
          <div className="pt-10">
            <Link to="/chi-sono" className="walk text-terracotta-deep">
              <span>Leggi il mio percorso professionale completo</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ CTA FINALE: the doorway ============ */}
      <ClosingDoor
        plaster="rosa"
        title="Hai una domanda sul percorso più adatto?"
        actions={
          <Door to="/contatti" tone="terra">
            Richiedi un primo colloquio
          </Door>
        }
      >
        <p>Contattami per un primo confronto. Valuteremo insieme le tue esigenze e le modalità più opportune.</p>
      </ClosingDoor>
    </>
  );
};
