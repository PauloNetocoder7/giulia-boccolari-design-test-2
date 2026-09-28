import React from 'react';
import { SEO } from '../components/SEO';
import { PageFacade, BayHeading, ClosingDoor, Door } from '../components/Portico';
import fotoGiulia from '../assets/foto-giulia.jpg';

export const ChiSono: React.FC = () => {
  return (
    <>
      <SEO
        title="Chi sono – Dott.ssa Giulia Boccolari | Psicologa a Modena"
        description="Mi interessa capire come funziona una persona, non ridurla a un sintomo o a una diagnosi. Dott.ssa Giulia Boccolari, Psicologa a Modena iscritta all'Albo ER n. 12922 A."
        keywords={[
          'Giulia Boccolari',
          'psicologa Modena',
          'psicologa chi sono',
          'Albo psicologi Emilia Romagna',
          'ISCRA Modena',
        ]}
      />

      <PageFacade
        plaster="rosa"
        plaque="Chi sono"
        title="Mi interessa capire come funziona una persona, non ridurla a un sintomo o a una diagnosi."
      />

      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-12 items-start">
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-28">
            <div className="arch-frame max-w-sm">
              <div className="aspect-[4/5] bg-rosa overflow-hidden">
                <img
                  src={fotoGiulia}
                  alt="Dott.ssa Giulia Boccolari – Psicologa"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="plaque plaque--quiet !flex max-w-sm !px-5 !py-4 !gap-1 mt-0 border-t-0">
              <p className="font-display text-[1.2rem] leading-tight">Dott.ssa Giulia Boccolari</p>
              <p className="text-[0.88rem] text-antracite-soft">Psicologa iscritta all'Albo degli Psicologi dell'Emilia-Romagna n. 12922 A</p>
              <p className="civic !text-[0.68rem] text-salvia-deep pt-1">Modena & Online</p>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7 space-y-6 text-[1.08rem] text-antracite">
            <p className="font-display text-[1.2rem] sm:text-[1.35rem] leading-snug text-ferro">
              Sono la Dott.ssa Giulia Boccolari, Psicologa iscritta all'Albo degli Psicologi dell'Emilia-Romagna n. 12922 A. Mi occupo principalmente di età evolutiva, neurodivergenze, psicoeducazione e supporto psicologico.
            </p>

            <p className="measure">
              La mia esperienza professionale è iniziata nell'ambito degli interventi psicoeducativi rivolti a bambini e ragazzi, anche attraverso metodologie basate sui principi dell'Analisi del Comportamento. Questo percorso mi ha insegnato l'importanza dell'osservazione, della comprensione della funzione del comportamento, della definizione di obiettivi concreti e della verifica dei cambiamenti nel tempo.
            </p>

            <p className="measure">
              Oggi integro questa esperienza con una lettura psicologica e relazionale più ampia, che considera il bambino o l'adulto all'interno della propria storia, delle relazioni e dei contesti di vita.
            </p>

            <div className="plaster-salvia limewash p-7 sm:p-9 space-y-3 !mt-10">
              <p className="display-s text-ferro">Formazione specialistica e continua:</p>
              <p className="text-ferro measure">
                Sto frequentando la Scuola di Specializzazione in Psicoterapia Sistemico-Relazionale presso ISCRA Modena. Da gennaio 2027 è previsto l'avvio del Master universitario di II livello in Applied Behavior Analysis e Applicazioni al Disturbo Autistico presso IESCUM – Istituto Europeo per lo Studio del Comportamento Umano.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="plaster-crema">
        <div className="portico pb-16 sm:pb-24 space-y-8">
          <BayHeading plaque="Ambiti di esperienza" title="Esperienze professionali sul campo" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12">
            <ul className="lg:col-span-12 ruled text-[1.05rem] text-antracite">
              {[
                'Lavoro in età evolutiva e in ambito scolastico, con progettazione di interventi individualizzati e collaborazione con il team educativo.',
                'Esperienza pregressa in interventi psicoeducativi/ABA e con adolescenti autistici.',
                "Collaborazione nell'ambito delle valutazioni psicodiagnostiche delle neurodivergenze.",
                "Esperienza in Psicologia Ospedaliera e Ambulatorio Bariatrico presso l'Ospedale Civile di Baggiovara.",
                'Formazione e specializzazione sistemico-relazionale in corso presso ISCRA Modena.',
              ].map((item, i) => (
                <li key={i} className="flex items-baseline gap-4 py-5">
                  <span className={`tick ${i === 4 ? 'text-terracotta' : 'text-salvia'}`} aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingDoor
        plaster="salvia"
        as="h3"
        title="Vuoi saperne di più sul metodo di lavoro?"
        actions={
          <>
            <Door to="/come-lavoro" tone="marble">
              Come lavoro
            </Door>
            <Door to="/contatti" tone="terra">
              Contattami
            </Door>
          </>
        }
      >
        <p>Scopri come si articola il percorso con bambini, ragazzi e adulti.</p>
      </ClosingDoor>
    </>
  );
};
