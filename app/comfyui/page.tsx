import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ComfyUIPage() {
    return (
        <>
            <Navbar />
            <main className="font-geist text-gray-900 bg-white selection:bg-indigo-50 selection:text-indigo-900 pb-24">

                {/* --- HERO SECTION: Pure Typography & Flow --- */}
                <section className="mx-auto max-w-7xl px-3 sm:px-4 pt-20 pb-20 lg:px-8 relative">

                    {/* Text First Approach */}
                    <div className="relative z-10 w-full md:max-w-lg">
                        <h1 className="flex flex-col items-start leading-[0.9] text-gray-900 mb-10">
                            <span className="text-6xl md:text-8xl font-medium tracking-tighter">ComfyUI.</span>
                            <span className="text-6xl md:text-8xl font-black tracking-tighter mt-2 text-indigo-600">Production Grade.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-500 font-medium max-w-2xl leading-tight tracking-tight mt-6">
                            <span className="text-gray-900 font-bold">Specialized Engineering Services.</span> I engineer robust, versioned, and scalable ComfyUI backends for high-growth teams. Stop shipping screenshots; start shipping systems.
                        </p>
                        <div className="mt-12 flex items-center">
                            <a
                                href="#audit"
                                className="inline-flex items-center gap-4 bg-gray-900 text-white px-10 py-5 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-indigo-600 transition-colors duration-300 shadow-xl"
                            >
                                Start Technical Audit
                                <ArrowUpRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* The Continuous System Visual - Absolute & Flowing */}
                    <div className="absolute top-0 right-0 w-[50%] h-full -z-0 pointer-events-none hidden md:block rounded-l-[2.5rem] overflow-hidden">
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/comfyui-continuous-flow.png"
                                alt="Continuous Engineered System"
                                fill
                                className="object-cover object-left opacity-90 mix-blend-multiply mask-image-linear-to-l"
                                priority
                            />
                        </div>
                    </div>
                </section>

                {/* --- TRAP vs FIX: Soft Panels (No Boxes) --- */}
                <section className="mx-auto max-w-7xl px-3 sm:px-4 pb-24 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* The Trap - Soft Darker Panel */}
                        <div className="bg-neutral-50 rounded-[2.5rem] p-12 md:p-16">
                            <h3 className="text-rose-600 text-sm font-bold uppercase tracking-widest mb-8">The Reality Check</h3>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                Your workflow is a ticking time bomb.
                            </p>
                            <div className="space-y-6">
                                <div>
                                    <strong className="block text-gray-900 text-xl mb-1">JSON is not code.</strong>
                                    <p className="text-lg font-medium text-neutral-500">It’s a prototype that collapses under specific user load.</p>
                                </div>
                                <div>
                                    <strong className="block text-gray-900 text-xl mb-1">Zero IP Protection.</strong>
                                    <p className="text-lg font-medium text-neutral-500">If you can't deploy it as a binary, anyone can steal it.</p>
                                </div>
                                <div>
                                    <strong className="block text-gray-900 text-xl mb-1">Update Hell.</strong>
                                    <p className="text-lg font-medium text-neutral-500">One custom node updates, and your entire product goes offline.</p>
                                </div>
                            </div>
                        </div>

                        {/* The Fix - Soft Lighter Panel */}
                        <div className="bg-indigo-50/30 rounded-[2.5rem] p-12 md:p-16">
                            <h3 className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-8">The Solution</h3>
                            <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                We don't "wrap" ComfyUI. We Re-Engineer it.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <span className="text-indigo-600 font-mono text-sm mt-1">01</span>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900">100% Deterministic</p>
                                        <p className="text-neutral-500 font-medium">Same inputs. Same pixel-perfect outputs. Every time.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-indigo-600 font-mono text-sm mt-1">02</span>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900">Global Scale</p>
                                        <p className="text-neutral-500 font-medium">Deployed instantly to RunPod/Modal for cold-start safe inference.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <span className="text-indigo-600 font-mono text-sm mt-1">03</span>
                                    <div>
                                        <p className="text-xl font-bold text-gray-900">You Own Everything</p>
                                        <p className="text-neutral-500 font-medium">No black boxes. You get the Git repo, the docs, and the rights.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* --- CAPABILITIES: Typographic Markers --- */}
                <section id="services" className="mx-auto max-w-7xl px-3 sm:px-4 pb-24 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">

                        {/* 01 */}
                        <div className="group">
                            <div className="border-t border-neutral-200 pt-6 mb-6">
                                <span className="text-neutral-400 font-mono text-sm group-hover:text-indigo-600 transition-colors">01</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Node Architecture</h3>
                            <p className="text-lg text-neutral-600 font-medium leading-relaxed max-w-xs">
                                Custom Python abstractions. Deterministic behavior. No visual spaghetti.
                            </p>
                        </div>

                        {/* 02 */}
                        <div className="group">
                            <div className="border-t border-neutral-200 pt-6 mb-6">
                                <span className="text-neutral-400 font-mono text-sm group-hover:text-indigo-600 transition-colors">02</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Global Scale</h3>
                            <p className="text-lg text-neutral-600 font-medium leading-relaxed max-w-xs">
                                Cold-start safe inference on RunPod and Modal.
                            </p>
                        </div>

                        {/* 03 */}
                        <div className="group">
                            <div className="border-t border-neutral-200 pt-6 mb-6">
                                <span className="text-neutral-400 font-mono text-sm group-hover:text-indigo-600 transition-colors">03</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">Code Ownership</h3>
                            <p className="text-lg text-neutral-600 font-medium leading-relaxed max-w-xs">
                                You own the repo. You own the IP. Fully documented APIs.
                            </p>
                        </div>

                    </div>
                </section>

                {/* --- METRICS: Rigid Facts --- */}
                <section className="mx-auto max-w-7xl px-3 sm:px-4 pb-24 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-16 md:gap-24 text-left border-y border-neutral-100 py-16">

                        {/* Metric 1 */}
                        <div>
                            <div className="text-6xl md:text-7xl font-mono font-medium mb-6 tracking-tighter text-gray-900">
                                $2.5M+
                            </div>
                            <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-loose">
                                verified client revenue<br />generated
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div>
                            <div className="text-6xl md:text-7xl font-mono font-medium mb-6 tracking-tighter text-gray-900">
                                35ms
                            </div>
                            <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-loose">
                                average latency<br />overhead
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div>
                            <div className="text-6xl md:text-7xl font-mono font-medium mb-6 tracking-tighter text-gray-900">
                                21+
                            </div>
                            <p className="text-xs text-neutral-400 font-mono uppercase tracking-widest leading-loose">
                                Enterprise-grade<br />systems deployed
                            </p>
                        </div>

                    </div>
                </section>

                {/* --- CTA SECTION: Absolute Minimalism --- */}
                <section id="audit" className="mx-auto max-w-5xl px-4 py-32 text-center">
                    <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter">
                        Stop Debugging. Start Scaling.
                    </h2>
                    <p className="text-2xl text-neutral-500 mb-12 max-w-lg mx-auto font-medium tracking-tight">
                        Don't let a missing node dependency cost you another client. Let’s turn your workflow into a software asset.
                    </p>
                    <a
                        href="https://cal.com/pranamyajain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center h-20 px-12 bg-gray-900 text-white font-bold text-lg tracking-widest uppercase hover:bg-indigo-600 rounded-lg transition-colors duration-300 shadow-2xl"
                    >
                        Book Your Architecture Audit
                    </a>
                </section>

            </main >
            <Footer />
        </>
    );
}
