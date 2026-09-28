import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowLeft, Cookie } from 'lucide-react';

export const CookiePolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Cookie Policy | Dott.ssa Giulia Boccolari – Psicologa"
        description="Informativa sull'uso dei cookie e tecnologie affini nel sito web della Dott.ssa Giulia Boccolari Psicologa."
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
            <Cookie className="w-3.5 h-3.5" />
            Informativa Cookie
          </div>
          <h1 className="display-xl text-ferro">
            Cookie Policy
          </h1>
          <p className="text-[0.92rem] text-antracite-soft">
            Informazioni sui cookie utilizzati sul presente sito web.
          </p>
        </div>

        <div className="border-t-2 border-ferro pt-4 text-[1.02rem] text-antracite leading-relaxed [&>section]:py-6 [&>section]:border-b [&>section]:border-ferro/20 [&>section]:grid [&>section]:grid-cols-1 [&>section]:md:grid-cols-12 [&>section]:gap-x-10 [&>section>h2]:md:col-span-4 [&>section>*:not(h2)]:md:col-span-8 [&>section>*:not(h2)]:md:col-start-5">
          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, dove vengono memorizzati per essere ritrasmessi agli stessi siti alla visita successiva.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              Cookie tecnici e funzionali
            </h2>
            <p>
              Questo sito web utilizza esclusivamente cookie tecnici strettamente necessari al corretto funzionamento della navigazione, alla visualizzazione dei caratteri tipografici e all'esecuzione delle chiamate di routing tra le pagine. Non vengono utilizzati cookie di profilazione per l'invio di pubblicità mirata.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              Servizi di terze parti
            </h2>
            <p>
              Il sito include collegamenti a piattaforme esterne (es. Instagram per il profilo professionale). Cliccando sui relativi link, l'utente potrebbe ricevere cookie da tali terze parti, regolati dalle rispettive informative privacy indipendenti.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="display-s text-ferro">
              Gestione delle preferenze tramite browser
            </h2>
            <p>
              L'utente può gestire le preferenze relative ai cookie direttamente attraverso le impostazioni del proprio browser internet, impedendone l'installazione o cancellando quelli già presenti.
            </p>
          </section>

          <div className="pt-6 text-[0.9rem] text-antracite-soft italic">
            Testo segnaposto da completare o revisionare con il professionista legale di riferimento.
          </div>
        </div>
      </div>
    </>
  );
};
