const SimpleGridStats = () => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto">
                <h1 className="text-center text-4xl font-semibold lg:text-6xl font-display">
                    Trusted by Businesses Across India
                </h1>
                <div className="grid gap-10 pt-9 md:grid-cols-3 lg:gap-0 lg:pt-20">
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Years of Experience
                        </p>
                        <p className="pt-4 text-7xl font-semibold lg:pt-10 text-primary">30+</p>
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Serving the Ayurvedic industry with dedication
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Product Varieties
                        </p>
                        <p className="pt-4 text-7xl font-semibold lg:pt-10 text-primary">5000+</p>
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Comprehensive range of Ayurvedic products
                        </p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm font-medium text-muted-foreground">
                            Happy Clients
                        </p>
                        <p className="pt-4 text-7xl font-semibold lg:pt-10 text-primary">2500+</p>
                        <p className="text-2xl font-semibold text-muted-foreground">
                            Retailers and pharmacies nationwide
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { SimpleGridStats };