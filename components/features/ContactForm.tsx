'use client'

import { useActionState } from 'react'
import { submitLead, type FormState } from '@/app/actions/submit-lead'
import { Loader2, Send } from 'lucide-react'

const initialState: FormState = {
    success: false,
    message: '',
}

export default function ContactForm() {
    const [state, formAction, pending] = useActionState(submitLead, initialState)

    return (
        <form action={formAction} className="space-y-6 w-full max-w-md mx-auto">
            {state.message && (
                <div className={`p-4 rounded-lg text-sm ${state.success ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                    {state.message}
                </div>
            )}

            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-neutral-700 font-geist">Name</label>
                <input
                    required
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all font-geist"
                />
                {state.errors?.name && <p className="text-xs text-red-500">{state.errors.name[0]}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-neutral-700 font-geist">Email</label>
                <input
                    required
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@company.com"
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all font-geist"
                />
                {state.errors?.email && <p className="text-xs text-red-500">{state.errors.email[0]}</p>}
            </div>

            <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium text-neutral-700 font-geist">Company (Optional)</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Acme Inc."
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all font-geist"
                />
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-neutral-700 font-geist">Message</label>
                <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-lg border border-neutral-200 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-all font-geist resize-none"
                />
                {state.errors?.message && <p className="text-xs text-red-500">{state.errors.message[0]}</p>}
            </div>

            <button
                type="submit"
                disabled={pending}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-geist"
            >
                {pending ? (
                    <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        Send Message
                        <Send className="h-4 w-4" />
                    </>
                )}
            </button>
        </form>
    )
}
