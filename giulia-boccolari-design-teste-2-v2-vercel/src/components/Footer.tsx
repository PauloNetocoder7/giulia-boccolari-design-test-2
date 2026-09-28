import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, ArrowUpRight, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const linkCls = 'hover:text-marmo underline decoration-crema/30 hover:decoration-terracotta underline-offset-4 transition-colors';

  return (
    <footer className="plaster-ferro">
      {/* Terracotta string course between the last facade and the footer */}
      <div aria-hidden="true" className="h-2 bg-terracotta" />

      <div className="portico pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-x-10 gap-y-12 pb-14">
          <div className="lg:col-span-5 space-y-6 lg:pr-8">
            <div>
              <h3 className="font-display text-[2.1rem] leading-none font-medium text-marmo">
                Dott.ssa Giulia Boccolari
              </h3>
              <p className="civic text-salvia mt-3">Psicologa</p>
            </div>

            <p className="font-display italic text-[1.3rem] leading-snug text-crema/90 max-w-md">
              "Comprendere il funzionamento. Costruire strumenti. Favorire cambiamenti concreti."
            </p>

            <div className="text-[0.88rem] text-crema/75 space-y-1">
              <p>Iscritta all'Albo degli Psicologi dell'Emilia-Romagna n. 12922 A</p>
              <p>P.IVA: In attesa di attribuzione</p>
            </div>
          </div>

          <div className="lg:col-span-3 lg:pillar-l lg:pl-8 space-y-4">
            <h4 className="civic text-salvia">Percorsi e Servizi</h4>
            <ul className="space-y-2.5 text-[0.95rem] text-crema/85">
              <li>
                <Link to="/eta-evolutiva" className={linkCls}>
                  Età evolutiva (Bambini e Ragazzi)
                </Link>
              </li>
              <li>
                <Link to="/come-lavoro" className={linkCls}>
                  Come lavoro (Metodo & Percorso)
                </Link>
              </li>
              <li>
                <Link to="/neurodivergenze-adulti" className={linkCls}>
                  Neurodivergenze nell'adulto (ADHD, autismo)
                </Link>
              </li>
              <li>
                <Link to="/supporto-psicologico" className={linkCls}>
                  Supporto psicologico
                </Link>
              </li>
              <li>
                <Link to="/invecchiamento-attivo" className={linkCls}>
                  Benessere cognitivo e invecchiamento attivo
                </Link>
              </li>
              <li>
                <Link to="/bariatrica" className={linkCls}>
                  Corpo, alimentazione e percorsi bariatrici
                </Link>
              </li>
              <li>
                <Link to="/risorse" className={linkCls}>
                  Risorse & Articoli di approfondimento
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 lg:pillar-l lg:pl-8 space-y-4">
            <h4 className="civic text-salvia">Studio e Contatti</h4>
            <div className="space-y-3.5 text-[0.95rem] text-crema/85">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-terracotta shrink-0 mt-1" strokeWidth={1.6} />
                <span>
                  Via Vignolese 1109, Corte dei Pini<br />
                  41125 Modena (MO)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-terracotta shrink-0" strokeWidth={1.6} />
                <a href="mailto:giulia.boccolari@gmail.com" className={linkCls}>
                  giulia.boccolari@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-terracotta shrink-0" strokeWidth={1.6} />
                <a href="tel:3429238516" className={`${linkCls} tabular-nums`}>
                  342 9238516
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-terracotta shrink-0" strokeWidth={1.6} />
                <a
                  href="https://www.instagram.com/giuliaboccolari.psicologa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${linkCls} inline-flex items-center gap-1`}
                >
                  <span>@giuliaboccolari.psicologa</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              <h4 className="civic text-salvia">Modalità</h4>
              <p className="text-[0.95rem] text-crema/85 leading-relaxed">
                In presenza a Modena e online. I percorsi sono concordati in base agli obiettivi specifici.
              </p>
              <Link to="/contatti" className="door door--terra">
                <span>Richiedi colloquio</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="rule-t pt-7 flex flex-col md:flex-row md:items-center justify-between text-[0.85rem] text-crema/70 gap-4">
          <p>
            © {new Date().getFullYear()} Dott.ssa Giulia Boccolari – Psicologa. Tutti i diritti riservati.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className={linkCls}>
              Informativa Privacy
            </Link>
            <Link to="/cookie" className={linkCls}>
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
