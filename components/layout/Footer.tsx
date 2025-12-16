import { Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-100 mt-12 py-12 px-6 md:px-12 rounded-3xl hover:shadow-md transition-shadow duration-300">
            <div className="mx-auto max-w-7xl flex flex-col md:flex-row justify-between gap-12 font-geist text-neutral-700">
                <div className="max-w-sm">
                    <h4 className="text-lg font-semibold mb-4 tracking-tight font-geist">Pranamya Jain</h4>
                    <p className="text-sm font-light text-neutral-500 mb-6 leading-relaxed">Crafting Clarity-First AI solutions for Human-Centric Workflows Worldwide.</p>
                    <p className="text-xs text-neutral-400 font-light">© {new Date().getFullYear()} Pranamya Jain. All rights reserved.</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-12 md:gap-24">
                    <div>
                        <h5 className="text-sm font-semibold mb-4 tracking-tight font-geist">Services</h5>
                        <ul className="space-y-3 text-sm text-neutral-500 font-medium">
                            <li><Link href="/services#consultation-card" className="hover:text-indigo-600 transition-colors duration-200">Consulting</Link></li>
                            <li><Link href="/services#ai-automation-card" className="hover:text-indigo-600 transition-colors duration-200">Development</Link></li>
                            <li><Link href="/services#lead-gen-card" className="hover:text-indigo-600 transition-colors duration-200">Strategy</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold mb-4 tracking-tight font-geist">Explore</h5>
                        <ul className="space-y-3 text-sm text-neutral-500 font-medium">
                            <li><Link href="/case-studies" className="hover:text-indigo-600 transition-colors duration-200">Case Studies</Link></li>
                            <li><Link href="/contact" className="hover:text-indigo-600 transition-colors duration-200">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-sm font-semibold mb-4 tracking-tight font-geist">Connect</h5>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/pranamya-jainn/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-neutral-400 hover:text-indigo-600 transition-all duration-200 hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
