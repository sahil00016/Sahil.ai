import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function FinalCTA({ onOpenContact }) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    // Mask/Clip Path Animation
    // We expand a circle clip-path from 0% to 150% radius to reveal the content
    const clipPath = useTransform(
        scrollYProgress,
        [0, 0.6],
        ["circle(0% at 50% 50%)", "circle(150% at 50% 50%)"]
    );

    const scale = useTransform(scrollYProgress, [0, 0.6], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);

    return (
        <section ref={container} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Background Text (Always visible but dim) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <h2 className="text-[10vw] font-bold text-[#111] text-center leading-none tracking-tighter uppercase">
                        Let's <br /> Build
                    </h2>
                </div>

                {/* Foreground Reveal */}
                <motion.div
                    style={{ clipPath, scale }}
                    className="relative z-10 w-full h-full bg-white flex flex-col items-center justify-center text-black"
                >
                    <div className="text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl font-medium mb-4 text-gray-600"
                        >
                            You've scrolled this far...
                        </motion.p>
                        <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-12">
                            Now let's <br /> build something.
                        </h2>

                        <button
                            onClick={onOpenContact}
                            className="bg-black text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform"
                        >
                            Start Project
                        </button>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
