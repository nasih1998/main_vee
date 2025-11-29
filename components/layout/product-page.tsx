"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ProductPageProps {
    title: string;
    description: string;
    icon: LucideIcon;
    features: string[];
    ctaText?: string;
    children?: React.ReactNode;
}

export function ProductPage({
    title,
    description,
    icon: Icon,
    features,
    ctaText = "Get Started Now",
    children,
}: ProductPageProps) {
    return (
        <div className="flex flex-col gap-20 pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 hero-gradient pointer-events-none" />
                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 mx-auto mb-8 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)]"
                    >
                        <Icon className="w-8 h-8" />
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--text-main)] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
                        {title}
                    </h1>

                    <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
                        <Button size="lg" className="w-full sm:w-auto group">
                            {ctaText}
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Contact Sales
                        </Button>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-[var(--text-main)] mb-6">
                            Why choose {title}?
                        </h2>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3 text-[var(--text-main)] animate-in fade-in slide-in-from-left-4 duration-500"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CheckCircle2 className="w-6 h-6 text-[var(--secondary)] shrink-0" />
                                    <span className="text-lg">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-3xl blur-3xl opacity-20" />
                        <Card className="relative p-8 border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-xl">
                            <div className="aspect-video rounded-lg bg-[var(--bg-page)] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-muted)]">
                                {/* Placeholder for product screenshot/visual */}
                                <div className="text-center">
                                    <Icon className="w-12 h-12 mx-auto mb-4 opacity-50" />
                                    <p>Product Visualization</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Additional Content (Optional) */}
            {children && <section className="max-w-7xl mx-auto px-4">{children}</section>}

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-4 text-center pt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-6">
                    Ready to get started?
                </h2>
                <p className="text-xl text-[var(--text-muted)] mb-10">
                    Join thousands of businesses using Vee Pay to grow.
                </p>
                <Button size="lg">Create Account</Button>
            </section>
        </div>
    );
}
