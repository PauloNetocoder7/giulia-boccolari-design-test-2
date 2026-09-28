import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowLeft, Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Informativa Privacy | Dott.ssa Giulia Boccolari – Psicologa"
        description="Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR) - Dott.ssa Giulia Boccolari Psicologa Modena."
      />

      <div className="portico max-w-4xl py-12 sm:py-20 space-y-10">
        <Link
          to="/"
          className="walk text-ferro !text-[0.9rem]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Torna alla Home</span>
        </Link>

        <div className="space-y-4">
          <div className="plaque plaque--quiet !flex-row items-center !gap-2 civic !text-[0.7rem]">
            <Shield className="w-3.5 h-3.5" />
            Trasparenza e Tutela dei Dati
          </div>
          <h1 className="display-xl text-ferro">
            Informativa sul Trattamento dei Dati Personali
          </h1>
          <p className="text-[0.92rem] text-antracite-soft">
            Ai sensi dell'art. 13 del Regolamento Europeo 2016/679 (GDPR) e della normativa italiana vigente.
          </p>
        </div>

        <div className="border-t-2 border-ferro pt-4 text-[1.02rem] text-antracite leading-relaxed [&>section]:py-6 [&>section]:border-b [&>section]:border-ferro/20 [&>section]:grid [&>section]:grid-cols-1 [&>section]:md:grid-cols-12 [&>section]:gap-x-10 [&>section>h2]:md:col-span-4 [&>section>*:not(h2)]:md:col-span-8 [&>section>*:not(h2)]:md:col-start-5">
          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              1. Titolare del Trattamento
            </h2>
            <p>
              Il Titolare del trattamento dei dati personali è la <strong>Dott.ssa Giulia Boccolari</strong>, Psicologa iscritta all'Albo degli Psicologi dell'Emilia-Romagna n. 12922 A, con studio professionale in Via Vignolese 1109 (Corte dei Pini), 41125 Modena (MO).<br />
              Email di contatto: <a href="mailto:giulia.boccolari@gmail.com" className="text-terracotta-deep underline font-bold">giulia.boccolari@gmail.com</a> – Telefono: 342 9238516.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              2. Tipologia di dati trattati
            </h2>
            <p>
              Attraverso il modulo di contatto presente sul sito internet vengono raccolti unicamente i dati forniti volontariamente dall'utente (nome e cognome, indirizzo e-mail, recapito telefonico, fascia di età di riferimento, preferenza della sede e breve descrizione della richiesta).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              3. Finalità e base giuridica del trattamento
            </h2>
            <p>
              I dati vengono trattati esclusivamente per rispondere alle richieste di informazioni o di primo colloquio inviate dall'interessato. La base giuridica del trattamento è costituita dal consenso espresso dell'interessato (art. 6, par. 1, lett. a del GDPR) e dall'esecuzione di misure precontrattuali adottate su richiesta dello stesso (art. 6, par. 1, lett. b del GDPR). I dati relativi alla salute eventualmente comunicati dall'utente vengono trattati con il massimo riserbo secondo le regole del segreto professionale e del Codice Deontologico degli Psicologi Italiani.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              4. Modalità di trattamento e conservazione
            </h2>
            <p>
              I dati sono trattati con strumenti informatici e telematici adottando adeguate misure di sicurezza volte a prevenire accessi non autorizzati, divulgazione, modifica o distruzione non autorizzata. I dati non saranno ceduti a terzi per finalità commerciali o di marketing.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              5. Diritti dell'interessato
            </h2>
            <p>
              In ogni momento l'utente può esercitare i diritti previsti dagli articoli 15 e seguenti del Regolamento UE 2016/679 (accesso, rettifica, cancellazione, limitazione, opposizione) inviando una comunicazione scritta all'indirizzo e-mail del Titolare.
            </p>
          </section>

          <div className="pt-6 text-[0.9rem] text-antracite-soft italic">
            Documento redatto a titolo informativo per la presenza online. Da completare o revisionare con il professionista legale di fiducia in sede di avvio definitivo dell'attività.
          </div>
        </div>
      </div>
    </>
  );
};
