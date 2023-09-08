'use client'
import {Button} from "@/components/ui/button";
import React from "react";

export const Experience = () => {
    return (
        <>
            <section id="get-started-today" className="relative overflow-hidden bg-primary-800 py-32">tes<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative"><div className="mx-auto max-w-lg text-center"><h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">Lancez-vous maintenant!</h2><p className="mt-4 text-lg tracking-tight text-white">It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.</p>
            <div className='flex justify-center gap-3 pt-6'>
                <Button handleClick={(e) => {}} variant="outlined" className="text-primary-900 border-2 border-white bg-white">
                    S’inscrire maintenant
                </Button>
            </div>
            </div></div></section>
        </>
    );
};