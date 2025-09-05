import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    // Optional: keep default locale unprefixed
    localePrefix: 'as-needed',
    pathnames: {
        '/': '/',
        '/products': '/products'
    }
});

export type Locale = (typeof routing.locales)[number];
