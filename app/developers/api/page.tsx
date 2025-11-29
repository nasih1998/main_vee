"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Terminal } from "lucide-react";

export default function APIPage() {
    return (
        <ProductPage
            title="API Reference"
            description="Complete reference for the Vee Pay API. Explore endpoints, parameters, and response formats."
            icon={Terminal}
            features={[
                "Detailed endpoint descriptions",
                "Request and response examples",
                "Authentication and error handling",
                "Postman collection download",
                "Changelog and versioning"
            ]}
            ctaText="View API Reference"
        />
    );
}
