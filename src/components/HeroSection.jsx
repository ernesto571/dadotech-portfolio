import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const btn = "py-3 font-grotesque px-5 font-semibold text-sm lg:text-[0.9rem]"
const subs = [
    {label:"5+", sub:"YEARS ACTIVE"},
    {label:"6", sub:"SERVICES"},
    {label:"CAC", sub:"REGISTERED"},
    {label:"24/7", sub:"WA SUPPORT"}
]
const heroInfo = [

]
export default function HeroSection() {

    useGSAP(() => {
        const heroSplit = new SplitText("#hero-title", { type: "chars, words" });
        const subtitleSplit = new SplitText("#hero-subtitle", { type: "lines" });

        const tl = gsap.timeline();

        tl.from(heroSplit.chars, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "back.out",
            stagger: 0.02,
        }).from(subtitleSplit.lines, {
            opacity: 0,
            y: 15,
            duration: 0.5,
            ease: "power2.out",
            stagger: 0.1,
        }, "-=0.2"); // slight overlap so it feels fluid
    });

    return (
        <div className=' h-screen max-w-screen relative'>
            <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1781291294/dadotech-bg_sodk3h.jpg" alt="hero-bg" className='relative h-full w-full object-cover' />
            <div className='hero-overlay'></div>
            <div className='absolute w-[82%] mx-auto gap-3 grid items-center grid-cols-1 lg:grid-cols-2  inset-0' >
                <section className='mt-3 md:mt-0'>
                    <span className='inline-flex items-center gap-3 font-grotesque font-bold green tracking-wider text-xs md:text-sm  px-5 py-2 bg-[rgba(26,107,47,0.08)] border border-[rgba(26,107,47,0.25)] '>
                        <div className="bg-[#b5e231] animate-pulse w-[7px] h-[7px] rounded-full"></div>
                        <p>CAC REG. · CRN 9359229 · OSOGBO, OSUN STATE</p>
                    </span>
                    <div className="dark text-[3rem] leading-[3.4rem] lg:text-[5.3rem] font-semibold lg:leading-[5.4rem] mt-4 font-bebas tracking-wide">
                        POWER YOUR
                        <h1 className='green'>WORLD WITH US.</h1>
                    </div>
                    <p className='font-grotesque text-[0.9rem] leading-6 lg:text-base gray mt-3 md:w-[60%] lg:w-[80%] font-medium'>Dadotech Consultant delivers certified Solar, HVAC, and Electrical solutions for homes and businesses across Nigeria. Reliable. Professional. Ready.</p>

                    {/* hero btn */}
                    <span className=' grid md:flex text-center gap-4 mt-8'>
                        <a className={`${btn} bg-green text-white`} href="#consult">📱 BOOK FREE CONSULTATION</a>
                        <a className={`${btn} bg-lemon text-gray-900`} href="#services">VIEW SERVICES</a>
                    </span>
                    <span className='grid grid-cols-3 md:flex gap-7 mt-9'>
                        { subs.map((s) => (
                            <div key={s.label}> 
                                <h3 className='font-bebas green font-bold text-[2rem]'>{s.label} </h3>
                                <p className='font-grotesque text-xs tracking-wider lg:text-[0.8rem] gray'>{s.sub} </p>
                            </div>
                        )) }
                    </span>
                </section>

                <section className='relative hidden lg:flex'>
                    <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1781300869/IMG-20260612-WA0026_xadqcv.jpg" alt="lhs" className='w-[70%] mx-auto animate-hero-float relative'/>
                    <span className="absolute top-[3rem] right-[3rem] inline-flex gap-2.5 items-center bg-white px-4 py-3 animate-badge-float1">
                        <h1 className="px-1 py-1 bg-[#edf5e1] ">☀️</h1>
                        <div className='dark font-inter font-bold text-xs'>
                            Solar Systems
                            <p className='gray text-[0.7rem] font-normal'>Panels · Inverters</p>
                        </div>
                    </span>
                    <span className="absolute bottom-[13rem] left-[2rem] inline-flex gap-2.5 items-center bg-white px-4 py-3 animate-badge-float2">
                        <h1 className="px-1 py-1 bg-[#edf5e1] ">❄️</h1>
                        <div className='dark font-inter font-bold text-xs'>
                            HVAC SOLUTIONS
                            <p className='gray text-[0.7rem] font-normal'>Install · Repair</p>
                        </div>
                    </span>
                    <span className="absolute bottom-[5rem] right-[2rem] inline-flex gap-2.5 items-center bg-white px-4 py-3 animate-badge-float3">
                        <h1 className="px-1 py-1 bg-[#edf5e1] ">⚡</h1>
                        <div className='dark font-inter font-bold text-xs'>
                            Electrical Works
                            <p className='gray text-[0.7rem] font-normal'>Wiring · Fault Fix</p>
                        </div>
                    </span>
                    
                </section>
            </div>
        </div>
    );
}
