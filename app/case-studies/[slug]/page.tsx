import React from 'react';
import { caseStudies } from '@/data/case-studies';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        return {
            title: 'Case Study Not Found',
        };
    }

    return {
        title: `${study.title} - Pranamya Jain Case Study`,
        description: study.description,
        openGraph: {
            title: study.title,
            description: study.description,
            images: [study.cover_image],
            type: 'article',
        },
    };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            {/* Navigation */}
            <div className="max-w-4xl mx-auto mb-12">
                <Link href="/case-studies" className="inline-flex items-center gap-2 text-neutral-600 hover:text-indigo-600 transition-colors bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:border-indigo-200">
                    <ArrowLeft className="h-4 w-4" />
                    <span className="text-sm font-medium font-geist">Back to Case Studies</span>
                </Link>
            </div>

            <article className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/50">
                <div className="mb-8">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {study.tags.map(tag => (
                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 font-geist">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6 font-geist tracking-tight">{study.title}</h1>
                    <p className="text-xl text-neutral-600 font-geist leading-relaxed">{study.description}</p>
                </div>

                <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
                    <img
                        src={study.cover_image}
                        alt={study.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="prose prose-lg prose-indigo max-w-none font-geist">
                    {study.content.split('\n').map((line, i) => {
                        // Helper function to process inline markdown (bold, links)
                        const processInlineMarkdown = (text: string) => {
                            const parts: (string | React.ReactNode)[] = [];
                            let lastIndex = 0;

                            // Process bold (**text**)
                            const boldRegex = /\*\*([^*]+)\*\*/g;
                            let match;
                            const matches: { start: number; end: number; content: string; type: 'bold' | 'link' }[] = [];

                            while ((match = boldRegex.exec(text)) !== null) {
                                matches.push({ start: match.index, end: match.index + match[0].length, content: match[1], type: 'bold' });
                            }

                            // Process links [text](url)
                            const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
                            while ((match = linkRegex.exec(text)) !== null) {
                                matches.push({ start: match.index, end: match.index + match[0].length, content: match[1], type: 'link' });
                            }

                            // Sort matches by start position
                            matches.sort((a, b) => a.start - b.start);

                            // Build result with inline elements
                            matches.forEach((m, idx) => {
                                if (m.start > lastIndex) {
                                    parts.push(text.substring(lastIndex, m.start));
                                }

                                if (m.type === 'bold') {
                                    parts.push(<strong key={`b-${i}-${idx}`} className="font-bold text-neutral-900">{m.content}</strong>);
                                } else if (m.type === 'link') {
                                    const linkMatch = text.substring(m.start, m.end).match(/\[([^\]]+)\]\(([^)]+)\)/);
                                    if (linkMatch) {
                                        parts.push(
                                            <a key={`l-${i}-${idx}`} href={linkMatch[2]} className="text-indigo-600 hover:text-indigo-700 underline">
                                                {linkMatch[1]}
                                            </a>
                                        );
                                    }
                                }

                                lastIndex = m.end;
                            });

                            if (lastIndex < text.length) {
                                parts.push(text.substring(lastIndex));
                            }

                            return parts.length > 0 ? parts : text;
                        };

                        // Process headings
                        if (line.startsWith('# ')) {
                            return <h1 key={i} className="text-3xl font-bold mt-8 mb-4">{line.replace('# ', '')}</h1>;
                        }
                        if (line.startsWith('## ')) {
                            return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
                        }
                        if (line.startsWith('### ')) {
                            return <h3 key={i} className="text-xl font-bold mt-6 mb-3">{line.replace('### ', '')}</h3>;
                        }

                        // Process list items
                        if (line.startsWith('- ')) {
                            const content = line.replace('- ', '');
                            return <li key={i} className="list-disc ml-5 mb-2">{processInlineMarkdown(content)}</li>;
                        }


                        // Process video embeds [VIDEO:path]
                        if (line.startsWith('[VIDEO:') && line.endsWith(']')) {
                            const videoPath = line.substring(7, line.length - 1);
                            return (
                                <div key={i} className="my-8 rounded-2xl overflow-hidden border border-neutral-200 shadow-lg">
                                    <video
                                        controls
                                        className="w-full"
                                        preload="metadata"
                                    >
                                        <source src={videoPath} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            );
                        }

                        // Empty lines
                        if (line.trim() === '') {
                            return <br key={i} />;
                        }

                        // Regular paragraphs with inline markdown
                        return <p key={i} className="mb-4 text-neutral-700 leading-relaxed">{processInlineMarkdown(line)}</p>;
                    })}
                </div>
            </article>
        </div>
    );
}
