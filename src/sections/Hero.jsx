import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import useMousePosition from '../hooks/useMousePosition';
import { TRANSITION_DEFAULTS, FADE_UP_VARIANTS, STAGGER_DELAY } from '../animations/constants';

export default function Hero({ onOpenContact }) {
    const { x, y } = useMousePosition();
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1000;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 1000;

    const xOffset = (x / screenWidth - 0.5) * 30;
    const yOffset = (y / screenHeight - 0.5) * 30;

    const handleViewWork = () => {
        const workSection = document.getElementById('work');
        if (workSection) {
            workSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="relative h-screen flex items-center overflow-hidden">
            {/* Parallax Background - Fluid Animated Orbs */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-900/30 to-purple-900/30 blur-3xl mix-blend-screen"
                    animate={{
                        x: [0, 50, -50, 0],
                        y: [0, -30, 20, 0],
                        scale: [1, 1.1, 0.9, 1]
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-emerald-900/20 to-teal-900/20 blur-3xl mix-blend-screen"
                    animate={{
                        x: [0, -30, 30, 0],
                        y: [0, 40, -40, 0],
                        scale: [1, 1.2, 0.8, 1]
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-white/5 blur-2xl mix-blend-overlay"
                    animate={{
                        x: [0, 40, -40, 0],
                        y: [0, -40, 20, 0],
                        opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 z-10 w-full grid grid-cols-1 md:grid-cols-2">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: STAGGER_DELAY } }
                    }}
                    className="flex flex-col gap-8"
                >
                    <div className="overflow-hidden">
                        <h1 className="text-6xl md:text-8xl font-bold leading-tight flex flex-col">
                            <motion.span variants={FADE_UP_VARIANTS}>Crafting</motion.span>
                            <motion.span variants={FADE_UP_VARIANTS}>Digital</motion.span>
                            <motion.span variants={FADE_UP_VARIANTS} className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                Experiences
                            </motion.span>
                        </h1>
                    </div>

                    <motion.p variants={FADE_UP_VARIANTS} className="text-xl text-gray-secondary max-w-md">
                        We build immersive web applications that define the future of interaction.
                    </motion.p>

                    <motion.div variants={FADE_UP_VARIANTS} className="flex gap-4">
                        <Button variant="primary" onClick={onOpenContact}>Start Project</Button>
                        <Button variant="secondary" onClick={handleViewWork}>View Work</Button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll</span>
                <motion.div
                    className="w-[1px] h-12 bg-gray-800 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute top-0 left-0 w-full h-1/2 bg-white"
                        animate={{ y: ["-100%", "200%"] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}
