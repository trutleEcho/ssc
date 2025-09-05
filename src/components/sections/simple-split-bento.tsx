import { Leaf, Shield, Heart } from "lucide-react";

const SimpleSplitBento = () => {
    return (
        <section className="container p-18 bg-background">
            <h2 className="text-2xl font-semibold md:text-4xl text-foreground">
                Our Ayurvedic Wholesaler Story
            </h2>
            <div className="mt-12 mb-6 flex flex-col gap-6 xl:flex-row">
                {/* Heritage & Network */}
                <div className="flex w-full flex-col justify-between overflow-hidden rounded-2xl border bg-card px-12 pt-12 text-card-foreground shadow-sm">
                    <div className="mb-12 flex flex-col gap-3">
                        <Leaf className="size-6 text-primary" />
                        <h4 className="text-xl font-semibold">Strong Heritage & Wide Network</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            As a trusted Ayurvedic wholesaler, we combine centuries-old wisdom with a modern
                            supply network. Our partnerships with authentic manufacturers allow us to deliver
                            premium Ayurvedic products to retailers and distributors across India.
                        </p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=center"
                        alt="Wholesaler network delivering Ayurvedic products"
                        className="max-h-52 w-full rounded-t-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>

                {/* Trusted Quality */}
                <div className="w-full overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm">
                    <div className="pr-12 pl-12 xl:pl-0">
                        <img
                            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=center"
                            alt="Wholesaler ensuring modern quality checks"
                            className="max-h-48 w-full rounded-br-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                        />
                    </div>
                    <div className="flex flex-col gap-3 p-12">
                        <Shield className="size-6 text-primary" />
                        <h4 className="text-xl font-semibold">Assured Quality at Scale</h4>
                        <p className="text-base font-normal text-muted-foreground">
                            We ensure every product we wholesale meets strict quality standards. From raw herbs
                            to packaged Ayurvedic medicines, our quality checks guarantee that retailers receive
                            only safe, authentic, and certified Ayurvedic products in bulk.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Growth */}
            <div className="flex w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm md:flex-row">
                <div className="flex w-full flex-col p-12 md:gap-3">
                    <Heart className="size-6 text-primary" />
                    <h4 className="text-xl font-semibold">Our Wholesale Mission</h4>
                    <p className="text-base font-normal text-muted-foreground">
                        We aim to bridge the gap between Ayurvedic manufacturers and retailers by offering
                        bulk supplies at competitive prices. Our mission is to make Ayurvedic products
                        accessible nationwide, empowering pharmacies, distributors, and shop owners to
                        deliver wellness to their customers.
                    </p>
                </div>
                <div className="w-full pl-12 md:pt-12">
                    <img
                        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
                        alt="Wholesale team ensuring nationwide Ayurvedic supply"
                        className="max-h-96 w-full rounded-tl-md object-cover shadow-[0_0_10px_rgb(0,0,0,0.2)]"
                    />
                </div>
            </div>
        </section>
    );
};

export { SimpleSplitBento };
