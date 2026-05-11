'use client';

import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCheck, FiCpu, FiZap } from 'react-icons/fi';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const cards = [
    {
        icon: FiBriefcase,
        title: 'Professional Journey',
        description: 'Currently a Software Engineer at Tulip Tech, building Empathika — a home care platform — on a Nest.js monorepo with PostgreSQL and AWS.',
    },
    {
        icon: FiCpu,
        title: 'Technical Expertise',
        description: 'Proficient in building robust back-end systems, microservices architecture, event-driven workflows, and optimizing database performance.',
    },
    {
        icon: FiZap,
        title: 'Problem Solving',
        description: 'Active problem solver with a strong presence on platforms like LeetCode, Codeforces, and HackerRank.',
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
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => {
    return (
        <MotionSection id="about" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading
                    eyebrow="About"
                    title="About"
                    highlight="Me"
                    description="Software engineer with 4+ years of experience building back-end systems for healthcare, CRM, SaaS, and ERP platforms. I specialize in Nest.js, Node.js, and event-driven architecture on AWS — turning complex domain workflows into reliable, scalable APIs."
                />

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-5">
                    {cards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="surface-card p-7"
                            >
                                <div className="icon-tile w-10 h-10 mb-5">
                                    <Icon className="w-4 h-4" />
                                </div>
                                <h3 className="font-display text-lg font-semibold mb-2 tracking-tight">{card.title}</h3>
                                <p className="text-[var(--muted)] text-sm leading-relaxed">{card.description}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="mt-6 grid md:grid-cols-2 gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="surface-card p-8"
                    >
                        <h3 className="font-display text-lg font-semibold mb-5 tracking-tight">What I Do</h3>
                        <motion.ul variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-3">
                            {whatIDo.map((item, idx) => (
                                <motion.li key={idx} variants={itemVariants} className="flex items-start gap-3 text-sm text-[var(--muted-strong)]">
                                    <FiCheck className="w-4 h-4 mt-0.5 flex-shrink-0 accent-text" />
                                    <span>{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="surface-card p-8"
                    >
                        <h3 className="font-display text-lg font-semibold mb-5 tracking-tight">Certifications</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="icon-tile w-10 h-10 flex-shrink-0">
                                    <FiAward className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">MERN Stack Web Development</h4>
                                    <a href="https://cutt.ly/sHCQl3g" target="_blank" rel="noopener noreferrer" className="text-xs accent-text hover:underline">
                                        View Certificate →
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="icon-tile w-10 h-10 flex-shrink-0">
                                    <FiAward className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium">10 Days of JavaScript Challenge</h4>
                                    <p className="text-xs text-[var(--muted)]">HackerRank</p>
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
