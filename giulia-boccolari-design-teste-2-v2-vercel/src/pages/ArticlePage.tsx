import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { ArrowLeft } from 'lucide-react';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { Plaque, Door } from '../components/Portico';

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <Navigate to="/risorse" replace />;
  }

  const related = getRelatedArticles(article);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.isoDate,
    dateModified: article.isoDate,
    author: {
      '@type': 'Person',
      name: 'Dott.ssa Giulia Boccolari',
      jobTitle: 'Psicologa',
    },
    publisher: {
      '@type': 'Person',
      name: 'Dott.ssa Giulia Boccolari',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://giuliaboccolaripsicologa.it/risorse/${article.slug}`,
    },
  };

  return (
    <>
      <SEO
        title={`${article.title} – Dott.ssa Giulia Boccolari | Psicologa Modena`}
        description={article.excerpt}
        jsonLd={jsonLd}
        keywords={[article.category.toLowerCase(), 'psicologa Modena', 'articoli psicologia']}
      />

      <article>
        {/* Header on rose plaster, set like the title page of a pamphlet */}
        <header className="plaster-rosa limewash">
          <div className="portico pt-10 sm:pt-14 pb-14 sm:pb-20">
            <Link to="/risorse" className="walk text-ferro !text-[0.9rem] mb-10">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Torna a Risorse & Articoli</span>
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 mt-10">
              <div className="lg:col-span-3 lg:pt-3">
                <Plaque quiet>{article.category}</Plaque>
              </div>
              <div className="lg:col-span-9 space-y-6">
                <h1 className="display-xl text-ferro">{article.title}</h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.92rem] text-ferro/85 tabular-nums">
                  <span>{article.date}</span>
                  <span aria-hidden="true" className="opacity-50">·</span>
                  <span>{article.readTime} di lettura</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="plaster-crema">
          <div className="portico py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-12 gap-x-12">
            <div className="lg:col-span-7 lg:col-start-4">
              <div className="space-y-6 text-[1.12rem] leading-[1.75] text-antracite [&>p:first-child]:first-letter:font-display [&>p:first-child]:first-letter:text-[4.2rem] [&>p:first-child]:first-letter:leading-[0.8] [&>p:first-child]:first-letter:float-left [&>p:first-child]:first-letter:mr-3 [&>p:first-child]:first-letter:mt-1.5 [&>p:first-child]:first-letter:text-terracotta-deep">
                {article.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Nota informativa (obbligatoria per contenuti divulgativi in ambito psicologico) */}
              <p className="mt-12 pt-6 border-t border-ferro/30 text-[0.92rem] text-antracite-soft italic leading-relaxed">
                Questo articolo ha finalità divulgativa e non sostituisce una valutazione psicologica
                personalizzata. Se riconosci nella lettura una situazione che ti riguarda da vicino,
                può essere utile parlarne in un primo colloquio.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Percorso collegato */}
      <section className="plaster-salvia limewash">
        <div className="portico py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-6 items-end">
          <div className="lg:col-span-7 lg:col-start-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="civic !text-[0.7rem] text-ferro">Percorso collegato</span>
              <p className="display-m text-ferro">{article.targetServiceLabel}</p>
            </div>
            <Door to={article.targetServiceUrl} tone="iron" className="shrink-0">
              Scopri il percorso
            </Door>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="plaster-crema">
          <div className="portico py-16 sm:py-20 space-y-8">
            <h2 className="display-m text-ferro">Altri articoli che potrebbero interessarti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ferro">
              {related.map((r, i) => (
                <Link
                  key={r.slug}
                  to={`/risorse/${r.slug}`}
                  className={`group py-6 space-y-2 border-b md:border-b-0 border-ferro/25 ${
                    i > 0 ? 'md:border-l md:pl-8' : ''
                  } ${i < related.length - 1 ? 'md:pr-8' : ''}`}
                >
                  <span className="civic !text-[0.68rem] text-salvia-deep">{r.category}</span>
                  <h3 className="display-s text-ferro group-hover:text-terracotta-deep transition-colors">{r.title}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
