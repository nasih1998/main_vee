"use client";

import { ProductPage } from "@/components/layout/product-page";
import { ShoppingBag } from "lucide-react";

export default function EcommercePage() {
    return (
        <ProductPage
            title="E-commerce Solutions"
            description="Optimize your checkout for higher conversion. A unified commerce platform for online retailers of all sizes."
            icon={ShoppingBag}
            features={[
                "One-click checkout experience",
                "Cart abandonment recovery",
                "Global currency support",
                "Fraud protection",
                "Integration with major e-commerce platforms"
            ]}
        />
    );
}
