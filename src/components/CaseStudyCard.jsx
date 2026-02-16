import { motion } from 'framer-motion';
import Counter from './Counter';
import { TRANSITION_DEFAULTS } from '../animations/constants';

// Placeholder images for demo
const PLACEHOLDER_IMG = "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop";

export default function CaseStudyCard({ title, category, year, percentage }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-20%" }}
            className="relative w-full h-[600px] rounded-card overflow-hidden group cursor-pointer"
        >
            {/* Background Image with Zoom Effect */}
            <motion.div
                variants={{
                    hidden: { scale: 1.1 },
                    visible: {
                        scale: 1,
                        transition: { duration: 1.2, ease: TRANSITION_DEFAULTS.ease }
                    }
                }}
                whileHover={{ scale: 1.03 }}
                className="absolute inset-0 w-full h-full"
            >
                <img
                    src={PLACEHOLDER_IMG}
                    alt={title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            </motion.div>

            {/* Overlay Info Panel */}
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: { ...TRANSITION_DEFAULTS, delay: 0.2 }
                    }
                }}
                className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md p-8 rounded-card border border-white/10 w-80 shadow-2xl"
            >
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-gray-secondary text-sm uppercase tracking-wider block mb-1">{category}</span>
                        <h3 className="text-2xl font-bold">{title}</h3>
                    </div>
                    <span className="text-sm font-mono border border-white/20 px-2 py-1 rounded">{year}</span>
                </div>

                <div className="flex items-end gap-2 border-t border-white/10 pt-4 mt-4">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        <Counter value={percentage} />%
                    </span>
                    <span className="text-sm text-gray-secondary mb-1">Growth</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
