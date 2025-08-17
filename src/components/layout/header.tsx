"use client";

import { Menu, X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";

const NAV_LOGO = {
    url: "https://www.orchids.app",
    src: "/SSC_Label.png",
    alt: "Shivam Sales Corporation logo",
    title: "Shivam Sales Corporation",
};

const NAV_ITEMS = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Quality", link: "/quality" },
    { name: "Contact", link: "/contact" },
];

const Header = () => {
    const pathname = usePathname();
    const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);

    const indicatorRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLUListElement>(null);

    // sync with current route
    useEffect(() => {
        const current = NAV_ITEMS.find((item) => item.link === pathname);
        if (current) setActiveItem(current.name);
    }, [pathname]);

    // move active indicator
    useEffect(() => {
        const updateIndicator = () => {
            const activeEl = document.querySelector(
                `[data-nav-item="${activeItem}"]`
            ) as HTMLElement;

            if (activeEl && indicatorRef.current && menuRef.current) {
                const menuRect = menuRef.current.getBoundingClientRect();
                const itemRect = activeEl.getBoundingClientRect();

                indicatorRef.current.style.width = `${itemRect.width}px`;
                indicatorRef.current.style.left = `${
                    itemRect.left - menuRect.left
                }px`;
            }
        };
        updateIndicator();
        window.addEventListener("resize", updateIndicator);
        return () => window.removeEventListener("resize", updateIndicator);
    }, [activeItem]);

    return (
        <section className="py-4 sticky top-0 z-10 bg-gradient-to-t from-transparent via-background/50 to-background">
            <nav className="container flex items-center justify-between">
                {/* Left WordMark */}
                <a href={NAV_LOGO.url} className="flex items-center gap-2">
                    <Image
                        src={NAV_LOGO.src}
                        alt={NAV_LOGO.alt}
                        height={150}
                        width={256}
                    />
                </a>

                {/* Desktop Menu */}
                <NavigationMenu className="hidden lg:block">
                    <NavigationMenuList
                        ref={menuRef}
                        className="relative flex items-center gap-6 rounded-4xl px-8 py-3"
                    >
                        {NAV_ITEMS.map((item) => (
                            <NavigationMenuItem key={item.name}>
                                <Link
                                    href={item.link}
                                    data-nav-item={item.name}
                                    className={`group relative cursor-pointer text-sm font-medium transition-colors ${
                                        activeItem === item.name
                                            ? "text-foreground"
                                            : "text-muted-foreground"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            </NavigationMenuItem>
                        ))}
                        {/* Active Indicator */}
                        <div
                            ref={indicatorRef}
                            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
                        />
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Mobile Menu */}
                <MobileNav activeItem={activeItem} />

                {/* CTA */}
                <div className="hidden lg:flex items-center gap-2">
                    <Button
                        size="sm"
                        className="h-10 py-2.5 text-sm font-normal bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                        Get Wholesale Quote
                    </Button>
                </div>
            </nav>
        </section>
    );
};

export { Header };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => (
    <div className="relative h-6 w-6">
        <Menu
            className={`absolute transition-all duration-300 ${
                isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
        />
        <X
            className={`absolute transition-all duration-300 ${
                isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
        />
    </div>
);

const MobileNav = ({ activeItem }: { activeItem: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="block lg:hidden">
            <Popover open={isOpen} onOpenChange={setIsOpen}>
                <PopoverTrigger asChild>
                    <button aria-label="Toggle Menu">
                        <AnimatedHamburger isOpen={isOpen} />
                    </button>
                </PopoverTrigger>

                <PopoverContent
                    align="end"
                    className="relative -left-4 -top-4 block w-screen max-w-md overflow-hidden rounded-xl p-0 lg:hidden"
                >
                    <ul className="bg-background text-foreground w-full py-4">
                        {NAV_ITEMS.map((navItem) => (
                            <li key={navItem.name}>
                                <Link
                                    href={navItem.link}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-colors ${
                                        activeItem === navItem.name
                                            ? "border-primary text-foreground"
                                            : "text-muted-foreground hover:text-foreground border-transparent"
                                    }`}
                                >
                                    {navItem.name}
                                </Link>
                            </li>
                        ))}
                        <li className="flex flex-col px-7 py-2">
                            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                Get Wholesale Quote
                            </Button>
                        </li>
                    </ul>
                </PopoverContent>
            </Popover>
        </div>
    );
};
