import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, part1, part2] = url.pathname.split('/');
  if (part1 === 'el') return 'el';
  if (part2 === 'en' || part2 === 'el') return part2 as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}