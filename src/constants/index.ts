export const TECH_SKILLS = [
  'React',
  'React Native',
  'TypeScript',
  'Firebase',
  'Cloud Firestore',
  'Xcode',
  'Android Studio',
  'Jest',
  'JavaScript',
  'Bluetooth LE',
  'Bluetooth Classic',
  'RN Maps',
  'RN Hook Form',
  'XState',
  'Zustand',
  'ZOD',
  'Redux',
  'RN Testing Library',
  'PostgreSQL',
  'REST APIs',
  'Next.js',
  'Next-Auth',
  'Supabase',
  'Tailwind',
  'Google Analytics',
  'SEO Optimization',
  'Responsive Design',
  'AI Integration',
  'HubSpot',
  'HubL',
  'HubDb',
  'Salesforce',
  'Django',
  'Expo',
  'OAuth2.0',
  'Upstash',
  'Twilio',
];

export const SOFT_SKILLS = [
  'Agile Development',
  'User Access & Permissions',
  'Image Optimization',
  'Navigation Routing',
  'CTAs and Lead Conversion',
  'Client Collaboration',
  'Figma',
];

export const NAV_ITEMS = [
  { href: '/contact', label: 'CONTACT' },
  { href: '/projects', label: 'PROJECTS' },
  { href: '/', label: 'ABOUT ME' },
] as const;

export const PERSONAL_LINKS = {
  linkedin: 'https://linkedin.com/in/myles-pillay-361868123',
  email: 'mailto:mpillaydev@gmail.com',
  spotify: 'https://open.spotify.com/artist/2R49hNeoiCEqa3obgMLV5E?si=GcrDwpr4TAuLOYEizmxtSw',
  github: 'https://github.com/MylesPillay',
} as const;

export const NAV_ICON_COLOR = '#A7F3D0';

export type ProjectSection = 'Overview' | 'Objectives' | 'Tech Stack' | 'Key Features' | 'Outcomes';
