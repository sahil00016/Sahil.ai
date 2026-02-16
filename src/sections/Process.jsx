import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const phases = [
    {
        id: 1,
        title: "Discovery",
        description: "We dive deep into your brand, understanding your goals, audience, and unique value proposition to build a solid foundation.",
        color: "bg-[#111]"
    },
    {
        id: 2,
        title: "Strategy",
        description: "Crafting a tailored roadmap that aligns with your business objectives, ensuring every pixel serves a purpose.",
        color: "bg-[#1a1a1a]"
    },
    {
        id: 3,
        title: "Design",
        description: "Visualizing the concept with stunning high-fidelity designs, focusing on user experience and brand storytelling.",
        color: "bg-[#222]"
    },
    {
        id: 4,
        title: "Development",
        description: "Bringing designs to life with clean, performant code, utilizing the latest technologies for a seamless experience.",
        color: "bg-[#2a2a2a]"
    }
];

export default function Process() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} className="relative w-full text-white bg-black">
            <div className="max-w-7xl mx-auto px-6 py-24">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-6xl font-bold mb-20 tracking-tighter"
                >
                    Our Process
                </motion.h2>

                <div className="relative">
                    {phases.map((phase, index) => {
                        const targetScale = 1 - ((phases.length - index) * 0.05);
                        const rangeStart = index * 0.25;
                        const rangeEnd = 1;

                        return (
                            <Card
                                key={phase.id}
                                i={index}
                                {...phase}
                                progress={scrollYProgress}
                                range={[rangeStart, rangeEnd]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

const Card = ({ i, title, description, color, progress, range, targetScale }) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    // Text Reveal Animation
    // Text comes from left to right as requested
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
        }
    };

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
                className={`relative flex flex-col items-center justify-center w-[90vw] md:w-[70vw] h-[60vh] rounded-3xl border border-white/10 ${color} origin-top shadow-2xl overflow-hidden`}
            >
                <div className="relative w-full h-full flex flex-col items-center justify-center p-10 text-center gap-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.4 }}
                        variants={textVariants}
                        className="flex flex-col gap-4"
                    >
                        <h3 className="text-4xl md:text-5xl font-bold">{title}</h3>
                        <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto">{description}</p>
                    </motion.div>

                    <div className="absolute top-6 left-6 text-9xl font-bold opacity-5 pointer-events-none">
                        0{i + 1}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
