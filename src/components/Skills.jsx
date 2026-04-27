'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const skillCategories = [
    {
        title: 'Languages & Frameworks',
        icon: FiCode,
        accent: 'from-blue-500 to-cyan-500',
        skills: [
            { name: 'Node.js', level: 75 },
            { name: 'Nest.js', level: 75 },
            { name: 'TypeScript', level: 65 },
            { name: 'React.js', level: 70 },
            { name: 'Next.js', level: 65 },
        ],
    },
    {
        title: 'Databases & Tools',
        icon: FiDatabase,
        accent: 'from-purple-500 to-pink-500',
        skills: [
            { name: 'PostgreSQL / Sequelize', level: 75 },
            { name: 'MongoDB / Mongoose', level: 80 },
            { name: 'MySQL / TypeORM / Prisma', level: 70 },
            { name: 'Redis', level: 60 },
            { name: 'Kafka', level: 75 },
        ],
    },
    {
        title: 'UI Frameworks',
        icon: FiLayout,
        accent: 'from-emerald-500 to-teal-500',
        skills: [
            { name: 'Tailwind CSS', level: 90 },
            { name: 'Material UI', level: 85 },
            { name: 'Bootstrap', level: 90 },
            { name: 'shadcn/ui', level: 80 },
            { name: 'CSS', level: 85 },
        ],
    },
];

const additionalTools = [
    'AWS',
    'AWS SQS',
    'AWS EventBridge',
    'RabbitMQ',
    'Redis',
    'Microservices',
    'Monorepo',
    'Docker',
    'Git',
    'CI/CD',
    'GitHub Actions',
    'REST APIs',
    'GraphQL',
    'Prometheus',
    'Grafana',
    'Testing Library',
    'Linux',
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillBar = ({ name, level, accent }) => {
    return (
        <div>
            <div className="flex justify-between mb-2 text-sm">
                <span className="font-medium text-gray-700 dark:text-gray-300">{name}</span>
                <span className="text-gray-500 dark:text-gray-400">{level}%</span>
            </div>
            <div className="relative h-2 bg-gray-200/70 dark:bg-gray-700/70 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r ${accent} rounded-full`}
                />
            </div>
        </div>
    );
};

const Skills = () => {
    const marqueeTools = [...additionalTools, ...additionalTools];
    return (
        <MotionSection id="skills" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/40 via-transparent to-purple-50/40 dark:from-gray-900/60 dark:via-transparent dark:to-gray-900/60 -z-10" />
            <div className="absolute right-0 top-1/4 w-96 h-96 blob bg-purple-300 dark:bg-purple-700 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading eyebrow="Skills" title="Technical" highlight="Skills" description="Expertise in modern technologies and frameworks across the stack." />

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-6">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                whileHover={{ y: -6 }}
                                className="rounded-2xl p-7 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--border-subtle)] shadow-sm hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`inline-flex w-11 h-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-md`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-display text-lg font-semibold">{category.title}</h3>
                                </div>
                                <div className="space-y-5">
                                    {category.skills.map(skill => (
                                        <SkillBar key={skill.name} name={skill.name} level={skill.level} accent={category.accent} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="mt-16">
                    <h3 className="font-display text-xl font-semibold text-center mb-8">Additional Tools & Technologies</h3>
                    <div className="relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
                        <div className="flex w-max gap-3 motion-safe:animate-marquee group-hover:[animation-play-state:paused]">
                            {marqueeTools.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-sm border border-[var(--border-subtle)] text-sm whitespace-nowrap"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MotionSection>
    );
};

export default Skills;
