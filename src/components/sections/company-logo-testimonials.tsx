import React from "react";

import { Card } from "@/components/ui/card";

const testimonials = [
    {
        logo: {
            src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=150&h=60&fit=crop&crop=center",
            alt: "MediCare Pharmacy Chain logo",
            width: 58,
            height: 22,
        },
        quote:
            "Shivam Sales Corporation has been our trusted partner for over 5 years. Their consistent product quality and reliable supply chain have made them indispensable to our pharmacy operations across 15 locations.",
        author: {
            name: "Dr. Rajesh Sharma",
            role: "Owner, MediCare Pharmacy Chain",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Dr%20Rajesh%20Sharma",
        },
    },
    {
        logo: {
            src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=60&fit=crop&crop=center",
            alt: "Wellness Plus Centers logo",
            width: 54,
            height: 22,
        },
        quote:
            "Their competitive wholesale pricing and timely delivery have significantly improved our margins. The team understands our needs and consistently delivers quality Ayurvedic products that our customers trust.",
        author: {
            name: "Priya Patel",
            role: "Operations Manager, Wellness Plus Centers",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Priya%20Patel",
        },
    },
    {
        logo: {
            src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=60&fit=crop&crop=center",
            alt: "Natural Health Stores logo",
            width: 60,
            height: 22,
        },
        quote:
            "The extensive product range and exceptional customer support set them apart. From rare Ayurvedic herbs to popular wellness products, they have everything we need under one roof with professional service.",
        author: {
            name: "Amit Kumar",
            role: "Retail Store Owner, Natural Health Stores",
            image: "https://api.dicebear.com/9.x/adventurer/svg?seed=Amit%20Kumar",
        },
    },
];

const CompanyLogoTestimonials = () => {
    return (
        <section className="p-18 bg-background">
            <div className="border-y border-border">
                <div className="container flex flex-col gap-6 py-4 max-lg:border-x lg:py-8">
                    <h2 className="text-3xl leading-tight tracking-tight md:text-4xl lg:text-6xl font-[var(--font-display)] text-foreground">
                        What Our Wholesale Partners Say
                    </h2>
                    <p className="max-w-[600px] tracking-[-0.32px] text-muted-foreground font-[var(--font-body)]">
                        Trusted by retailers, pharmacies, and wellness centers across India
                    </p>
                </div>
            </div>

            <div className="container mt-10 grid gap-8 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
                {testimonials.map((testimonial, index) => (
                    <Card
                        key={index}
                        className="flex flex-col gap-6 rounded-md bg-card p-6 shadow-sm border-border"
                    >
                        <img
                            src={testimonial.logo.src}
                            alt={testimonial.logo.alt}
                            width={testimonial.logo.width}
                            height={testimonial.logo.height}
                            className="object-contain dark:invert"
                        />

                        <blockquote className="text-muted-foreground text-lg font-normal italic font-[var(--font-body)]">{`"${testimonial.quote}"`}</blockquote>

                        <div className="mt-auto flex items-center gap-4">
                            <img
                                src={testimonial.author.image}
                                alt={`${testimonial.author.name}'s profile picture`}
                                width={48}
                                height={48}
                                className="rounded-full object-cover"
                            />
                            <div>
                                <p className="text-lg tracking-[-0.36px] font-[var(--font-display)] text-foreground">
                                    {testimonial.author.name}
                                </p>
                                <p className="text-muted-foreground font-[var(--font-body)]">
                                    {testimonial.author.role}
                                </p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export { CompanyLogoTestimonials };