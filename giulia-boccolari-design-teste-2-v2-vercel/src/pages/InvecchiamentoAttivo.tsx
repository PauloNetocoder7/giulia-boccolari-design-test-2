import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { PageFacade, BayHeading, Plaque, Door } from '../components/Portico';

export const InvecchiamentoAttivo: React.FC = () => {
  const attivitaList = [
    'Memoria autobiografica e stimolazione narrativa',
    'Attenzione focalizzata e divisa nella quotidianità',
    'Linguaggio, fluenza verbale e denominazione',
    'Ragionamento pratico e risoluzione di compiti quotidiani',
    'Orientamento e strategie pratiche per ricordare meglio',
    'Organizzazione della giornata e delle routine',
    'Mantenimento delle autonomie personali e decisionali',
    'Partecipazione sociale, condivisione e contrasto all\'isolamento',
  ];

  return (
    <>
      <SEO
        title="Benessere Cognitivo e Invecchiamento Attivo Modena | Dott.ssa Giulia Boccolari"
        description="Mantenere attive le risorse nella quotidianità. Percorsi individuali o di gruppo di benessere cognitivo nell'invecchiamento fisiologico a Modena."
        keywords={[
          'invecchiamento attivo Modena',
          'benessere cognitivo anziani',
          'attività memoria anziani',
          'mente attiva anziani',
        ]}
      />

      <PageFacade
        plaster="salvia"
        plaque="Terza Età & Invecchiamento Fisiologico"
        title="Mantenere attive le risorse nella quotidianità, senza trasformare l'invecchiamento in una patologia."
      >
        <p className="text-ferro">
          Questa area riguarda la promozione del benessere cognitivo nell'invecchiamento fisiologico. Non viene presentata come neuropsicologia, valutazione neuropsicologica, riabilitazione cognitiva specialistica o trattamento delle demenze.
        </p>
        <p className="text-ferro !text-[1.05rem]">
          Il lavoro può essere proposto individualmente o in piccolo gruppo e può includere attività su memoria autobiografica, attenzione, linguaggio, ragionamento, orientamento alla quotidianità, strategie per ricordare meglio, organizzazione della giornata, mantenimento delle autonomie e partecipazione sociale.
        </p>
        <p className="text-ferro font-bold !text-[1.05rem]">
          L'obiettivo è valorizzare le risorse presenti, favorire consapevolezza del proprio funzionamento e costruire strategie semplici e utilizzabili nella vita quotidiana.
        </p>
      </PageFacade>

      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 space-y-10">
          <BayHeading plaque="Esercizi e Strategie" title="Cosa include il lavoro sul benessere cognitivo" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
            <ul className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-ferro">
              {attivitaList.map((item, idx) => (
                <li key={idx} className="flex items-baseline gap-3 py-4 border-b border-ferro/25 text-[1.02rem] text-antracite">
                  <span className="tick text-salvia" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Progetto futuro: a plaque announcing a bay still under construction */}
      <section className="plaster-rosa limewash">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-8">
          <div className="lg:col-span-4">
            <Plaque>In arrivo · Progetto futuro</Plaque>
          </div>
          <div className="lg:col-span-8 space-y-6">
            <h2 className="display-l text-ferro">
              "Mente attiva" – percorso di benessere cognitivo nell'invecchiamento
            </h2>
            <p className="text-[1.08rem] text-ferro measure">
              Incontri di gruppo dedicati a memoria, attenzione, linguaggio e ragionamento attraverso esercizi, attività autobiografiche, strategie quotidiane e momenti di socializzazione.
            </p>
            <Link to="/contatti" className="walk text-ferro">
              <span>Manifesta il tuo interesse o richiedi maggiori dettagli</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="plaster-crema">
        <div className="portico py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-4">
          <h3 className="lg:col-span-4 display-s text-ferro">Confine professionale e orientamento</h3>
          <p className="lg:col-span-8 text-[1.05rem] text-antracite measure">
            Se durante il percorso emergono segnali compatibili con un possibile deterioramento cognitivo o la necessità di una valutazione specialistica, il ruolo è riconoscerne la necessità e orientare la persona verso un approfondimento neuropsicologico o medico appropriato.
          </p>
        </div>
      </section>

      <section className="plaster-salvia limewash">
        <div className="portico py-14 sm:py-16 flex justify-center">
          <Door to="/contatti" tone="terra">
            Contattami per informazioni
          </Door>
        </div>
      </section>
    </>
  );
};
