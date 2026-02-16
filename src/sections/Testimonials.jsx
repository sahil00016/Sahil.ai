import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const TESTIMONIALS = [
    {
        id: 1,
        quote: "Sahil.ai transformed our digital presence. The attention to detail and animations are simply world-class.",
        author: "Sarah Jenkins",
        role: "CTO, FinTech Sol"
    },
    {
        id: 2,
        quote: "A true partner in design. They understood our vision instantly and elevated it beyond our expectations.",
        author: "Mark Davies",
        role: "Founder, Orbital"
    },
    {
        id: 3,
        quote: "The best development team we've worked with. Fast, responsive, and incredibly creative.",
        author: "Elena Rodriguez",
        role: "Product Lead, EcoTrack"
    },
    {
        id: 4,
        quote: "Exceptional quality. The site performs beautifully and the animations are buttery smooth.",
        author: "David Chen",
        role: "CEO, HyperTube"
    }
];

export default function Testimonials() {
    return (
        <section className="relative w-full bg-black py-32 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-20 text-center tracking-tighter"
                >
                    What Our Clients Say
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {TESTIMONIALS.map((testimonial, i) => (
                        <Card key={testimonial.id} {...testimonial} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Card = ({ quote, author, role, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors"
        >
            <div className="flex flex-col h-full justify-between gap-8">
                <p className="text-xl md:text-2xl leading-relaxed text-gray-200">"{quote}"</p>
                <div>
                    <div className="font-bold text-lg">{author}</div>
                    <div className="text-sm text-gray-500 uppercase tracking-widest mt-1">{role}</div>
                </div>
            </div>
        </motion.div>
    );
};
