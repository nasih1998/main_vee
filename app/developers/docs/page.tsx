"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Book } from "lucide-react";

export default function DocsPage() {
    return (
        <ProductPage
            title="Documentation"
            description="Everything you need to integrate Vee Pay. Comprehensive guides, tutorials, and references for developers."
            icon={Book}
            features={[
                "Step-by-step integration guides",
                "Code samples in multiple languages",
                "Interactive API explorer",
                "Video tutorials",
                "FAQ and troubleshooting"
            ]}
            ctaText="Read Docs"
        />
    );
}
