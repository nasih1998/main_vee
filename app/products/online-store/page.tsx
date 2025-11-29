"use client";

import { ProductPage } from "@/components/layout/product-page";
import { ShoppingBag } from "lucide-react";

export default function OnlineStorePage() {
    return (
        <ProductPage
            title="Online Store"
            description="Launch your professional online store in minutes. Sell products, manage inventory, and accept payments all in one place."
            icon={ShoppingBag}
            features={[
                "Pre-built, mobile-responsive store themes",
                "Integrated payment processing with Vee Pay",
                "Inventory management and order tracking",
                "Custom domain support",
                "Marketing tools to boost sales"
            ]}
            ctaText="Start Your Store"
        />
    );
}
