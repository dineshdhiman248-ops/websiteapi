import { useEffect, useRef } from "react";
import { gsap } from "gsap";


function Hero() {
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const textRef = useRef<HTMLParagraphElement | null>(null);
    const btnRef = useRef<HTMLButtonElement | null>(null);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const tl = gsap.timeline();

            tl.from(titleRef.current, {
                y: -50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            })
                .from(textRef.current, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                }, "-=0.5")
                .from(btnRef.current, {
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                }, "-=0.5")
                .from(imgRef.current, {
                    x: 100,
                    opacity: 0,
                    duration: 1,
                }, "-=0.7");

        });

        return () => ctx.revert(); // cleanup fix
    }, []);

    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-10 bg-gradient-to-r from-blue-100 to-purple-200">

            {/* Left Content */}
            <div className="flex-1 text-center md:text-left">
                <h1
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold mb-4"
                >
                    Build Modern Websites
                </h1>

                <p
                    ref={textRef}
                    className="text-lg text-gray-700 mb-8"
                >
                    Create stunning UI with React, Tailwind & GSAP animations.
                </p>

                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition"
                >
                    Get Started
                </button>
            </div>

            {/* Right Image */}
            <div className="flex-1 mt-10 md:mt-0 flex justify-center">
                <img src="/images/Trustimg.jpg" alt="Hero" />

            </div>
        </section>
    );
}

export default Hero;


