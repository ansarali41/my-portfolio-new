'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCheckCircle, FiCpu, FiZap } from 'react-icons/fi';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const cards = [
    {
        icon: FiBriefcase,
        title: 'Professional Journey',
        description: 'Currently a Software Engineer at Tulip Tech, building Empathika — a home care platform — on a Nest.js monorepo with PostgreSQL and AWS.',
        gradient: 'from-blue-500 to-cyan-500',
        ring: 'ring-blue-500/20',
    },
    {
        icon: FiCpu,
        title: 'Technical Expertise',
        description: 'Proficient in building robust back-end systems, microservices architecture, event-driven workflows, and optimizing database performance.',
        gradient: 'from-purple-500 to-pink-500',
        ring: 'ring-purple-500/20',
    },
    {
        icon: FiZap,
        title: 'Problem Solving',
        description: 'Active problem solver with a strong presence on platforms like LeetCode, Codeforces, and HackerRank.',
        gradient: 'from-emerald-500 to-teal-500',
        ring: 'ring-emerald-500/20',
    },
];

const whatIDo = [
    'Design and implement scalable back-end solutions',
    'Develop microservices and event-driven architecture',
    'Optimize database performance and complex query tuning',
    'Build real-time communication systems',
    'Create efficient APIs and automated workflows',
    'Deliver SaaS, ERP, healthcare, CRM, and similar enterprise applications',
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => {
    return (
        <MotionSection id="about" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-dots opacity-60 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent dark:via-gray-900/40 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading
                    eyebrow="About"
                    title="About"
                    highlight="Me"
                    description="Software engineer with 4+ years of experience building back-end systems for healthcare, CRM, SaaS, and ERP platforms. I specialize in Nest.js, Node.js, and event-driven architecture on AWS — turning complex domain workflows into reliable, scalable APIs."
                />

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-6">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                                className={`group relative overflow-hidden rounded-2xl p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--border-subtle)] shadow-sm hover:shadow-xl transition-shadow ring-1 ${card.ring}`}
                            >
                                <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${card.gradient} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
                                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} text-white mb-4 shadow-md`}>
                                    <Icon className="w-5 h-5" />
                                </div>
                                <h3 className="font-display text-xl font-semibold mb-2">{card.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{card.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl p-8 bg-white dark:bg-gray-800/80 border border-[var(--border-subtle)] shadow-sm"
                    >
                        <h3 className="font-display text-xl font-semibold mb-5">What I Do</h3>
                        <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                            {whatIDo.map((item, idx) => (
                                <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                                    <FiCheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="rounded-2xl p-8 bg-white dark:bg-gray-800/80 border border-[var(--border-subtle)] shadow-sm"
                    >
                        <h3 className="font-display text-xl font-semibold mb-5">Certifications</h3>
                        <div className="space-y-5">
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-2.5">
                                    <FiAward className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium">MERN Stack Web Development</h4>
                                    <a href="https://cutt.ly/sHCQl3g" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                                        View Certificate →
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="rounded-xl bg-emerald-100 dark:bg-emerald-900/30 p-2.5">
                                    <FiAward className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="font-medium">10 Days of JavaScript Challenge</h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">HackerRank</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </MotionSection>
    );
};

export default About;
