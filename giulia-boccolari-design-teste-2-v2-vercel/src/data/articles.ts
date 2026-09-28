// Dati degli articoli del blog "Risorse".
// Per aggiungere un nuovo articolo, aggiungi un nuovo oggetto a questo array
// seguendo la stessa struttura. Ricorda di aggiornare anche public/sitemap.xml
// con la nuova URL (https://giuliaboccolaripsicologa.it/risorse/<slug>).

export interface Article {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  // Ogni stringa dell'array "body" diventa un paragrafo separato nella pagina.
  body: string[];
  date: string; // formato leggibile, es. "12 marzo 2026"
  isoDate: string; // formato ISO per i dati strutturati, es. "2026-03-12"
  readTime: string;
  targetServiceUrl: string;
  targetServiceLabel: string;
}

export const ARTICLES: Article[] = [
  {
    slug: 'figlio-trattiene-tutto-scuola-esplode-casa',
    category: 'BAMBINI',
    title: 'Mio figlio trattiene tutto a scuola e poi esplode a casa: cosa può succedere?',
    excerpt:
      'Spesso i bambini investono molte energie per adattarsi alle richieste scolastiche. Riconoscere il sovraccarico permette di costruire spazi di decompressione efficaci a casa.',
    body: [
      'È una situazione che molti genitori raccontano con le stesse parole: "a scuola le maestre dicono che va tutto bene, ma appena entra in casa è un\'altra persona". Non è un\'incoerenza del bambino, e non significa che si comporti male apposta in un contesto e non nell\'altro.',
      'Durante la giornata scolastica, un bambino investe una quantità considerevole di energie per rispettare regole, gestire stimoli sensoriali, contenere emozioni e adattarsi al ritmo del gruppo. Per molti bambini, soprattutto quelli con maggiore sensibilità emotiva o sensoriale, questo sforzo di adattamento è più faticoso di quanto appaia dall\'esterno.',
      'La casa, essendo un ambiente percepito come sicuro, diventa spesso il luogo dove questa energia trattenuta trova finalmente spazio per esprimersi. Non è un caso che l\'esplosione avvenga proprio con le persone di cui il bambino si fida di più: è un segnale di fiducia, per quanto possa sembrare paradossale nel momento della crisi.',
      'Comprendere questo meccanismo non significa giustificare ogni comportamento, ma cambia il modo in cui possiamo rispondere. Invece di chiedersi "perché fa così solo con me?", può essere più utile chiedersi "di cosa ha bisogno per scaricare questa tensione in modo meno dirompente?".',
      'Costruire un momento di transizione tra scuola e casa — un decompression time fatto di silenzio, merenda tranquilla o gioco libero prima di richieste e domande — può ridurre l\'intensità di queste esplosioni. Quando il fenomeno è frequente o particolarmente intenso, un percorso psicologico può aiutare a comprendere il funzionamento specifico del bambino e a costruire strategie su misura, coinvolgendo quando utile anche la scuola.',
    ],
    date: '15 gennaio 2026',
    isoDate: '2026-01-15',
    readTime: '3 min',
    targetServiceUrl: '/eta-evolutiva',
    targetServiceLabel: 'Età evolutiva · Regolazione emotiva',
  },
  {
    slug: 'rabbia-bambini-emozione-comportamento',
    category: 'BAMBINI',
    title: 'Rabbia nei bambini: come distinguere emozione e comportamento?',
    excerpt:
      "Provare rabbia è legittimo; agire comportamenti distruttivi richiede invece alternative concrete. Come aiutare il bambino a riconoscere l'emozione prima dell'esplosione.",
    body: [
      'Uno degli equivoci più comuni nell\'educazione emotiva riguarda proprio la rabbia: la si tratta spesso come un problema da eliminare, quando in realtà è un\'emozione legittima quanto la gioia o la tristezza. Il problema non è mai l\'emozione in sé, ma il comportamento che ne consegue.',
      'Un bambino ha pieno diritto di sentirsi arrabbiato quando qualcosa non va come vorrebbe, quando percepisce un\'ingiustizia o quando si sente frustrato. Ciò che possiamo e dobbiamo aiutarlo a costruire sono alternative comportamentali più funzionali rispetto a urlare, colpire o rompere oggetti.',
      'Il primo passo è dare un nome a ciò che si prova. Molti bambini non dispongono ancora di un vocabolario emotivo sufficiente per distinguere rabbia, frustrazione, delusione o vergogna: tutto viene vissuto come un\'unica sensazione di disagio che esplode nel comportamento più immediato che conoscono.',
      'Lavorare sul riconoscimento dei segnali corporei che precedono l\'esplosione — il cuore che batte più forte, le mani che si stringono, il respiro che cambia — permette al bambino di intervenire prima che l\'emozione prenda completamente il sopravvento. È un lavoro che richiede tempo, ripetizione e pazienza da parte degli adulti di riferimento.',
      'Un aspetto importante è che questo lavoro non avviene "a freddo" nel momento della crisi, quando le capacità di ragionamento sono già sopraffatte, ma nei momenti di calma, attraverso attività, giochi e materiali visivi pensati per rendere concreto qualcosa che altrimenti resta astratto.',
    ],
    date: '22 gennaio 2026',
    isoDate: '2026-01-22',
    readTime: '4 min',
    targetServiceUrl: '/eta-evolutiva',
    targetServiceLabel: 'Età evolutiva · Comportamento e problem solving',
  },
  {
    slug: 'adhd-compiti-avvio-difficile',
    category: 'ADHD',
    title: 'ADHD e compiti: perché sa cosa deve fare ma non riesce a iniziare?',
    excerpt:
      "La fatica nell'avvio del compito non è pigrizia ma un aspetto del funzionamento delle funzioni esecutive. Strategie visive per superare l'inerzia iniziale.",
    body: [
      'È una delle situazioni più frustranti sia per i genitori che per il bambino stesso: sa perfettamente cosa deve fare, ha capito la consegna, ha persino il materiale sul tavolo, eppure passano venti minuti e il compito non è ancora iniziato. La reazione più naturale è pensare a un problema di volontà o di impegno.',
      'In realtà, per molti bambini e ragazzi con ADHD, la difficoltà non riguarda la comprensione del compito ma una specifica funzione esecutiva chiamata "avvio del compito" (task initiation). È come se il cervello sapesse la destinazione ma facesse fatica a mettere in moto il motore.',
      'Questa difficoltà si amplifica quando il compito è percepito come noioso, lungo o privo di una struttura chiara. Al contrario, attività stimolanti o con una scadenza imminente vengono spesso affrontate con sorprendente facilità: è la caratteristica "interest-based nervous system" spesso descritta nell\'ADHD.',
      'Alcune strategie pratiche possono ridurre questa fatica iniziale: spezzare il compito in passaggi molto piccoli e concreti, usare timer visivi che rendano tangibile il tempo, iniziare con la parte più semplice per creare un primo senso di movimento, oppure abbinare l\'avvio del compito a un rituale fisico (mettersi seduti in un modo specifico, accendere una lampada dedicata allo studio).',
      'È importante che questi strumenti vengano costruiti insieme al bambino o al ragazzo, e non semplicemente imposti dall\'esterno: la loro efficacia dipende molto dal grado in cui vengono sentiti come propri. Un percorso di psicoeducazione può aiutare a individuare quali strategie si adattano meglio al funzionamento specifico di quel bambino.',
    ],
    date: '29 gennaio 2026',
    isoDate: '2026-01-29',
    readTime: '4 min',
    targetServiceUrl: '/eta-evolutiva',
    targetServiceLabel: 'Età evolutiva · ADHD, autismo e neurodivergenze',
  },
  {
    slug: 'funzioni-esecutive-bambini-quotidianita',
    category: 'FUNZIONI ESECUTIVE',
    title: 'Funzioni esecutive nei bambini: cosa sono e come influenzano la quotidianità?',
    excerpt:
      'Memoria di lavoro, inibizione della risposta e flessibilità cognitiva: il "centro di controllo" del cervello alla base dello studio e dell\'autonomia.',
    body: [
      'Le funzioni esecutive sono spesso descritte come il "centro di controllo" del cervello: un insieme di processi cognitivi che ci permettono di pianificare, organizzare, ricordare informazioni temporaneamente, inibire risposte impulsive e adattarci a cambiamenti di contesto o di richiesta.',
      'Nei bambini, queste funzioni sono ancora in pieno sviluppo e maturano progressivamente fino all\'età adulta. Per questo motivo, difficoltà nelle funzioni esecutive non vanno lette come mancanza di impegno, ma come un aspetto del funzionamento cognitivo che può essere sostenuto e allenato.',
      'Tra le componenti principali troviamo la memoria di lavoro (trattenere e manipolare informazioni per il tempo necessario a completare un compito), l\'inibizione della risposta (fermare un impulso o un comportamento automatico) e la flessibilità cognitiva (passare da un\'attività o un pensiero a un altro senza rimanere bloccati).',
      'Nella vita quotidiana, queste funzioni si traducono in cose molto concrete: ricordarsi cosa mettere nello zaino, seguire una sequenza di istruzioni, passare da un\'attività ricreativa allo studio senza una crisi, organizzare il tempo per un compito lungo, o semplicemente aspettare il proprio turno senza interrompere.',
      'Quando queste difficoltà sono significative, il lavoro psicologico non punta a "correggere" il bambino, ma a costruire impalcature esterne — liste visive, routine strutturate, promemoria condivisi — che compensino temporaneamente ciò che il cervello non è ancora in grado di gestire autonomamente, favorendo nel tempo una maggiore indipendenza.',
    ],
    date: '5 febbraio 2026',
    isoDate: '2026-02-05',
    readTime: '5 min',
    targetServiceUrl: '/eta-evolutiva',
    targetServiceLabel: 'Età evolutiva · Funzioni esecutive, autonomie e scuola',
  },
  {
    slug: 'autismo-regolazione-emotiva-sovraccarico',
    category: 'AUTISMO',
    title: 'Autismo e regolazione emotiva: perché il sovraccarico può sembrare un "capriccio"?',
    excerpt:
      "Comprendere la differenza tra oppositorietà intenzionale e disregolazione sensoriale o cognitiva aiuta la famiglia e la scuola a rispondere senza giudizio.",
    body: [
      'Una delle incomprensioni più frequenti riguardo ai bambini e ragazzi autistici riguarda la lettura dei loro momenti di crisi: agli occhi di un osservatore esterno, un\'esplosione improvvisa può sembrare un capriccio, un tentativo di manipolare la situazione o una reazione sproporzionata rispetto a quanto accaduto.',
      'In realtà, in molti casi si tratta di un sovraccarico sensoriale o cognitivo accumulato nel tempo: rumori, luci, richieste sociali, cambi di programma non annunciati possono rappresentare, per un sistema nervoso con una sensibilità diversa, uno sforzo di elaborazione molto più intenso di quanto immaginiamo.',
      'Quando questo carico supera la capacità del bambino di gestirlo, il sistema nervoso può reagire con quello che in letteratura viene chiamato "meltdown": una risposta involontaria, non pianificata e non finalizzata a ottenere qualcosa, molto diversa da un comportamento oppositivo intenzionale.',
      'Distinguere tra le due situazioni non è sempre semplice, ma è fondamentale per rispondere in modo efficace: mentre un comportamento oppositivo può beneficiare di conseguenze chiare e coerenti, un meltdown richiede innanzitutto una riduzione degli stimoli e uno spazio sicuro per recuperare la regolazione.',
      'Osservare cosa precede questi momenti — quali contesti, quali richieste, quali stimoli sensoriali — permette di individuare pattern utili sia per prevenire il sovraccarico sia per costruire strategie di auto-regolazione più efficaci, in un lavoro che coinvolge famiglia, scuola e, quando presente, il percorso psicologico.',
    ],
    date: '12 febbraio 2026',
    isoDate: '2026-02-12',
    readTime: '4 min',
    targetServiceUrl: '/eta-evolutiva',
    targetServiceLabel: 'Età evolutiva · ADHD, autismo e neurodivergenze',
  },
  {
    slug: 'quando-coinvolgere-la-scuola',
    category: 'GENITORI',
    title: 'Quando coinvolgere la scuola in un percorso psicologico?',
    excerpt:
      "Condividere obiettivi e strategie con gli insegnanti crea una rete coerente intorno al bambino, massimizzando i progressi conquistati in studio.",
    body: [
      'Molti genitori si chiedono se e quando sia opportuno parlare con gli insegnanti del percorso psicologico intrapreso dal proprio figlio. Non esiste una risposta valida per ogni situazione, ma alcuni criteri possono orientare questa decisione.',
      'In generale, il coinvolgimento della scuola diventa particolarmente utile quando le difficoltà che il bambino porta nel percorso si manifestano anche, o soprattutto, nel contesto scolastico: comportamento, gestione delle emozioni, funzioni esecutive, autonomie o relazioni con i compagni.',
      'Il bambino non vive in compartimenti stagni: strategie efficaci a casa ma assenti a scuola — o viceversa — rischiano di generare confusione e di ridurre l\'efficacia complessiva dell\'intervento. Quando insegnanti e famiglia condividono lo stesso linguaggio e gli stessi obiettivi, il bambino riceve messaggi coerenti in ogni contesto della sua giornata.',
      'Questo non significa che ogni dettaglio del percorso psicologico debba essere condiviso con la scuola: la scelta di cosa comunicare, quando e con quale livello di dettaglio, resta sempre della famiglia, ed è importante che avvenga con il consenso e, quando possibile, con il coinvolgimento attivo del bambino stesso.',
      'Un buon punto di partenza può essere un confronto mirato su obiettivi concreti e osservabili, evitando di trasformare l\'insegnante in un "co-terapeuta" ma valorizzandolo come osservatore privilegiato di un contesto fondamentale nella vita del bambino.',
    ],
    date: '19 febbraio 2026',
    isoDate: '2026-02-19',
    readTime: '3 min',
    targetServiceUrl: '/come-lavoro',
    targetServiceLabel: 'Come lavoro · Collaborazione con la scuola',
  },
  {
    slug: 'valutazione-funzionamento-prima-intervento',
    category: 'BAMBINI',
    title: 'Quando può essere utile una valutazione del funzionamento prima di iniziare un intervento?',
    excerpt:
      'Mappare punti di forza, bisogni prioritari e modalità di regolazione permette di progettare un percorso realmente individualizzato e monitorabile.',
    body: [
      'Prima di costruire qualsiasi intervento, è naturale chiedersi: da dove iniziare? Per molte famiglie, il punto di partenza più solido è una fase dedicata alla comprensione del funzionamento del bambino, prima ancora di definire le strategie da mettere in campo.',
      'Questa fase di osservazione e valutazione psicologica e funzionale non va confusa con una valutazione diagnostica completa: il suo obiettivo non è etichettare, ma comprendere punti di forza, difficoltà, modalità di regolazione emotiva e comportamentale, funzioni esecutive, autonomie e funzionamento nei diversi contesti di vita del bambino.',
      'Può essere utile in situazioni molto diverse tra loro: bambini con una diagnosi già ricevuta, per i quali si vuole tradurre l\'informazione diagnostica in obiettivi concreti; ma anche bambini senza alcuna diagnosi, che presentano difficoltà emotive, comportamentali, relazionali o scolastiche non ancora ben comprese.',
      'Il risultato di questa fase non è un\'etichetta, ma una mappa: quali sono i bisogni prioritari da affrontare per primi, quali risorse del bambino possono essere valorizzate, e quali obiettivi concreti e monitorabili possono orientare il lavoro successivo.',
      'Quando durante questa fase emergono elementi che richiedono un approfondimento diagnostico specialistico, il percorso viene orientato alla collaborazione con le figure professionali competenti, mantenendo sempre la famiglia informata e coinvolta in ogni passaggio.',
    ],
    date: '26 febbraio 2026',
    isoDate: '2026-02-26',
    readTime: '4 min',
    targetServiceUrl: '/come-lavoro',
    targetServiceLabel: 'Come lavoro · Valutazione del funzionamento',
  },
  {
    slug: 'psicologa-famiglia-scuola-educatori-rete',
    category: 'RETE',
    title: 'Psicologa, famiglia, scuola ed educatori: perché lavorare nella stessa direzione?',
    excerpt:
      "Il bambino vive in molteplici contesti: allineare il linguaggio, gli strumenti visivi e le aspettative rende l'intervento solido e duraturo.",
    body: [
      'Un bambino attraversa, nell\'arco di una settimana, molteplici contesti: la famiglia, la scuola, eventuali attività extrascolastiche, talvolta altri professionisti coinvolti nel suo percorso. Ognuno di questi contesti ha un proprio linguaggio, le proprie aspettative e i propri strumenti.',
      'Quando questi contesti procedono in direzioni scollegate — strategie diverse, aspettative incoerenti, linguaggi differenti per descrivere lo stesso comportamento — il bambino rischia di ricevere messaggi contraddittori, che rendono più difficile generalizzare qualsiasi progresso conquistato in uno specifico ambiente.',
      'Il lavoro in rete non significa che tutti i professionisti debbano fare la stessa cosa, ma che condividano una direzione comune: obiettivi coerenti, un linguaggio condiviso per descrivere il funzionamento del bambino, e una comunicazione regolare che permetta di aggiustare la rotta quando necessario.',
      'Questo tipo di collaborazione avviene sempre con il consenso della famiglia, che resta il fulcro decisionale di ogni scelta riguardante il percorso del proprio figlio. Educatrici, insegnanti e altri professionisti vengono coinvolti quando le caratteristiche del caso lo richiedono e quando questo coinvolgimento può realmente rendere più efficace il lavoro svolto.',
      'L\'obiettivo finale non è semplicemente "fare rete" come principio astratto, ma costruire una comprensione condivisa del bambino che si traduca in strategie coerenti e applicabili in ogni contesto della sua quotidianità.',
    ],
    date: '5 marzo 2026',
    isoDate: '2026-03-05',
    readTime: '3 min',
    targetServiceUrl: '/come-lavoro',
    targetServiceLabel: 'Come lavoro · Lavoro in rete',
  },
  {
    slug: 'adhd-adulto-dopo-la-diagnosi',
    category: 'ADULTI ND',
    title: 'ADHD adulto: cosa può essere utile dopo la diagnosi?',
    excerpt:
      'Ricevere una diagnosi è il primo passo; capire come riorganizzare giornate, studio o lavoro con strategie compatibili con il proprio profilo è quello decisivo.',
    body: [
      'Ricevere una diagnosi di ADHD in età adulta porta spesso con sé un misto di sollievo e disorientamento: sollievo perché finalmente si trova un nome a difficoltà vissute per anni, disorientamento perché la diagnosi da sola non dice cosa fare nella pratica, il giorno dopo, per gestire diversamente la propria vita.',
      'È qui che entra in gioco un lavoro di psicoeducazione: non un trattamento della diagnosi in sé, ma un percorso per comprendere più a fondo il proprio funzionamento specifico e tradurlo in strategie concrete, costruite sulla propria vita reale e non su un manuale generico.',
      'Le aree su cui spesso si concentra questo lavoro riguardano l\'organizzazione del tempo e delle priorità, la gestione della procrastinazione, la regolazione emotiva nei momenti di sovraccarico, e la rilettura della propria storia personale e professionale alla luce di questa nuova consapevolezza.',
      'Un aspetto spesso sottovalutato riguarda il lavoro sul senso di colpa e sull\'autostima: molte persone arrivano alla diagnosi dopo anni di autogiudizio per difficoltà che oggi sanno essere legate al proprio funzionamento neurologico, non a una mancanza di volontà o di valore personale.',
      'L\'obiettivo di questo percorso non è "correggere" l\'ADHD, ma costruire una relazione più consapevole e meno conflittuale con il proprio modo di funzionare, individuando strategie realmente compatibili con esso invece di continuare a insistere su metodi pensati per un funzionamento diverso dal proprio.',
    ],
    date: '12 marzo 2026',
    isoDate: '2026-03-12',
    readTime: '5 min',
    targetServiceUrl: '/neurodivergenze-adulti',
    targetServiceLabel: 'Neurodivergenze adulte · Psicoeducazione ADHD',
  },
  {
    slug: 'masking-autismo-adulto',
    category: 'ADULTI ND',
    title: "Masking nell'autismo adulto: adattarsi agli altri può diventare faticoso",
    excerpt:
      'Lo sforzo continuo di camuffare i propri tratti per conformarsi alla neurotipicità comporta un costo energetico elevato. Come ritrovare autenticità e sostenibilità.',
    body: [
      'Il termine "masking" descrive lo sforzo, spesso inconsapevole, che molte persone autistiche mettono in atto per nascondere o attenuare i propri tratti autistici e apparire più conformi alle aspettative sociali neurotipiche: mantenere un contatto visivo che risulta scomodo, sopprimere movimenti autoregolatori, copiare espressioni e comportamenti altrui.',
      'Questo comportamento si sviluppa spesso fin dall\'infanzia o dall\'adolescenza, come strategia di adattamento a un ambiente sociale che percepisce come poco accogliente verso la propria diversità. Nel breve termine può funzionare, permettendo una maggiore accettazione sociale, ma ha un costo energetico che tende ad accumularsi nel tempo.',
      'Molte persone che ricorrono in modo intenso al masking descrivono una stanchezza cronica difficile da spiegare agli altri, momenti di crollo emotivo dopo situazioni sociali apparentemente semplici, e una difficoltà crescente a riconoscere quali siano i propri bisogni e le proprie preferenze autentiche, ormai sepolte sotto anni di adattamento.',
      'Un percorso di psicoeducazione può aiutare a riconoscere quando e come si mette in atto il masking, a valutarne consapevolmente i costi e i benefici in specifiche situazioni, e a individuare contesti e relazioni in cui sia possibile ridurlo, recuperando energie e un maggiore senso di autenticità.',
      'Non si tratta di eliminare completamente ogni forma di adattamento sociale, cosa peraltro non realistica per nessuno, ma di ritrovare un equilibrio più sostenibile tra le richieste dell\'ambiente esterno e il rispetto del proprio funzionamento reale.',
    ],
    date: '19 marzo 2026',
    isoDate: '2026-03-19',
    readTime: '4 min',
    targetServiceUrl: '/neurodivergenze-adulti',
    targetServiceLabel: 'Neurodivergenze adulte · Masking e riconoscimento dei bisogni',
  },
  {
    slug: 'dopo-chirurgia-bariatrica-cambiamento',
    category: 'BARIATRICA',
    title: 'Dopo la chirurgia bariatrica: perché il cambiamento non riguarda solo il peso?',
    excerpt:
      "L'intervento chirurgico trasforma il corpo, ma il vissuto emotivo, l'immagine corporea e le relazioni richiedono un tempo psicologico di adattamento.",
    body: [
      'La chirurgia bariatrica produce, in un tempo relativamente breve, una trasformazione corporea che il resto della vita di una persona spesso non riesce a rincorrere alla stessa velocità. Il corpo cambia, ma l\'immagine che ne abbiamo dentro di noi, le abitudini relazionali costruite negli anni e il rapporto con il cibo richiedono un tempo di adattamento diverso.',
      'Non è raro che, superata l\'euforia iniziale per i primi risultati, emergano vissuti più complessi: difficoltà a riconoscersi nello specchio, spiazzamento di fronte all\'attenzione sociale diversa che il nuovo corpo attira, o persino un senso di lutto per un\'identità costruita, nel bene e nel male, attorno al proprio corpo precedente.',
      'Anche il rapporto con il cibo richiede una ricostruzione che va oltre l\'aspetto nutrizionale: per molte persone, il cibo aveva anche una funzione di regolazione emotiva, di conforto nei momenti difficili, di socialità. La chirurgia modifica drasticamente le possibilità fisiche legate all\'alimentazione, ma non elimina automaticamente il bisogno emotivo che il cibo talvolta soddisfaceva.',
      'Anche le relazioni possono attraversare una fase di riassestamento: partner, familiari e amici devono adattarsi a una persona che cambia, e talvolta questo cambiamento mette in luce dinamiche relazionali che prima restavano silenti.',
      'Un supporto psicologico nella fase pre o post chirurgica non sostituisce il percorso medico e nutrizionale, ma lo accompagna, offrendo uno spazio per elaborare questi vissuti e costruire un adattamento più consapevole e sostenibile ai cambiamenti fisici, emotivi e relazionali in corso.',
    ],
    date: '26 marzo 2026',
    isoDate: '2026-03-26',
    readTime: '4 min',
    targetServiceUrl: '/bariatrica',
    targetServiceLabel: 'Corpo e percorsi bariatrici · Supporto post chirurgia',
  },
  {
    slug: 'invecchiamento-attivo-risorse-cognitive',
    category: 'INVECCHIAMENTO',
    title: 'Invecchiamento attivo: cosa significa allenare le risorse cognitive nella vita quotidiana?',
    excerpt:
      "Stimolare memoria, attenzione e ragionamento senza medicalizzare l'età: esercizi pratici e momenti di socialità per preservare l'autonomia.",
    body: [
      'Parlare di invecchiamento attivo non significa negare i normali cambiamenti che accompagnano il passare degli anni, ma riconoscere che esistono margini concreti per mantenere attive le proprie risorse cognitive nella vita di tutti i giorni, senza per questo trasformare l\'invecchiamento fisiologico in una condizione da trattare come patologia.',
      'Memoria, attenzione, linguaggio e capacità di ragionamento traggono beneficio, come qualsiasi altra funzione, da un uso regolare e stimolante. Questo non significa necessariamente ricorrere a esercizi complessi o specialistici, ma integrare nella quotidianità attività che mantengano questi processi in movimento.',
      'La memoria autobiografica, ad esempio, può essere allenata attraverso il racconto e la condivisione di ricordi ed esperienze passate, un\'attività che ha anche un valore emotivo e relazionale importante. L\'attenzione e il ragionamento traggono beneficio da giochi, letture, cruciverba o semplicemente dalla gestione autonoma di compiti quotidiani complessi come organizzare la spesa o pianificare un piccolo viaggio.',
      'Un elemento spesso sottovalutato riguarda la dimensione sociale: la partecipazione a momenti di socialità, il confronto con altre persone, la sensazione di avere ancora un ruolo attivo nella propria comunità hanno un impatto significativo sul benessere cognitivo complessivo, oltre che su quello emotivo.',
      'Un percorso individuale o di gruppo dedicato al benessere cognitivo nell\'invecchiamento fisiologico può aiutare a costruire strategie personalizzate, valorizzando le risorse già presenti e offrendo strumenti pratici per l\'organizzazione della quotidianità, sempre nel rispetto dei limiti e dei tempi di ciascuna persona.',
    ],
    date: '2 aprile 2026',
    isoDate: '2026-04-02',
    readTime: '4 min',
    targetServiceUrl: '/invecchiamento-attivo',
    targetServiceLabel: 'Benessere cognitivo · Invecchiamento attivo',
  },
  {
    slug: 'memoria-attenzione-anziano-strategie',
    category: 'INVECCHIAMENTO',
    title: "Memoria e attenzione nell'anziano: strategie quotidiane per mantenersi mentalmente attivi",
    excerpt:
      'Piccole abitudini, ausili di memoria e attività autobiografiche per sostenere le funzioni cognitive e valorizzare le competenze presenti.',
    body: [
      'Dimenticare occasionalmente dove si è posato un oggetto, o il nome di una persona incontrata una sola volta, rientra nella normale esperienza di molte persone con l\'avanzare dell\'età, e non va automaticamente interpretato come segnale di un problema serio. È utile però imparare a costruire piccole abitudini che sostengano memoria e attenzione nella vita di tutti i giorni.',
      'Alcuni ausili molto semplici possono fare una differenza concreta: un\'agenda o un calendario visibile in un punto fisso della casa, un luogo dedicato sempre uguale per oggetti come chiavi o occhiali, promemoria scritti per gli appuntamenti importanti. Non si tratta di "stampelle" da vergognarsi di usare, ma di strumenti intelligenti che qualsiasi persona, a qualsiasi età, trarrebbe beneficio dall\'utilizzare.',
      'Le attività autobiografiche — raccontare e magari scrivere ricordi di momenti significativi della propria vita — rappresentano un doppio beneficio: da un lato allenano memoria e capacità narrativa, dall\'altro offrono un\'occasione di connessione con familiari e persone care, rafforzando il senso di identità e continuità personale.',
      'Mantenere un ritmo di attività quotidiane che richiedano attenzione e organizzazione — gestire autonomamente la spesa, seguire una ricetta, occuparsi di piccole incombenze pratiche — contribuisce a preservare l\'autonomia funzionale molto più di attività puramente passive.',
      'Quando durante queste attività quotidiane emergono segnali che destano preoccupazione — difficoltà significative e progressive, disorientamento frequente, cambiamenti marcati rispetto al funzionamento abituale della persona — è importante non minimizzare, ma orientarsi verso un approfondimento medico o neuropsicologico specialistico, che resta sempre il riferimento appropriato per queste situazioni.',
    ],
    date: '9 aprile 2026',
    isoDate: '2026-04-09',
    readTime: '3 min',
    targetServiceUrl: '/invecchiamento-attivo',
    targetServiceLabel: 'Benessere cognitivo · Mente attiva',
  },
];

export const CATEGORIES = [
  'TUTTI',
  'BAMBINI',
  'ADHD',
  'FUNZIONI ESECUTIVE',
  'AUTISMO',
  'GENITORI',
  'RETE',
  'ADULTI ND',
  'BARIATRICA',
  'INVECCHIAMENTO',
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelatedArticles(current: Article, max = 3): Article[] {
  const sameCategory = ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category === current.category
  );
  const others = ARTICLES.filter(
    (a) => a.slug !== current.slug && a.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, max);
}
