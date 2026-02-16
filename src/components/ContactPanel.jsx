import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';

const panelVariants = {
    hidden: { x: '100%' },
    visible: {
        x: 0,
        transition: { type: "spring", stiffness: 70, damping: 20 }
    }
};

function Input({ label, type = "text", placeholder }) {
    return (
        <div className="relative group">
            <label className="text-sm text-gray-secondary mb-1 block uppercase tracking-wide">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none text-white placeholder-gray-600"
            />
            <motion.span
                className="absolute bottom-0 left-0 h-[1px] bg-white w-0 group-focus-within:w-full transition-all duration-500 ease-out"
            />
        </div>
    );
}

export default function ContactPanel({ isOpen, onClose }) {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={panelVariants}
                        className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-black border-l border-white/10 z-50 p-12 flex flex-col justify-between shadow-2xl"
                    >
                        <div>
                            <div className="flex justify-between items-center mb-16">
                                <h2 className="text-4xl font-bold">Let's Talk</h2>
                                <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>

                            <form className="space-y-12">
                                <Input label="Name" placeholder="John Doe" />
                                <Input label="Email" type="email" placeholder="john@example.com" />
                                <Input label="Project" placeholder="Tell us about your next big thing" />

                                <div className="pt-8">
                                    <Button type="button" variant="primary" className="w-full justify-center">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>

                        <div className="text-gray-secondary text-sm">
                            <p>hello@sahil.ai</p>
                            <p>+1 (555) 000-0000</p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
