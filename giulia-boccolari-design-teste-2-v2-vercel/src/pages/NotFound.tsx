import React from 'react';
import { SEO } from '../components/SEO';
import { Door } from '../components/Portico';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO
        title="Pagina non trovata | Dott.ssa Giulia Boccolari – Psicologa"
        description="La pagina che stai cercando non è disponibile. Torna alla home del sito della Dott.ssa Giulia Boccolari."
      />

      <section className="plaster-rosa limewash">
        <div className="portico py-20 sm:py-28">
          <div className="mx-auto max-w-xl bg-marmo border border-ferro/40 border-t-4 border-t-terracotta px-8 py-12 text-center space-y-5">
            <span className="block font-display text-[3.5rem] leading-none text-terracotta-deep tabular-nums">404</span>
            <h1 className="display-l text-ferro">Pagina non trovata</h1>
            <p className="text-antracite">
              La pagina richiesta potrebbe essere stata spostata o non essere più disponibile.
            </p>
            <div className="pt-3">
              <Door to="/" tone="iron">
                Torna alla Home
              </Door>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
