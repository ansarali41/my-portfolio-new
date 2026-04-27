'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    aria-label="Scroll to top"
                    onClick={scrollUp}
                    initial={{ opacity: 0, y: 16, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 16, scale: 0.85 }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.92 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center w-11 h-11 rounded-full hero-gradient text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
                >
                    <FiArrowUp className="w-5 h-5" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
