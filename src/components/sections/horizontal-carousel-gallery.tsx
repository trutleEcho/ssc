"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export interface HorizontalCarouselGalleryItem {
    id: string;
    title: string;
    description: string;
    href: string;
    image: string;
}

export interface HorizontalCarouselGalleryProps {
    title?: string;
    description?: string;
    items?: HorizontalCarouselGalleryItem[];
}

const data = [
    {
        id: "classical-medicines",
        title: "Classical Ayurvedic Medicines",
        description:
            "Traditional formulations based on ancient texts like Charaka Samhita and Sushruta Samhita, prepared with authentic methods and high-quality ingredients.",
        href: "/products/classical-medicines",
        image:
            "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: "herbal-raw-materials",
        title: "Herbal Raw Materials",
        description:
            "Premium quality dried herbs, powders, and botanical extracts sourced directly from certified organic farms across India.",
        href: "/products/herbal-raw-materials",
        image:
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: "oils-ghee",
        title: "Ayurvedic Oils & Ghee",
        description:
            "Therapeutic oils and medicated ghee prepared using traditional methods, perfect for massage, cooking, and therapeutic applications.",
        href: "/products/oils-ghee",
        image:
            "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: "health-supplements",
        title: "Health Supplements",
        description:
            "Modern Ayurvedic supplements in convenient capsule and tablet forms, combining traditional wisdom with contemporary packaging.",
        href: "/products/health-supplements",
        image:
            "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: "cosmetic-personal-care",
        title: "Cosmetic & Personal Care",
        description:
            "Natural skincare and personal care products formulated with Ayurvedic herbs for healthy, radiant skin and overall wellness.",
        href: "/products/cosmetic-personal-care",
        image:
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
        id: "wellness-teas-extracts",
        title: "Wellness Teas & Extracts",
        description:
            "Herbal tea blends and concentrated extracts designed to support daily wellness, immunity, and specific health goals.",
        href: "/products/wellness-teas-extracts",
        image:
            "https://images.unsplash.com/photo-1556909114-4f6bdc3d3130?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
];

const HorizontalCarouselGallery = ({
                                       title = "Explore Our Product Categories",
                                       description = "Discover our comprehensive range of authentic Ayurvedic products, from traditional medicines to modern wellness solutions.",
                                       items = data,
                                   }: HorizontalCarouselGalleryProps) => {
    const [carouselApi, setCarouselApi] = useState<CarouselApi>();
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!carouselApi) {
            return;
        }
        const updateSelection = () => {
            setCanScrollPrev(carouselApi.canScrollPrev());
            setCanScrollNext(carouselApi.canScrollNext());
            setCurrentSlide(carouselApi.selectedScrollSnap());
        };
        updateSelection();
        carouselApi.on("select", updateSelection);
        return () => {
            carouselApi.off("select", updateSelection);
        };
    }, [carouselApi]);

    return (
        <section className="p-18 bg-background">
            <div className="container mx-auto">
                <div className="mb-8 flex items-end justify-between md:mb-14 lg:mb-16">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
                            {title}
                        </h2>
                        <p className="max-w-lg text-muted-foreground">{description}</p>
                    </div>
                    <div className="hidden shrink-0 gap-2 md:flex">
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollPrev();
                            }}
                            disabled={!canScrollPrev}
                            className="disabled:pointer-events-auto hover:bg-primary/10 hover:text-primary"
                        >
                            <ArrowLeft className="size-5" />
                        </Button>
                        <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => {
                                carouselApi?.scrollNext();
                            }}
                            disabled={!canScrollNext}
                            className="disabled:pointer-events-auto hover:bg-primary/10 hover:text-primary"
                        >
                            <ArrowRight className="size-5" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-full">
                <Carousel
                    setApi={setCarouselApi}
                    opts={{
                        breakpoints: {
                            "(max-width: 768px)": {
                                dragFree: true,
                            },
                        },
                    }}
                >
                    <CarouselContent className="">
                        {items.map((item) => (
                            <CarouselItem
                                key={item.id}
                                className="max-w-[320px] pl-[20px] lg:max-w-[360px]"
                            >
                                <div className="group rounded-xl cursor-pointer">
                                    <div className="group relative h-full min-h-[27rem] max-w-full overflow-hidden rounded-2xl md:aspect-5/4 lg:aspect-16/9">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="absolute h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 h-full bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-white md:p-8">
                                            <div className="mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4">
                                                {item.title}
                                            </div>
                                            <div className="mb-8 line-clamp-2 md:mb-12 lg:mb-9">
                                                {item.description}
                                            </div>
                                            <div className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm transition-all duration-200 hover:bg-primary hover:scale-105">
                                                Explore Category
                                                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <div className="mt-8 flex justify-center gap-2">
                    {items.map((_, index) => (
                        <button
                            key={index}
                            className={`h-1 rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? "w-8 bg-primary"
                                    : "w-4 bg-primary/30 hover:bg-primary/50"
                            }`}
                            onClick={() => carouselApi?.scrollTo(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { HorizontalCarouselGallery };