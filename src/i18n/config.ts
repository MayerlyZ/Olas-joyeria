import es from './locales/es.json';
import en from './locales/en.json';

export type Language = 'es' | 'en';

export const languages: Record<Language, string> = {
  es: 'Español',
  en: 'English',
};

export const defaultLanguage: Language = 'es';

export const translations: Record<Language, typeof es> = {
  es,
  en,
};

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let current: any = translations[lang];

  for (const k of keys) {
    current = current?.[k];
  }

  // Si no encuentra la traducción, retorna la clave en inglés por defecto
  if (!current && lang !== 'en') {
    return getTranslation('en', key);
  }

  return current || key;
};

export const getAllLanguages = (): Language[] => Object.keys(translations) as Language[];
