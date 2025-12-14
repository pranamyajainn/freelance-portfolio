import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'AI Lead Generation Case Studies | Proven B2B Automation Systems',
    description: 'Explore proven AI-powered lead generation systems for B2B brands and agencies. Real case studies showcasing automated prospecting, intelligent lead qualification, and conversion-ready pipeline automation.',
    keywords: ['AI lead generation', 'automated lead generation', 'B2B lead automation', 'agency lead systems', 'ICP to qualified leads', 'lead qualification automation'],
    openGraph: {
        title: 'AI Lead Generation Case Studies | Proven B2B Automation Systems',
        description: 'Explore proven AI-powered lead generation systems for B2B brands and agencies. See how automation replaced manual prospecting with intelligent, scalable lead systems.',
        type: 'website',
    },
};

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-16 relative">
                <Link href="/" className="absolute -top-12 left-0 flex items-center gap-2 text-neutral-600 hover:text-indigo-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-indigo-200">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="text-sm font-medium font-geist">Back to Home</span>
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 font-geist tracking-tight">AI Lead Systems: Proof of Leverage</h1>
                <p className="text-xl text-neutral-600 max-w-2xl font-geist mb-8">See how automated systems replace manual prospecting with controlled, predictable lead generation for brands and agencies.</p>
                <div className="mb-16">
                    <Link
                        href="https://cal.com/pranamyajain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-full hover:bg-indigo-700 transition-colors font-geist"
                    >
                        Discuss Your Automation Needs
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((study) => (
                    <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group flex flex-col bg-white/80 backdrop-blur-xl rounded-3xl border border-white/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className="h-48 overflow-hidden relative">
                            <img
                                src={study.cover_image}
                                alt={study.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow justify-between">
                            <div>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {study.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-2 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 font-geist">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <h2 className="text-xl font-bold text-neutral-900 mb-2 font-geist leading-tight group-hover:text-indigo-600 transition-colors duration-200">{study.title}</h2>
                                <p className="text-sm text-neutral-600 line-clamp-2 font-geist">{study.description}</p>
                            </div>

                            <div className="mt-6 flex items-center justify-between text-indigo-600 font-medium text-sm font-geist">
                                <span>Read case study</span>
                                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
