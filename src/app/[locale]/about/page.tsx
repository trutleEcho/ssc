export const revalidate = false;

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Award, Users, TrendingUp, Shield, Globe, Building, CheckCircle, Star, MapPin, Calendar, Target, Heart, Lightbulb, Handshake, Clock, Package, Truck, Factory } from 'lucide-react';

interface StatisticCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
}

interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface TimelineItemProps {
    year: string;
    title: string;
    description: string;
    isLast?: boolean;
}

interface LeadershipMemberProps {
    name: string;
    position: string;
    experience: string;
    description: string;
}

interface CertificationProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const StatisticCard: React.FC<StatisticCardProps> = ({ icon, value, label }) => (
    <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
            <div className="flex justify-center mb-4 text-primary">
                {icon}
            </div>
            <div className="text-3xl font-bold text-foreground mb-2">{value}</div>
            <div className="text-muted-foreground">{label}</div>
        </CardContent>
    </Card>
);

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
        <CardContent className="p-0">
            <div className="flex items-center mb-4">
                <div className="text-primary mr-3">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, isLast = false }) => (
    <div className="flex items-start mb-8 last:mb-0">
        <div className="flex flex-col items-center mr-6">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {year.slice(-2)}
            </div>
            {!isLast && <div className="w-px h-16 bg-border mt-4"></div>}
        </div>
        <div className="flex-1">
            <div className="flex items-center mb-2">
                <Badge variant="secondary" className="mr-3">{year}</Badge>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground">{description}</p>
        </div>
    </div>
);

const LeadershipMember: React.FC<LeadershipMemberProps> = ({ name, position, experience, description }) => (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-0">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-emerald rounded-full mb-4 flex items-center justify-center text-white text-2xl font-bold">
                {name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <p className="text-primary font-medium mb-2">{position}</p>
            <Badge variant="outline" className="mb-3">{experience}</Badge>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);

const CertificationCard: React.FC<CertificationProps> = ({ icon, title, description }) => (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-300 text-center">
        <CardContent className="p-0">
            <div className="flex justify-center mb-4 text-accent">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
        </CardContent>
    </Card>
);

export default function AboutPage() {
    const statistics = [
        { icon: <Calendar className="w-8 h-8" />, value: "25+", label: "Years in Business" },
        { icon: <Package className="w-8 h-8" />, value: "5000+", label: "Products Distributed" },
        { icon: <MapPin className="w-8 h-8" />, value: "200+", label: "Cities Served" },
        { icon: <Users className="w-8 h-8" />, value: "10,000+", label: "Satisfied Customers" }
    ];

    const values = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Quality First",
            description: "We ensure every Ayurvedic product meets the highest standards of purity and authenticity through rigorous quality control processes."
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Traditional Heritage",
            description: "Preserving ancient Ayurvedic wisdom while embracing modern distribution methods to serve our customers better."
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Innovation",
            description: "Continuously improving our processes and expanding our product range to meet evolving market demands."
        },
        {
            icon: <Handshake className="w-6 h-6" />,
            title: "Customer Service",
            description: "Building lasting partnerships with retailers through exceptional service, reliable delivery, and competitive pricing."
        }
    ];

    const timeline = [
        {
            year: "1998",
            title: "Foundation",
            description: "Shivam Sales Corporation was established with a vision to make authentic Ayurvedic products accessible across India."
        },
        {
            year: "2005",
            title: "Expansion Phase",
            description: "Extended our distribution network to 50 cities and partnered with leading Ayurvedic manufacturers."
        },
        {
            year: "2012",
            title: "Digital Integration",
            description: "Implemented modern inventory management systems and established online ordering platforms for retailers."
        },
        {
            year: "2018",
            title: "Quality Certification",
            description: "Achieved ISO certification and established state-of-the-art quality control facilities."
        },
        {
            year: "2024",
            title: "Market Leadership",
            description: "Recognized as one of India's leading Ayurvedic wholesalers serving 200+ cities with 5000+ products."
        }
    ];

    const leadership = [
        {
            name: "Rajesh Sharma",
            position: "Founder & Managing Director",
            experience: "25+ Years Experience",
            description: "A visionary leader with deep knowledge of Ayurvedic traditions and modern business practices. Under his guidance, the company has grown from a local distributor to a national wholesale leader."
        },
        {
            name: "Priya Sharma",
            position: "Operations Director",
            experience: "20+ Years Experience",
            description: "Expert in supply chain management and quality assurance. She oversees our distribution network and ensures seamless delivery across all our service locations."
        },
        {
            name: "Dr. Amit Patel",
            position: "Quality Assurance Head",
            experience: "15+ Years Experience",
            description: "An Ayurvedic practitioner and quality expert who ensures all products meet traditional standards while complying with modern regulatory requirements."
        }
    ];

    const certifications = [
        {
            icon: <Award className="w-12 h-12" />,
            title: "ISO 9001:2015",
            description: "Quality management system certification"
        },
        {
            icon: <Shield className="w-12 h-12" />,
            title: "FSSAI License",
            description: "Food safety and standards authority approval"
        },
        {
            icon: <Star className="w-12 h-12" />,
            title: "Ayush License",
            description: "Ministry of Ayush certified distributor"
        },
        {
            icon: <CheckCircle className="w-12 h-12" />,
            title: "GMP Certified",
            description: "Good manufacturing practices compliance"
        }
    ];

    const advantages = [
        "Extensive network of 200+ cities across India",
        "Direct partnerships with authentic Ayurvedic manufacturers",
        "State-of-the-art warehousing and cold storage facilities",
        "Real-time inventory tracking and automated ordering system",
        "Dedicated customer support team with Ayurvedic expertise",
        "Competitive pricing with volume discounts for bulk orders"
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-primary/10 text-primary">About Shivam Sales Corporation</Badge>
                            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald bg-clip-text text-transparent">
                                25+ Years of Ayurvedic Excellence
                            </h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                Since 1998, we have been India&apos;s trusted wholesale partner for authentic Ayurvedic products,
                                connecting ancient wisdom with modern distribution excellence.
                            </p>
                            <div className="flex items-center space-x-4">
                                <Badge variant="outline" className="px-4 py-2">
                                    <Leaf className="w-4 h-4 mr-2" />
                                    Authentic Products
                                </Badge>
                                <Badge variant="outline" className="px-4 py-2">
                                    <Globe className="w-4 h-4 mr-2" />
                                    Pan-India Network
                                </Badge>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-emerald/20 rounded-2xl flex items-center justify-center">
                                <Leaf className="w-24 h-24 text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Statistics */}
            <section className="py-16 px-4 bg-muted/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {statistics.map((stat, index) => (
                            <StatisticCard key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-accent/10 text-accent">Vision & Mission</Badge>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Purpose & Direction</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <Card className="p-8 border-l-4 border-l-primary">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-6">
                                    <Target className="w-8 h-8 text-primary mr-3" />
                                    <h3 className="text-2xl font-bold">Our Vision</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    To become India&apos;s most trusted and comprehensive Ayurvedic wholesale network,
                                    making authentic traditional remedies accessible to every corner of the country
                                    while preserving the integrity of ancient wisdom.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="p-8 border-l-4 border-l-accent">
                            <CardContent className="p-0">
                                <div className="flex items-center mb-6">
                                    <Heart className="w-8 h-8 text-accent mr-3" />
                                    <h3 className="text-2xl font-bold">Our Mission</h3>
                                </div>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    To bridge traditional Ayurvedic manufacturers with modern retailers through
                                    reliable distribution, quality assurance, and exceptional service, ensuring
                                    authentic healing reaches those who need it most.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Company Story Timeline */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-primary/10 text-primary">Our Journey</Badge>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Company Story</h2>
                        <p className="text-xl text-muted-foreground">
                            From humble beginnings to becoming a nationwide Ayurvedic distribution leader
                        </p>
                    </div>

                    <div className="space-y-8">
                        {timeline.map((item, index) => (
                            <TimelineItem
                                key={index}
                                {...item}
                                isLast={index === timeline.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-emerald/10 text-emerald">Core Values</Badge>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">What Drives Us</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our values form the foundation of everything we do, guiding our relationships
                            with partners, customers, and the communities we serve.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <ValueCard key={index} {...value} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Team */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-accent/10 text-accent">Leadership</Badge>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Meet Our Team</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Experienced leaders combining traditional Ayurvedic knowledge with modern business expertise
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {leadership.map((member, index) => (
                            <LeadershipMember key={index} {...member} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-primary/10 text-primary">Quality Assurance</Badge>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Certifications & Accreditations</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Our commitment to quality is validated by industry-leading certifications and regulatory approvals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {certifications.map((cert, index) => (
                            <CertificationCard key={index} {...cert} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 px-4 bg-muted/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Badge className="mb-4 bg-emerald/10 text-emerald">Why Choose Us</Badge>
                            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                                Your Trusted Ayurvedic Partner
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                With over two decades of experience and an unwavering commitment to quality,
                                we offer unmatched advantages in the Ayurvedic wholesale market.
                            </p>

                            <div className="space-y-4">
                                {advantages.map((advantage, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                                        <span className="text-muted-foreground">{advantage}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Card className="p-6 text-center">
                                <CardContent className="p-0">
                                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">98%</div>
                                    <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                                </CardContent>
                            </Card>
                            <Card className="p-6 text-center">
                                <CardContent className="p-0">
                                    <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">24hr</div>
                                    <div className="text-sm text-muted-foreground">Order Processing</div>
                                </CardContent>
                            </Card>
                            <Card className="p-6 text-center">
                                <CardContent className="p-0">
                                    <Truck className="w-8 h-8 text-emerald mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">99%</div>
                                    <div className="text-sm text-muted-foreground">On-time Delivery</div>
                                </CardContent>
                            </Card>
                            <Card className="p-6 text-center">
                                <CardContent className="p-0">
                                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <div className="text-2xl font-bold mb-1">100%</div>
                                    <div className="text-sm text-muted-foreground">Quality Assured</div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Facilities */}
            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <Badge className="mb-4 bg-accent/10 text-accent">Infrastructure</Badge>
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Facilities</h2>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            State-of-the-art infrastructure supporting our nationwide distribution network
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0">
                                <Building className="w-12 h-12 text-primary mb-6" />
                                <h3 className="text-xl font-semibold mb-4">Warehousing Network</h3>
                                <p className="text-muted-foreground mb-4">
                                    Modern warehouses across key locations with temperature-controlled storage
                                    for sensitive Ayurvedic products and herbs.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• 50,000+ sq ft storage capacity</li>
                                    <li>• Climate-controlled environments</li>
                                    <li>• Advanced inventory management</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0">
                                <Factory className="w-12 h-12 text-accent mb-6" />
                                <h3 className="text-xl font-semibold mb-4">Quality Control Lab</h3>
                                <p className="text-muted-foreground mb-4">
                                    In-house testing facilities ensuring every product meets strict quality
                                    standards before reaching our customers.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• Microbiological testing</li>
                                    <li>• Heavy metal detection</li>
                                    <li>• Authenticity verification</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="p-8 hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-0">
                                <Truck className="w-12 h-12 text-emerald mb-6" />
                                <h3 className="text-xl font-semibold mb-4">Distribution Network</h3>
                                <p className="text-muted-foreground mb-4">
                                    Efficient logistics network ensuring timely delivery across 200+ cities
                                    with real-time tracking capabilities.
                                </p>
                                <ul className="space-y-2 text-sm text-muted-foreground">
                                    <li>• GPS-enabled fleet management</li>
                                    <li>• Same-day delivery in metros</li>
                                    <li>• Temperature-controlled transport</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}