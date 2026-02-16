import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CaseStudyCard from '../components/CaseStudyCard';
import { FADE_UP_VARIANTS } from '../animations/constants';

const PROJECTS = [
    { id: 1, title: "Neon Finance", category: "Fintech", year: "2024", percentage: 145 },
    { id: 2, title: "Orbital UI", category: "Design System", year: "2023", percentage: 80 },
    { id: 3, title: "EcoTrack", category: "Sustainability", year: "2023", percentage: 210 },
    { id: 4, title: "HyperTube", category: "Social Media", year: "2022", percentage: 320 }, // Added one more for effect
];

export default function Work() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section id="work" ref={targetRef} className="relative h-[400vh] bg-black">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="pl-12 md:pl-24 pr-8 min-w-[300px] md:min-w-[500px] z-10 bg-black/50 backdrop-blur-sm h-full flex flex-col justify-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.h2
                            variants={FADE_UP_VARIANTS}
                            className="text-5xl md:text-8xl font-bold mb-6"
                        >
                            Selected <br /> Work
                        </motion.h2>
                        <motion.div
                            variants={FADE_UP_VARIANTS}
                            className="w-24 h-1 bg-white"
                        />
                        <motion.p variants={FADE_UP_VARIANTS} className="mt-8 text-gray-secondary max-w-sm text-lg">
                            Discover our portfolio of award-winning digital experiences.
                        </motion.p>
                    </motion.div>
                </div>

                <motion.div style={{ x }} className="flex gap-16 pr-24 pl-12">
                    {PROJECTS.map((project) => (
                        <div key={project.id} className="min-w-[400px] md:min-w-[600px] h-[60vh]">
                            <CaseStudyCard {...project} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
