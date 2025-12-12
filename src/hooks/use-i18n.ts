'use client';

import { useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getTranslation, type Language, languages, getAllLanguages } from '@/i18n/config';

export const useI18n = () => {
  const pathname = usePathname() || '/es';
  const router = useRouter();

  // Extrae el idioma de la URL (/es/... o /en/...)
  const currentLanguage: Language = (pathname.split('/')[1] as Language) || 'es';

  // Función para obtener traducciones
  const t = useCallback(
    (key: string): string => {
      return getTranslation(currentLanguage, key);
    },
    [currentLanguage]
  );

  // Función para cambiar de idioma
  const changeLanguage = useCallback(
    (lang: Language) => {
      const newPathname = pathname.replace(/^\/(es|en)/, `/${lang}`);
      router.push(newPathname);
    },
    [pathname, router]
  );

  return {
    t,
    currentLanguage,
    changeLanguage,
    languages,
    allLanguages: getAllLanguages(),
  };
};
