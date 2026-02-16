import { motion, AnimatePresence } from 'framer-motion';
import { TRANSITION_DEFAULTS } from '../animations/constants';

const menuVariants = {
    closed: {
        x: '100%',
        transition: TRANSITION_DEFAULTS
    },
    open: {
        x: 0,
        transition: {
            type: "spring",
            stiffness: 70,
            damping: 20
        }
    }
};

const linkVariants = {
    closed: { opacity: 0, x: 50 },
    open: (i) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.1 + 0.3, ...TRANSITION_DEFAULTS }
    })
};

const NAV_ITEMS = [
    { label: "Home", href: "#home" },
    { label: "Our Work", href: "#work" },
    { label: "Services", href: "#about" }, // Linking to Stats/About section
    { label: "About", href: "#about" },
];

export default function MobileMenu({ isOpen, onClose, onOpenContact }) {
    const handleNavigation = (href) => {
        onClose();
        // Allow menu to close before scrolling
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 500);
    };

    const handleContactClick = () => {
        onClose();
        setTimeout(() => {
            onOpenContact();
        }, 300);
    };

    return (
        <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            variants={menuVariants}
            className="fixed top-0 right-0 h-full w-full md:w-[600px] bg-black border-l border-white/10 z-[60] flex flex-col p-8 md:p-16 overflow-y-auto custom-scrollbar"
        >
            {/* Close Button Area */}
            <div className="flex justify-end mb-8">
                <button onClick={onClose} className="p-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all group">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:rotate-90 transition-transform duration-300">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>

            <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item, i) => (
                    <motion.button
                        key={item.label}
                        custom={i}
                        variants={linkVariants}
                        onClick={() => handleNavigation(item.href)}
                        className="text-3xl md:text-5xl font-light tracking-wide text-left hover:text-gray-secondary transition-colors"
                    >
                        {item.label}
                    </motion.button>
                ))}

                <motion.button
                    custom={4}
                    variants={linkVariants}
                    onClick={handleContactClick}
                    className="text-3xl md:text-5xl font-light tracking-wide text-left hover:text-gray-secondary transition-colors"
                >
                    Contact
                </motion.button>
            </nav>

            <motion.div
                initial={{ opacity: 0 }}
                animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-auto pt-12 border-t border-white/10 text-sm md:text-base"
            >
                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase text-xs tracking-widest font-semibold">Email</span>
                    <a href="mailto:hello@sahil.ai" className="text-white hover:text-gray-300 transition-colors">hello@sahil.ai</a>

                    <span className="text-gray-500 uppercase text-xs tracking-widest mt-4 font-semibold">Socials</span>
                    <div className="flex gap-4 text-white">
                        <a href="#" className="hover:text-gray-300 transition-colors">Instagram</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <span className="text-gray-500 uppercase text-xs tracking-widest font-semibold">Phone</span>
                    <p className="text-white">+1 (555) 012-3456</p>
                    <p className="text-white">+1 (555) 987-6543</p>
                </div>
            </motion.div>
        </motion.div>
    );
}
