"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Zap } from "lucide-react";

export default function SaaSPage() {
    return (
        <ProductPage
            title="SaaS Payments"
            description="Power your recurring revenue model with flexible subscription billing. Handle upgrades, downgrades, and churn automatically."
            icon={Zap}
            features={[
                "Flexible subscription logic",
                "Automated recurring billing",
                "Usage-based metering",
                "Dunning management for failed payments",
                "Customer portal for self-service"
            ]}
        />
    );
}
