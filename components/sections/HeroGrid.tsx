import { Star, Award, ArrowUpRight, ExternalLink, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function HeroGrid() {
    return (
        <section className="p-4 md:p-8 bg-white border-neutral-100 border rounded-3xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="grid auto-rows-[minmax(240px,auto)] gap-4 md:auto-rows-[minmax(300px,auto)] lg:auto-rows-[minmax(360px,auto)] md:grid-cols-3">

                {/* Big Hero Card */}
                <article className="relative col-span-1 row-span-2 overflow-hidden md:col-span-2 group rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <img
                        src="/pranamya-hero-bg.jpg"
                        alt="Creative workspace with 3D elements"
                        className="h-full w-full transition-transform duration-700 group-hover:scale-105 object-cover"
                        decoding="async"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 group-hover:from-black/70 group-hover:via-black/50 group-hover:to-black/90 transition-all duration-300"></div>
                    <div className="absolute inset-y-0 left-0 w-full md:w-1/3 bg-gradient-to-r from-black/60 to-transparent pointer-events-none"></div>
                    <div className="absolute inset-0 flex flex-col p-4 sm:p-6 md:p-10 justify-between">
                        <div className="flex items-start justify-between">
                            <h1 className="max-w-sm leading-[0.85] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white tracking-tighter font-geist font-black drop-shadow-xl group-hover:text-indigo-100 transition-colors duration-300 break-words">
                                Most AI Projects <span className="text-rose-400/90 font-serif italic">Fail</span>
                                <br />
                                <span className="bg-black/10 backdrop-blur-[2px] rounded-lg px-2 tracking-tighter text-indigo-400 font-geist font-black drop-shadow-xl group-hover:text-indigo-300 transition-all duration-300">
                                    Yours Won&apos;t
                                </span>
                            </h1>
                            <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-medium text-white font-geist group-hover:bg-white/20 transition-all duration-300">
                                <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-300"></div>
                                Available for projects
                            </div>
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="max-w-md text-white/90 text-xs sm:text-sm md:text-base font-light font-geist group-hover:text-white transition-colors duration-300 break-words">
                                    Leverage the AI systems that generate <span className="font-bold">$2.5M+</span> in verified revenue. No buzzwords. Just deploy, revenue-generating AI.
                                </p>
                                <div className="mt-4 flex items-center gap-4">
                                    <div className="flex items-center gap-1 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                                        <span className="text-sm font-medium font-geist">4.9 Rating</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-white/80 group-hover:text-white/90 transition-colors duration-300">
                                        <Award className="h-4 w-4" />
                                        <span className="text-sm font-medium font-geist">15+ AI Automations</span>
                                    </div>
                                </div>
                            </div>
                            <a href="https://cal.com/pranamyajain" target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-md hover:bg-white transition-all duration-200 hover:scale-110 group-hover:shadow-lg">
                                <ArrowUpRight className="h-5 w-5 text-gray-900" />
                            </a>
                        </div>
                    </div>
                </article>

                {/* Services Card */}
                <Link href="/services" id="services" className="flex flex-col overflow-hidden group relative hover:from-neutral-800 hover:to-neutral-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-white bg-[url('https://cdn.midjourney.com/4f451a3a-9360-4c27-abdb-e5bb725db2c1/0_0.png?w=800&q=80')] bg-cover rounded-2xl justify-between">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-0"></div>
                    <div className="p-4 sm:p-6 relative z-10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-white font-geist drop-shadow-md group-hover:text-neutral-100 transition-colors duration-300">Services</span>
                            </div>
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur group-hover:bg-white/30 transition-all duration-200 group-hover:scale-110" aria-label="View services">
                                <ArrowUpRight className="h-4 w-4" />
                            </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-black mb-2 font-geist drop-shadow-lg group-hover:text-indigo-100 transition-colors duration-300 break-words">Real ROI & Ownership</h3>
                        <p className="text-xs sm:text-sm text-white font-bold mb-4 font-geist drop-shadow-md group-hover:text-neutral-100 transition-colors duration-300 break-words">
                            No black boxes. You own the code, the models, and the competitive advantage.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-bold drop-shadow-md group-hover:text-indigo-100 transition-colors duration-300">
                                <div className="h-2 w-2 rounded-full bg-indigo-400 group-hover:bg-indigo-300 transition-colors duration-300 shadow-sm"></div>
                                <span className="font-geist">Verified Revenue Impact</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold drop-shadow-md group-hover:text-cyan-100 transition-colors duration-300">
                                <div className="h-2 w-2 rounded-full bg-cyan-400 group-hover:bg-cyan-300 transition-colors duration-300 shadow-sm"></div>
                                <span className="font-geist">Production-Grade Tech</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-bold drop-shadow-md group-hover:text-emerald-100 transition-colors duration-300">
                                <div className="h-2 w-2 rounded-full bg-emerald-400 group-hover:bg-emerald-300 transition-colors duration-300 shadow-sm"></div>
                                <span className="font-geist">Total System Ownership</span>
                            </div>
                        </div>
                    </div>
                </Link>

                {/* Portfolio Card */}
                <Link href="/case-studies" className="relative overflow-hidden group hover:border-indigo-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-neutral-100 border rounded-2xl block">
                    <div className="absolute inset-0">
                        <img src="https://cdn.midjourney.com/7277ca39-c0ba-4045-b7f5-f2ae4aff372c/0_2.png" alt="Modern 3D design showcase" className="h-full w-full object-cover opacity-20 transition-opacity duration-300 group-hover:opacity-30" loading="lazy" decoding="async" />
                    </div>
                    <div className="relative h-full flex flex-col pt-6 pr-6 pb-6 pl-6 justify-between">
                        <div className="flex items-center justify-between">
                            <span className="rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium font-geist group-hover:bg-indigo-200 transition-colors duration-300">Case studies</span>
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 group-hover:bg-neutral-200 transition-all duration-200" aria-label="View case studies">
                                <ExternalLink className="h-4 w-4" />
                            </span>
                        </div>
                        <div className="">
                            <h3 className="text-xl sm:text-2xl mb-2 tracking-tight font-geist group-hover:text-indigo-700 transition-colors duration-300 break-words">21+ Projects Delivered</h3>
                            <p className="text-sm text-neutral-600 font-geist group-hover:text-neutral-700 transition-colors duration-300">Curated case studies on Lead Generation with AI</p>
                        </div>
                    </div>
                </Link>

                {/* Expertise/Team Card */}
                <article id="about" className="flex flex-col group text-white bg-[url('/pranamya-team-bg.jpg')] bg-cover bg-center rounded-2xl justify-between hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black/80 z-0"></div>
                    <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-indigo-100 font-geist group-hover:text-indigo-50 transition-colors duration-300">Network</span>
                            </div>
                            <a href="https://www.100xengineers.com/#community" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur hover:bg-white/30 transition-all duration-200 hover:scale-110">
                                <ArrowUpRight className="h-4 w-4" />
                            </a>
                        </div>
                        <div className="mt-4">
                            <p className="text-sm text-indigo-100 mb-2 font-geist font-bold group-hover:text-indigo-50 transition-colors duration-300">Asia&apos;s largest AI builder community</p>
                            <span className="text-2xl sm:text-3xl font-geist font-bold group-hover:text-indigo-50 transition-colors duration-300 break-words">800K+</span>
                            <div className="flex gap-2 mt-3 items-center">
                                <div className="flex -space-x-2">
                                    <img src="https://images.unsplash.com/photo-1500649297466-74794c70acfc?w=320&q=80" alt="Avatar 1" className="h-6 w-6 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300" loading="lazy" decoding="async" />
                                    <img src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=320&q=80" alt="Avatar 2" className="h-6 w-6 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300" loading="lazy" decoding="async" />
                                    <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=320&q=80" alt="Avatar 3" className="h-6 w-6 rounded-full border-2 border-white/30 object-cover group-hover:border-white/50 transition-all duration-300" loading="lazy" decoding="async" />
                                </div>
                                <span className="text-xs text-indigo-100 font-geist font-bold group-hover:text-indigo-50 transition-colors duration-300">AI Agencies & AI Engineers</span>
                            </div>
                        </div>
                    </div>
                </article>

                {/* Stats Card */}
                <article className="flex flex-col justify-between rounded-2xl bg-white p-6 border border-neutral-100 group hover:border-emerald-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-neutral-600 font-geist group-hover:text-neutral-700 transition-colors duration-300">Growth</span>
                        </div>
                        <div className="flex items-center gap-1 text-emerald-600 group-hover:text-emerald-700 transition-colors duration-300">
                            <ArrowUp className="h-4 w-4" />
                            <span className="text-xs font-medium font-geist">+24%</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-neutral-500 mb-2 font-geist group-hover:text-neutral-600 transition-colors duration-300">Verified Client Revenue</p>
                        <span className="text-2xl sm:text-3xl text-neutral-900 font-geist group-hover:text-emerald-700 transition-colors duration-300 break-words">$2.5M+</span>
                        <p className="text-xs text-neutral-400 mt-1 font-geist group-hover:text-neutral-500 transition-colors duration-300">Generated by our AI systems across all Clients</p>
                    </div>
                </article>

                {/* Technologies Card */}
                <article className="flex flex-wrap content-start gap-2 rounded-2xl bg-neutral-50 p-6 border border-neutral-100 hover:border-neutral-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-full flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-neutral-600 font-geist">Production Stack</span>
                        </div>
                    </div>
                    {['ComfyUI', 'n8n', 'API Integrations', 'Vector Databases', 'RAG Pipelines', 'Embedding Models', 'Flux', 'Stable Diffusion', 'LoRA Training', 'Fine tuning'].map((tech) => (
                        <span key={tech} className="rounded-full bg-white border border-neutral-200 px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600 transition-all duration-200 hover:scale-105 cursor-pointer font-geist break-words">
                            {tech}
                        </span>
                    ))}
                    <div className="flex items-center gap-2 mt-2">
                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                        <span className="text-xs text-neutral-500 font-geist">Always learning new tech</span>
                    </div>
                </article>
            </div >
        </section >
    );
}
