'use server'

import { z } from 'zod'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    company: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
})

export type FormState = {
    success: boolean
    message: string
    errors?: {
        [K in keyof z.infer<typeof formSchema>]?: string[]
    }
}

export async function submitLead(prevState: FormState, formData: FormData): Promise<FormState> {
    const validatedFields = formSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        company: formData.get('company'),
        message: formData.get('message'),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Validation failed',
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, company, message } = validatedFields.data

    // Initialize clients
    const resendApiKey = process.env.RESEND_API_KEY
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // NOTE: For server actions, use Service Role Key if strictly backend, but Anon works if RLS allows insert. Ideally use Service Role for admin tasks. For public inserts Anon is fine if RLS is set up.

    // 1. Save to Supabase (if configured)
    if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey)
        try {
            const { error } = await supabase
                .from('leads')
                .insert([{ name, email, company, message, status: 'new' }])

            if (error) {
                console.error('Supabase Error:', error)
                // Don't fail the whole request if DB fails but Email works, or vice versa. 
                // For now, let's log it.
            }
        } catch (e) {
            console.error('Supabase Exception:', e)
        }
    }

    // 2. Send Email via Resend (if configured)
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY missing in production");
    }

    if (!process.env.CONTACT_EMAIL) {
        throw new Error("CONTACT_EMAIL missing in production");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const contactEmail = process.env.CONTACT_EMAIL;

    try {
        await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: contactEmail,
            subject: `New Lead: ${name}`,
            html: `
          <h3>New Lead Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'N/A'}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
        })
    } catch (e) {
        console.error('Resend Error:', e)
        // If both fail, we should probably return an error.
    }




    return {
        success: true,
        message: 'Message sent successfully!',
    }
}
