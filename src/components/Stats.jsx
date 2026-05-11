'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import AnimatedCounter from './AnimatedCounter';

const stats = [
    { value: 4, suffix: '+', label: 'Years of Experience', icon: FiBriefcase },
    { value: 10, suffix: '+', label: 'Projects Shipped', icon: FiLayers },
    { value: 500, suffix: '+', label: 'Problems Solved', icon: FiCpu },
    { value: 8, suffix: '+', label: 'Technologies', icon: FiCode },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Stats() {
    return (
        <section className="relative py-12">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--border-subtle)]"
                >
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="bg-[var(--background)] p-7 flex flex-col gap-3"
                            >
                                <Icon className="w-4 h-4 text-[var(--muted)]" />
                                <div className="font-display text-3xl md:text-4xl font-semibold leading-none tracking-tight">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="text-xs uppercase tracking-[0.15em] text-[var(--muted)] font-medium">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
