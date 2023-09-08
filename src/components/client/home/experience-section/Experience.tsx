'use client'
import {Button} from "@/components/ui/button";
import React from "react";

export const Experience = () => {
    return (
        <>
            <section id="get-started-today" className="relative overflow-hidden bg-primary-800 py-32">
                <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
                    <svg viewBox="0 0 558 558" width="558" height="558" fill="none" aria-hidden="true"
                         className="animate-pulse duration-300">
                        <defs>
                            <linearGradient id=":S4:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#fff"></stop>
                                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                            </linearGradient>
                        </defs>
                        <path opacity=".2"
                              d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                              stroke="#fff"></path>
                        <path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:S4:)" stroke-linecap="round"></path>
                    </svg>
                </div>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                    <div className="mx-auto max-w-lg text-center"><h2
                        className="font-display text-3xl tracking-tight text-white sm:text-4xl">Lancez-vous
                        maintenant!</h2><p className="mt-4 text-lg tracking-tight text-white">It’s time to take control
                        of your books. Buy our software so you can feel like you’re doing something productive.</p>
                        <div className='flex justify-center gap-3 pt-6'>
                            <Button handleClick={(e) => {
                            }} variant="outlined" className="text-primary-900 border-2 border-white bg-white">
                                S’inscrire maintenant
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};