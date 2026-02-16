import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Philosophy() {
    const container = useRef(null);

    // Increased height to 300vh to slow down the scroll relative to viewport
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    // Transform scroll progress to x-axis movement
    // Scroll Down -> Right to Left
    // Scroll Up -> Left to Right
    const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

    return (
        <section ref={container} className="relative h-[300vh] bg-black">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <motion.div
                    style={{ x }}
                    className="whitespace-nowrap text-6xl md:text-9xl font-bold uppercase tracking-tighter text-white leading-none opacity-90"
                >
                    Digital Experiences • Sahil.ai • Immersion
                </motion.div>
            </div>
        </section>
    )
}
