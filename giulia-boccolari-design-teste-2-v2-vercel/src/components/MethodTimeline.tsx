import React, { useEffect, useRef, useState } from 'react';

interface MethodTimelineProps {
  variant?: 'steps' | 'pills';
  startWith?: 'comprendere' | 'osservare';
}

type StationState = 'ahead' | 'here' | 'walked';

/*
  The method as a portico: six arches walked in order.
  "pills": the arcade lights once, bay after bay, when it enters the view.
  "steps": the arcade stays pinned while the seven steps scroll past; a rail
  fills with the reader's position and every step already read stays marked.
*/
export const MethodTimeline: React.FC<MethodTimelineProps> = ({
  variant = 'steps',
  startWith = 'comprendere',
}) => {
  const arrowSequence =
    startWith === 'comprendere'
      ? [
          'COMPRENDERE',
          'OSSERVARE',
          'DEFINIRE OBIETTIVI',
          'INTERVENIRE',
          'GENERALIZZARE',
          'VERIFICARE',
        ]
      : [
          'OSSERVARE',
          'COMPRENDERE',
          'DEFINIRE OBIETTIVI',
          'INTERVENIRE',
          'GENERALIZZARE',
          'VERIFICARE',
        ];

  const stepsData = [
    {
      num: '01',
      title: 'Primo confronto con i genitori',
      desc: 'Storia, difficoltà, risorse, priorità e contesti in cui il problema emerge.',
    },
    {
      num: '02',
      title: 'Osservazione e comprensione del funzionamento',
      desc: 'Emozioni, comportamento, attenzione, funzioni esecutive, autonomie e modalità relazionali.',
    },
    {
      num: '03',
      title: 'Definizione di obiettivi concreti e condivisi',
      desc: 'Costruzione di una direzione di lavoro chiara, misurabile e concordata con la famiglia.',
    },
    {
      num: '04',
      title: 'Intervento individualizzato',
      desc: 'Attività, giochi, schede, materiali visivi, esercizi e strategie scelte in funzione degli obiettivi.',
    },
    {
      num: '05',
      title: 'Coinvolgimento dei genitori',
      desc: 'Favorire la generalizzazione delle competenze e delle strategie nella quotidianità.',
    },
    {
      num: '06',
      title: 'Confronto con scuola e professionisti',
      desc: 'Quando utile e con il consenso della famiglia, raccordo costante per una rete coerente.',
    },
    {
      num: '07',
      title: 'Verifica periodica degli obiettivi',
      desc: 'Monitoraggio costante dei progressi e aggiornamento condiviso del percorso.',
    },
  ];

  const arcadeRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLOListElement>(null);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Index of the station/step the visitor is standing in; -1 before the walk starts.
  const [lit, setLit] = useState(-1);
  const [stepHere, setStepHere] = useState(-1);
  const [progress, setProgress] = useState(0);

  // pills: light the arcade once, bay after bay
  useEffect(() => {
    if (variant !== 'pills' || !arcadeRef.current) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let timer: number | undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        if (reduce) {
          setLit(arrowSequence.length - 1);
          return;
        }
        let i = 0;
        setLit(0);
        timer = window.setInterval(() => {
          i += 1;
          setLit(i);
          if (i >= arrowSequence.length - 1) window.clearInterval(timer);
        }, 420);
      },
      { threshold: 0.6 }
    );
    io.observe(arcadeRef.current);
    return () => {
      io.disconnect();
      if (timer) window.clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  // steps: position along the list drives the rail and the pinned arcade
  useEffect(() => {
    if (variant !== 'steps') return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;
      const eye = window.innerHeight * 0.55;
      const rect = list.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (eye - rect.top) / rect.height));
      setProgress(p);
      let here = -1;
      stepRefs.current.forEach((el, i) => {
        if (el && el.getBoundingClientRect().top <= eye) here = i;
      });
      setStepHere(here);
      setLit(here < 0 ? -1 : Math.min(arrowSequence.length - 1, Math.floor(p * arrowSequence.length)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant]);

  const stationState = (i: number): StationState => {
    if (lit < 0 || i > lit) return 'ahead';
    if (i === lit && !(variant === 'pills' && lit === arrowSequence.length - 1)) return 'here';
    return 'walked';
  };

  const arcade = (
    <div ref={arcadeRef} className="bg-crema text-ferro">
      <div className="civic text-[0.7rem] text-salvia-deep mb-4">La sequenza del metodo di lavoro</div>
      <ol className="grid grid-cols-3 sm:grid-cols-6 border-l border-ferro" aria-label="La sequenza del metodo di lavoro">
        {arrowSequence.map((step, idx) => (
          <li key={idx} className="border-r border-b border-ferro sm:border-b-0 [&:nth-child(n+4)]:border-b-0 sm:[&:nth-child(n+4)]:border-b-0">
            <div className="px-1.5 sm:px-2 pt-2">
              <div
                data-state={stationState(idx)}
                className={`station arch ${variant === 'steps' ? 'h-16 sm:h-20' : 'h-20 sm:h-24'} flex flex-col items-center justify-end pb-3 px-1 text-center shadow-[inset_0_0_0_1px_var(--color-ferro)]`}
              >
                <span className="font-display text-[0.95rem] tabular-nums opacity-70">{idx + 1}</span>
                <span className="civic !text-[0.6rem] sm:!text-[0.64rem] !tracking-[0.1em] mt-1 leading-tight">
                  {step}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
      {/* The pavement under the arcade: an iron rail with the visitor's position */}
      <div className="relative h-[3px] bg-ferro/15 mt-0" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 bg-terracotta-deep transition-[width] duration-500 ease-out"
          style={{
            width:
              variant === 'steps'
                ? `${progress * 100}%`
                : `${lit < 0 ? 0 : ((lit + 1) / arrowSequence.length) * 100}%`,
          }}
        />
      </div>
    </div>
  );

  if (variant === 'pills') {
    return arcade;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-10">
      <div className="lg:col-span-12 lg:sticky lg:top-[5.5rem] z-10 bg-crema pt-3 pb-4">{arcade}</div>

      <ol ref={listRef} className="lg:col-span-12 relative pl-10 sm:pl-14">
        {/* The rail: one unbroken line, filled up to where the reader stands */}
        <div aria-hidden="true" className="absolute left-3 sm:left-5 top-2 bottom-2 w-px bg-ferro/30">
          <div
            className="absolute left-[-1px] top-0 w-[3px] bg-terracotta-deep origin-top"
            style={{ height: `${progress * 100}%` }}
          />
        </div>

        {stepsData.map((step, idx) => {
          const state: StationState = idx < stepHere ? 'walked' : idx === stepHere ? 'here' : 'ahead';
          return (
            <li
              key={idx}
              ref={(el) => {
                stepRefs.current[idx] = el;
              }}
              className="relative py-8 sm:py-10 border-b border-ferro/20 last:border-b-0 grid grid-cols-1 sm:grid-cols-12 gap-x-8 gap-y-2"
            >
              <span
                aria-hidden="true"
                data-state={state}
                className="station absolute -left-[2.2rem] sm:-left-[2.7rem] top-10 sm:top-12 w-3 h-3 shadow-[inset_0_0_0_1px_var(--color-ferro)] bg-crema"
              />
              <span className="sm:col-span-3 font-display text-terracotta-deep text-[1.05rem] tabular-nums pt-1">
                Passo {step.num}
              </span>
              <div className="sm:col-span-9 space-y-2">
                <h4 className="display-m text-ferro">{step.title}</h4>
                <p className="text-antracite measure">{step.desc}</p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
