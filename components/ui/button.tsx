import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={cn(
                    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    {
                        // Variants
                        "bg-[var(--primary)] text-[#EAF4F3] hover:bg-[#033A33] hover:shadow-[0_0_20px_rgba(4,74,66,0.4)] border border-transparent":
                            variant === "primary",
                        "bg-[var(--secondary)] text-[#051013] hover:bg-[#3BCFC0] hover:shadow-[0_0_20px_rgba(76,224,210,0.4)] border border-transparent":
                            variant === "secondary",
                        "bg-transparent border border-[var(--border-subtle)] text-[var(--text-main)] hover:border-[var(--primary)] hover:text-[var(--primary)]":
                            variant === "outline",
                        "bg-transparent text-[var(--text-main)] hover:bg-[var(--bg-card)]":
                            variant === "ghost",

                        // Sizes
                        "h-9 px-4 text-sm": size === "sm",
                        "h-11 px-6 text-base": size === "md",
                        "h-14 px-8 text-lg": size === "lg",
                    },
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
