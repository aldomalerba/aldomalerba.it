/**
 * Contenuti del sito, centralizzati e tipizzati.
 * Aggiorna qui testi, esperienze, competenze e contatti: i componenti leggono da questo file.
 * I punti marcati con TODO sono placeholder da completare con i tuoi dati.
 */

export type NavLink = { label: string; href: string }

export type Experience = {
  period: string
  role: string
  company: string
  points: string[]
}

export type Service = {
  title: string
  description: string
}

export type SkillGroup = { title: string; items: string[] }

export type ProcessStep = { n: string; title: string; description: string }

export type ContactLink = {
  label: string
  value: string
  href: string
  /** true per aprire in nuova scheda (link esterni) */
  external?: boolean
}

export const site = {
  name: 'Aldo Malerba',
  url: 'https://aldomalerba.it',
  role: 'Software Developer per prodotti digitali affidabili e in crescita',
  description:
    'Aldo Malerba aiuta aziende e team di prodotto a costruire e far evolvere applicazioni web e backend mantenibili, trasformando esigenze concrete in software affidabile. TypeScript, NestJS, React, AWS e Kotlin con TDD ed Extreme Programming.',
  locale: 'it_IT',
  cv: '/cv_malerba_aldo.pdf',
}

export const nav: NavLink[] = [
  { label: 'chi_sono', href: '#chi-sono' },
  { label: 'esperienza', href: '#esperienza' },
  { label: 'servizi', href: '#servizi' },
  { label: 'come_lavoro', href: '#come-lavoro' },
  { label: 'competenze', href: '#competenze' },
  { label: 'contatti', href: '#contatti' },
]

export const hero = {
  eyebrow: 'whoami',
  title: 'Aldo Malerba',
  tagline: 'Software Developer per prodotti digitali affidabili e in crescita',
  intro:
    'Aiuto aziende e team di prodotto a costruire e far evolvere applicazioni web e backend mantenibili, trasformando esigenze concrete in software affidabile. Lavoro direttamente con il team, dall’idea al deploy, con un approccio iterativo e attento alla qualità del codice.',
  /** blocco "identity" mostrato nell'hero come snippet di codice */
  code: {
    filename: 'aldo.ts',
    identity: [
      { key: 'ruolo', value: 'Sviluppatore software' },
      { key: 'luogo', value: 'Brescia, IT' },
      { key: 'esperienza', value: '8 anni' },
      { key: 'focus', value: 'full stack · DDD · TDD' },
      { key: 'ai', value: 'acceleratore, non scorciatoia' },
    ],
    stack: ['TypeScript', 'NestJS', 'React', 'AWS', 'Kotlin'],
  },
  primaryCta: { label: 'Raccontami il progetto', href: '#contatti' },
  secondaryCta: { label: 'Come lavoro', href: '#come-lavoro' },
}

export const about = {
  title: 'Chi sono',
  paragraphs: [
    'Sono uno sviluppatore software con 8 anni di esperienza, con base a Brescia. Aiuto aziende e team di prodotto a trasformare esigenze concrete in prodotti e servizi software affidabili, contribuendo sia alla costruzione iniziale sia all’evoluzione di sistemi esistenti.',
    'Da circa cinque anni ho fatto mie le pratiche dell’Extreme Programming (Test-Driven Development, pair programming, refactoring continuo) e più di recente il Domain-Driven Design. Credo nel codice pulito, ben testato e scritto pensando a chi lo leggerà dopo.',
    'Uso l’AI come supporto nel flusso di lavoro: mi aiuta a esplorare alternative, preparare il lavoro e verificare alcune ipotesi. Resta però uno strumento: architettura, test e qualità del codice restano decisioni mie.',
  ],
}

export const experiences: Experience[] = [
  {
    period: '2025 - oggi',
    role: 'Sviluppatore software',
    company: 'viteSicure',
    points: [
      'In una startup, in un team di 2-3 sviluppatori a diretto contatto con il business.',
      'Approfondimento di Domain-Driven Design, NestJS e React.',
      'Sviluppo di un server MCP (Model Context Protocol) in NestJS.',
      'Sviluppo assistito da AI integrato nel flusso di lavoro quotidiano.',
    ],
  },
  {
    period: '2021 - 2025',
    role: 'Agile Software Developer',
    company: 'Claranet Italia',
    points: [
      'Pratica Agile con delivery iterativa e incrementale, TDD e pair programming.',
      'Sviluppo di software su AWS principalmente con Kotlin e JavaScript/TypeScript.',
    ],
  },
  {
    period: '2018 - 2021',
    role: 'Software Developer',
    company: 'Regesta',
    points: [
      'Sviluppo di applicazioni SAP, servizi cloud AWS e web app in Angular e SAPUI5.',
    ],
  },
]

export const services = {
  title: 'Come posso aiutarti',
  intro:
    'Intervengo quando serve costruire o far evolvere un prodotto digitale: frontend, applicazioni web, backend e API. Partiamo dalle esigenze del prodotto e arriviamo a una soluzione mantenibile, senza separare il lavoro tecnico dagli obiettivi di business.',
  items: [
    {
      title: 'Applicazioni web',
      description:
        'Un’applicazione web curata e veloce, chiavi in mano: mi occupo io di dominio, hosting e messa online, e le modifiche nel tempo sono comprese. Tu pensi al tuo lavoro.',
    },
    {
      title: 'Backend & API',
      description:
        'Servizi backend solidi e testati, su AWS, progettati per restare chiari e manutenibili mentre il progetto cresce.',
    },
    {
      title: 'Software su misura',
      description:
        'Dall’idea al deploy, con pratiche XP e attenzione alla qualità del codice lungo tutto il percorso.',
    },
  ] as Service[],
  // TODO: se vuoi, aggiungi qui prezzi/pacchetti o una riga di call-to-action dedicata.
}

export const skills = {
  title: 'Competenze & Stack',
  groups: [
    {
      title: 'Linguaggi & Framework',
      items: ['TypeScript', 'NestJS', 'React', 'Next.js', 'JavaScript', 'Kotlin', 'Java'],
    },
    {
      title: 'Cloud & Pratiche',
      items: ['AWS', 'Domain-Driven Design', 'TDD', 'Extreme Programming', 'Pair Programming', 'Scrum'],
    },
    {
      title: 'AI tooling',
      items: ['Uso consapevole dell’AI', 'Server MCP', 'Sviluppo assistito da AI'],
    },
  ] as SkillGroup[],
}

export const process = {
  eyebrow: 'come lavoro',
  title: 'Semplice, senza sorprese',
  lead: 'Lavori direttamente con uno sviluppatore software: obiettivi chiari, iterazioni brevi e decisioni tecniche comprensibili anche dal lato prodotto, dalla prima versione all’evoluzione del sistema.',
  steps: [
    {
      n: '01',
      title: 'Parliamo',
      description:
        'Mi racconti il progetto. Ti dico come lo affronterei, senza impegno.',
    },
    {
      n: '02',
      title: 'Vedi presto i risultati',
      description:
        'Con iterazioni brevi e pratiche XP ti mostro presto qualcosa di funzionante, non dopo mesi al buio.',
    },
    {
      n: '03',
      title: 'Consegno e resto disponibile',
      description:
        'Metto online tutto io. E le modifiche nel tempo non ti lasciano mai solo.',
    },
  ] as ProcessStep[],
}

export const contact = {
  title: 'Contatti',
  intro:
    'Raccontami il tuo progetto: ti rispondo con come lo affronterei. Gratis e senza impegno, di solito rispondo in giornata.',
  primary: [
    {
      label: 'whatsapp',
      value: 'Scrivimi su WhatsApp',
      href: 'https://wa.me/393486394308',
      external: true,
    },
    {
      label: 'email',
      value: 'aldo@aldomalerba.it',
      href: 'mailto:aldo@aldomalerba.it',
    },
  ] as ContactLink[],
  secondary: [
    {
      label: 'linkedin',
      value: 'in/aldomalerba',
      href: 'https://www.linkedin.com/in/aldomalerba',
      external: true,
    },
    {
      label: 'github',
      value: 'aldomalerba',
      href: 'https://github.com/aldomalerba',
      external: true,
    },
  ] as ContactLink[],
}
