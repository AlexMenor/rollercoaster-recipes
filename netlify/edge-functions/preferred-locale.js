const localeCookie = /(?:^|;\s*)rr_locale=(en|tr|es)(?:;|$)/;

/** Redirect an explicit language choice before Netlify's language fallback. */
export default function redirectPreferredLocale(request) {
  const locale = request.headers.get('cookie')?.match(localeCookie)?.[1];
  if (!locale) return;

  return Response.redirect(new URL(`/${locale}`, request.url), 302);
}

export const config = { path: '/' };
