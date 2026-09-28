import React from 'react';
import { SEO } from '../components/SEO';
import { ContactForm } from '../components/ContactForm';
import { PageFacade } from '../components/Portico';
import { MapPin, Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';

const Row: React.FC<{ icon: React.ReactNode; label: string; children: React.ReactNode }> = ({ icon, label, children }) => (
  <div className="grid grid-cols-[1.5rem_1fr] gap-x-4 py-4 border-b border-ferro/20">
    <span className="text-terracotta-deep pt-1">{icon}</span>
    <div>
      <strong className="block civic !text-[0.68rem] text-antracite-soft mb-1">{label}</strong>
      {children}
    </div>
  </div>
);

export const Contatti: React.FC = () => {
  return (
    <>
      <SEO
        title="Contatti – Dott.ssa Giulia Boccolari | Psicologa a Modena e Online"
        description="Contatta la Dott.ssa Giulia Boccolari per un primo colloquio a Modena o online. Studio in Via Vignolese 1109 (Corte dei Pini). Tel: 342 9238516."
        keywords={[
          'contatti psicologa Modena',
          'studio psicologia Modena',
          'Giulia Boccolari contatti',
          'psicologa Via Vignolese Modena',
        ]}
      />

      <PageFacade plaster="salvia" plaque="Contatti e Sede" title="Contattami per un primo confronto">
        <p className="text-ferro">
          Ricevo in studio a Modena e svolgo percorsi online. Scrivimi o chiamami per avere maggiori informazioni sul tipo di percorso più adatto alla tua situazione.
        </p>
      </PageFacade>

      <section className="plaster-crema">
        <div className="portico py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-14 items-start">
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="display-m text-ferro">Dott.ssa Giulia Boccolari</h2>
              <p className="civic text-salvia-deep mt-2">Psicologa</p>
              <p className="text-[0.92rem] text-antracite-soft mt-1">Albo Psicologi Emilia-Romagna n. 12922 A</p>

              <div className="mt-6 border-t border-ferro text-[1.02rem] text-ferro">
                <Row icon={<MapPin className="w-5 h-5" strokeWidth={1.6} />} label="Studio a Modena:">
                  <span className="block">Via Vignolese 1109, Corte dei Pini</span>
                  <span className="block text-[0.92rem] text-antracite-soft">41125 Modena (MO)</span>
                </Row>
                <Row icon={<Phone className="w-5 h-5" strokeWidth={1.6} />} label="Telefono:">
                  <a href="tel:3429238516" className="walk !text-[1.05rem] tabular-nums">
                    342 9238516
                  </a>
                </Row>
                <Row icon={<Mail className="w-5 h-5" strokeWidth={1.6} />} label="E-mail:">
                  <a href="mailto:giulia.boccolari@gmail.com" className="walk !text-[1.05rem] break-all">
                    giulia.boccolari@gmail.com
                  </a>
                </Row>
                <Row icon={<Instagram className="w-5 h-5" strokeWidth={1.6} />} label="Instagram:">
                  <a
                    href="https://www.instagram.com/giuliaboccolari.psicologa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="walk !text-[1.05rem]"
                  >
                    <span>@giuliaboccolari.psicologa</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Row>
              </div>
            </div>

            <div className="plaster-salvia limewash p-6 sm:p-7 space-y-2 text-[0.98rem]">
              <span className="block display-s text-ferro">Colloqui in presenza e online:</span>
              <p className="text-ferro">
                Gli incontri in presenza si tengono su appuntamento presso lo studio di Modena. I percorsi di psicoeducazione per adulti e gli incontri con i genitori possono svolgersi anche da remoto via videochiamata protetta.
              </p>
            </div>

            <div className="space-y-2 text-[0.98rem] text-antracite">
              <h3 className="display-s text-ferro">Indicazioni per raggiungere lo studio</h3>
              <p>
                Lo studio si trova all'interno del complesso <strong>Corte dei Pini</strong> in Via Vignolese 1109 a Modena. Ampia disponibilità di parcheggio nelle immediate vicinanze e facile accesso anche tramite mezzi pubblici.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
};
