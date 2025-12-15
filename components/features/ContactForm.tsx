'use client'

import { useActionState, useEffect } from 'react'
import { submitLead, type FormState } from '@/app/actions/submit-lead'
import { Loader2, Send, CheckCircle2 } from 'lucide-react'
import confetti from 'canvas-confetti'

const initialState: FormState = {
    success: false,
    message: '',
}

export default function ContactForm() {
    const [state, formAction, pending] = useActionState(submitLead, initialState)

    // Trigger confetti on success
    useEffect(() => {
        if (state.success) {
            const end = Date.now() + 3 * 1000;
            const colors = ['#6366f1', '#10b981', '#06b6d4', '#8b5cf6'];

            (function frame() {
                confetti({
                    particleCount: 2,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: colors
                });
                confetti({
                    particleCount: 2,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: colors
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }());
        }
    }, [state.success]);

    if (state.success) {
        return (
            <div className="w-full max-w-md mx-auto p-8 rounded-[24px] bg-white border border-emerald-100 shadow-xl flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6 animate-in slide-in-from-bottom-4 duration-700 delay-100">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-2 font-geist">Message sent successfully!</h3>
                <p className="text-neutral-500 font-geist">I'll get back to you within 24 hours.</p>
                <div className="mt-8">
                    <button
                        onClick={() => window.location.reload()}
                        className="text-sm text-neutral-400 hover:text-neutral-600 font-medium transition-colors"
                    >
                        Send another message
                    </button>
                </div>
            </div>
        )
    }

    return (
        <form action={formAction} className="space-y-8 w-full max-w-md mx-auto">
            {state.message && !state.success && (
                <div className="p-4 rounded-[12px] text-sm bg-red-50 text-red-700 border border-red-100">
                    {state.message}
                </div>
            )}

            <div className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold font-geist pl-1">Your Name*</label>
                    <input
                        required
                        type="text"
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-[12px] border border-transparent bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-200 font-geist"
                    />
                    {state.errors?.name && <p className="text-xs text-red-500 pl-1">{state.errors.name[0]}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold font-geist pl-1">Work Email*</label>
                    <input
                        required
                        type="email"
                        id="email"
                        name="email"
                        placeholder="john@company.com"
                        className="w-full rounded-[12px] border border-transparent bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-200 font-geist"
                    />
                    {state.errors?.email && <p className="text-xs text-red-500 pl-1">{state.errors.email[0]}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold font-geist pl-1">Company Name & Role*</label>
                    <input
                        required
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Acme Inc., VP of Engineering"
                        className="w-full rounded-[12px] border border-transparent bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-200 font-geist"
                    />
                    {state.errors?.company && <p className="text-xs text-red-500 pl-1">{state.errors.company[0]}</p>}
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-wider text-neutral-500 font-semibold font-geist pl-1">Tell me about your AI challenge</label>
                    <textarea
                        required
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="E.g., &quot;We built a model but can't deploy it&quot; or &quot;We're drowning in unstructured data&quot;"
                        className="w-full rounded-[12px] border border-transparent bg-neutral-100/50 px-4 py-3.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-300 focus:bg-white focus:outline-none focus:shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-200 font-geist resize-none"
                    />
                    {state.errors?.message && <p className="text-xs text-red-500 pl-1">{state.errors.message[0]}</p>}
                </div>
            </div>

            <button
                type="submit"
                disabled={pending}
                className="w-full h-14 inline-flex items-center justify-center gap-2 rounded-[12px] bg-neutral-900 px-8 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98] shadow-[0_1px_2px_rgba(0,0,0,0.06)] disabled:opacity-50 disabled:cursor-not-allowed font-geist group"
            >
                {pending ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin text-neutral-400" />
                        <span className="text-neutral-300">Sending...</span>
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="h-4 w-4 text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:text-white" />
                    </>
                )}
            </button>
        </form>
    )
}
