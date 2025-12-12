'use client';

import { useI18n } from '@/hooks/use-i18n';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

/**
 * Componente de ejemplo que demuestra cómo usar las traducciones con i18n
 * Este componente está traducido al español e inglés
 */
export const I18nExample = () => {
  const { t, currentLanguage, changeLanguage, allLanguages } = useI18n();

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('common.language')}</CardTitle>
          <CardDescription>
            {t('common.language')}: {currentLanguage.toUpperCase()}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Mostrar idioma actual */}
          <div className="p-4 bg-accent/10 rounded-lg">
            <p className="text-sm font-medium">
              {currentLanguage === 'es' 
                ? 'Idioma actual: Español' 
                : 'Current language: English'}
            </p>
          </div>

          {/* Botones para cambiar idioma */}
          <div className="flex gap-2">
            {allLanguages.map((lang) => (
              <Button
                key={lang}
                onClick={() => changeLanguage(lang)}
                variant={currentLanguage === lang ? 'default' : 'outline'}
                className={currentLanguage === lang ? 'bg-accent' : ''}
              >
                {lang.toUpperCase()}
              </Button>
            ))}
          </div>

          {/* Ejemplos de traducciones */}
          <div className="space-y-3 pt-4 border-t">
            <div>
              <p className="text-xs text-gray-500">{t('common.home')}</p>
              <p className="font-medium">{t('common.home')}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">{t('hero.title')}</p>
              <p className="font-medium">{t('hero.title')}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">{t('auth.email')}</p>
              <p className="font-medium">{t('auth.email')}</p>
            </div>
            <div>
              <p className="text-xs text-gray-500">{t('cart.title')}</p>
              <p className="font-medium">{t('cart.title')}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
