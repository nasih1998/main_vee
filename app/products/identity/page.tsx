"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Shield } from "lucide-react";

export default function IdentityPage() {
    return (
        <ProductPage
            title="Identity Verification"
            description="Verify customer identities securely and compliant. Prevent fraud and ensure regulatory compliance with ease."
            icon={Shield}
            features={[
                "Automated KYC (Know Your Customer) checks",
                "Document verification (ID, Passport)",
                "Biometric facial recognition",
                "AML (Anti-Money Laundering) screening",
                "Seamless integration with payment flows"
            ]}
        />
    );
}
