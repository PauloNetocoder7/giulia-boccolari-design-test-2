import React from 'react';
import { SEO } from '../components/SEO';
import { MethodTimeline } from '../components/MethodTimeline';
import { PageFacade, BayHeading, ClosingDoor, Door } from '../components/Portico';

export const ComeLavoro: React.FC = () => {
  return (
    <>
      <SEO
        title="Come lavoro – Metodo Integrato e Percorso | Dott.ssa Giulia Boccolari"
        description="Un approccio integrato, individualizzato e orientato agli obiettivi. Comprendere il funzionamento, definire obiettivi concreti, favorire cambiamenti nella vita quotidiana."
        keywords={[
          'come lavoro psicologa',
          'metodo psicologa bambini Modena',
          'valutazione del funzionamento',
          'obiettivi concreti psicologia',
        ]}
      />

      <PageFacade
        plaster="terracotta"
        plaque="Metodo e Approccio"
        title={<span className="text-marmo">Un approccio integrato, individualizzato e orientato agli obiettivi.</span>}
      >
        <p className="text-crema">
          Non utilizzo un unico schema valido per tutti. Il percorso viene costruito a partire dal funzionamento della persona, dai bisogni emersi e dai contesti in cui vive.
        </p>
        <p className="text-crema/90 !text-[1.05rem]">
          Nell'età evolutiva integro comprensione emotiva e relazionale, osservazione del comportamento, psicoeducazione e strumenti concreti. La mia esperienza pregressa con metodologie basate sui principi dell'Analisi del Comportamento ha contribuito a rendere il mio lavoro particolarmente attento alla funzione del comportamento, alla costruzione di obiettivi osservabili e alla verifica dei progressi.
        </p>
      </PageFacade>

      {/* Il percorso: the arcade stays pinned while the seven steps are walked */}
      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-8">
          <BayHeading plaque="Fasi dell'intervento" title="Il percorso con bambini e ragazzi">
            <p className="text-antracite">
              Dalla prima conoscenza alla generalizzazione delle autonomie nei contesti di vita quotidiana.
            </p>
          </BayHeading>
          <MethodTimeline variant="steps" startWith="comprendere" />
        </div>
      </section>

      {/* Valutazione del funzionamento e progettazione */}
      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Approfondimento" title="Valutazione del funzionamento e progettazione" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
            <p className="lg:col-span-6 text-[1.05rem] text-ferro">
              Quando utile, il percorso può iniziare con una fase di osservazione e valutazione psicologica e funzionale finalizzata a comprendere punti di forza, difficoltà, modalità di regolazione emotiva e comportamentale, funzioni esecutive, autonomie e funzionamento nei diversi contesti. Questa fase serve a individuare i bisogni prioritari e a tradurli in obiettivi concreti e monitorabili.
            </p>
            <div className="lg:col-span-6 plaque !flex !p-6 text-[0.98rem] leading-relaxed">
              <p>
                <strong>Nota di trasparenza professionale:</strong> La valutazione del funzionamento non viene presentata come diagnosi completa. Quando emerge la necessità di un approfondimento diagnostico specialistico, il percorso viene orientato alla collaborazione o all'invio alle figure competenti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lavoro in rete */}
      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Sinergia e Contesti" title="Lavoro in rete">
            <p className="text-[1.05rem] text-antracite measure pt-2">
              Quando le caratteristiche del caso lo richiedono e con il consenso della famiglia, collaboro con educatrici e altri professionisti con formazione coerente con il progetto, oltre che con la scuola. L'obiettivo è integrare differenti punti di osservazione e rendere più coerenti le strategie nei diversi contesti di vita del bambino.
            </p>
          </BayHeading>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-3 border-t border-ferro">
              {[
                { t: 'Famiglia', d: 'Condivisione costante degli obiettivi e delle routine a casa.', c: 'bg-salvia' },
                { t: 'Scuola', d: 'Raccordo con insegnanti ed educatori per uniformare le strategie.', c: 'bg-rosa' },
                { t: 'Professionisti', d: 'Collaborazione multidisciplinare su misura per il progetto del bambino.', c: 'bg-terracotta' },
              ].map((b, i) => (
                <div
                  key={b.t}
                  className={`pt-6 pb-4 space-y-2 ${i > 0 ? 'sm:border-l border-ferro/25 sm:pl-6' : ''} ${
                    i < 2 ? 'sm:pr-6' : ''
                  } border-b sm:border-b-0 border-ferro/25`}
                >
                  <span className={`block w-8 h-1 ${b.c}`} aria-hidden="true" />
                  <span className="block display-s text-ferro">{b.t}</span>
                  <p className="text-[0.95rem] text-antracite">{b.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ClosingDoor
        plaster="rosa"
        as="h3"
        title="Esplora i percorsi dedicati all'età evolutiva"
        actions={
          <>
            <Door to="/eta-evolutiva" tone="marble">
              Età evolutiva
            </Door>
            <Door to="/contatti" tone="terra">
              Richiedi un primo colloquio
            </Door>
          </>
        }
      >
        <p>Dalla regolazione emotiva alle funzioni esecutive, scopri gli interventi specifici.</p>
      </ClosingDoor>
    </>
  );
};
