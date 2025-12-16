import { socialLinks, allServiceCards } from '@/data/services';
import { Linkedin, Github, ArrowLeft, Zap, Bot, Rocket, Video } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    linkedin: Linkedin,
    github: Github,
};

const serviceIcons = {
    'lead-gen-card': Zap,
    'ai-automation-card': Bot,
    'mentorship-card': Rocket,
    'consultation-card': Video,
};

export default function ServiceLayout() {
    return (
        <div className="min-h-screen font-geist selection:bg-indigo-100 selection:text-indigo-900">
            {/* Navbar for structural consistency */}
            <Navbar />

            <main className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
                {/* Back Button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium text-neutral-600 hover:text-indigo-600 transition-colors mb-6 group mt-6"
                >
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                {/* White Section Wrapper - Enhanced shadows */}
                <section className="bg-white border border-neutral-100 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Column - Identity */}
                        <aside className="lg:col-span-5">
                            <div className="flex flex-col items-start space-y-5">
                                {/* Profile Image */}
                                <div className="relative group/profile">
                                    <div className="w-28 h-28 md:w-32 md:h-32 relative rounded-full overflow-hidden border-4 border-white shadow-lg group-hover/profile:shadow-xl transition-shadow duration-300">
                                        <Image
                                            src="/pranamya-hero-bg.jpg"
                                            alt="Pranamya Jain"
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover/profile:scale-110"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Name & Bio */}
                                <div className="space-y-2">
                                    <h1 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight">
                                        Pranamya Jain
                                    </h1>
                                    <p className="text-base font-medium text-neutral-600 leading-relaxed max-w-sm">
                                        Building AI systems that generate real revenue. No fluff, just practical implementation.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-3">
                                    {socialLinks.map((social) => {
                                        const Icon = socialIcons[social.icon];
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="h-10 w-10 flex items-center justify-center rounded-full bg-neutral-100 text-gray-900 hover:bg-neutral-200 hover:scale-110 transition-all duration-200 shadow-sm hover:shadow-md"
                                                aria-label={social.name}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </aside>

                        {/* Right Column - Service Cards List */}
                        <div className="lg:col-span-7 space-y-4">
                            {allServiceCards.map((card) => {
                                const Icon = serviceIcons[card.id as keyof typeof serviceIcons];
                                return (
                                    <div
                                        key={card.id}
                                        id={card.id}
                                        className="relative w-full bg-white border border-neutral-100 rounded-2xl p-5 shadow-md hover:shadow-xl hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 group overflow-hidden"
                                    >
                                        {/* Subtle gradient overlay for depth */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-neutral-50/30 rounded-2xl pointer-events-none" />

                                        {/* Inner highlight for premium feel */}
                                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-indigo-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-5">

                                            {/* Icon/Image Area */}
                                            <div className="hidden sm:flex shrink-0">
                                                {card.image ? (
                                                    <div className="relative h-14 w-14 rounded-xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm group-hover:shadow-md transition-shadow duration-200">
                                                        <Image
                                                            src={card.image}
                                                            alt=""
                                                            fill
                                                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 shadow-sm">
                                                        {Icon && <Icon className="w-6 h-6" />}
                                                    </div>
                                                )}
                                            </div>

                                            <div className="space-y-1 flex-1 text-center sm:text-left break-words">
                                                <h3 className="text-base md:text-lg font-bold text-gray-900 tracking-tight leading-tight group-hover:text-indigo-700 transition-colors duration-200">
                                                    {card.title}
                                                </h3>
                                                <p className="text-neutral-600 text-xs leading-relaxed line-clamp-2 break-words">
                                                    {card.description}
                                                </p>
                                            </div>

                                            {/* Button */}
                                            <div className="flex-shrink-0 w-full sm:w-auto">
                                                <Link
                                                    href={card.cta.href}
                                                    className="flex items-center justify-center w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-600 text-white font-bold text-xs hover:from-indigo-700 hover:to-cyan-700 hover:shadow-lg transition-all duration-200 shadow-md whitespace-nowrap"
                                                >
                                                    {card.cta.label}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
