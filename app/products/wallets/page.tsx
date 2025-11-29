"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Wallet } from "lucide-react";

export default function WalletsPage() {
    return (
        <ProductPage
            title="All Iraqi Wallets"
            description="Accept payments from every major digital wallet in Iraq. Give your customers the flexibility they demand."
            icon={Wallet}
            features={[
                "Support for ZainCash, AsiaPay, and QiCard",
                "Unified dashboard for all wallet transactions",
                "Instant settlement options",
                "Competitive transaction rates",
                "Seamless checkout experience for customers"
            ]}
        />
    );
}
