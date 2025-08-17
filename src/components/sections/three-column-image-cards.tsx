"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const utilities = [
    {
        title: "Premium Quality Assurance",
        description:
            "All products are sourced from certified manufacturers and undergo rigorous quality testing",
        image:
            "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
        title: "Extensive Product Range",
        description:
            "Over 5000+ Ayurvedic products including medicines, herbs, oils, and wellness supplements",
        image:
            "https://images.unsplash.com/photo-1594736797933-d0d7503ba3a9?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
    {
        title: "Nationwide Distribution",
        description:
            "Efficient supply chain covering 25+ states with timely delivery and competitive pricing",
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0",
    },
];

const ThreeColumnImageCards = () => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto">
                <div className="m-auto mb-24 max-w-xl text-center">
                    <h2 className="mb-6 text-3xl font-semibold lg:text-5xl font-display text-foreground">
                        Why Choose Shivam Sales Corporation
                    </h2>
                    <p className="m-auto max-w-3xl text-lg lg:text-xl text-muted-foreground">
                        Three decades of excellence in Ayurvedic wholesale distribution
                    </p>
                    <div className="mt-8 flex flex-col items-center space-y-2">
                        <Button
                            className="rounded-xl bg-primary hover:bg-emerald text-primary-foreground"
                            size="lg"
                        >
                            Learn More About Us
                        </Button>
                    </div>
                </div>
                <div className="mt-11 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {utilities.map((utility, index) => (
                        <Card key={index} className="border-0 pt-0 bg-card">
                            <img
                                src={utility.image}
                                alt={utility.title}
                                className="aspect-video w-full rounded-t-xl object-cover"
                            />
                            <div className="p-5">
                                <p className="mb-1 font-medium text-card-foreground font-display">{utility.title}</p>
                                <p className="text-muted-foreground">{utility.description}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { ThreeColumnImageCards };