"use client";

import { ProductPage } from "@/components/layout/product-page";
import { LayoutGrid } from "lucide-react";

export default function PlatformsPage() {
    return (
        <ProductPage
            title="For Platforms & Marketplaces"
            description="Facilitate payments between buyers and sellers. Manage complex funds flows, commissions, and payouts."
            icon={LayoutGrid}
            features={[
                "Split payments and commissions",
                "Onboarding for sub-merchants",
                "Compliance handling for sellers",
                "Multi-party payouts",
                "Unified reporting dashboard"
            ]}
        />
    );
}
