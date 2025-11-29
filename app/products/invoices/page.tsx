"use client";

import { ProductPage } from "@/components/layout/product-page";
import { FileText } from "lucide-react";

export default function InvoicesPage() {
    return (
        <ProductPage
            title="Smart Invoicing"
            description="Create, send, and track professional invoices. Get paid faster with automated reminders and multiple payment options."
            icon={FileText}
            features={[
                "Customizable invoice templates",
                "Automated recurring invoices",
                "One-click payment for clients",
                "Real-time status tracking (Sent, Viewed, Paid)",
                "Automatic late payment reminders"
            ]}
            ctaText="Create Invoice"
        />
    );
}
