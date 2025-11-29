"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun, ChevronRight, ShoppingBag, Globe, Code, Book, Link as LinkIcon, Server, Wallet, Banknote, CreditCard, Terminal, Users, Shield, Zap, LayoutGrid, Briefcase, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const [mobileOpenSection, setMobileOpenSection] = useState<string | null>(null);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {
            name: "Products",
            hasSidebar: true,
            columns: [
                {
                    title: "Global Payments",
                    items: [
                        { name: "Payment Links", desc: "No-code payments", icon: LinkIcon, href: "/products/payment-links" },
                        { name: "Online Store", desc: "Prebuilt store", icon: ShoppingBag, href: "/products/online-store" },
                        { name: "All Iraqi Wallets", desc: "ZainCash, AsiaPay, Qi", icon: Wallet, href: "/products/wallets" },
                    ]
                },
                {
                    title: "Money Management",
                    items: [
                        { name: "Vee Pay ERP", desc: "Business finances", icon: Globe, href: "/products/erp" },
                        { name: "Invoices", desc: "Professional billing", icon: FileText, href: "/products/invoices" },
                        { name: "Connect ERP", desc: "Sync with existing ERP", icon: Server, href: "/products/connect-erp" },
                        { name: "Instant Withdrawals", desc: "Fast payouts", icon: Banknote, href: "/products/withdrawals" },
                    ]
                }
            ],
            sidebar: {
                title: "More",
                items: [
                    { name: "Universal Integration", icon: Code, href: "/products/integration" },
                    { name: "Payment Methods", icon: CreditCard, href: "/products/payment-methods" },
                    { name: "Identity", icon: Shield, href: "/products/identity" },
                ]
            }
        },
        {
            name: "Solutions",
            hasSidebar: false,
            columns: [
                {
                    title: "Use Cases",
                    items: [
                        { name: "SaaS", desc: "Recurring revenue", icon: Zap, href: "/solutions/saas" },
                        { name: "E-commerce", desc: "Unified commerce", icon: ShoppingBag, href: "/solutions/ecommerce" },
                        { name: "Platforms", desc: "Partner payments", icon: LayoutGrid, href: "/solutions/platforms" },
                        { name: "Freelancers", desc: "Get paid globally", icon: Briefcase, href: "/solutions/freelancers" },
                    ]
                }
            ]
        },
        {
            name: "Developers",
            hasSidebar: false,
            columns: [
                {
                    title: "Tools",
                    items: [
                        { name: "Documentation", desc: "Start integrating", icon: Book, href: "/developers/docs" },
                        { name: "API Reference", desc: "Full API docs", icon: Terminal, href: "/developers/api" },
                        { name: "SDKs", desc: "Libraries", icon: Code, href: "/developers/sdks" },
                    ]
                }
            ]
        },
        {
            name: "Resources",
            hasSidebar: false,
            columns: [
                {
                    title: "Learn",
                    items: [
                        { name: "Blog", desc: "Latest news", icon: Book, href: "/resources/blog" },
                        { name: "Guides", desc: "Best practices", icon: Users, href: "/resources/guides" },
                        { name: "Partners", desc: "Find an expert", icon: Globe, href: "/resources/partners" },
                    ]
                }
            ]
        }
    ];

    const toggleMobileSection = (sectionName: string) => {
        setMobileOpenSection(mobileOpenSection === sectionName ? null : sectionName);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[var(--bg-page)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]"
                    : "bg-transparent"
            )}
            onMouseLeave={() => setHoveredIndex(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className="w-8 h-8 rounded-lg bg-[#635bff] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-105 transition-transform">
                            V
                        </div>
                        <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">
                            Vee Pay
                        </span>
                    </Link>

                    {/* Desktop Navigation - Mega Menu */}
                    <div className="hidden md:flex items-center justify-center flex-1 relative">
                        {navItems.map((item, index) => (
                            <div
                                key={item.name}
                                className="px-4 py-2 cursor-pointer group"
                                onMouseEnter={() => setHoveredIndex(index)}
                            >
                                <span className={cn(
                                    "text-sm font-medium transition-colors flex items-center gap-1",
                                    hoveredIndex === index ? "text-[var(--text-main)]" : "text-[var(--text-muted)] hover:text-[var(--text-main)]"
                                )}>
                                    {item.name}
                                    <ChevronRight className={cn(
                                        "w-3 h-3 transition-transform duration-200 rotate-90",
                                        hoveredIndex === index && "rotate-[-90deg]"
                                    )} />
                                </span>
                            </div>
                        ))}

                        {/* Animated Dropdown Background */}
                        <AnimatePresence>
                            {hoveredIndex !== null && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, rotateX: -10 }}
                                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                    exit={{ opacity: 0, y: 10, rotateX: -10 }}
                                    transition={{ duration: 0.2, ease: "easeOut" }}
                                    className="absolute top-full left-0 right-0 pt-4 perspective-1000 flex justify-center"
                                    style={{ perspective: "1000px" }}
                                >
                                    <div className="bg-[var(--bg-card)] rounded-xl shadow-stripe border border-[var(--border-subtle)] overflow-hidden origin-top min-w-[600px] max-w-[900px]">
                                        <div className="flex">
                                            {/* Main Content Area */}
                                            <div className="flex-1 p-8 grid grid-cols-2 gap-12">
                                                {navItems[hoveredIndex].columns.map((col, colIndex) => (
                                                    <div key={colIndex} className="min-w-[200px]">
                                                        <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                                                            {col.title}
                                                        </h4>
                                                        <ul className="space-y-4">
                                                            {col.items.map((subItem) => (
                                                                <li key={subItem.name}>
                                                                    <Link href={subItem.href} className="group flex items-start gap-3">
                                                                        <div className="mt-1 text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors">
                                                                            <subItem.icon className="w-5 h-5" />
                                                                        </div>
                                                                        <div>
                                                                            <div className="text-sm font-semibold text-[var(--text-main)] group-hover:text-[var(--primary)] transition-colors">
                                                                                {subItem.name}
                                                                            </div>
                                                                            <div className="text-xs text-[var(--text-muted)]">
                                                                                {subItem.desc}
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Sidebar Area (Only for items with sidebar) */}
                                            {navItems[hoveredIndex].hasSidebar && navItems[hoveredIndex].sidebar && (
                                                <div className="w-64 bg-[var(--bg-page)]/50 border-l border-[var(--border-subtle)] p-8">
                                                    <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-4">
                                                        {navItems[hoveredIndex].sidebar.title}
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {navItems[hoveredIndex].sidebar.items.map((item) => (
                                                            <li key={item.name}>
                                                                <Link href={item.href} className="group flex items-center gap-3 text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text-main)] transition-colors">
                                                                    <item.icon className="w-4 h-4" />
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-4 relative z-50">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-[var(--border-subtle)] text-[var(--text-muted)] transition-colors"
                        >
                            {mounted && theme === "dark" ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                        <Button variant="ghost" size="sm" className="font-medium text-[var(--text-main)]">
                            Sign In
                        </Button>
                        <Button size="sm" className="bg-[#635bff] hover:bg-[#4b45c6] text-white rounded-full px-6">
                            Start now <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4 relative z-50">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-[var(--text-main)]"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--bg-page)] border-b border-[var(--border-subtle)] p-4 shadow-xl h-[calc(100vh-80px)] overflow-y-auto">
                    <div className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <div key={item.name} className="border-b border-[var(--border-subtle)] last:border-0">
                                <button
                                    onClick={() => toggleMobileSection(item.name)}
                                    className="w-full flex items-center justify-between py-4 text-lg font-bold text-[var(--text-main)]"
                                >
                                    {item.name}
                                    <ChevronRight className={cn(
                                        "w-5 h-5 transition-transform duration-200 rotate-90",
                                        mobileOpenSection === item.name && "rotate-[-90deg]"
                                    )} />
                                </button>
                                <AnimatePresence>
                                    {mobileOpenSection === item.name && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pl-4 pb-4 space-y-6">
                                                {item.columns.map((col, idx) => (
                                                    <div key={idx}>
                                                        {col.title && (
                                                            <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                                                                {col.title}
                                                            </h4>
                                                        )}
                                                        <div className="space-y-3">
                                                            {col.items.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="flex items-center gap-3 py-1"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    <subItem.icon className="w-5 h-5 text-[var(--text-muted)]" />
                                                                    <span className="text-[var(--text-main)]">{subItem.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                                {item.hasSidebar && item.sidebar && (
                                                    <div>
                                                        <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-3">
                                                            {item.sidebar.title}
                                                        </h4>
                                                        <div className="space-y-3">
                                                            {item.sidebar.items.map((subItem) => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    className="flex items-center gap-3 py-1"
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                >
                                                                    <subItem.icon className="w-5 h-5 text-[var(--text-muted)]" />
                                                                    <span className="text-[var(--text-main)]">{subItem.name}</span>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                        <div className="pt-6 mt-4">
                            <Button className="w-full justify-center bg-[#635bff] text-white rounded-full">
                                Start now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
