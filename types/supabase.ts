export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            leads: {
                Row: {
                    id: string
                    created_at: string
                    name: string
                    email: string
                    company: string | null
                    message: string
                    status: 'new' | 'contacted' | 'closed'
                }
                Insert: {
                    id?: string
                    created_at?: string
                    name: string
                    email: string
                    company?: string | null
                    message: string
                    status?: 'new' | 'contacted' | 'closed'
                }
                Update: {
                    id?: string
                    created_at?: string
                    name?: string
                    email?: string
                    company?: string | null
                    message?: string
                    status?: 'new' | 'contacted' | 'closed'
                }
            }
            case_studies: {
                Row: {
                    id: string
                    created_at: string
                    slug: string
                    title: string
                    description: string
                    client: string
                    tags: string[]
                    content: string
                    cover_image_url: string
                    published_at: string | null
                }
                Insert: {
                    id?: string
                    created_at?: string
                    slug: string
                    title: string
                    description: string
                    client: string
                    tags: string[]
                    content: string
                    cover_image_url: string
                    published_at?: string | null
                }
                Update: {
                    id?: string
                    created_at?: string
                    slug?: string
                    title?: string
                    description?: string
                    client?: string
                    tags?: string[]
                    content?: string
                    cover_image_url?: string
                    published_at?: string | null
                }
            }
        }
    }
}
