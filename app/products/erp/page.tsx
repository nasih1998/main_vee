"use client";

import { ProductPage } from "@/components/layout/product-page";
import { Globe } from "lucide-react";

export default function ERPPage() {
    return (
        <ProductPage
            title="Vee Pay ERP"
            description="A complete financial management system built for modern businesses. Manage accounting, payroll, and payments in one platform."
            icon={Globe}
            features={[
                "Integrated accounting and bookkeeping",
                "Automated payroll processing",
                "Expense tracking and reporting",
                "Real-time financial insights",
                "Multi-user access with role-based permissions"
            ]}
        />
    );
}
