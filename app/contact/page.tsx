import ContactForm from '@/components/features/ContactForm';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact - Pranamya Jain | Build Revenue-Generating AI Systems',
    description: 'Work with an AI automation specialist who has helped build systems generating $2.5M+ in verified revenue. Lead generation, workflow automation, and custom AI development.',
    openGraph: {
        title: 'Most AI Projects Fail. Yours Won\'t.',
        description: 'Build production AI automation systems that generate real revenue. 21+ projects delivered.',
        type: 'website',
    },
};

import OrbitalWrapper from '@/components/ui/OrbitalWrapper';

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center relative">
            {/* Wave dampener */}
            <div className="fixed inset-0 bg-white/60 backdrop-blur-[1px] -z-10" />

            <div className="absolute top-8 left-8 z-20">
                <Link href="/" className="group flex items-center gap-2 text-neutral-500 hover:text-neutral-900 transition-colors px-4 py-2">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-medium tracking-tight">Back</span>
                </Link>
            </div>

            <div className="w-full max-w-3xl relative z-10">
                <OrbitalWrapper>
                    <div className="bg-white/95 backdrop-blur-xl rounded-[24px] p-10 md:p-16 shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.03)] border border-neutral-200/60">
                        {/* Headline */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 font-geist tracking-tighter">
                                Most AI Projects <span className="text-rose-400/90 font-serif italic">Fail</span>. <span className="text-neutral-900">Yours Won&apos;t.</span>
                            </h1>
                            <p className="text-sm text-neutral-600 font-geist tracking-wide">
                                21+ Projects Delivered | Part of 800K+ AI Builder Community
                            </p>
                        </div>

                        {/* Body Copy */}
                        <div className="mb-12 space-y-6 text-neutral-700 font-geist leading-relaxed">
                            <p className="text-base">
                                I build <span className="font-semibold text-neutral-900">production-grade AI automation systems</span> that generate real revenue. My clients&apos; systems have generated <span className="font-semibold text-indigo-600">$2.5M+ in verified revenue</span>.
                            </p>
                            <p className="text-base">
                                No black boxes. You own the code, the models, and the competitive advantage.
                            </p>

                            {/* What You Get */}
                            <div className="bg-neutral-50/80 rounded-[16px] p-6 border border-neutral-200/60 hover:border-indigo-200 hover:bg-indigo-50/30 transition-all duration-300">
                                <h2 className="text-lg font-semibold text-neutral-900 mb-4">What I Build:</h2>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 group">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:text-emerald-700 transition-colors" />
                                        <span className="text-sm text-neutral-700"><span className="font-semibold text-neutral-900">Lead Generation Automation</span> (Reddit monitoring, hiring signals, prospect intelligence)</span>
                                    </li>
                                    <li className="flex items-start gap-3 group">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:text-emerald-700 transition-colors" />
                                        <span className="text-sm text-neutral-700"><span className="font-semibold text-neutral-900">AI Workflow Automation</span> (n8n, ComfyUI, API integrations)</span>
                                    </li>
                                    <li className="flex items-start gap-3 group">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:text-emerald-700 transition-colors" />
                                        <span className="text-sm text-neutral-700"><span className="font-semibold text-neutral-900">Custom AI Systems</span> (RAG pipelines, vector databases, fine-tuning)</span>
                                    </li>
                                    <li className="flex items-start gap-3 group">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5 group-hover:text-emerald-700 transition-colors" />
                                        <span className="text-sm text-neutral-700"><span className="font-semibold text-neutral-900">MVP Development</span> for investor validation and market testing</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Recent Projects */}
                            <div className="space-y-4">
                                <h2 className="text-lg font-semibold text-neutral-900">Recent Projects:</h2>
                                <ul className="space-y-2 text-sm text-neutral-600">
                                    <li className="flex items-start gap-2 hover:text-neutral-700 transition-colors">
                                        <span className="text-indigo-400 mt-1">•</span>
                                        <span>Automated Reddit lead gen system that <span className="font-semibold text-neutral-900">captures 100% of relevant buyer conversations</span> across 12+ communities</span>
                                    </li>
                                    <li className="flex items-start gap-2 hover:text-neutral-700 transition-colors">
                                        <span className="text-indigo-400 mt-1">•</span>
                                        <span>Lead intelligence radar delivering <span className="font-semibold text-neutral-900">15-30 qualified prospects daily</span> for hiring agencies</span>
                                    </li>
                                    <li className="flex items-start gap-2 hover:text-neutral-700 transition-colors">
                                        <span className="text-indigo-400 mt-1">•</span>
                                        <span>ICP-to-CRM qualification engine for investor validation (currently in development)</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Testimonial */}
                            <div className="bg-gradient-to-br from-indigo-50/50 to-neutral-100/50 rounded-[16px] p-6 border border-indigo-200/60 italic hover:border-indigo-300 transition-all duration-300">
                                <p className="text-sm text-neutral-700 mb-3">
                                    &ldquo;I was stuck at that dreaded 80% mark on a few vibe coded projects and finding Jin Labs was a total game changer. With their help, I got one project launched almost immediately. I&apos;ve got another, much larger project that they helped me untangle and I&apos;m now moving it into production soon. A huge difference with them was how easy it is to jump on a quick call with Pranamya whenever I hit a wall. They&apos;re quick, sharp, and super supportive.&rdquo;
                                </p>
                                <p className="text-xs font-semibold text-indigo-700 not-italic">
                                    — Angelo Selvaggio
                                </p>
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="mb-10 text-center">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-3 font-geist tracking-tight">
                                Ready to build something that actually works?
                            </h2>
                            <p className="text-base text-neutral-600 mb-1 font-geist">
                                Let&apos;s discuss your project. I&apos;ll help you figure out if AI automation is right for your use case and outline potential approaches.
                            </p>
                            <p className="text-sm text-neutral-500 font-geist mb-6">
                                Send me a message below or book a call—I typically respond within a few hours.
                            </p>
                        </div>

                        <ContactForm />

                        {/* Footer Microcopy */}
                        <div className="mt-8 pt-6 border-t border-neutral-200/60 space-y-2">
                            <p className="flex items-start gap-2 text-xs text-neutral-500 hover:text-neutral-600 transition-colors">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>No sales pitch. Just an honest technical assessment.</span>
                            </p>
                            <p className="flex items-start gap-2 text-xs text-neutral-500 hover:text-neutral-600 transition-colors">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>I respect your time: calls are exactly 15 minutes.</span>
                            </p>
                            <p className="flex items-start gap-2 text-xs text-neutral-500 hover:text-neutral-600 transition-colors">
                                <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>Your data is confidential and never shared.</span>
                            </p>
                        </div>
                    </div>
                </OrbitalWrapper>
            </div>
        </div>
    );
}
