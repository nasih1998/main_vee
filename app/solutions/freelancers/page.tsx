"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Briefcase } from "lucide-react";

export default function FreelancersPage() {
    return (
        <ProductPage
            title="For Freelancers"
            description="Get paid globally without the hassle. Professional tools to manage your freelance business and receive payments easily."
            icon={Briefcase}
            features={[
                "Create professional payment links",
                "Receive international payments",
                "Low fees for individual accounts",
                "Fast withdrawals to local banks",
                "Simple tax reporting tools"
            ]}
        />
    );
}
