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
        <div className="min-h-screen bg-background lg:px-24">
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

                                <div className="pt-4 border-t border-border">
                                    <h4 className="font-semibold text-foreground mb-2">Quick Communication</h4>
                                    <div className="flex gap-3">
                                        <Link href="">
                                            <Button variant="outline" size="sm" className="flex items-center gap-2">
                                                <MessageCircle className="w-4 h-4 text-green-600" />
                                                WhatsApp
                                            </Button>
                                        </Link>
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
                                        <h4 className="font-semibold text-foreground mb-2">Office</h4>
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
                                        <div className="space-y-2">
                                            <Label htmlFor="companyName">Company Name *</Label>
                                            <Input
                                                id="companyName"
                                                value={formData.companyName}
                                                onChange={(e) => handleInputChange("companyName", e.target.value)}
                                                placeholder="Your company name"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
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
                                        <div className="space-y-2">
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
                                        <div className="space-y-2">
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

                                    <div className="space-y-2">
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
                                <div
                                    className="h-64 bg-gradient-to-br from-primary/10 to-emerald/10 rounded-lg flex items-center justify-center border-2 border-dashed border-primary/20">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243290.95780848627!2d75.59894819453126!3d17.677551100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da809be54c21%3A0xa58905a6156c6608!2sShivam%20Sales%20Corporation!5e0!3m2!1sen!2sin!4v1757080862356!5m2!1sen!2sin"
                                        allowFullScreen loading="lazy"
                                        className="w-full h-full"
                                        referrerPolicy="no-referrer-when-downgrade"></iframe>
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