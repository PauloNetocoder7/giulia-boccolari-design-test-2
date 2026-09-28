import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Plaster = 'rosa' | 'salvia' | 'terracotta' | 'crema' | 'ferro';

/* Marble street plaque: the site's only label device. It hangs beside a heading, never above it. */
export const Plaque: React.FC<{ children: React.ReactNode; quiet?: boolean; className?: string }> = ({
  children,
  quiet,
  className = '',
}) => (
  <span className={`plaque ${quiet ? 'plaque--quiet' : ''} ${className}`}>
    <span className="civic">{children}</span>
  </span>
);

/* A door is a button or link with an arched head and a terracotta threshold. */
export const Door: React.FC<{
  to: string;
  tone?: 'iron' | 'terra' | 'marble';
  children: React.ReactNode;
  className?: string;
  arrow?: boolean;
}> = ({ to, tone = 'terra', children, className = '', arrow = true }) => (
  <Link to={to} className={`door door--${tone} ${className}`}>
    <span>{children}</span>
    {arrow && <ArrowRight className="w-4 h-4" aria-hidden="true" />}
  </Link>
);

/*
  The facade that opens every inner page: a full-width plaster field,
  the H1 in civic Bodoni, the page's plaque pinned to the right pillar.
*/
export const PageFacade: React.FC<{
  plaster: Plaster;
  plaque?: React.ReactNode;
  title: React.ReactNode;
  children?: React.ReactNode;
  aside?: React.ReactNode;
}> = ({ plaster, plaque, title, children, aside }) => (
  <section className={`plaster-${plaster} limewash`}>
    <div className="portico pt-12 sm:pt-16 lg:pt-20 pb-14 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-x-12 items-start">
        <div className="lg:col-span-8 space-y-6">
          <h1 className="display-xl">{title}</h1>
          {children && <div className="space-y-5 lede">{children}</div>}
        </div>
        <div className="lg:col-span-4 lg:pillar-l lg:pl-10 flex flex-col items-start gap-6 lg:pt-1.5">
          {plaque && <Plaque>{plaque}</Plaque>}
          {aside}
        </div>
      </div>
    </div>
  </section>
);

/* A bay heading: plaque stacked above the heading, everything on the page's left edge. */
export const BayHeading: React.FC<{
  plaque?: React.ReactNode;
  title: React.ReactNode;
  as?: 'h2' | 'h3';
  size?: 'l' | 'm';
  children?: React.ReactNode;
  className?: string;
}> = ({ plaque, title, as = 'h2', size = 'l', children, className = '' }) => {
  const H = as;
  return (
    <div className={`max-w-3xl space-y-4 ${className}`}>
      {plaque && <Plaque quiet>{plaque}</Plaque>}
      <div className="space-y-3">
        <H className={size === 'l' ? 'display-l' : 'display-m'}>{title}</H>
        {children}
      </div>
    </div>
  );
};

/* The closing bay of a page: a framed panel on a coloured field. */
export const ClosingDoor: React.FC<{
  plaster?: Plaster;
  title: React.ReactNode;
  as?: 'h2' | 'h3';
  children?: React.ReactNode;
  actions: React.ReactNode;
}> = ({ plaster = 'rosa', title, as = 'h2', children, actions }) => {
  const H = as;
  return (
    <section className={`plaster-${plaster} limewash`}>
      <div className="portico py-16 sm:py-24">
        <div className="mx-auto max-w-3xl bg-marmo text-ferro border border-ferro/40 border-t-4 border-t-terracotta px-6 sm:px-14 py-12 sm:py-14 text-center">
          <H className="display-l">{title}</H>
          {children && <div className="mt-5 mx-auto max-w-xl text-[1.05rem] text-antracite">{children}</div>}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">{actions}</div>
        </div>
      </div>
    </section>
  );
};
