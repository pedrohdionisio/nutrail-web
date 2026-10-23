import { type NextRequest, NextResponse } from 'next/server';
import { LOCALES } from 'shared/i18n/locales';
import { matchLocale } from 'shared/i18n/matchLocale';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = LOCALES.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    return;
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${matchLocale(request.headers.get('accept-language'))}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)']
};
