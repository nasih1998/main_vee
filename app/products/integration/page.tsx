"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Code } from "lucide-react";

export default function IntegrationPage() {
    return (
        <ProductPage
            title="Universal Integration"
            description="Integrate Vee Pay into any platform, website, or app. Our flexible APIs make it easy to build custom payment flows."
            icon={Code}
            features={[
                "RESTful APIs for any programming language",
                "Mobile SDKs for iOS and Android",
                "Plugins for WooCommerce, Shopify, and Magento",
                "Detailed developer documentation",
                "Sandbox environment for testing"
            ]}
        />
    );
}
