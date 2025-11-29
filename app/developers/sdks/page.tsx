"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Code } from "lucide-react";

export default function SDKsPage() {
    return (
        <ProductPage
            title="SDKs & Libraries"
            description="Accelerate your integration with our official client libraries. Available for all major platforms and languages."
            icon={Code}
            features={[
                "Node.js, Python, PHP, Ruby, Java, Go",
                "React, Vue, Angular components",
                "iOS (Swift) and Android (Kotlin) SDKs",
                "Type-safe definitions",
                "Regular updates and maintenance"
            ]}
            ctaText="Download SDKs"
        />
    );
}
