"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Link as LinkIcon } from "lucide-react";

export default function PaymentLinksPage() {
    return (
        <ProductPage
            title="Payment Links"
            description="Accept payments without a website. Create a secure link in seconds and share it via SMS, email, or social media."
            icon={LinkIcon}
            features={[
                "No coding required - create links instantly",
                "Accept all major payment methods including ZainCash and AsiaPay",
                "Customizable branding with your logo and colors",
                "Real-time notifications for every payment",
                "Secure and compliant with industry standards"
            ]}
        />
    );
}
