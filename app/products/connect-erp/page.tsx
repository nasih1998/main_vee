"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Server } from "lucide-react";

export default function ConnectERPPage() {
    return (
        <ProductPage
            title="Connect ERP"
            description="Seamlessly sync Vee Pay with your existing ERP system. Automate reconciliation and keep your financial data up to date."
            icon={Server}
            features={[
                "Pre-built integrations for major ERPs (SAP, Oracle, Odoo)",
                "Real-time data synchronization",
                "Automated reconciliation of payments",
                "Secure API-based connection",
                "Dedicated integration support"
            ]}
        />
    );
}
