import { motion } from 'framer-motion';
import ContactPanel from './ContactPanel';
import Chatbot from './Chatbot';

export default function FloatingElements({ contactOpen, setContactOpen, chatOpen, setChatOpen }) {
    return (
        <>
            {/* Bottom Left Chat Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setChatOpen(!chatOpen)}
                className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-lg hover:shadow-white/20 transition-all"
            >
                {chatOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </motion.button>

            {/* Right Side Vertical Tab */}
            <div className="fixed top-1/2 right-0 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 items-end pointer-events-none">
                <motion.div
                    className="pointer-events-auto bg-black border border-white/10 rounded-l-lg py-3 px-4 backdrop-blur-md cursor-pointer hover:bg-white/5 transition-colors origin-right"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setContactOpen(true)}
                >
                    <span className="writing-vertical-rl text-xs tracking-widest uppercase">Start a Project</span>
                </motion.div>
            </div>

            <ContactPanel isOpen={contactOpen} onClose={() => setContactOpen(false)} />
            <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
        </>
    );
}
