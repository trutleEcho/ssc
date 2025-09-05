"use client";

import Link from "next/link";

import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    return (
        <section className="p-4 pb-18 lg:px-24 overflow-hidden bg-background">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

            <div className="container relative mx-auto">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col items-center text-left lg:items-start space-y-6">
                        <Badge
                            variant="outline"
                            className="bg-primary text-primary-foreground border-0 hover:bg-emerald transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 py-2"
                        >
                            <Sparkles className="mr-2 size-3.5 text-primary-foreground" />
                            Trusted Ayurvedic Wholesaler Since 1995
                            <ArrowUpRight className="ml-2 size-4" />
                        </Badge>

                        <h1 className="text-pretty text-4xl font-bold lg:text-5xl xl:text-6xl leading-tight">
                            Premium Ayurvedic Products for{" "}
                            <span className="text-primary font-bold">
                Your Business Success
              </span>
                        </h1>

                        <p className="text-muted-foreground max-w-xl lg:text-lg leading-relaxed">
                            Shivam Sales Corporation is your reliable partner for authentic Ayurvedic medicines, herbs, and wellness products. We supply quality-assured products to retailers, pharmacies, and wellness centers across India.
                        </p>

                        <div className="flex w-full flex-col justify-center gap-3 sm:flex-row lg:justify-start pt-2">
                            <Link href="/products">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto group bg-primary hover:bg-emerald text-primary-foreground border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-full px-8"
                            >
                                View Product Catalog
                                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            </Link>
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="w-full sm:w-auto group bg-surface hover:bg-secondary text-foreground border border-border rounded-full px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                >
                                    Get Wholesale Pricing
                                    <ArrowUpRight className="ml-2 size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-emerald/20 rounded-3xl blur-xl opacity-30" />
                        <img
                            src="https://images.pexels.com/photos/3999424/pexels-photo-3999424.jpeg"
                            alt="Authentic Ayurvedic herbs, medicinal plants, and traditional wellness products arranged beautifully"
                            className="relative min-h-[500px] max-h-[800px] w-full rounded-3xl object-cover shadow-2xl ring-1 ring-black/5"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export { HeroSection };