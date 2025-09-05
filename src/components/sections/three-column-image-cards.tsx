export const revalidate = false;

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const utilities = [
    {
        title: "Quality Assurance",
        description:
            "All products are sourced from certified manufacturers and verified brands",
        image:
            "https://cdn.pixabay.com/photo/2021/09/18/20/50/truffles-6636081_1280.jpg",
    },
    {
        title: "Extensive Product Range",
        description:
            "Over 5000+ Ayurvedic products including medicines, herbs, oils, and wellness supplements",
        image:
            "https://cdn.pixabay.com/photo/2015/07/15/19/59/health-846863_1280.jpg",
    },
    {
        title: "Nationwide Distribution",
        description:
            "Efficient supply chain covering 5+ states with timely delivery and competitive pricing",
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
                        <Link href="/about">
                            <Button
                                className="rounded-xl bg-primary hover:bg-emerald/80 hover:scale-105 text-primary-foreground"
                                size="lg"
                            >
                                Learn More About Us
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className="mt-11 px-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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