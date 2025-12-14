import { LucideIcon, Zap, Bot, Users, MessageSquare } from 'lucide-react';

export interface ServiceCTA {
    label: string;
    href: string;
    variant: 'primary' | 'secondary';
    external?: boolean;
}

export interface ServiceCard {
    id: string;
    title: string;
    description: string;
    cta: ServiceCTA;
    image?: string;
}

export interface Service {
    slug: string;
    title: string;
    description: string;
    icon: LucideIcon;
    primaryCard: ServiceCard;
    secondaryCards: ServiceCard[];
}

export const services: Service[] = [
    {
        slug: 'lead-generation',
        title: 'Lead Generation',
        description: 'AI-powered lead generation systems that convert',
        icon: Zap,
        primaryCard: {
            id: 'lead-gen-primary',
            title: 'Help with Lead Generation?',
            description: 'Build automated lead generation systems that identify, qualify, and nurture prospects 24/7. Leverage AI to scale your outreach while maintaining personalization.',
            cta: {
                label: 'Book a Strategy Call',
                href: 'https://cal.com/pranamyajain',
                variant: 'primary',
                external: true,
            },
        },
        secondaryCards: [
            {
                id: 'ai-automation',
                title: 'AI Automation Solutions',
                description: 'Streamline your workflows with custom AI automation. From data processing to customer service, automate repetitive tasks and focus on growth.',
                cta: {
                    label: 'Explore Automation',
                    href: '/services/ai-automation',
                    variant: 'secondary',
                },
            },
            {
                id: 'consultation',
                title: 'Expert Consultation',
                description: 'Get strategic guidance on your AI initiatives. One-on-one sessions to map your AI roadmap and avoid costly mistakes.',
                cta: {
                    label: 'Schedule Consultation',
                    href: '/services/consultation',
                    variant: 'secondary',
                },
            },
        ],
    },
    {
        slug: 'ai-automation',
        title: 'AI Automation',
        description: 'Custom automation solutions that scale your business',
        icon: Bot,
        primaryCard: {
            id: 'ai-automation-primary',
            title: 'Ready to Automate?',
            description: 'Transform your business with production-grade AI automation. We build custom systems using ComfyUI, n8n, and cutting-edge AI models to automate everything from content creation to customer workflows.',
            cta: {
                label: 'Book a Demo',
                href: 'https://cal.com/pranamyajain',
                variant: 'primary',
                external: true,
            },
        },
        secondaryCards: [
            {
                id: 'lead-gen',
                title: 'Lead Generation Systems',
                description: 'AI-powered lead generation that runs 24/7. Identify, qualify, and nurture prospects automatically while you focus on closing deals.',
                cta: {
                    label: 'Get Started',
                    href: '/services/lead-generation',
                    variant: 'secondary',
                },
            },
            {
                id: 'mentorship',
                title: 'AI Mentorship Program',
                description: 'Learn to build AI systems from someone who has generated $2.5M+ in verified revenue. Hands-on guidance, not theory.',
                cta: {
                    label: 'Join Mentorship',
                    href: '/services/mentorship',
                    variant: 'secondary',
                },
            },
        ],
    },
    {
        slug: 'mentorship',
        title: 'Mentorship',
        description: 'Learn to build revenue-generating AI systems',
        icon: Users,
        primaryCard: {
            id: 'mentorship-primary',
            title: 'Join AI Mentorship?',
            description: 'Learn to build production-grade AI systems from scratch. Get hands-on guidance from someone who has built systems generating $2.5M+ in verified revenue. No fluff, just practical implementation.',
            cta: {
                label: 'Apply for Mentorship',
                href: '/contact',
                variant: 'primary',
            },
        },
        secondaryCards: [
            {
                id: 'consultation',
                title: 'Quick Expert Consultation',
                description: 'Not ready for full mentorship? Book a one-time consultation session for strategic guidance on your AI projects.',
                cta: {
                    label: 'Book Consultation',
                    href: '/services/consultation',
                    variant: 'secondary',
                },
            },
            {
                id: 'ai-automation',
                title: 'Done-For-You Automation',
                description: 'Want us to build it for you? We create custom AI automation solutions tailored to your business needs.',
                cta: {
                    label: 'Explore Services',
                    href: '/services/ai-automation',
                    variant: 'secondary',
                },
            },
        ],
    },
    {
        slug: 'consultation',
        title: 'Consultation',
        description: 'Strategic AI guidance for your business',
        icon: MessageSquare,
        primaryCard: {
            id: 'consultation-primary',
            title: 'Need Expert Guidance?',
            description: 'Strategic one-on-one sessions to evaluate your AI opportunities, prevent costly mistakes, and create a clear implementation roadmap. Get answers from someone who has deployed production AI systems.',
            cta: {
                label: 'Book Consultation',
                href: 'https://cal.com/pranamyajain',
                variant: 'primary',
                external: true,
            },
        },
        secondaryCards: [
            {
                id: 'mentorship',
                title: 'Long-term Mentorship',
                description: 'Need ongoing support? Join the mentorship program for continuous guidance as you build your AI systems.',
                cta: {
                    label: 'Learn More',
                    href: '/services/mentorship',
                    variant: 'secondary',
                },
            },
            {
                id: 'lead-gen',
                title: 'Lead Generation Setup',
                description: 'Want to start with lead generation? We can help you build automated systems that run 24/7.',
                cta: {
                    label: 'Start Generating Leads',
                    href: '/services/lead-generation',
                    variant: 'secondary',
                },
            },
        ],
    },
];

export const allServiceCards: ServiceCard[] = [
    {
        id: 'lead-gen-card',
        title: 'Help with Lead Generation?',
        description: 'If you need my help with getting more leads, appointments and customers through the power of AI-Automations.',
        image: '/3d-icons/lead-gen.png',
        cta: {
            label: 'Book Now',
            href: 'https://cal.com/pranamyajain',
            variant: 'secondary',
            external: true,
        },
    },
    {
        id: 'ai-automation-card',
        title: 'Help with AI Automation?',
        description: 'If you need my help with AI-Automations to streamline your business operations weather it is sales, customer support or delivery.',
        image: '/3d-icons/automation.png',
        cta: {
            label: 'Book Now',
            href: 'https://cal.com/pranamyajain',
            variant: 'secondary',
            external: true,
        },
    },
    {
        id: 'consultation-card',
        title: 'Looking for a Paid Consultation?',
        description: 'Book me and my team for a paid consultation regarding AI-Automation, Lead Generation, Cold Email and more.',
        image: '/3d-icons/consultation.png',
        cta: {
            label: 'Book Now',
            href: 'https://cal.com/pranamyajain',
            variant: 'secondary',
            external: true,
        },
    },
];

export const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/pranamya-jainn/',
        icon: 'linkedin',
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com/pranamyajain',
        icon: 'twitter',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/pranamyajainn',
        icon: 'github',
    },
];

export function getServiceBySlug(slug: string): Service | undefined {
    return services.find((service) => service.slug === slug);
}
