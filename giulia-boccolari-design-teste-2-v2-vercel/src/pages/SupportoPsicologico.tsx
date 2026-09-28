import React from 'react';
import { SEO } from '../components/SEO';
import { PageFacade, BayHeading, Door } from '../components/Portico';

export const SupportoPsicologico: React.FC = () => {
  const ambiti = [
    'Regolazione emotiva e gestione dell\'ansia',
    'Relazioni interpersonali, affettive e familiari',
    'Identità, autostima e consapevolezza di sé',
    'Gestione dello stress e prevenzione del sovraccarico',
    'Momenti di transizione di vita e scelte importanti',
    'Comprensione e ascolto dei propri bisogni autentici',
  ];

  return (
    <>
      <SEO
        title="Supporto Psicologico a Modena e Online | Dott.ssa Giulia Boccolari"
        description="Uno spazio per comprendere ciò che sta accadendo e costruire nuovi modi di affrontarlo. Supporto psicologico rivolto ad adulti e giovani adulti a Modena e online."
        keywords={[
          'supporto psicologico Modena',
          'supporto psicologico online',
          'regolazione emotiva adulti',
          'psicologa Modena adulti',
        ]}
      />

      <PageFacade
        plaster="rosa"
        plaque="Adulti e Giovani Adulti"
        title="Uno spazio per comprendere ciò che sta accadendo e costruire nuovi modi di affrontarlo."
      >
        <p className="text-ferro">
          Propongo percorsi di supporto psicologico rivolti ad adulti e giovani adulti che stanno attraversando momenti di difficoltà, cambiamento o sovraccarico. Il lavoro può riguardare regolazione emotiva, relazioni, identità, autostima, stress, momenti di transizione e comprensione dei propri bisogni.
        </p>
        <p className="text-ferro font-bold">
          La lettura sistemico-relazionale orienta l'attenzione non soltanto al sintomo, ma anche alla storia personale, alle relazioni e ai contesti in cui la difficoltà prende forma.
        </p>
      </PageFacade>

      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Aree di ascolto e lavoro" title="Quando può essere utile un percorso di supporto psicologico" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
            <ul className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-ferro">
              {ambiti.map((item, idx) => (
                <li key={idx} className="flex items-baseline gap-3 py-5 border-b border-ferro/25">
                  <span className="tick text-rosa-deep" aria-hidden="true" />
                  <span className="font-display text-[1.2rem] leading-snug text-ferro">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-20 gap-y-8 items-start">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="display-l text-ferro">In presenza a Modena oppure online</h3>
          </div>
          <div className="lg:col-span-6 space-y-7">
            <p className="text-[1.05rem] text-ferro measure">
              I colloqui si svolgono presso lo studio in Via Vignolese 1109 (Corte dei Pini) a Modena oppure a distanza tramite videochiamata protetta.
            </p>
            <Door to="/contatti" tone="iron">
              Richiedi un primo colloquio
            </Door>
          </div>
        </div>
      </section>
    </>
  );
};
