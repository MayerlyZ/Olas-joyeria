import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const supportedLanguages = ["es", "en"];
const defaultLanguage = "es";

export function middlewareI18n(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Verificar si la ruta ya tiene un idioma
  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // Si no tiene idioma, agregar el idioma por defecto o del navegador
  const locale = req.headers
    .get("accept-language")
    ?.split(",")[0]
    .split("-")[0]
    .toLowerCase() || defaultLanguage;

  const supportedLocale = supportedLanguages.includes(locale)
    ? locale
    : defaultLanguage;

  // Redirigir a la ruta con el idioma
  return NextResponse.redirect(
    new URL(`/${supportedLocale}${pathname}`, req.url)
  );
}

export async function middleware(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Proteger rutas /admin
  if (pathname.includes("/admin")) {
    const token = await getToken({
      req,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      // Redirigir a login si no hay sesión
      const locale = pathname.split("/")[1];
      return NextResponse.redirect(new URL(`/${locale}/auth`, req.url));
    }

    // Verificar si es admin
    if ((token as any).role !== "admin") {
      const locale = pathname.split("/")[1];
      return NextResponse.redirect(new URL(`/${locale}/`, req.url));
    }
  }

  // Aplicar middleware i18n
  const pathnameHasLanguage = supportedLanguages.some(
    (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
  );

  if (!pathnameHasLanguage && pathname !== "/api") {
    const locale = req.headers
      .get("accept-language")
      ?.split(",")[0]
      .split("-")[0]
      .toLowerCase() || defaultLanguage;

    const supportedLocale = supportedLanguages.includes(locale)
      ? locale
      : defaultLanguage;

    return NextResponse.redirect(
      new URL(`/${supportedLocale}${pathname === "/" ? "" : pathname}`, req.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
