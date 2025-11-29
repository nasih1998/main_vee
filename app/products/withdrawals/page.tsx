"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Banknote } from "lucide-react";

export default function WithdrawalsPage() {
    return (
        <ProductPage
            title="Instant Withdrawals"
            description="Access your funds when you need them. Withdraw directly to your bank account instantly, 24/7."
            icon={Banknote}
            features={[
                "Instant transfers to local banks",
                "24/7 availability, even on weekends",
                "Low transaction fees",
                "Automated withdrawal schedules",
                "Real-time transfer status updates"
            ]}
        />
    );
}
