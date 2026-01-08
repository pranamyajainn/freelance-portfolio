import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrbitalWrapper from "@/components/ui/OrbitalWrapper";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ComfyUIPage() {
    return (
        <>
            <Navbar />
            <main className="font-geist text-gray-900 bg-white selection:bg-indigo-100 selection:text-indigo-900">

                {/* --- HERO SECTION --- 
            Design: Consistent with site aesthetic (rounded corners, subtle gradients).
            Image: Used as structural background.
        */}
                <section className="relative px-4 pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
                    {/* Background Anchor */}
                    <div className="absolute top-0 left-0 w-full h-[800px] z-0 opacity-[0.08] pointer-events-none">
                        <Image
                            src="/images/comfyui-hero.png"
                            alt=""
                            fill
                            className="object-cover object-top"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
                    </div>

                    <div className="relative z-10 mx-auto max-w-7xl">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 mb-8 leading-[0.95]">
                            Production-Grade <br />
                            ComfyUI Pipelines. <br />
                            <span className="text-indigo-600">Built for Scale.</span>
                        </h1>

                        <div className="max-w-3xl mt-12 mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 tracking-tight">
                                Stop wiring nodes. Start deploying systems.
                            </h2>
                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium">
                                You have a workflow that generates incredible results on your local machine. But a <code className="bg-neutral-100 px-1.5 py-0.5 rounded-md text-sm font-mono text-indigo-700 font-bold border border-neutral-200">.json</code> file is not a product. To build a business, you need stable APIs, sub-second latency, and the ability to handle concurrent traffic without crashing.
                            </p>
                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-medium mt-6">
                                We transform experimental workflows into robust, revenue-generating infrastructure.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <a
                                href="#audit"
                                className="group inline-flex items-center gap-2 text-indigo-600 font-bold text-lg hover:text-indigo-700 transition-colors"
                            >
                                <span className="border-b-2 border-indigo-600/30 group-hover:border-indigo-600 transition-all">Initialize System Audit</span>
                                <ArrowUpRight className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* --- CAPABILITIES GRID --- 
            Design: Reverting to rounded-3xl/2xl cards to match HeroGrid and ServiceLayout.
            Interaction: Standard hover states, no layout shifts or image reveals for consistency.
        */}
                <section className="py-24 px-4 bg-neutral-50 border-y border-neutral-100">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid md:grid-cols-3 gap-6">

                            {/* Custom Node Engineering */}
                            <div className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                                <div className="mb-6">
                                    <Image
                                        src="/images/icon-nodes-3d.png"
                                        alt="Custom Python Nodes"
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight text-gray-900">1. Custom Node Engineering</h3>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    We do not rely on fragile spaghetti graphs. We write custom Python extensions (<code className="bg-neutral-100 px-1 py-0.5 rounded text-xs font-mono font-bold">__init__.py</code>) to encapsulate your proprietary business logic. We handle complex data types, error catching, and tensor shape management at the code level.
                                </p>
                            </div>

                            {/* Serverless Auto-Scaling */}
                            <div className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                                <div className="mb-6">
                                    <Image
                                        src="/images/icon-scale-3d.png"
                                        alt="Serverless Scaling"
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight text-gray-900">2. Serverless Auto-Scaling</h3>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    Your pipeline must survive the real world. We architect deployment environments on RunPod, Modal, or AWS EC2 g5 instances. We implement aggressive model caching, queue management, and cold-start mitigation strategies.
                                </p>
                            </div>

                            {/* API-First Architecture */}
                            <div className="bg-white rounded-3xl border border-neutral-200 p-8 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300">
                                <div className="mb-6">
                                    <Image
                                        src="/images/icon-api-3d.png"
                                        alt="API Stack"
                                        width={80}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                                <h3 className="text-xl font-black mb-4 tracking-tight text-gray-900">3. API-First Architecture</h3>
                                <p className="text-neutral-600 leading-relaxed text-sm">
                                    We deliver more than a workflow. We deliver a documented, type-safe API (REST or WebSocket) ready for immediate consumption by your React, Next.js, or mobile application. Zero "glue code" required from your team.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* --- THE FILTER --- 
            Design: Simplified "Stats Grid" (removed Terminal aesthetic).
            Context: Matches the 'Stats Card' from HeroGrid.tsx but expanded.
        */}
                <section className="py-24 px-4 bg-white">
                    <div className="mx-auto max-w-7xl">

                        <h3 className="text-4xl md:text-5xl font-black mb-12 tracking-tight text-gray-900">The Filter.</h3>
                        <p className="text-xl text-neutral-500 font-medium leading-relaxed max-w-2xl mb-16">
                            This service is not for hobbyists. It is for founders building high-volume generative applications.
                        </p>

                        <div className="grid md:grid-cols-3 gap-12 border-t border-neutral-100 pt-12">
                            <div className="flex flex-col gap-2">
                                <span className="text-6xl font-black text-gray-900 tracking-tighter">$2.5M+</span>
                                <div className="h-1 w-12 bg-indigo-600 rounded-full mb-2"></div>
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Verified Revenue</span>
                                <p className="text-neutral-600 text-sm font-medium mt-2">Generated directly through custom generative pipelines for clients.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-6xl font-black text-gray-900 tracking-tighter">Sub-1s</span>
                                <div className="h-1 w-12 bg-indigo-600 rounded-full mb-2"></div>
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">Inference Latency</span>
                                <p className="text-neutral-600 text-sm font-medium mt-2">Achieved via TensorRT optimization and custom schedulers.</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <span className="text-6xl font-black text-gray-900 tracking-tighter">100%</span>
                                <div className="h-1 w-12 bg-indigo-600 rounded-full mb-2"></div>
                                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">IP Ownership</span>
                                <p className="text-neutral-600 text-sm font-medium mt-2">You own the custom nodes, the container config, and the API wrapper. No block boxes.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- CTA SECTION --- 
            Design: Clean OrbitalWrapper usage. Consistent with contact page premium feel.
        */}
                <section id="audit" className="pb-32 px-4 bg-white">
                    <div className="mx-auto max-w-4xl pt-12">
                        <div className="relative rounded-[2.5rem] overflow-hidden border border-neutral-100 shadow-2xl shadow-indigo-100/50">
                            <OrbitalWrapper>
                                <div className="bg-white/80 backdrop-blur-xl p-12 md:p-20 text-center relative z-10">
                                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                        Book Technical Audit
                                    </h2>

                                    <p className="text-lg text-neutral-500 mb-10 font-medium max-w-lg mx-auto">
                                        Stop losing leads to latency. Talk to a Systems Engineer, not a salesperson.
                                    </p>

                                    <a
                                        href="https://cal.com/pranamyajain"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center h-16 px-10 rounded-full bg-gray-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-gray-800 hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        Execute booking
                                        <ArrowUpRight className="ml-3 w-4 h-4" />
                                    </a>
                                </div>
                            </OrbitalWrapper>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
