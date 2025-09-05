// app/[locale]/layout.tsx
import { NextIntlClientProvider } from 'next-intl';
import getRequestConfig from '@/i18n/request';
import type { ReactNode } from 'react';
import Header from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";

type LocaleLayoutProps = {
    children: ReactNode;
    params: Promise<{ locale: string }>; // 👈 params is async in Next.js 15
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
    // ✅ Await params before using
    const { locale } = await params;

    const { messages } = await getRequestConfig({
        locale,
        requestLocale: Promise.resolve(locale),
    });

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            <main className="py-24">
                {children}
            </main>
            <Footer/>
        </NextIntlClientProvider>
    );
}
