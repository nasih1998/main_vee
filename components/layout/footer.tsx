import Link from "next/link";
import { Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[var(--bg-card)] border-t border-[var(--border-subtle)] pt-16 pb-8 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center text-white font-bold text-lg">
                                V
                            </div>
                            <span className="text-xl font-bold tracking-tight text-[var(--text-main)]">
                                Vee Pay
                            </span>
                        </Link>
                        <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
                            The smart payment gateway for modern Iraqi businesses. Unifying payments, simplifying growth.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[var(--text-main)] mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="/pricing" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Pricing</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Features</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Integrations</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Changelog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[var(--text-main)] mb-4">Developers</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Documentation</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">API Reference</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Status</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Open Source</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-[var(--text-main)] mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">About Us</Link></li>
                            <li><Link href="/contact" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Contact</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Careers</Link></li>
                            <li><Link href="#" className="text-[var(--text-muted)] hover:text-[var(--primary)] text-sm">Legal</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--border-subtle)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[var(--text-muted)] text-sm">
                        © {new Date().getFullYear()} Vee Pay. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-[var(--text-muted)] hover:text-[var(--text-main)] text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
