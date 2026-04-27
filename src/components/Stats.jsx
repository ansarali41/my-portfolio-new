'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiCpu, FiLayers } from 'react-icons/fi';
import AnimatedCounter from './AnimatedCounter';

const stats = [
    { value: 4, suffix: '+', label: 'Years of Experience', icon: FiBriefcase, color: 'from-blue-500 to-cyan-500' },
    { value: 10, suffix: '+', label: 'Projects Shipped', icon: FiLayers, color: 'from-purple-500 to-pink-500' },
    { value: 500, suffix: '+', label: 'Problems Solved', icon: FiCpu, color: 'from-amber-500 to-rose-500' },
    { value: 8, suffix: '+', label: 'Technologies Mastered', icon: FiCode, color: 'from-emerald-500 to-teal-500' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Stats() {
    return (
        <section className="relative py-16 overflow-hidden">
            <div className="absolute inset-0 bg-mesh -z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] blob bg-blue-400 dark:bg-blue-600 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                >
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                                className="group relative rounded-2xl p-6 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md border border-[var(--border-subtle)] shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <div className={`inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 shadow-md`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <div className="font-display text-3xl md:text-4xl font-bold leading-none">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </div>
                                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
