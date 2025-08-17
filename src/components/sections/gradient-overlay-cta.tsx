import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const GradientOverlayCta = () => {
    return (
        <section className="py-32 bg-background">
            <div className="container mx-auto">
                <div className="flex h-[620px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.4)),url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
                    <div className="flex flex-col gap-8 p-4 text-center">
                        <div className="flex justify-center mb-4">
                            <div className="p-3 bg-primary/20 rounded-full backdrop-blur-sm">
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                        </div>
                        <h2 className="text-white text-5xl font-bold font-display">
                            Ready to Partner with Us?
                        </h2>
                        <p className="text-white text-lg font-body max-w-2xl">
                            Join thousands of businesses who trust Shivam Sales Corporation for their Ayurvedic product needs. Get competitive wholesale pricing and reliable service.
                        </p>
                        <div className="flex flex-col justify-center gap-2 sm:flex-row">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                                Request Wholesale Catalog
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-foreground">
                                Schedule Consultation
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { GradientOverlayCta };