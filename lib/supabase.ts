import { createClient } from '@supabase/supabase-js'

// Type import is optional - if types don't exist, we use any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Database = any

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Missing Supabase environment variables. Contact form will work in mock mode.')
}

export const supabase = createClient<Database>(
    supabaseUrl || '',
    supabaseAnonKey || ''
)
