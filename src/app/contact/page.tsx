"use client";

import { useState } from "react";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    MessageCircle,
    Download,
    FileText,
    Building,
    Users,
    Send,
    CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import {Header} from "@/components/layout/header";

const LeftBorderIndicatorNavbar = () => {
    return (
        <nav className="bg-white border-b border-border">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-4">
                        <div className="w-1 h-8 bg-primary rounded-full"></div>
                        <div>
                            <h1 className="text-xl font-bold text-foreground">Shivam Sales Corporation</h1>
                            <p className="text-sm text-muted-foreground">Ayurvedic Wholesaler</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
                        <Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
                        <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                        <Link href="/contact" className="text-primary font-medium">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

interface ContactFormData {
    companyName: string;
    contactPerson: string;
    email: string;
    phone: string;
    productInterest: string;
    orderQuantity: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<ContactFormData>({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        productInterest: "",
        orderQuantity: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field: keyof ContactFormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                companyName: "",
                contactPerson: "",
                email: "",
                phone: "",
                productInterest: "",
                orderQuantity: "",
                message: ""
            });
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-background">
            <Header />

            {/* Hero Section */}
            <section className="py-20 bg-gradient-to-br from-primary/5 to-emerald/5">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Get In Touch
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Connect with us for wholesale opportunities in premium Ayurvedic products.
                        We&apos;re here to support your business growth with quality herbs and medicines.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        {/* Contact Methods */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Phone className="w-5 h-5 text-primary" />
                                    Contact Information
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Sales Department</h4>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        +91 98765 43210
                                    </p>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        sales@shivamsales.com
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Customer Support</h4>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        +91 98765 43211
                                    </p>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        support@shivamsales.com
                                    </p>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-foreground mb-2">Management</h4>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <Phone className="w-4 h-4" />
                                        +91 98765 43212
                                    </p>
                                    <p className="text-muted-foreground flex items-center gap-2">
                                        <Mail className="w-4 h-4" />
                                        info@shivamsales.com
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-semibold text-foreground mb-2">Quick Communication</h4>
                                    <div className="flex gap-3">
                                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                                            <MessageCircle className="w-4 h-4 text-green-600" />
                                            WhatsApp
                                        </Button>
                                        <Button variant="outline" size="sm" className="flex items-center gap-2">
                                            <Send className="w-4 h-4 text-blue-600" />
                                            Telegram
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Office Location */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Office Location
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Head Office</h4>
                                        <p className="text-muted-foreground">
                                            123 Ayurveda Business Complex<br />
                                            Sector 18, Industrial Area<br />
                                            New Delhi - 110001<br />
                                            India
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-border">
                                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            Business Hours
                                        </h4>
                                        <div className="space-y-1 text-sm text-muted-foreground">
                                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                            <p>Saturday: 9:00 AM - 2:00 PM</p>
                                            <p>Sunday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Quick Links */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Download className="w-5 h-5 text-primary" />
                                    Quick Downloads
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <Button variant="outline" className="w-full justify-start" size="sm">
                                    <FileText className="w-4 h-4 mr-2" />
                                    Product Catalog
                                </Button>
                                <Button variant="outline" className="w-full justify-start" size="sm">
                                    <FileText className="w-4 h-4 mr-2" />
                                    Price List
                                </Button>
                                <Button variant="outline" className="w-full justify-start" size="sm">
                                    <Building className="w-4 h-4 mr-2" />
                                    Company Profile
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Response Promise */}
                        <Card className="bg-primary/5 border-primary/20">
                            <CardContent className="pt-6">
                                <div className="text-center">
                                    <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                                    <h4 className="font-semibold text-foreground mb-2">Response Promise</h4>
                                    <p className="text-sm text-muted-foreground">
                                        We respond to all wholesale inquiries within 2-4 hours during business days.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Contact Form & Map */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-primary" />
                                    Wholesale Inquiry Form
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="companyName">Company Name *</Label>
                                            <Input
                                                id="companyName"
                                                value={formData.companyName}
                                                onChange={(e) => handleInputChange("companyName", e.target.value)}
                                                placeholder="Your company name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="contactPerson">Contact Person *</Label>
                                            <Input
                                                id="contactPerson"
                                                value={formData.contactPerson}
                                                onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                                                placeholder="Your full name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange("email", e.target.value)}
                                                placeholder="your@email.com"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="phone">Phone Number *</Label>
                                            <Input
                                                id="phone"
                                                value={formData.phone}
                                                onChange={(e) => handleInputChange("phone", e.target.value)}
                                                placeholder="+91 XXXXX XXXXX"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="productInterest">Product Interest Category</Label>
                                            <Select value={formData.productInterest} onValueChange={(value) => handleInputChange("productInterest", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select product category" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="herbs">Raw Herbs & Powders</SelectItem>
                                                    <SelectItem value="medicines">Classical Medicines</SelectItem>
                                                    <SelectItem value="oils">Ayurvedic Oils</SelectItem>
                                                    <SelectItem value="extracts">Herbal Extracts</SelectItem>
                                                    <SelectItem value="cosmetics">Ayurvedic Cosmetics</SelectItem>
                                                    <SelectItem value="all">All Categories</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        <div>
                                            <Label htmlFor="orderQuantity">Expected Order Quantity</Label>
                                            <Select value={formData.orderQuantity} onValueChange={(value) => handleInputChange("orderQuantity", value)}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select quantity range" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="100-500">100 - 500 units</SelectItem>
                                                    <SelectItem value="500-1000">500 - 1,000 units</SelectItem>
                                                    <SelectItem value="1000-5000">1,000 - 5,000 units</SelectItem>
                                                    <SelectItem value="5000+">5,000+ units</SelectItem>
                                                    <SelectItem value="bulk">Bulk Orders (Custom)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="message">Message / Requirements</Label>
                                        <Textarea
                                            id="message"
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            placeholder="Tell us about your specific requirements, preferred products, delivery location, etc."
                                            rows={4}
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        className="w-full"
                                        disabled={isSubmitting || isSubmitted}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                Submitting...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <CheckCircle className="w-4 h-4 mr-2" />
                                                Submitted Successfully!
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" />
                                                Submit Inquiry
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>

                        {/* Map Placeholder */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Find Us
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="h-64 bg-gradient-to-br from-primary/10 to-emerald/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                                    <div className="text-center">
                                        <MapPin className="w-12 h-12 text-primary mx-auto mb-3" />
                                        <h4 className="font-semibold text-foreground mb-2">Interactive Map</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Map integration showing our office location<br />
                                            123 Ayurveda Business Complex, New Delhi
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Additional Locations */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Regional Offices</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Mumbai Branch</h4>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            456 Trade Center, Andheri East<br />
                                            Mumbai - 400069, Maharashtra
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Phone: +91 98765 43213
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Bangalore Branch</h4>
                                        <p className="text-sm text-muted-foreground mb-2">
                                            789 Tech Park, Electronic City<br />
                                            Bangalore - 560100, Karnataka
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Phone: +91 98765 43214
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}