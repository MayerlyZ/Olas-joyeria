# Guía de Internacionalización (i18n)

Este proyecto implementa internacionalización para soportar múltiples idiomas (Español e Inglés).

## 📁 Estructura

```
src/
├── i18n/
│   ├── config.ts                 # Configuración principal de i18n
│   └── locales/
│       ├── es.json              # Traducciones al español
│       └── en.json              # Traducciones al inglés
├── hooks/
│   └── use-i18n.ts              # Hook para usar traducciones
├── components/
│   └── LanguageSwitcher.tsx     # Selector de idioma
└── middleware.ts                 # Middleware para enrutar idiomas
```

## 🚀 Uso

### 1. En Componentes Client

```tsx
'use client';

import { useI18n } from '@/hooks/use-i18n';

export const MiComponente = () => {
  const { t, currentLanguage, changeLanguage } = useI18n();

  return (
    <div>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.subtitle')}</p>
      <button onClick={() => changeLanguage('en')}>
        {t('common.english')}
      </button>
    </div>
  );
};
```

### 2. En Componentes Server

Para componentes server, necesitas pasar el idioma como prop:

```tsx
import { defaultLanguage } from '@/i18n/config';

interface Props {
  lang?: Language;
}

export const MiComponente = ({ lang = defaultLanguage }: Props) => {
  const title = getTranslation(lang, 'hero.title');
  
  return <h1>{title}</h1>;
};
```

## 🌐 Rutas Soportadas

Las rutas ahora incluyen el idioma:

- `/es/` - Página en español (por defecto)
- `/en/` - Página en inglés
- `/es/productos` - Productos en español
- `/en/products` - Productos en inglés
- `/es/admin` - Admin en español
- `/en/admin` - Admin en inglés

## 📝 Agregar Nuevas Traducciones

### 1. Agregar a los archivos JSON

**src/i18n/locales/es.json:**
```json
{
  "miSección": {
    "miClave": "Mi texto en español"
  }
}
```

**src/i18n/locales/en.json:**
```json
{
  "miSección": {
    "miClave": "My text in English"
  }
}
```

### 2. Usar en componentes

```tsx
const { t } = useI18n();
const texto = t('miSección.miClave');
```

## 🔄 Cambiar Idioma

### Con el Hook useI18n

```tsx
const { changeLanguage } = useI18n();

// Cambiar a inglés
changeLanguage('en');

// Cambiar a español
changeLanguage('es');
```

### Con el Componente LanguageSwitcher

```tsx
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export const Header = () => {
  return (
    <header>
      <nav>
        {/* Otras cosas... */}
        <LanguageSwitcher />
      </nav>
    </header>
  );
};
```

## 🛠️ Detección de Idioma

El sistema automáticamente:
1. Detecta el idioma preferido del navegador (desde el header `Accept-Language`)
2. Valida que sea soportado (es, en)
3. Usa español como idioma por defecto si no es soportado
4. Redirige a la URL con el idioma

## 💡 Mejores Prácticas

### ✅ Hacer

```tsx
// Usar el hook en componentes client
const { t } = useI18n();
<h1>{t('hero.title')}</h1>
```

### ❌ No Hacer

```tsx
// No hardcodear textos en idioma específico
<h1>Bienvenida a Olas Joyería</h1>
```

## 🔍 Fallback de Traducciones

Si una clave no existe en español, automáticamente intenta obtenerla del inglés como fallback:

```tsx
// Si 'es.json' no tiene esta clave, busca en 'en.json'
const texto = t('sección.claveNoExistente');
```

## 📊 Estructura de Traducciones Recomendada

```json
{
  "common": {
    "home": "...",
    "products": "..."
  },
  "header": {
    "welcome": "...",
    "admin": "..."
  },
  "products": {
    "title": "...",
    "addToCart": "..."
  },
  "admin": {
    "dashboard": "...",
    "products": "..."
  }
}
```

## 🎯 Próximos Pasos

1. Actualizar componentes existentes para usar `useI18n()`
2. Agregar más idiomas (si es necesario)
3. Configurar SEO multiidioma
4. Agregar hreflang tags para SEO

## ⚠️ Notas Importantes

- El idioma por defecto es **español** (`es`)
- Las rutas siempre incluyen el prefijo de idioma
- El middleware automáticamente redirige a la URL con idioma
- Los componentes client deben usar `useI18n()`
- Los componentes server deben recibir el idioma como prop
