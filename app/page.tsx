import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, Zap, Globe, Code, CheckCircle2, Link as LinkIcon, ShoppingBag, Server, Wallet, Banknote, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Marquee } from "@/components/ui/marquee";

const paymentLogos = [
  "/logos/zaincash.jpg",
  "/logos/nass.png",
  "/logos/download.png",
  "/logos/download.jpg",
  "/logos/download (2).png",
  "/logos/download (3).png",
  "/logos/download (4).png",
  "/logos/download (5).png",
  "/logos/download (6).png",
];

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 hero-gradient pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] border border-[var(--primary)]/20 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--secondary)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--secondary)]"></span>
            </span>
            <span className="text-sm font-medium">Now live in Iraq</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--text-main)] mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            The smart payment gateway <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--accent)] glow-text">
              for modern businesses.
            </span>
          </h1>

          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Accept payments from ZainCash, AsiaPay, QiCard, and Master/Visa in one unified platform. Built for startups, enterprises, freelancers, and developers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <Button size="lg" className="w-full sm:w-auto group">
              Open Business Account
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Documentation
            </Button>
          </div>

          {/* Floating Cards Visual */}
          <div className="mt-20 relative max-w-5xl mx-auto hidden md:block animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--accent)]/20 rounded-full blur-[100px] pointer-events-none" />
            <Card className="relative z-10 border-[var(--border-subtle)] bg-[var(--bg-card)]/80 backdrop-blur-xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">Total Revenue</p>
                  <h3 className="text-3xl font-bold text-[var(--text-main)]">$124,500.00</h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-sm font-medium">
                  +12.5%
                </div>
              </div>
              <div className="h-48 w-full bg-gradient-to-t from-[var(--primary)]/5 to-transparent rounded-lg border border-[var(--border-subtle)] border-dashed flex items-end justify-center pb-4 text-[var(--text-muted)]">
                [Chart Placeholder]
              </div>
            </Card>

            {/* Floating Elements */}
            <Card className="absolute -right-12 -top-12 p-4 w-64 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--text-main)]">Payment Received</p>
                  <p className="text-xs text-[var(--text-muted)]">Just now via ZainCash</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Supported Payment Methods Section */}
      <section className="w-full overflow-hidden bg-[var(--bg-card)] py-10 border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
          <p className="text-sm font-semibold text-[var(--text-muted)] uppercase tracking-wider">
            Trusted by leading payment providers
          </p>
        </div>
        <Marquee logos={paymentLogos} />
      </section>

      {/* Features Grid Section - STRICTLY USER FEATURES */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-4">Our Features</h2>
          <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
            Everything you need to manage payments and grow your business in Iraq.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 1. Create payment link */}
          <Card className="p-8 hover:border-[var(--primary)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
              <LinkIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Create Payment Link</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Generate secure payment links instantly and share them with your customers to get paid without a website.
            </p>
          </Card>

          {/* 2. Create online store */}
          <Card className="p-8 hover:border-[var(--secondary)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6 group-hover:scale-110 transition-transform">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Create Online Store</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Build your own online store with built-in payment processing. Manage products and orders easily.
            </p>
          </Card>

          {/* 3. Smart Invoicing */}
          <Card className="p-8 hover:border-[var(--primary)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Smart Invoicing</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Create and send professional invoices in seconds. Track payments in real-time and automate follow-ups.
            </p>
          </Card>

          {/* 4. Connect to other ERP system */}
          <Card className="p-8 hover:border-[var(--accent)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Connect to ERP</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Seamlessly integrate Vee Pay with your existing ERP system to synchronize financial data.
            </p>
          </Card>

          {/* 5. Provide ERP System and Connect our payment gateway */}
          <Card className="p-8 hover:border-[var(--primary)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Vee Pay ERP</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Don't have an ERP? Use our provided ERP system that comes pre-connected with our payment gateway.
            </p>
          </Card>

          {/* 6. Integrate our payment gateway to any website or application */}
          <Card className="p-8 hover:border-[var(--secondary)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] mb-6 group-hover:scale-110 transition-transform">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Universal Integration</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Integrate our payment gateway into any website or mobile application using our powerful APIs and SDKs.
            </p>
          </Card>

          {/* 7. Accept payment from All Iraqis Wallet in one place */}
          <Card className="p-8 hover:border-[var(--accent)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-6 group-hover:scale-110 transition-transform">
              <Wallet className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">All Iraqi Wallets</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Accept payments from all major Iraqi digital wallets (ZainCash, AsiaPay, QiCard) in one single place.
            </p>
          </Card>

          {/* 8. Instant withdraw to your bank account */}
          <Card className="p-8 hover:border-[var(--primary)] transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-6 group-hover:scale-110 transition-transform">
              <Banknote className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">Instant Withdrawals</h3>
            <p className="text-[var(--text-muted)] leading-relaxed">
              Withdraw your funds instantly to your bank account whenever you need them.
            </p>
          </Card>
        </div>
      </section>

      {/* Developer Section */}
      <section className="bg-[var(--bg-card)] py-20 border-y border-[var(--border-subtle)]">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              <span>Developer First</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-main)] mb-6">
              Built for developers, <br /> by developers.
            </h2>
            <p className="text-[var(--text-muted)] text-lg mb-8 leading-relaxed">
              Our API is designed to be intuitive and powerful. Integrate in minutes with our SDKs and comprehensive documentation.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "RESTful API with predictable resource-oriented URLs",
                "Real-time webhooks for payment events",
                "Sandbox environment for safe testing",
                "Detailed error messages and logs"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[var(--text-main)]">
                  <CheckCircle2 className="w-5 h-5 text-[var(--secondary)]" />
                  {item}
                </li>
              ))}
            </ul>
            <Button variant="outline">Read the Docs</Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-2xl blur-2xl opacity-20" />
            <div className="relative bg-[#0A0E0D] rounded-xl border border-[var(--border-subtle)] p-6 overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-gray-500 font-mono">POST /v1/charges</span>
              </div>
              <pre className="font-mono text-sm text-blue-400 overflow-x-auto">
                {`const payment = await veepay.charges.create({
  amount: 25000,
  currency: 'IQD',
  source: 'tok_zaincash_123',
  description: 'Order #9384',
  customer: 'cus_837492'
});

// Returns
{
  "id": "ch_123456",
  "status": "succeeded",
  "amount": 25000,
  ...
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-main)] mb-6">
          Ready to grow your business?
        </h2>
        <p className="text-xl text-[var(--text-muted)] mb-10">
          Join hundreds of Iraqi businesses trusting Vee Pay for their payments.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto">Start Accepting Payments</Button>
          <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Sales</Button>
        </div>
      </section>
    </div>
  );
}
