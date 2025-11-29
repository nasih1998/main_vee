"use client";

import { ProductPage } from "@/components/layout/product-page";
import { CreditCard } from "lucide-react";

export default function PaymentMethodsPage() {
    return (
        <ProductPage
            title="Payment Methods"
            description="Offer your customers their preferred way to pay. From credit cards to digital wallets, we support it all."
            icon={CreditCard}
            features={[
                "Visa and Mastercard support",
                "Local digital wallets (ZainCash, AsiaPay, QiCard)",
                "Bank transfers",
                "Cash on delivery management",
                "Smart routing for higher success rates"
            ]}
        />
    );
}
