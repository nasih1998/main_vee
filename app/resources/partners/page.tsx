"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Globe } from "lucide-react";

export default function PartnersPage() {
    return (
        <ProductPage
            title="Partner Program"
            description="Join our ecosystem of agencies, consultants, and technology partners. Build your business with Vee Pay."
            icon={Globe}
            features={[
                "Revenue sharing opportunities",
                "Co-marketing and sales support",
                "Dedicated partner manager",
                "Early access to new features",
                "Listing in our Partner Directory"
            ]}
            ctaText="Become a Partner"
        />
    );
}
