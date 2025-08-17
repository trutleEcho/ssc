import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Shield,
    CheckCircle,
    Award,
    Microscope,
    FileCheck,
    Truck,
    Users,
    Target,
    ArrowRight,
    Leaf,
    Beaker,
    Clock,
    Star,
    Building,
    Globe,
    ShieldCheck,
    BookOpen,
    Search,
    RefreshCw
} from "lucide-react";
import {Header} from "@/components/layout/header";

interface QualityStandard {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    features: string[];
}

interface QualityProcess {
    step: number;
    title: string;
    description: string;
    icon: React.ComponentType<any>;
}

interface Certification {
    name: string;
    issuer: string;
    badge: string;
    year: string;
}

export default function QualityPage() {
    const qualityStandards: QualityStandard[] = [
        {
            icon: Shield,
            title: "GMP Certified Manufacturing",
            description: "All our partner facilities maintain Good Manufacturing Practice certification",
            features: [
                "WHO-GMP certified facilities",
                "Regular facility audits",
                "Hygiene protocol compliance",
                "Equipment validation"
            ]
        },
        {
            icon: Leaf,
            title: "Traditional Ayurvedic Principles",
            description: "Authentic formulations following ancient Ayurvedic texts and methods",
            features: [
                "Classical text adherence",
                "Traditional processing methods",
                "Seasonal sourcing practices",
                "Panchakosha quality standards"
            ]
        },
        {
            icon: Microscope,
            title: "Laboratory Testing & Analysis",
            description: "Comprehensive testing protocols ensure product safety and efficacy",
            features: [
                "Heavy metal analysis",
                "Microbiological testing",
                "Active compound verification",
                "Pesticide residue screening"
            ]
        },
        {
            icon: Search,
            title: "Source Authentication",
            description: "Verified sourcing from authenticated suppliers and regions",
            features: [
                "Botanical identification",
                "Geographic origin verification",
                "Supplier certification",
                "Traceability documentation"
            ]
        },
        {
            icon: Building,
            title: "Storage & Handling Standards",
            description: "Optimal storage conditions maintaining product integrity",
            features: [
                "Climate-controlled facilities",
                "First-in-first-out system",
                "Contamination prevention",
                "Temperature monitoring"
            ]
        },
        {
            icon: FileCheck,
            title: "Batch Tracking & Documentation",
            description: "Complete documentation and traceability for every batch",
            features: [
                "Unique batch identification",
                "Complete audit trail",
                "Quality certificates",
                "Recall readiness"
            ]
        }
    ];

    const qualityProcess: QualityProcess[] = [
        {
            step: 1,
            title: "Raw Material Inspection",
            description: "Thorough inspection of all incoming raw materials including identity, purity, and quality parameters",
            icon: Search
        },
        {
            step: 2,
            title: "Laboratory Analysis",
            description: "Comprehensive testing for active compounds, contaminants, and authenticity verification",
            icon: Beaker
        },
        {
            step: 3,
            title: "Processing Oversight",
            description: "Continuous monitoring of manufacturing processes ensuring adherence to quality standards",
            icon: RefreshCw
        },
        {
            step: 4,
            title: "Final Product Testing",
            description: "Complete finished product analysis including stability, potency, and safety parameters",
            icon: CheckCircle
        },
        {
            step: 5,
            title: "Documentation & Release",
            description: "Quality approval and release with complete batch documentation and certificates",
            icon: FileCheck
        },
        {
            step: 6,
            title: "Distribution Monitoring",
            description: "Maintaining quality during storage, packaging, and transportation to customers",
            icon: Truck
        }
    ];

    const certifications: Certification[] = [
        {
            name: "ISO 9001:2015",
            issuer: "Quality Management System",
            badge: "ISO",
            year: "2023"
        },
        {
            name: "WHO-GMP",
            issuer: "World Health Organization",
            badge: "WHO",
            year: "2023"
        },
        {
            name: "AYUSH License",
            issuer: "Ministry of AYUSH",
            badge: "AYUSH",
            year: "2024"
        },
        {
            name: "FSSAI Registration",
            issuer: "Food Safety Authority",
            badge: "FSSAI",
            year: "2024"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-primary/10 via-emerald/5 to-accent/10 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-primary/10 rounded-full">
                                <ShieldCheck className="w-12 h-12 text-primary" />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald bg-clip-text text-transparent">
                            Uncompromising Quality
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                            At Shivam Sales Corporation, quality isn&#39;t just a standard—it&#39;s our sacred commitment.
                            Every product we distribute undergoes rigorous testing and quality assurance, ensuring
                            the authentic Ayurvedic tradition reaches you with complete integrity.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                <Award className="w-4 h-4 mr-2" />
                                ISO 9001:2015 Certified
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                <Shield className="w-4 h-4 mr-2" />
                                WHO-GMP Compliant
                            </Badge>
                            <Badge variant="secondary" className="px-4 py-2 text-sm">
                                <Leaf className="w-4 h-4 mr-2" />
                                AYUSH Licensed
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality Standards Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">Our Quality Standards</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Six pillars of excellence that define our commitment to delivering authentic, safe, and effective Ayurvedic products
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {qualityStandards.map((standard, index) => {
                            const IconComponent = standard.icon;
                            return (
                                <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-l-4 border-l-primary">
                                    <CardHeader className="pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                                                <IconComponent className="w-6 h-6 text-primary" />
                                            </div>
                                            <CardTitle className="text-lg">{standard.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground mb-4">{standard.description}</p>
                                        <ul className="space-y-2">
                                            {standard.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-center gap-2 text-sm">
                                                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quality Process Flow */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">Quality Assurance Process</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our systematic approach ensures quality at every step from sourcing to delivery
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {qualityProcess.map((process, index) => {
                                const IconComponent = process.icon;
                                return (
                                    <div key={index} className="relative group">
                                        <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/50">
                                            <CardHeader className="text-center pb-4">
                                                <div className="flex justify-center mb-4">
                                                    <div className="relative">
                                                        <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                                            <IconComponent className="w-8 h-8 text-primary" />
                                                        </div>
                                                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            {process.step}
                                                        </div>
                                                    </div>
                                                </div>
                                                <CardTitle className="text-xl mb-2">{process.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <p className="text-muted-foreground">{process.description}</p>
                                            </CardContent>
                                        </Card>

                                        {/* Arrow connector for larger screens */}
                                        {index < qualityProcess.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                                                <ArrowRight className="w-6 h-6 text-primary" />
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications Display */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">Quality Certifications</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Recognized by leading quality authorities and regulatory bodies
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {certifications.map((cert, index) => (
                            <Card key={index} className="text-center group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                                <CardHeader className="pb-4">
                                    <div className="flex justify-center mb-4">
                                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-emerald rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                                            {cert.badge}
                                        </div>
                                    </div>
                                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                                    <Badge variant="outline" className="text-xs">
                                        Valid {cert.year}
                                    </Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testing Procedures */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-foreground">Advanced Testing Procedures</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Our state-of-the-art laboratory facilities conduct comprehensive testing to ensure
                                every product meets the highest standards of purity, potency, and safety.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Microscope className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Microbiological Analysis</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Testing for harmful bacteria, yeast, mold, and pathogens to ensure product safety
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Beaker className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Heavy Metal Screening</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Detection of lead, mercury, cadmium, and arsenic within safe limits
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Active Compound Verification</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Quantification of bioactive compounds ensuring therapeutic efficacy
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <Leaf className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Pesticide Residue Analysis</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Comprehensive screening for agricultural chemical residues
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-emerald/10">
                                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                                <div className="text-sm text-muted-foreground">Tests per Month</div>
                            </Card>
                            <Card className="p-6 text-center bg-gradient-to-br from-emerald/10 to-accent/10">
                                <div className="text-3xl font-bold text-emerald mb-2">99.8%</div>
                                <div className="text-sm text-muted-foreground">Pass Rate</div>
                            </Card>
                            <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-primary/10">
                                <div className="text-3xl font-bold text-accent mb-2">24hrs</div>
                                <div className="text-sm text-muted-foreground">Average Turnaround</div>
                            </Card>
                            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10">
                                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                                <div className="text-sm text-muted-foreground">Testing Parameters</div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Supplier Network */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-foreground">Trusted Supplier Network</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            We work exclusively with certified suppliers who share our commitment to quality and authenticity
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Card className="text-center group hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                                        <Shield className="w-8 h-8 text-primary" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl">Supplier Certification</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    All suppliers undergo rigorous certification process including facility audits and documentation review
                                </p>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        GMP compliance verification
                                    </li>
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        Annual facility audits
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center group hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-emerald/10 rounded-full group-hover:bg-emerald/20 transition-colors duration-300">
                                        <Globe className="w-8 h-8 text-emerald" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl">Source Verification</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Geographic and botanical authentication ensures authentic sourcing from traditional growing regions
                                </p>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        Origin certification
                                    </li>
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        Botanical identification
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="text-center group hover:shadow-lg transition-all duration-300">
                            <CardHeader>
                                <div className="flex justify-center mb-4">
                                    <div className="p-4 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                                        <Users className="w-8 h-8 text-accent" />
                                    </div>
                                </div>
                                <CardTitle className="text-xl">Partnership Excellence</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground mb-4">
                                    Long-term partnerships built on trust, transparency, and shared commitment to quality standards
                                </p>
                                <ul className="text-sm space-y-2">
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        Continuous monitoring
                                    </li>
                                    <li className="flex items-center justify-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                        Quality agreements
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Customer Assurance */}
            <section className="py-20 bg-gradient-to-br from-primary/5 via-emerald/5 to-accent/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6 text-foreground">Our Quality Guarantee</h2>
                        <p className="text-xl text-muted-foreground mb-12">
                            Your trust is our responsibility. We stand behind every product with comprehensive quality assurances
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    <Star className="w-8 h-8 text-primary" />
                                </div>
                                <h4 className="font-semibold mb-2">Quality Guarantee</h4>
                                <p className="text-sm text-muted-foreground text-center">
                                    100% quality assurance on all products with complete batch documentation
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-emerald/10 rounded-full mb-4">
                                    <RefreshCw className="w-8 h-8 text-emerald" />
                                </div>
                                <h4 className="font-semibold mb-2">Return Policy</h4>
                                <p className="text-sm text-muted-foreground text-center">
                                    Hassle-free returns for any quality-related issues within 30 days
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <div className="p-4 bg-accent/10 rounded-full mb-4">
                                    <Clock className="w-8 h-8 text-accent" />
                                </div>
                                <h4 className="font-semibold mb-2">Rapid Response</h4>
                                <p className="text-sm text-muted-foreground text-center">
                                    24-hour response time for all quality concerns and inquiries
                                </p>
                            </div>
                        </div>

                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                            Contact Quality Team
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Quality Control Team */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6 text-foreground">Expert Quality Control Team</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Our dedicated team of quality professionals brings decades of experience in
                                Ayurvedic product quality assurance and pharmaceutical standards.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <BookOpen className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Ayurvedic Expertise</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Team includes certified Ayurvedic practitioners and traditional knowledge experts
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-2 bg-emerald/10 rounded-lg flex-shrink-0">
                                        <Microscope className="w-6 h-6 text-emerald" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Scientific Background</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Pharmaceutical scientists with advanced degrees in quality assurance
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="p-2 bg-accent/10 rounded-lg flex-shrink-0">
                                        <Award className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Continuous Training</h4>
                                        <p className="text-muted-foreground text-sm">
                                            Regular training on latest quality standards and testing methodologies
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/30">
                            <h3 className="text-2xl font-semibold mb-6 text-center">Quality Team Stats</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                                    <div className="text-sm text-muted-foreground">Years Average Experience</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-emerald mb-2">8</div>
                                    <div className="text-sm text-muted-foreground">Quality Professionals</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                                    <div className="text-sm text-muted-foreground">Quality Monitoring</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold text-primary mb-2">100%</div>
                                    <div className="text-sm text-muted-foreground">Batch Coverage</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}