"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Users } from "lucide-react";

export default function GuidesPage() {
    return (
        <ProductPage
            title="Guides & Best Practices"
            description="Learn how to get the most out of Vee Pay. In-depth guides on payments, billing, and financial operations."
            icon={Users}
            features={[
                "Optimizing checkout conversion",
                "Managing subscriptions effectively",
                "Preventing fraud and disputes",
                "Reconciliation best practices",
                "Scaling your business globally"
            ]}
            ctaText="Explore Guides"
        />
    );
}
