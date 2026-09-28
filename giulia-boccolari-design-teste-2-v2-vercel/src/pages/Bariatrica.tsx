import React from 'react';
import { SEO } from '../components/SEO';
import { PageFacade, BayHeading, Door } from '../components/Portico';

export const Bariatrica: React.FC = () => {
  const fasiPercorso = [
    {
      title: 'Fase Pre-Chirurgica',
      desc: 'Spazio di riflessione e consapevolezza sulle motivazioni, aspettative, abitudini emotive e preparazione al cambiamento.',
    },
    {
      title: 'Fase Post-Chirurgica',
      desc: 'Accompagnamento all\'adattamento corporeo, gestione delle nuove sensazioni fisiche e ridefinizione della propria identità.',
    },
    {
      title: 'Fame emotiva e rapporto con il cibo',
      desc: 'Decifrare i segnali emotivi associati all\'alimentazione e costruire strategie alternative per il benessere psicofisico.',
    },
    {
      title: 'Immagine corporea e relazioni',
      desc: 'Vivere il corpo che cambia e gestire le ricadute emotive nelle relazioni familiari, affettive e sociali.',
    },
  ];

  return (
    <>
      <SEO
        title="Corpo, Alimentazione e Percorsi Bariatrici Modena | Dott.ssa Giulia Boccolari"
        description="Supporto psicologico chirurgia bariatrica a Modena e online. Esperienza pregressa presso l'Ospedale Civile di Baggiovara. Percorsi pre e post intervento."
        keywords={[
          'psicologa bariatrica Modena',
          'supporto psicologico chirurgia bariatrica',
          'post bariatrica online',
          'fame emotiva Modena',
        ]}
      />

      <PageFacade
        plaster="rosa"
        plaque="Integrazione Corpo-Mente"
        title="Corpo e mente non sono due percorsi separati."
        aside={
          <div className="plaque !flex !p-5 !gap-2 max-w-xs">
            <span className="display-s">Esperienza specialistica sul campo</span>
            <p className="text-[0.95rem] leading-relaxed">
              Attività svolta presso l'Ambulatorio Bariatrico e la Psicologia Ospedaliera dell'Ospedale Civile di Baggiovara, a stretto contatto con l'équipe multidisciplinare medica e chirurgica.
            </p>
          </div>
        }
      >
        <p className="text-ferro">
          La mia esperienza nell'ambito della Psicologia Ospedaliera e dell'Ambulatorio Bariatrico dell'Ospedale Civile di Baggiovara ha rafforzato una visione integrata del rapporto tra esperienza psicologica, corpo, alimentazione e cambiamento.
        </p>
        <p className="text-ferro font-bold">
          Il supporto può accompagnare la persona nel percorso pre o post chirurgia bariatrica e nei cambiamenti che coinvolgono immagine corporea, rapporto con il cibo, fame emotiva, identità, relazioni e adattamento alla nuova quotidianità.
        </p>
      </PageFacade>

      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Il percorso" title="Ambiti di supporto nel percorso bariatrico" />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-ferro">
            {fasiPercorso.map((fase, idx) => (
              <div
                key={idx}
                className={`py-9 space-y-3 border-b border-ferro/25 ${idx % 2 === 0 ? 'md:pr-10 md:border-r' : 'md:pl-10'}`}
              >
                <h3 className="display-m text-ferro">{fase.title}</h3>
                <p className="text-[1rem] text-antracite measure">{fase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-20 gap-y-8 items-start">
          <div className="lg:col-span-6 space-y-5">
            <h3 className="display-l text-ferro">In studio a Modena e colloqui online</h3>
          </div>
          <div className="lg:col-span-6 space-y-7">
            <p className="text-[1.05rem] text-ferro measure">
              I percorsi sono disponibili sia in presenza a Modena sia online per chi ha difficoltà di spostamento.
            </p>
            <Door to="/contatti" tone="iron">
              Contattami per un colloquio
            </Door>
          </div>
        </div>
      </section>
    </>
  );
};
