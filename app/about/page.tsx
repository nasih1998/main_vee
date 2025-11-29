import { Users, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-20">
            {/* Hero */}
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-main)] mb-6">
                    Building the financial infrastructure <br /> for Iraq's future.
                </h1>
                <p className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto">
                    Vee Pay is on a mission to modernize the digital economy of Iraq by providing reliable, secure, and easy-to-use payment solutions.
                </p>
            </div>

            {/* Story Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-[var(--text-main)]">Our Story</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        Founded in 2024, Vee Pay emerged from a simple observation: Iraqi businesses struggle with fragmented payment systems. Integrating ZainCash, AsiaPay, and cards required months of work and multiple contracts.
                    </p>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        We set out to change that. We built a unified gateway that handles the complexity behind the scenes, allowing businesses to focus on what they do best—growing their products and serving their customers.
                    </p>
                </div>
                <div className="relative h-[400px] rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border-subtle)]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--accent)]/20" />
                    {/* Placeholder for an image */}
                    <div className="absolute inset-0 flex items-center justify-center text-[var(--text-muted)]">
                        [Office/Team Image Placeholder]
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="mb-32">
                <h2 className="text-3xl font-bold text-[var(--text-main)] text-center mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="p-8 text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-[var(--primary)]/10 flex items-center justify-center text-[var(--primary)] mb-4">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Reliability First</h3>
                        <p className="text-[var(--text-muted)]">
                            In payments, trust is everything. We prioritize uptime, security, and accuracy above all else.
                        </p>
                    </Card>
                    <Card className="p-8 text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-[var(--secondary)]/10 flex items-center justify-center text-[var(--secondary)] mb-4">
                            <Users className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Customer Obsession</h3>
                        <p className="text-[var(--text-muted)]">
                            We build for our customers. Their success is our success, and we go the extra mile to support them.
                        </p>
                    </Card>
                    <Card className="p-8 text-center">
                        <div className="w-12 h-12 mx-auto rounded-full bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)] mb-4">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">Simplicity</h3>
                        <p className="text-[var(--text-muted)]">
                            Complexity is the enemy of execution. We strive to make the complex simple and intuitive.
                        </p>
                    </Card>
                </div>
            </div>

            {/* Team */}
            <div>
                <h2 className="text-3xl font-bold text-[var(--text-main)] text-center mb-12">Meet the Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="text-center group">
                            <div className="w-32 h-32 mx-auto rounded-full bg-[var(--bg-card)] border border-[var(--border-subtle)] mb-4 overflow-hidden relative">
                                <div className="absolute inset-0 bg-[var(--text-muted)]/10 group-hover:bg-[var(--primary)]/10 transition-colors" />
                                {/* Placeholder Avatar */}
                            </div>
                            <h3 className="font-bold text-[var(--text-main)]">Team Member {i}</h3>
                            <p className="text-sm text-[var(--text-muted)]">Co-Founder & Role</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
