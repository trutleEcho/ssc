import type {Metadata} from "next";
import "./globals.css";
import ErrorReporter from "@/components/ErrorReporter";
import {ThemeProvider} from "@/components/providers/ThemeProvider";
import StructuredData, {organizationStructuredData, websiteStructuredData} from "@/components/seo/StructuredData";
import Header from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";

export const metadata: Metadata = {
    title: {
        default: "SSC - Ayurvedic Super Stockist",
        template: "%s | SSC",
    },
    description: "Discover the timeless healing power of Ayurveda through our carefully curated collection of natural products, rooted in 5000 years of traditional wisdom.",
    keywords: [
        "Ayurveda",
        "Natural wellness",
        "Herbal medicine",
        "Traditional healing",
        "Holistic health",
        "Natural products",
        "Indian herbs",
        "Wellness supplements",
    ],
    authors: [{name: "Corner Softwares"}],
    creator: "Corner Softwares",
    publisher: "Corner Softwares",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL("https://ssc.com"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://cornerayurveda.com",
        siteName: "Shivam Sales Corporation",
        title: "CA - Ayurvedic Heritage & Natural Wellness",
        description: "Discover the timeless healing power of Ayurveda through our carefully curated collection of natural products.",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CA - Ayurvedic Heritage",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CA - Ayurvedic Heritage & Natural Wellness",
        description: "Discover the timeless healing power of Ayurveda through our carefully curated collection of natural products.",
        images: ["/images/twitter-image.jpg"],
        creator: "@cornerayurveda",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    verification: {
        google: "your-google-verification-code",
        yandex: "your-yandex-verification-code",
    },
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en" suppressHydrationWarning>
        <head>
            <StructuredData data={organizationStructuredData}/>
            <StructuredData data={websiteStructuredData}/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Cinzel:wght@400..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Afacad:ital,wght@0,400..700;1,400..700&family=Cinzel:wght@400..900&family=Epilogue:ital,wght@0,100..900;1,100..900&family=Jura:wght@300..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"/>
        </head>
        <body className="font-sans antialiased">
        <ErrorReporter/>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange={false}
            >
                {children}
            </ThemeProvider>
        </body>
        </html>
    );
}
