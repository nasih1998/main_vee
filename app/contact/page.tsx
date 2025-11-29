import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
                        Get in touch
                    </h1>
                    <p className="text-xl text-[var(--text-muted)] mb-12">
                        Have questions about our pricing, API, or custom solutions? We're here to help.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] shrink-0">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[var(--text-main)] mb-1">Email Us</h3>
                                <p className="text-[var(--text-muted)]">nasih@veepay.io</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] shrink-0">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[var(--text-main)] mb-1">Visit Us</h3>
                                <p className="text-[var(--text-muted)]">
                                    Duhok, Aqrah 42004<br />
                                    Kurdistan Region, Iraq
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] shrink-0">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="font-bold text-[var(--text-main)] mb-1">Call Us</h3>
                                <p className="text-[var(--text-muted)]">07843410708</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <Card className="p-8">
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-[var(--text-main)]">Name</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full h-11 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-[var(--text-main)]">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full h-11 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-medium text-[var(--text-main)]">Company</label>
                            <input
                                id="company"
                                type="text"
                                placeholder="Your Company Ltd."
                                className="w-full h-11 rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-[var(--text-main)]">Message</label>
                            <textarea
                                id="message"
                                rows={4}
                                placeholder="How can we help you?"
                                className="w-full rounded-lg border border-[var(--border-subtle)] bg-[var(--bg-page)] px-3 py-2 text-sm ring-offset-background placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            />
                        </div>

                        <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                </Card>
            </div>
        </div>
    );
}
