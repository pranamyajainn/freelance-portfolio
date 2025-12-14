'use client';

import React from 'react';

export default function OrbitalWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="group relative w-full h-full">
            {/* Background Layer: Blurred, lower opacity (Depth pass) */}
            <div className="absolute -inset-[1px] rounded-2xl opacity-20 blur-sm overflow-visible pointer-events-none">
                <svg className="w-full h-full absolute inset-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    <rect
                        className="w-full h-full stroke-neutral-500 fill-none"
                        rx="24"
                        strokeWidth="2"
                        strokeDasharray="40 980"
                        strokeLinecap="round"
                    >
                        <animate
                            attributeName="stroke-dashoffset"
                            from="1020"
                            to="0"
                            dur="14s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </svg>
            </div>

            {/* Primary Motion Layer */}
            <div className="absolute -inset-[1px] rounded-[24px] overflow-visible pointer-events-none z-20">
                <svg className="w-full h-full absolute inset-0 overflow-visible" xmlns="http://www.w3.org/2000/svg">
                    {/* The Rail (Subtle guide) */}
                    <rect
                        className="w-full h-full stroke-neutral-200/50 fill-none"
                        rx="24"
                        strokeWidth="1"
                    />

                    {/* The Traveler (Snake line) */}
                    <rect
                        className="w-full h-full stroke-neutral-400 fill-none transition-all duration-700 ease-out group-focus-within:stroke-neutral-800"
                        rx="24"
                        strokeWidth="1.5"
                        strokeDasharray="120 1200"
                        strokeLinecap="round"
                    >
                        {/* 
                           We use CSS animation in globals.css for finer control usually, 
                           but standard SMIL animate works well for continuous loops.
                           However, for the interaction "tighten/pause", CSS is better.
                           Let's use a class-based animation here.
                        */}
                    </rect>
                </svg>
            </div>

            {/* Actual Content */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>

            {/* Styles for the orbital animation */}
            <style jsx>{`
                rect[stroke-dasharray="120 1200"] {
                    animation: orbit 8s linear infinite;
                }
                
                /* Interaction: Slow down on focus */
                .group:focus-within rect[stroke-dasharray="120 1200"] {
                    animation-duration: 20s;
                    stroke-dasharray: 60 1200; /* Tighten the beam */
                }

                @keyframes orbit {
                    from { stroke-dashoffset: 1320; }
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
        </div>
    );
}
