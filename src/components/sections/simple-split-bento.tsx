"use client";

import { Leaf, Shield, Heart } from "lucide-react";

const SimpleSplitBento = () => {
    return (
        <section className="container py-32 bg-background">
            <h2 className="text-2xl font-semibold md:text-4xl text-foreground">
                Our Ayurvedic Journey
            </h2>
            <div className="mt-12 mb-6 flex flex-col gap-6 xl:flex-row">
                <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border bg-card px-12 pt-12 text-card-foreground shadow-sm">
                    <div className="mb-12 flex flex-col gap-3">
                        <Leaf className="size-6 text-primary" />
                        <h4 className="text-xl font-semibold">Heritage & Tradition</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Honoring centuries-old Ayurvedic wisdom passed down through generations.
                            We preserve traditional formulations while ensuring authenticity in every product.
                        </p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
                        alt="Traditional Ayurvedic herbs and ancient wisdom"
                        className="max-h-52 w-full rounded-t-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>
                <div className="w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
                    <div className="pr-12 pl-12 xl:pl-0">
                        <img
                            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center"
                            alt="Modern quality testing facility and standards"
                            className="max-h-48 w-full rounded-br-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-12">
                        <Shield className="size-6 text-primary" />
                        <h4 className="text-xl font-semibold">Modern Quality Standards</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            Contemporary testing protocols and quality assurance ensure every product
                            meets international standards while maintaining traditional efficacy.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm md:flex-row">
                <div className="flex w-full flex-col p-12 md:gap-3">
                    <Heart className="size-6 text-primary" />
                    <h4 className="text-xl font-semibold">Our Mission</h4>
                    <p className="text-base font-normal text-muted-foreground">
                        Committed to making authentic Ayurvedic products accessible to businesses
                        nationwide. We bridge the gap between traditional wellness and modern commerce,
                        empowering retailers and distributors with premium quality products that honor
                        the ancient science of Ayurveda.
                    </p>
                </div>
                <div className="w-full pl-12 md:pt-12">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
                        alt="Our team and modern facility dedicated to Ayurvedic excellence"
                        className="max-h-96 w-full rounded-tl-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>
            </div>
        </section>
    );
};

export { SimpleSplitBento };