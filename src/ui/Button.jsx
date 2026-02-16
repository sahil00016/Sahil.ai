import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function Button({ children, variant = 'primary', className, onClick, ...props }) {
    const baseStyles = "px-8 py-3 rounded-button font-medium transition-all duration-300 flex items-center gap-2";

    const variants = {
        primary: "bg-white text-black hover:scale-105 shadow-lg hover:shadow-xl",
        secondary: "bg-transparent border border-white/20 text-white hover:scale-105 hover:bg-white/5",
    };

    return (
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${className || ''} `}
        >
            {children}
        </motion.button>
    );
}

