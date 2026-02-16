import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer id="contact" className="bg-black py-20 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-2xl font-bold">SAHIL.AI</div>

                <div className="flex gap-8 text-sm text-gray-secondary">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                </div>

                <div className="text-sm text-gray-secondary">
                    © {new Date().getFullYear()} Sahil.ai. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
