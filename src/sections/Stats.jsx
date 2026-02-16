import { motion } from 'framer-motion';
import Counter from '../components/Counter';
import { FADE_UP_VARIANTS } from '../animations/constants';

const STATS = [
    { id: 1, label: "Years of Experience", value: 12 },
    { id: 2, label: "Projects Completed", value: 85 },
    { id: 3, label: "Awards Won", value: 14 },
    { id: 4, label: "Happy Clients", value: 60 },
];

export default function Stats() {
    return (
        <section id="about" className="py-24 px-6 bg-black border-y border-white/10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
                {STATS.map((stat) => (
                    <motion.div
                        key={stat.id}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={FADE_UP_VARIANTS}
                        className="text-center"
                    >
                        <div className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
                            <Counter value={stat.value} duration={1.5} />+
                        </div>
                        <div className="text-sm text-gray-secondary uppercase tracking-widest">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
