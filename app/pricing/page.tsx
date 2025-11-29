import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PricingPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
                    Simple, transparent pricing
                </h1>
                <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
                    No hidden fees. No surprises. Choose the plan that fits your business growth.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {/* Starter Plan */}
                <Card className="p-8 border-[var(--border-subtle)]">
                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Starter</h3>
                    <p className="text-[var(--text-muted)] text-sm mb-6">For small businesses just starting out.</p>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-4xl font-bold text-[var(--text-main)]">2.5%</span>
                        <span className="text-[var(--text-muted)]">+ 250 IQD</span>
                    </div>
                    <Button variant="outline" className="w-full mb-8">Get Started</Button>
                    <ul className="space-y-4">
                        {[
                            "Accept all local cards",
                            "Standard settlement (T+2)",
                            "Basic dashboard",
                            "Email support",
                            "Up to 100 transactions/mo"
                        ].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-main)]">
                                <Check className="w-4 h-4 text-[var(--primary)]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Growth Plan */}
                <Card className="p-8 border-[var(--secondary)] relative shadow-[0_0_40px_-10px_rgba(76,224,210,0.2)] transform md:-translate-y-4">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--secondary)] text-[#051013] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        Most Popular
                    </div>
                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Growth</h3>
                    <p className="text-[var(--text-muted)] text-sm mb-6">For scaling businesses with high volume.</p>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-4xl font-bold text-[var(--text-main)]">1.8%</span>
                        <span className="text-[var(--text-muted)]">+ 100 IQD</span>
                    </div>
                    <Button className="w-full mb-8" variant="secondary">Get Started</Button>
                    <ul className="space-y-4">
                        {[
                            "Everything in Starter",
                            "Next-day settlement",
                            "Advanced analytics",
                            "Priority support",
                            "Unlimited transactions",
                            "API access"
                        ].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-main)]">
                                <Check className="w-4 h-4 text-[var(--secondary)]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </Card>

                {/* Enterprise Plan */}
                <Card className="p-8 border-[var(--border-subtle)]">
                    <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Enterprise</h3>
                    <p className="text-[var(--text-muted)] text-sm mb-6">For large organizations with custom needs.</p>
                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-4xl font-bold text-[var(--text-main)]">Custom</span>
                    </div>
                    <Button variant="outline" className="w-full mb-8">Contact Sales</Button>
                    <ul className="space-y-4">
                        {[
                            "Volume discounts",
                            "Instant settlement",
                            "Dedicated account manager",
                            "24/7 phone support",
                            "Custom integration",
                            "SLA guarantees"
                        ].map((feature) => (
                            <li key={feature} className="flex items-center gap-3 text-sm text-[var(--text-main)]">
                                <Check className="w-4 h-4 text-[var(--primary)]" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </Card>
            </div>
        </div>
    );
}
