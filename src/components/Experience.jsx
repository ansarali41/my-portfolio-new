'use client';

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const experiences = [
    {
        title: 'Software Engineer',
        company: 'Tulip Tech',
        location: 'Dhaka, Bangladesh (Onsite)',
        period: 'Sept 2025 – Present',
        achievements: [
            {
                text: 'Building Empathika, a home care platform, within a Nest.js monorepo backed by PostgreSQL on AWS RDS.',
                skills: ['Nest.js', 'Monorepo', 'PostgreSQL', 'AWS RDS'],
            },
            {
                text: 'Designed event-driven workflows using AWS SQS and EventBridge to decouple services and improve reliability.',
                skills: ['AWS SQS', 'AWS EventBridge', 'Event-Driven Architecture'],
            },
            {
                text: 'Delivered scalable REST APIs and integrations for caregiver scheduling, client management, and care coordination.',
                skills: ['REST API', 'TypeScript', 'AWS'],
            },
        ],
    },
    {
        title: 'Software Engineer (Back-End)',
        company: 'Gain Solutions Ltd',
        location: 'Dhaka, Bangladesh (Onsite)',
        period: 'June 2025 – Sept 2025',
        achievements: [
            {
                text: 'Designed and developed scalable back-end architecture for CRM, HR Management, and Payroll platforms using Node.js, GraphQL, and PostgreSQL.',
                skills: ['Node.js', 'GraphQL', 'PostgreSQL'],
            },
            {
                text: 'Implemented secure JWT-based authentication and optimized database performance with Sequelize and PostgreSQL.',
                skills: ['JWT', 'Sequelize', 'PostgreSQL'],
            },
            {
                text: 'Collaborated with cross-functional teams to deliver an enterprise-ready platform, enhancing system reliability',
                skills: ['System Architecture', 'AWS', 'Lambda', 'SQS', 'SAM', 'CI/CD'],
            },
        ],
    },
    {
        title: 'Software Engineer (Back-End)',
        company: 'Amharc Tech Ltd',
        location: 'Dublin, Ireland (Remote)',
        period: 'April 2023 – June 2025',
        achievements: [
            {
                text: 'Designed a scalable back-end architecture for SaaS, POS, and eCommerce platforms using Nest.js, TypeScript, and microservices.',
                skills: ['Nest.js', 'TypeScript', 'Microservices'],
            },
            {
                text: 'Implemented secure JWT-based authentication and optimized database performance with TypeORM and MySQL.',
                skills: ['JWT', 'TypeORM', 'MySQL'],
            },
            {
                text: 'Integrated Kafka and Socket.IO to enable real-time communication, reducing system latency by 25%.',
                skills: ['Kafka', 'Socket.IO'],
            },
            {
                text: 'Collaborated with cross-functional teams to deliver an enterprise-ready platform, enhancing system reliability by 30%.',
                skills: ['Team Collaboration', 'System Architecture'],
            },
        ],
    },
    {
        title: 'Assistant Software Engineer (Back-End)',
        company: 'Soft BD Ltd',
        location: 'Dhaka, Bangladesh (Onsite)',
        period: 'Oct 2022 – April 2023',
        achievements: [
            {
                text: 'Developed core back-end modules for the Future Nation project using Node.js, Nest.js, and Redis.',
                skills: ['Node.js', 'Nest.js', 'Redis'],
            },
            {
                text: 'Automated workflows with RabbitMQ and Keycloak, improving API response time by 20%.',
                skills: ['RabbitMQ', 'Keycloak'],
            },
            {
                text: 'Enhanced user authentication processes via HAProxy and Kong Gateway, ensuring high availability.',
                skills: ['HAProxy', 'Kong Gateway'],
            },
        ],
    },
    {
        title: 'Front-End Developer',
        company: 'A Foot in the Door, Inc',
        location: 'New York, United States (Remote)',
        period: 'Jun 2021 – Feb 2022',
        achievements: [
            {
                text: 'Built dynamic user interfaces using React.js and Redux, achieving a 15% increase in user engagement.',
                skills: ['React.js', 'Redux'],
            },
            {
                text: "Optimized the app's performance by implementing best practices with Next.js and Material UI.",
                skills: ['Next.js', 'Material UI'],
            },
        ],
    },
    {
        title: 'Intern: Front-End Developer',
        company: 'NetArt-India',
        location: 'Tamil Nadu, India (Remote)',
        period: 'Dec 2020 – Feb 2021',
        achievements: [
            {
                text: 'Collaborated on UI designs and implemented responsive components using HTML5, CSS3, and Bootstrap.',
                skills: ['HTML5', 'CSS3', 'Bootstrap', 'UI Design'],
            },
        ],
    },
];

const Experience = () => {
    const trackRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: trackRef, offset: ['start 60%', 'end 40%'] });

    return (
        <MotionSection id="experience" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="Career" title="Work" highlight="Experience" description="My professional journey and achievements." />

                <div ref={trackRef} className="relative">
                    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[var(--border-subtle)]" />
                    <motion.div
                        style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                        className="absolute left-[7px] top-0 bottom-0 w-px bg-[var(--foreground)]"
                    />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
                                className="relative"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.05 + 0.2 }}
                                    className="absolute left-0 top-7 w-[15px] h-[15px] rounded-full bg-[var(--background)] border-2 border-[var(--foreground)]"
                                />

                                <div className="ml-10">
                                    <div className="surface-card p-6">
                                        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <h3 className="font-display text-lg font-semibold mb-1 tracking-tight">{exp.title}</h3>
                                                <p className="text-sm font-medium text-[var(--muted-strong)]">{exp.company}</p>
                                                <p className="text-xs text-[var(--muted)] mt-0.5">{exp.location}</p>
                                            </div>
                                            <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[var(--surface-muted)] border border-[var(--border-subtle)] text-[var(--muted-strong)] whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <ul className="space-y-4 mt-5">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="relative pl-5">
                                                    <div className="absolute left-0 top-2 w-1 h-1 rounded-full bg-[var(--muted)]" />
                                                    <p className="text-[var(--muted-strong)] mb-2.5 text-sm leading-relaxed">{achievement.text}</p>
                                                    <div className="flex flex-wrap gap-1.5">
                                                        {achievement.skills.map((skill, j) => (
                                                            <span
                                                                key={j}
                                                                className="chip text-[11px] px-2 py-0.5"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </MotionSection>
    );
};

export default Experience;
