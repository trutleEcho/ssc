import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Leaf,
    Pill,
    Droplets,
    Sparkles,
    Package2,
    User,
    Heart,
    Shield,
    Star,
    CheckCircle,
    Award,
    Truck,
    Scale,
    FileText,
    ArrowRight,
    Phone,
    Mail
} from 'lucide-react';
import {Header} from "@/components/layout/header";

interface ProductCategory {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    productCount: number;
}

interface FeaturedProduct {
    name: string;
    description: string;
    image: string;
    category: string;
}

const productCategories: ProductCategory[] = [
    {
        icon: Pill,
        title: "Herbal Medicines & Tablets",
        description: "Traditional formulations in modern tablet and capsule forms",
        productCount: 150
    },
    {
        icon: Droplets,
        title: "Ayurvedic Oils & Balms",
        description: "Premium quality therapeutic oils and healing balms",
        productCount: 85
    },
    {
        icon: Sparkles,
        title: "Natural Supplements",
        description: "Nutritional supplements from pure natural ingredients",
        productCount: 120
    },
    {
        icon: Leaf,
        title: "Traditional Powders & Churnas",
        description: "Authentic herbal powders prepared using ancient methods",
        productCount: 200
    },
    {
        icon: User,
        title: "Skin Care Products",
        description: "Natural skincare solutions for healthy, glowing skin",
        productCount: 65
    },
    {
        icon: Package2,
        title: "Hair Care Solutions",
        description: "Herbal hair oils and treatments for stronger, healthier hair",
        productCount: 45
    },
    {
        icon: Heart,
        title: "Digestive Health Products",
        description: "Natural remedies for digestive wellness and gut health",
        productCount: 90
    },
    {
        icon: Shield,
        title: "Immunity Boosters",
        description: "Powerful immune system enhancers from traditional herbs",
        productCount: 75
    }
];

const featuredProducts: FeaturedProduct[] = [
    {
        name: "Ashwagandha Premium Tablets",
        description: "High-potency stress relief and energy enhancement tablets",
        image: "/api/placeholder/300/200",
        category: "Herbal Medicines"
    },
    {
        name: "Brahmi Hair Oil",
        description: "Traditional hair nourishment oil for healthy scalp and hair growth",
        image: "/api/placeholder/300/200",
        category: "Hair Care"
    },
    {
        name: "Triphala Churna",
        description: "Classic digestive tonic powder for overall wellness",
        image: "/api/placeholder/300/200",
        category: "Traditional Powders"
    },
    {
        name: "Neem Face Pack",
        description: "Natural antibacterial face treatment for clear, healthy skin",
        image: "/api/placeholder/300/200",
        category: "Skin Care"
    },
    {
        name: "Chyawanprash Special",
        description: "Premium immunity booster with 40+ natural ingredients",
        image: "/api/placeholder/300/200",
        category: "Immunity Boosters"
    },
    {
        name: "Turmeric Capsules",
        description: "Anti-inflammatory and antioxidant supplement capsules",
        image: "/api/placeholder/300/200",
        category: "Natural Supplements"
    }
];

export default function ProductsPage() {
    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/5 via-emerald/5 to-accent/5 py-16">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Our Products
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                            Discover our extensive range of premium Ayurvedic products, carefully sourced and quality-tested
                            for wholesale distribution across India. From traditional formulations to modern supplements.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Badge variant="secondary" className="text-sm px-4 py-2">
                                <Award className="w-4 h-4 mr-2" />
                                ISO Certified
                            </Badge>
                            <Badge variant="secondary" className="text-sm px-4 py-2">
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Quality Assured
                            </Badge>
                            <Badge variant="secondary" className="text-sm px-4 py-2">
                                <Leaf className="w-4 h-4 mr-2" />
                                100% Natural
                            </Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Categories Grid */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Product Categories</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Explore our comprehensive collection of Ayurvedic products across multiple categories,
                            each carefully curated for quality and efficacy.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {productCategories.map((category, index) => (
                            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                                            <category.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <Badge variant="outline" className="text-xs">
                                            {category.productCount}+ items
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                        {category.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {category.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-muted/30">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our bestselling and most trusted products, popular among retailers and distributors nationwide.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredProducts.map((product, index) => (
                            <Card key={index} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-primary/10 to-emerald/10 relative overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Leaf className="w-16 h-16 text-primary/30" />
                                    </div>
                                    <Badge className="absolute top-3 left-3 bg-accent text-white">
                                        {product.category}
                                    </Badge>
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                        {product.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                                            ))}
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                                            View Details
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Specifications */}
            <section className="py-16">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Standards & Specifications</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Every product in our catalog meets the highest quality standards with proper certifications and packaging.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center p-8 border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
                            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• ISO 9001:2015 Certified</li>
                                <li>• AYUSH License Compliant</li>
                                <li>• GMP Standards</li>
                                <li>• Organic Certifications</li>
                                <li>• Lab Tested Quality</li>
                            </ul>
                        </Card>

                        <Card className="text-center p-8 border-2 border-dashed border-emerald/20 hover:border-emerald/40 transition-colors">
                            <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Package2 className="w-8 h-8 text-emerald" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Packaging Options</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Bulk Packaging Available</li>
                                <li>• Custom Label Solutions</li>
                                <li>• Eco-Friendly Materials</li>
                                <li>• Various Size Options</li>
                                <li>• Secure Transportation</li>
                            </ul>
                        </Card>

                        <Card className="text-center p-8 border-2 border-dashed border-accent/20 hover:border-accent/40 transition-colors">
                            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle className="w-8 h-8 text-accent" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Assurance</h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Third-party Lab Testing</li>
                                <li>• Batch-wise Quality Check</li>
                                <li>• Shelf Life Guarantee</li>
                                <li>• Purity Verification</li>
                                <li>• Customer Satisfaction</li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Bulk Order Benefits */}
            <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-emerald/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wholesale Benefits</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Partner with us for competitive pricing, flexible terms, and comprehensive support for your business growth.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Scale className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Competitive Wholesale Pricing</h3>
                                        <p className="text-gray-600">
                                            Get the best market rates with tiered pricing based on order quantity and long-term partnerships.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Truck className="w-6 h-6 text-emerald" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast & Reliable Delivery</h3>
                                        <p className="text-gray-600">
                                            Nationwide delivery network ensures your orders reach you quickly and in perfect condition.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <FileText className="w-6 h-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Payment Terms</h3>
                                        <p className="text-gray-600">
                                            Convenient payment options and credit facilities for established business partners.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <Card className="p-8 bg-white border-2 border-primary/20">
                                <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Minimum Order Quantities</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Herbal Medicines</span>
                                        <span className="font-semibold text-primary">500+ units</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Oils & Balms</span>
                                        <span className="font-semibold text-primary">200+ units</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Powders & Churnas</span>
                                        <span className="font-semibold text-primary">300+ units</span>
                                    </div>
                                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                        <span className="text-gray-600">Supplements</span>
                                        <span className="font-semibold text-primary">400+ units</span>
                                    </div>
                                </div>
                                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                                    <p className="text-sm text-gray-600 text-center">
                                        <strong>Volume Discounts:</strong> Save up to 15% on orders above ₹50,000
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary to-emerald">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Partner with Us?
                        </h2>
                        <p className="text-xl mb-8 text-white/90">
                            Get access to our complete product catalog and wholesale pricing.
                            Start your journey with India&apos;s trusted Ayurvedic wholesaler today.
                        </p>

                        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
                            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                                <FileText className="w-5 h-5 mr-2" />
                                Download Product Catalog
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                                <Phone className="w-5 h-5 mr-2" />
                                Request Wholesale Quote
                            </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <Card className="p-6 bg-white/10 border-white/20 text-center">
                                <Phone className="w-8 h-8 text-white mx-auto mb-3" />
                                <h3 className="text-lg font-semibold mb-2">Call Us Directly</h3>
                                <p className="text-white/90">+91 98765 43210</p>
                                <p className="text-white/90">Mon-Sat: 9 AM - 7 PM</p>
                            </Card>

                            <Card className="p-6 bg-white/10 border-white/20 text-center">
                                <Mail className="w-8 h-8 text-white mx-auto mb-3" />
                                <h3 className="text-lg font-semibold mb-2">Email Inquiry</h3>
                                <p className="text-white/90">wholesale@shivamsales.com</p>
                                <p className="text-white/90">Response within 4 hours</p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}