"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Wallet } from "lucide-react";

export default function WalletsPage() {
    return (
        <ProductPage
            title="Unified Wallets"
            description="The complete wallet solution for Iraq. Accept ZainCash, AsiaPay, and QiCard through one powerful API."
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
