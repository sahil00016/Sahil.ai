import { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import MobileMenu from '../components/MobileMenu';
import { TRANSITION_DEFAULTS } from '../animations/constants';

export default function Navbar({ onOpenContact }) {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = lastScrollY;
        setLastScrollY(latest);

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <>
            <motion.header
                variants={{
                    visible: { y: 0 },
                    hidden: { y: '-100%' },
                }}
                animate={hidden ? 'hidden' : 'visible'}
                transition={TRANSITION_DEFAULTS}
                className={clsx(
                    "fixed top-0 left-0 w-full z-40 px-6 py-4 transition-colors duration-300",
                    scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5" : "bg-transparent"
                )}
            >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="text-xl font-bold tracking-tight">SAHIL.AI</div>

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="group z-50 relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
                    >
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: 45, y: 8 },
                            }}
                            animate={menuOpen ? "open" : "closed"}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="w-8 h-[2px] bg-white origin-center"
                        />
                        <motion.span
                            variants={{
                                closed: { opacity: 1, scale: 1 },
                                open: { opacity: 0, scale: 0 },
                            }}
                            animate={menuOpen ? "open" : "closed"}
                            transition={{ duration: 0.3 }}
                            className="w-8 h-[2px] bg-white"
                        />
                        <motion.span
                            variants={{
                                closed: { rotate: 0, y: 0 },
                                open: { rotate: -45, y: -8 },
                            }}
                            animate={menuOpen ? "open" : "closed"}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="w-8 h-[2px] bg-white origin-center"
                        />
                    </button>
                </div>
            </motion.header>

            <MobileMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                onOpenContact={onOpenContact}
            />
        </>
    );
}
