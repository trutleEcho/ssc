"use client";

import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";

const navigation = [
    {
        title: "Products",
        links: [
            { name: "Medicines", href: "#" },
            { name: "Herbs", href: "#" },
            { name: "Oils", href: "#" },
            { name: "Supplements", href: "#" },
        ],
    },
    {
        title: "Company",
        links: [
            { name: "About Us", href: "#" },
            { name: "Quality Policy", href: "#" },
            { name: "Certifications", href: "#" },
            { name: "Careers", href: "#" },
        ],
    },
    {
        title: "Support",
        links: [
            { name: "Contact", href: "#" },
            { name: "Wholesale Inquiry", href: "#" },
            { name: "Partner Registration", href: "#" },
            { name: "FAQs", href: "#" },
        ],
    }
];

const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
];

export const Footer = () => {
    return (
        <section className="bg-background py-12 sm:py-16 border-t">
            <div className="container mx-auto max-w-6xl px-5 md:px-6">
                {/* Logo and newsletter section */}
                <div className="mb-10 flex flex-col items-start justify-between gap-10 md:flex-row">
                    <div className="w-full max-w-full sm:max-w-sm">
                        <Link href="/public">
                            <div className="mb-6">
                                <h2 className="text-2xl font-bold text-foreground">Shivam Sales Corporation</h2>
                                <p className="text-sm text-muted-foreground mt-1">
                                    Ayurvedic Wholesale & Distribution Partner
                                </p>
                            </div>
                        </Link>

                        {/* Newsletter subscription */}
                        <div className="mb-8">
                            <h3 className="text-lg font-semibold mb-2">Wholesale Updates</h3>
                            <p className="text-base text-muted-foreground mb-4">
                                Subscribe to receive new catalogs, seasonal offers,
                                and bulk pricing updates directly in your inbox.
                            </p>
                        </div>

                        <div className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row">
                            <Input
                                id="newsletter-email"
                                name="email"
                                type="email"
                                placeholder="Your email"
                            />
                            <Button className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 py-2 text-base font-medium whitespace-nowrap text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 sm:h-10 sm:px-4 sm:text-sm">
                                Subscribe
                            </Button>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="w-full border-t pt-8 sm:border-t-0 sm:pt-0">
                        <nav className="grid w-full grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 md:w-auto md:grid-cols-3">
                            {navigation.map((section) => (
                                <div key={section.title} className="min-w-[140px]">
                                    <h2 className="mb-4 text-lg font-semibold">
                                        {section.title}
                                    </h2>
                                    <ul className="space-y-3.5">
                                        {section.links.map((link) => (
                                            <li key={link.name}>
                                                <a
                                                    href={link.href}
                                                    className="inline-block py-1 text-muted-foreground transition-colors duration-200 hover:text-foreground active:text-primary"
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 border-t pt-10">
                {/* Bottom Section */}
                <div className="flex flex-col items-center justify-between gap-6">
                    <div className="order-1 mb-6 flex w-full items-center justify-center gap-6 sm:justify-start md:order-2 md:mb-0 md:w-auto">
                        {socialLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                aria-label={`Visit our ${link.name} page`}
                                className="rounded-full p-3 text-muted-foreground transition-all duration-200 hover:bg-primary hover:text-white active:bg-primary/70"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <link.icon className="h-6 w-6 sm:h-5 sm:w-5" />
                            </a>
                        ))}
                    </div>

                    {/* Copyright - Below on mobile, left on desktop */}
                    <p className="order-2 text-center text-sm text-muted-foreground sm:text-left md:order-1">
                        © {new Date().getFullYear()} Shivam Sales Corporation. All rights reserved.
                    </p>

                    {/*Version Details*/}
                    <Link href="/changelog" className="text-muted-foreground sm:text-left">
                        v0.0.2
                    </Link>

                </div>

                {/* Right: Developer Info */}
                <div className="flex flex-col items-center gap-2 text-center bg-muted-foreground/20 rounded-lg p-6 px-12">
                    <span className="text-xs">Developed & maintained by</span>
                    <div className="flex flex-col items-center">
                        <Link
                            href="https://corsw.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Image
                                src="/CORSW_BG_LIGHT_64x64.png" // use a neutral or default logo for static rendering
                                alt="Corner Softwares"
                                width={48}
                                height={48}
                                priority
                                className="block dark:hidden"
                            />
                        </Link>
                        <Tooltip>
                            <TooltipTrigger className="mt-2">
                                <Link
                                    href="https://corsw.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="underline font-semibold text-foreground"
                                >
                                    Corner Softwares
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>We don’t just build. We architect.</p>
                            </TooltipContent>
                        </Tooltip>
                        <a
                            className="font-extralight"
                            href="mailto:trichup20@gmail.com"
                        >
                            Contact Developer
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};