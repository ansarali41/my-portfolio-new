'use client';

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center', className = '' }) {
    const isCenter = align === 'center';
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className={`${isCenter ? 'text-center mx-auto' : 'text-left'} max-w-2xl ${isCenter ? 'mb-16' : 'mb-12'} ${className}`}
        >
            {eyebrow && (
                <motion.p
                    variants={itemVariants}
                    className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600 dark:text-blue-400 mb-3"
                >
                    {eyebrow}
                </motion.p>
            )}
            <motion.h2 variants={itemVariants} className="font-display text-3xl md:text-4xl font-bold leading-tight">
                {title} {highlight && <span className="text-gradient-animated">{highlight}</span>}
            </motion.h2>
            {description && (
                <motion.p variants={itemVariants} className="mt-4 text-gray-600 dark:text-gray-400">
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
}
