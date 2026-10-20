export interface SiteLink {
  label: string;
  href: string;
  external?: boolean;
}

export const site = {
  name: 'Ismail Džafić',
  role: 'Computer Science student',
  headline: 'QA, API testing & security-minded engineering',
  location: 'Sarajevo, Bosnia and Herzegovina',
  email: '',
  github: 'https://github.com/idzafic1',
  linkedin: '',
  cvPath: '/cv/Ismail_Dzafic_CV.pdf',
  bandit: {
    site: 'https://bandit-writeups.vercel.app',
    repo: 'https://github.com/idzafic1/bandit-writeups',
  },
  availability: '',
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Writeups', href: '/writeups' },
    { label: 'About', href: '/about' },
  ] satisfies SiteLink[],
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/idzafic1', external: true },
  ] satisfies SiteLink[],
} as const;

export function isConfigured(value: string) {
  return value.length > 0 && !value.startsWith('TODO');
}
