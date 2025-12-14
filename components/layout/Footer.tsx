import { Linkedin, Instagram, Dribbble, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-neutral-100 mt-12 py-12 px-6 md:px-12 rounded-3xl hover:shadow-md transition-shadow duration-300">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-8 font-geist text-neutral-700">
                <div>
                    <h4 className="text-lg font-semibold mb-4 tracking-tight font-geist">Pranamya Jain</h4>
                    <p className="text-sm font-light max-w-xs">Crafting Clarity-First AI solutions for Human-Centric Workflows Worldwide</p>
                    <p className="mt-4 text-xs text-neutral-400 font-light">© {new Date().getFullYear()} Pranamya Jain. All rights reserved.</p>
                </div>
                <div>
                    <h5 className="text-sm font-semibold mb-3 tracking-tight font-geist">Services</h5>
                    <ul className="space-y-2 text-sm font-light">
                        <li><Link href="/#services" className="hover:text-indigo-600 transition-colors duration-200">Clarity First Consulting</Link></li>
                        <li><Link href="/#services" className="hover:text-indigo-600 transition-colors duration-200">GenAI solutions Development</Link></li>
                        <li><Link href="/#services" className="hover:text-indigo-600 transition-colors duration-200">AI Strategy</Link></li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-sm font-semibold mb-3 tracking-tight font-geist">Company</h5>
                    <ul className="space-y-2 text-sm font-light">
                        <li><Link href="/#about" className="hover:text-indigo-600 transition-colors duration-200">About Us</Link></li>
                        <li><Link href="/case-studies" className="hover:text-indigo-600 transition-colors duration-200">Case Studies</Link></li>
                        <li><Link href="/#" className="hover:text-indigo-600 transition-colors duration-200">Blog</Link></li>
                        <li><Link href="/contact" className="hover:text-indigo-600 transition-colors duration-200">Contact</Link></li>
                    </ul>
                </div>
                <div className="">
                    <h5 className="text-sm font-semibold mb-3 tracking-tight font-geist">Follow Us</h5>
                    <div className="flex space-x-4">
                        <Link href="#" aria-label="Twitter" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110">
                            <Twitter className="w-6 h-6" />
                        </Link>
                        <Link href="#" aria-label="LinkedIn" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110">
                            <Linkedin className="w-6 h-6" />
                        </Link>
                        <Link href="#" aria-label="Instagram" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110">
                            <Instagram className="w-6 h-6" />
                        </Link>
                        <Link href="#" aria-label="Dribbble" className="text-neutral-500 hover:text-indigo-600 transition-all duration-200 hover:scale-110">
                            <Dribbble className="w-6 h-6" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
