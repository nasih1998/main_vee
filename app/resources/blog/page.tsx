"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Book } from "lucide-react";

export default function BlogPage() {
    return (
        <ProductPage
            title="Vee Pay Blog"
            description="Latest news, product updates, and industry insights from the Vee Pay team."
            icon={Book}
            features={[
                "Product announcements",
                "Engineering deep dives",
                "Customer success stories",
                "Fintech industry trends",
                "Company news and culture"
            ]}
            ctaText="Read Blog"
        />
    );
}
