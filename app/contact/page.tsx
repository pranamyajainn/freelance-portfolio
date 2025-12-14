import ContactForm from '@/components/features/ContactForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact - Pranamya Jain | Start Your AI Project',
    description: 'Ready to transform your workflow with Applied AI? Get in touch to discuss your project and discover how we can help achieve your goals.',
    openGraph: {
        title: 'Contact - Start Your AI Project',
        description: 'Get in touch to transform your workflow with Applied AI',
        type: 'website',
    },
};

export default function ContactPage() {
    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
            <div className="absolute top-8 left-8">
                <Link href="/" className="flex items-center gap-2 text-neutral-600 hover:text-indigo-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-indigo-200">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="text-sm font-medium font-geist">Back to Home</span>
                </Link>
            </div>

            <div className="w-full max-w-2xl">
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                    <div className="text-center mb-10">
                        <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4 font-geist tracking-tight">Let&apos;s build something extraordinary</h1>
                        <p className="text-neutral-600 font-geist">Ready to transform your workflow with Applied AI? Tell us about your vision.</p>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
