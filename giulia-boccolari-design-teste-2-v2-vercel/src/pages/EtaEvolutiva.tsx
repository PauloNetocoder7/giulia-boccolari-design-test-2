import React from 'react';
import { SEO } from '../components/SEO';
import { MethodTimeline } from '../components/MethodTimeline';
import { PageFacade, BayHeading, Plaque, Door } from '../components/Portico';

const ANCHORS = [
  { href: '#emozioni', label: 'Regolazione emotiva' },
  { href: '#comportamento', label: 'Comportamento & Problem solving' },
  { href: '#adhd-autismo', label: 'ADHD e autismo' },
  { href: '#funzioni-esecutive', label: 'Funzioni esecutive & Scuola' },
  { href: '#valutazione', label: 'Valutazione del funzionamento' },
  { href: '#genitori-scuola', label: 'Genitori e scuola' },
];

/* One bay of the "ambiti" arcade: title on the left pillar, text and tools on the right */
const Ambito: React.FC<{
  id: string;
  title: string;
  text: string;
  tools: React.ReactNode;
  toolsId?: string;
}> = ({ id, title, text, tools, toolsId }) => (
  <div id={id} className="scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4 py-10 sm:py-12">
    <h3 className="lg:col-span-5 display-m text-ferro">{title}</h3>
    <div className="lg:col-span-7 space-y-4">
      <p className="text-[1.05rem] text-antracite measure">{text}</p>
      <p id={toolsId} className="flex items-baseline gap-3 text-[0.92rem] font-bold text-salvia-deep">
        <span className="tick text-salvia" aria-hidden="true" />
        <span>{tools}</span>
      </p>
    </div>
  </div>
);

export const EtaEvolutiva: React.FC = () => {
  return (
    <>
      <SEO
        title="Età Evolutiva – Percorsi per Bambini e Ragazzi | Dott.ssa Giulia Boccolari"
        description="Psicologa bambini e ragazzi a Modena e online. Percorsi concreti su regolazione emotiva, comportamento, funzioni esecutive, ADHD, autismo e supporto genitori."
        keywords={[
          'psicologa bambini Modena',
          'regolazione emotiva bambini',
          'comportamento bambini',
          'ADHD bambini Modena',
          'autismo età evolutiva',
          'funzioni esecutive bambini',
        ]}
      />

      <PageFacade
        plaster="salvia"
        plaque="Focus di intervento prioritario"
        title="Capire cosa comunica un comportamento e costruire nuove possibilità."
        aside={
          <nav aria-label="In questa pagina" className="w-full">
            <ul className="ruled w-full">
              {ANCHORS.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    className="flex items-baseline gap-3 py-2.5 text-[0.98rem] font-bold text-ferro hover:text-terracotta-ink transition-colors"
                  >
                    <span className="tick text-ferro/60" aria-hidden="true" />
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
      >
        <p className="text-ferro">
          Il lavoro con bambini e ragazzi non si limita al colloquio. In base all'età e al funzionamento individuale utilizzo attività, giochi, materiali visivi, esercizi e strategie per lavorare in modo concreto sugli obiettivi concordati con la famiglia.
        </p>
      </PageFacade>

      {/* The method, walked as an arcade */}
      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="La direzione dell'intervento" title="Un percorso chiaro, sequenziale e condiviso" />
          <MethodTimeline variant="pills" startWith="osservare" />
        </div>
      </section>

      {/* Ambiti di lavoro */}
      <section className="plaster-crema">
        <div className="portico pb-10">
          <BayHeading plaque="Ambiti di lavoro" title="Come si declina il lavoro con bambini e ragazzi" className="pb-8" />

          <div className="ruled">
            <Ambito
              id="emozioni"
              title="Emozioni e regolazione emotiva"
              text="Riconoscere e nominare le emozioni, comprendere i segnali corporei, aumentare la tolleranza alla frustrazione, costruire strategie per affrontare rabbia, ansia, sovraccarico e momenti di crisi."
              tools="Strumenti visivi, termometri emotivi, attività pratiche di autoregolazione"
            />
            <Ambito
              id="comportamento"
              title="Comportamento e problem solving"
              text="Comprendere quando, dove e perché un comportamento emerge; individuare antecedenti, bisogni e conseguenze; costruire comportamenti alternativi e strategie di problem solving più efficaci."
              tools="Analisi funzionale, rinforzo positivo e strategie alternative"
            />
          </div>
        </div>

        {/* ADHD e autismo: the widest bay, on sage plaster */}
        <div className="portico">
          <div
            id="adhd-autismo"
            className="scroll-mt-28 plaster-salvia limewash grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 px-6 sm:px-10 lg:px-14 py-12 sm:py-16"
          >
            <div className="lg:col-span-5 space-y-5">
              <Plaque quiet>Neurosviluppo & Neurodivergenze</Plaque>
              <h3 className="display-l text-ferro">ADHD, autismo e neurodivergenze</h3>
            </div>
            <div className="lg:col-span-7 space-y-6">
              <p className="text-[1.08rem] text-ferro measure">
                Percorsi psicoeducativi e di supporto rivolti a bambini e ragazzi neurodivergenti, costruiti sul profilo individuale e non soltanto sull'etichetta diagnostica. Il lavoro può riguardare regolazione emotiva, flessibilità, attenzione, impulsività, autonomie, abilità sociali e gestione della quotidianità.
              </p>
              <ul className="ruled text-[0.98rem] font-bold text-ferro">
                <li className="py-2.5 flex items-baseline gap-3"><span className="tick" aria-hidden="true" />Comprensione del profilo cognitivo</li>
                <li className="py-2.5 flex items-baseline gap-3"><span className="tick" aria-hidden="true" />Gestione dell'energia e delle pause</li>
                <li className="py-2.5 flex items-baseline gap-3"><span className="tick" aria-hidden="true" />Adattamenti ambientali e visivi</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="portico pb-16 sm:pb-24">
          <div className="ruled [&>*:first-child]:border-t-0">
            <Ambito
              id="funzioni-esecutive"
              title="Funzioni esecutive e scuola"
              text="Attività su pianificazione, memoria di lavoro, inibizione, flessibilità cognitiva, organizzazione, gestione del tempo, avvio del compito e strategie per affrontare le richieste scolastiche."
              tools="Strumenti pratici per lo studio e la gestione dei compiti a casa"
            />
            <Ambito
              id="autonomie"
              title="Autonomie e competenze quotidiane"
              text="Obiettivi costruiti sulle esigenze reali del bambino: routine, autonomie personali, capacità di chiedere aiuto, gestione dei passaggi, organizzazione e competenze utili nei diversi contesti di vita."
              tools="Supporti visivi per le routine e le transizioni"
            />
            <Ambito
              id="genitori-scuola"
              title="Genitori e scuola"
              text="I genitori fanno parte del percorso. Quando utile, vengono condivise strategie da utilizzare a casa e, con il consenso della famiglia, è possibile confrontarsi con la scuola per favorire coerenza tra i diversi contesti."
              tools="Punto di riferimento costante per la famiglia e il team scolastico"
              toolsId="genitori-rete"
            />
          </div>
        </div>
      </section>

      {/* Valutazione del funzionamento e progettazione dell'intervento */}
      <section id="valutazione" className="scroll-mt-24 plaster-rosa limewash">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Fase iniziale fondamentale" title="Valutazione del funzionamento e progettazione dell'intervento" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-20 gap-y-5 text-[1.05rem] text-ferro">
            <p className="lg:col-span-6">
              Prima di costruire un intervento è importante comprendere il bambino nella sua globalità: punti di forza, difficoltà, modalità di regolazione emotiva e comportamentale, autonomie, funzioni esecutive, relazioni e funzionamento nei diversi contesti di vita.
            </p>
            <p className="lg:col-span-6">
              Per questo, quando necessario, il percorso può iniziare con una fase di osservazione e valutazione psicologica e funzionale finalizzata a individuare i bisogni prioritari e a definire obiettivi di lavoro concreti e monitorabili. Può riguardare bambini e adolescenti con ADHD, autismo o altri profili del neurosviluppo, ma anche bambini senza una diagnosi che presentano difficoltà emotive, comportamentali, relazionali, nelle autonomie o nelle funzioni esecutive.
            </p>
          </div>
        </div>
      </section>

      {/* Una presa in carico che coinvolge i contesti */}
      <section id="collaborazione" className="scroll-mt-24 plaster-terracotta limewash">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-6 space-y-5">
            <Plaque quiet>Raccordo multidisciplinare</Plaque>
            <h2 className="display-l text-marmo">Una presa in carico che coinvolge i contesti</h2>
          </div>
          <div className="lg:col-span-6 space-y-7">
            <p className="text-[1.05rem] text-crema measure">
              Il bambino non viene considerato soltanto all'interno della stanza di terapia. Quando utile e previo consenso della famiglia, il lavoro può prevedere il confronto con genitori, insegnanti, educatrici e altri professionisti coinvolti. L'obiettivo è costruire una comprensione condivisa del funzionamento e tradurla in strategie coerenti e concretamente applicabili nella quotidianità.
            </p>
            <p className="text-[0.95rem] text-crema/90 pt-5 rule-t">
              Ricevo in studio a Modena. Incontri con genitori e scuola concordati ad hoc.
            </p>
            <Door to="/contatti" tone="marble">
              Richiedi un primo colloquio
            </Door>
          </div>
        </div>
      </section>
    </>
  );
};
