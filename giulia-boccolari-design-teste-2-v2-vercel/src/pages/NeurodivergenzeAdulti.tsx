import React from 'react';
import { SEO } from '../components/SEO';
import { PageFacade, BayHeading, Plaque, Door } from '../components/Portico';

export const NeurodivergenzeAdulti: React.FC = () => {
  const areeLavoro = [
    {
      title: 'Funzioni esecutive, organizzazione e gestione del tempo',
      desc: 'Pianificazione sostenibile, gestione delle scadenze e riduzione del senso di urgenza continuo.',
    },
    {
      title: 'Attivazione, procrastinazione e priorità',
      desc: 'Capire il blocco all\'avvio del compito e costruire ponti concreti per passare all\'azione senza colpevolizzarsi.',
    },
    {
      title: 'Regolazione emotiva e gestione del sovraccarico',
      desc: 'Riconoscere l\'iper-attivazione o il meltdown/shutdown prima che diventino ingestibili.',
    },
    {
      title: 'Masking e riconoscimento dei propri bisogni',
      desc: 'Individuare quanto ci si sforza di apparire neurotipici a scapito della propria salute mentale e autenticità.',
    },
    {
      title: 'Sensorialità ed energia',
      desc: 'Mappare sensibilità a luci, suoni, texture o ambienti e gestire la propria batteria energetica quotidiana.',
    },
    {
      title: 'Studio, lavoro e quotidianità',
      desc: 'Adattare il contesto professionale o universitario alle proprie modalità di funzionamento cognitivo.',
    },
    {
      title: 'Relazioni e comunicazione',
      desc: 'Navigare dinamiche interpersonali, spiegare il proprio funzionamento a partner, amici o colleghi.',
    },
    {
      title: 'Rilettura della propria storia alla luce della diagnosi',
      desc: 'Dare nuovo senso a fatiche passate, sensi di colpa e incomprensioni accumulate nel tempo.',
    },
  ];

  return (
    <>
      <SEO
        title="Neurodivergenze nell'Adulto – Psicoeducazione ADHD, Autismo, AuDHD | Dott.ssa Giulia Boccolari"
        description="Psicoeducazione ADHD adulto online e a Modena. Supporto post diagnosi per autismo adulto, AuDHD e plusdotazione. Comprendere il proprio funzionamento senza correggerlo."
        keywords={[
          'psicoeducazione ADHD adulto online',
          'ADHD adulto',
          'autismo adulto',
          'AuDHD',
          'plusdotazione adulto',
          'neurodivergenze adulte',
          'supporto post diagnosi ADHD',
          'supporto post diagnosi autismo',
        ]}
      />

      <PageFacade
        plaster="rosa"
        plaque="Adulti e Giovani Adulti"
        title="Una diagnosi può dare un nome. Il passo successivo è capire cosa significa nella propria vita."
        aside={
          <div className="plaque !flex !p-5 !gap-2 max-w-xs">
            <span className="display-s">Modalità di svolgimento e trasparenza deontologica</span>
            <p className="text-[0.95rem]">
              Percorsi disponibili <strong>ONLINE</strong> e <strong>IN PRESENZA A MODENA</strong>.
            </p>
            <p className="text-[0.85rem] italic text-antracite-soft">
              Il servizio è di psicoeducazione / supporto psicologico e non sostituisce una valutazione diagnostica.
            </p>
          </div>
        }
      >
        <p className="text-ferro">
          Propongo percorsi di psicoeducazione e supporto psicologico per adulti che hanno ricevuto una diagnosi di ADHD, autismo, AuDHD o plusdotazione e desiderano comprendere meglio il proprio funzionamento.
        </p>
        <p className="text-ferro font-bold">
          L'obiettivo non è "correggere" la neurodivergenza, ma costruire una lettura più chiara dei propri bisogni, delle risorse e delle difficoltà, individuando strategie compatibili con il proprio modo di funzionare.
        </p>
      </PageFacade>

      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Tematiche frequenti" title="Possibili aree di lavoro">
            <p className="text-antracite">
              Incontri individuali mirati per il supporto post diagnosi ADHD, autismo, AuDHD e plusdotazione.
            </p>
          </BayHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ferro">
            {areeLavoro.map((area, idx) => (
              <div
                key={idx}
                className={`py-8 space-y-2 border-b border-ferro/25 ${
                  idx % 2 === 0 ? 'md:pr-10 md:border-r' : 'md:pl-10'
                }`}
              >
                <h3 className="display-s text-ferro">{area.title}</h3>
                <p className="text-[0.98rem] text-antracite measure">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-5 space-y-5">
            <Plaque quiet>Post-Diagnosi e Consapevolezza</Plaque>
            <h2 className="display-l text-ferro">Un supporto empatico e concreto cucito sul tuo profilo</h2>
          </div>
          <div className="lg:col-span-7 space-y-8">
            <p className="text-[1.08rem] text-ferro measure">
              Spesso ricevere una diagnosi di ADHD in età adulta, scoprire di essere nello spettro dell'autismo o avere un profilo AuDHD o di plusdotazione suscita al tempo stesso sollievo e disorientamento. Il lavoro di psicoeducazione offre uno spazio sicuro in cui decostruire il giudizio interno, validare la propria esperienza e costruire strumenti di vita quotidiana davvero sostenibili nel tempo.
            </p>
            <Door to="/contatti" tone="terra">
              Richiedi un primo colloquio
            </Door>
          </div>
        </div>
      </section>
    </>
  );
};
