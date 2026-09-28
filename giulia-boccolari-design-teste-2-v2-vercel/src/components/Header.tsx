import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Instagram, ArrowRight } from 'lucide-react';
import logoGiulia from '../assets/logo-giulia.png';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [etaDropdownOpen, setEtaDropdownOpen] = useState(false);
  const [altriDropdownOpen, setAltriDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setEtaDropdownOpen(false);
    setAltriDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const etaSubmenuItems = [
    { label: 'Panoramica Età evolutiva', path: '/eta-evolutiva' },
    { label: 'Emozioni e regolazione emotiva', path: '/eta-evolutiva#emozioni' },
    { label: 'Valutazione del funzionamento e progettazione', path: '/eta-evolutiva#valutazione' },
    { label: 'Comportamento e problem solving', path: '/eta-evolutiva#comportamento' },
    { label: 'ADHD, autismo e neurodivergenze', path: '/eta-evolutiva#adhd-autismo' },
    { label: 'Funzioni esecutive, autonomie e scuola', path: '/eta-evolutiva#funzioni-esecutive' },
    { label: 'Supporto genitoriale e lavoro con la rete', path: '/eta-evolutiva#genitori-rete' },
    { label: 'Collaborazione multidisciplinare e raccordo', path: '/eta-evolutiva#collaborazione' },
  ];

  const altriPercorsiItems = [
    { label: 'Supporto psicologico', path: '/supporto-psicologico' },
    { label: 'Benessere cognitivo e invecchiamento attivo', path: '/invecchiamento-attivo' },
    { label: 'Corpo, alimentazione e percorsi bariatrici', path: '/bariatrica' },
  ];

  const navLink = (active: boolean) =>
    `relative whitespace-nowrap px-2 2xl:px-3 py-2 text-[0.92rem] 2xl:text-[0.95rem] transition-colors hover:text-terracotta-deep ${
      active
        ? 'text-ferro font-bold after:absolute after:left-2.5 after:right-2.5 after:-bottom-0.5 after:h-[3px] after:bg-terracotta'
        : 'text-antracite'
    }`;

  const mobileLink = (active: boolean) =>
    `flex items-center justify-between py-3.5 font-display text-[1.35rem] leading-tight ${
      active ? 'text-terracotta-deep' : 'text-ferro'
    }`;

  const panel =
    'absolute top-full mt-2 bg-marmo text-ferro border border-ferro shadow-[0_18px_30px_-18px_rgba(43,48,45,0.55)] z-50';

  return (
    <header
      className={`sticky top-0 z-50 bg-crema/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_10px_24px_-20px_rgba(43,48,45,0.7)]' : ''
      }`}
    >
      <div className="portico">
        <div className="flex items-center justify-between h-[4.75rem] gap-4">
          <Link to="/" className="flex items-center gap-2.5 group rounded-sm min-w-0 sm:shrink-0">
            <img
              src={logoGiulia}
              alt=""
              aria-hidden="true"
              width={68}
              height={56}
              className="w-[2.6rem] sm:w-[3.5rem] h-auto mix-blend-multiply shrink-0"
            />
            <span className="flex flex-col">
              <span className="font-display text-[1rem] sm:text-[1.2rem] xl:text-[1.3rem] sm:whitespace-nowrap font-medium leading-tight text-ferro group-hover:text-terracotta-deep transition-colors">
                Dott.ssa Giulia Boccolari
              </span>
              <span className="civic text-[0.66rem] text-antracite-soft">Psicologa</span>
            </span>
          </Link>

          <nav className="hidden xl:flex items-center" aria-label="Navigazione principale">
            <Link to="/" className={navLink(isActive('/'))}>
              Home
            </Link>
            <Link to="/chi-sono" className={navLink(isActive('/chi-sono'))}>
              Chi sono
            </Link>
            <Link to="/come-lavoro" className={navLink(isActive('/come-lavoro'))}>
              Come lavoro
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setEtaDropdownOpen(true)}
              onMouseLeave={() => setEtaDropdownOpen(false)}
            >
              <Link
                to="/eta-evolutiva"
                aria-haspopup="true"
                aria-expanded={etaDropdownOpen}
                className={`${navLink(isActive('/eta-evolutiva'))} flex items-center gap-1`}
              >
                <span>Età evolutiva</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
              </Link>

              <div
                className={`${panel} left-0 w-[22rem] ${
                  etaDropdownOpen ? 'block' : 'hidden'
                } group-focus-within:block`}
              >
                <div className="px-5 pt-4 pb-3 border-b border-ferro/20">
                  <span className="civic text-[0.68rem] text-salvia-deep">Aree di intervento</span>
                </div>
                <ul className="py-2">
                  {etaSubmenuItems.map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.path}
                        className="flex items-baseline gap-3 px-5 py-2 text-[0.92rem] leading-snug hover:bg-crema hover:text-terracotta-deep transition-colors"
                      >
                        <span className="tick text-salvia" aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/neurodivergenze-adulti" className={navLink(isActive('/neurodivergenze-adulti'))}>
              Neurodivergenze adulti
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setAltriDropdownOpen(true)}
              onMouseLeave={() => setAltriDropdownOpen(false)}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={altriDropdownOpen}
                onClick={() => setAltriDropdownOpen((v) => !v)}
                className={`${navLink(
                  isActive('/supporto-psicologico') || isActive('/invecchiamento-attivo') || isActive('/bariatrica')
                )} flex items-center gap-1 cursor-pointer`}
              >
                <span>Altri percorsi</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-70" aria-hidden="true" />
              </button>

              <div
                className={`${panel} right-0 w-[19rem] py-2 ${
                  altriDropdownOpen ? 'block' : 'hidden'
                } group-focus-within:block`}
              >
                {altriPercorsiItems.map((item, idx) => (
                  <Link
                    key={idx}
                    to={item.path}
                    className="flex items-baseline gap-3 px-5 py-2.5 text-[0.92rem] leading-snug hover:bg-crema hover:text-terracotta-deep transition-colors"
                  >
                    <span className="tick text-rosa" aria-hidden="true" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link to="/risorse" className={navLink(isActive('/risorse'))}>
              Risorse
            </Link>
          </nav>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://www.instagram.com/giuliaboccolari.psicologa"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-antracite hover:text-terracotta-deep transition-colors"
              aria-label="Instagram di Dott.ssa Giulia Boccolari"
            >
              <Instagram className="w-5 h-5" strokeWidth={1.6} />
            </a>

            <Link to="/contatti" className="door door--terra hidden xl:inline-flex !min-h-[2.75rem] !py-2.5">
              <span>Contattami</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="flex items-center gap-1.5 xl:hidden">
            <Link to="/contatti" className="door door--terra !min-h-[2.6rem] !px-4 !py-2 !text-[0.85rem]">
              Contattami
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-ferro hover:text-terracotta-deep transition-colors"
              aria-label="Apri menu di navigazione"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Cornice: the double rule under the header, like a moulding */}
      <div aria-hidden="true" className="h-[5px] border-t border-b border-ferro/70" />

      {mobileMenuOpen && (
        <div className="xl:hidden bg-crema border-b border-ferro max-h-[calc(100dvh-5rem)] overflow-y-auto">
          <div className="portico pt-2 pb-8">
            <div className="ruled">
              <Link to="/" className={mobileLink(isActive('/'))}>
                Home
              </Link>
              <Link to="/chi-sono" className={mobileLink(isActive('/chi-sono'))}>
                Chi sono
              </Link>
              <Link to="/come-lavoro" className={mobileLink(isActive('/come-lavoro'))}>
                Come lavoro
              </Link>

              <div className="pb-3">
                <Link to="/eta-evolutiva" className={mobileLink(isActive('/eta-evolutiva'))}>
                  Età evolutiva (Focus Principale)
                </Link>
                <ul className="pl-1 space-y-0.5">
                  {etaSubmenuItems.slice(1).map((item, idx) => (
                    <li key={idx}>
                      <a
                        href={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-baseline gap-3 py-1.5 text-[0.95rem] text-antracite hover:text-terracotta-deep"
                      >
                        <span className="tick text-salvia" aria-hidden="true" />
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/neurodivergenze-adulti" className={mobileLink(isActive('/neurodivergenze-adulti'))}>
                Neurodivergenze adulti
              </Link>
              <Link to="/supporto-psicologico" className={mobileLink(isActive('/supporto-psicologico'))}>
                Supporto psicologico
              </Link>
              <Link to="/invecchiamento-attivo" className={mobileLink(isActive('/invecchiamento-attivo'))}>
                Benessere cognitivo e invecchiamento attivo
              </Link>
              <Link to="/bariatrica" className={mobileLink(isActive('/bariatrica'))}>
                Corpo, alimentazione e percorsi bariatrici
              </Link>
              <Link to="/risorse" className={mobileLink(isActive('/risorse'))}>
                Risorse / Articoli
              </Link>
              <Link to="/contatti" className={mobileLink(isActive('/contatti'))}>
                Contatti
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-between gap-3">
              <a
                href="https://www.instagram.com/giuliaboccolari.psicologa"
                target="_blank"
                rel="noopener noreferrer"
                className="walk text-ferro"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.6} />
                <span>@giuliaboccolari.psicologa</span>
              </a>
              <span className="civic text-[0.68rem] text-antracite-soft">Modena & Online</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
