'use client';

import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const skillCategories = [
    {
        title: 'Languages & Frameworks',
        icon: FiCode,
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
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const SkillBar = ({ name, level }) => {
    return (
        <div>
            <div className="flex justify-between mb-2 text-sm">
                <span className="font-medium text-[var(--muted-strong)]">{name}</span>
                <span className="text-[var(--muted)] tabular-nums">{level}%</span>
            </div>
            <div className="relative h-[3px] bg-[var(--surface-muted)] rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
                    className="absolute top-0 left-0 h-full bg-[var(--foreground)] rounded-full"
                />
            </div>
        </div>
    );
};

const Skills = () => {
    const marqueeTools = [...additionalTools, ...additionalTools];
    return (
        <MotionSection id="skills" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="Skills" title="Technical" highlight="Skills" description="Expertise in modern technologies and frameworks across the stack." />

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-5">
                    {skillCategories.map((category, idx) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                className="surface-card p-7"
                            >
                                <div className="flex items-center gap-3 mb-7">
                                    <div className="icon-tile w-10 h-10">
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <h3 className="font-display text-base font-semibold tracking-tight">{category.title}</h3>
                                </div>
                                <div className="space-y-5">
                                    {category.skills.map(skill => (
                                        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="mt-16">
                    <p className="eyebrow text-center mb-6">Additional Tools & Technologies</p>
                    <div className="relative overflow-hidden group">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
                        <div className="flex w-max gap-2.5 motion-safe:animate-marquee group-hover:[animation-play-state:paused]">
                            {marqueeTools.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="chip whitespace-nowrap"
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
