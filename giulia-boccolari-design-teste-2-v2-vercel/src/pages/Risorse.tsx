import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { ARTICLES, CATEGORIES } from '../data/articles';
import { PageFacade, Plaque } from '../components/Portico';

export const Risorse: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('TUTTI');

  const filteredArticles =
    selectedCategory === 'TUTTI'
      ? ARTICLES
      : ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <>
      <SEO
        title="Risorse & Approfondimenti – Dott.ssa Giulia Boccolari | Psicologa Modena"
        description="Articoli e spunti di approfondimento su età evolutiva, regolazione emotiva, ADHD, autismo, funzioni esecutive e benessere cognitivo a cura della Dott.ssa Giulia Boccolari."
        keywords={[
          'articoli psicologia bambini',
          'ADHD approfondimenti',
          'funzioni esecutive consigli',
          'psicologia Modena blog',
        ]}
      />

      <PageFacade
        plaster="rosa"
        plaque="Risorse & Articoli"
        title="Spunti di riflessione e approfondimento per famiglie, adulti ed educatori"
      >
        <p className="text-ferro">
          Una raccolta di articoli e sintesi su funzionamento emotivo, neurodivergenze, quotidianità scolastica e percorsi di cambiamento.
        </p>
      </PageFacade>

      <section className="plaster-crema">
        <div className="portico pt-14 sm:pt-20 pb-16 sm:pb-24">
          {/* Filter: a row of street-name tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-3 pb-8">
            <div className="lg:col-span-3 civic !text-[0.72rem] text-antracite-soft pt-2.5">Filtra per argomento:</div>
            <div className="lg:col-span-9 flex flex-wrap gap-2" role="group" aria-label="Filtra per argomento">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(cat)}
                    className={`civic !text-[0.7rem] px-3.5 py-2 cursor-pointer transition-colors shadow-[inset_0_0_0_1px_var(--color-ferro)] ${
                      active ? 'bg-ferro text-crema' : 'bg-marmo text-ferro hover:bg-salvia-wash'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* The index: ruled rows, reading time set against the right margin */}
          <div className="border-t-2 border-ferro">
            {filteredArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/risorse/${article.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-2 py-8 border-b border-ferro/25 hover:bg-marmo transition-colors lg:px-4 lg:-mx-4"
              >
                <div className="lg:col-span-3 flex lg:flex-col gap-x-3 gap-y-1 items-baseline lg:items-start">
                  <span className="civic !text-[0.7rem] text-salvia-deep">{article.category}</span>
                  <span aria-hidden="true" className="lg:hidden opacity-40">·</span>
                  <span className="text-[0.88rem] text-antracite-soft tabular-nums">{article.readTime} di lettura</span>
                </div>

                <div className="lg:col-span-7 space-y-2">
                  <h2 className="display-m text-ferro group-hover:text-terracotta-deep transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-[0.98rem] text-antracite measure">{article.excerpt}</p>
                </div>

                <div className="lg:col-span-2 lg:text-right pt-2 lg:pt-1.5">
                  <span className="walk text-terracotta-deep text-[0.9rem]">
                    <span>Leggi l'articolo</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Seguimi su Instagram */}
      <section className="plaster-salvia limewash">
        <div className="portico py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-20 gap-y-8 items-start">
          <div className="lg:col-span-6 space-y-5">
            <Plaque quiet>Divulgazione e pillole quotidiane</Plaque>
            <h3 className="display-l text-ferro flex items-center gap-4">
              <Instagram className="w-8 h-8 shrink-0" strokeWidth={1.4} aria-hidden="true" />
              Seguimi su Instagram
            </h3>
          </div>
          <div className="lg:col-span-6 space-y-7">
            <p className="text-[1.05rem] text-ferro measure">
              Sul mio profilo condivido riflessioni, spunti pratici sulla regolazione emotiva nei bambini, psicoeducazione sulle neurodivergenze e strategie concrete per la quotidianità.
            </p>
            <a
              href="https://www.instagram.com/giuliaboccolari.psicologa"
              target="_blank"
              rel="noopener noreferrer"
              className="door door--iron"
            >
              <span>@giuliaboccolari.psicologa</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
