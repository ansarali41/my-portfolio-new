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
        <MotionSection id="experience" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 to-purple-50/40 dark:from-gray-900 dark:to-gray-800/80 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading eyebrow="Career" title="Work" highlight="Experience" description="My professional journey and achievements." />

                <div ref={trackRef} className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-700" />
                    <motion.div
                        style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                        className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"
                    />

                    <div className="space-y-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.05 }}
                                className="relative flex flex-col gap-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true, margin: '-80px' }}
                                    transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.05 + 0.2 }}
                                    className="absolute left-3 w-6 h-6 rounded-full hero-gradient ring-4 ring-white dark:ring-gray-900"
                                />

                                <div className="ml-12 w-[calc(100%-3rem)]">
                                    <div className="rounded-2xl p-6 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--border-subtle)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
                                            <div>
                                                <h3 className="font-display text-xl font-bold mb-1">{exp.title}</h3>
                                                <p className="font-medium text-gray-700 dark:text-gray-300">{exp.company}</p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>
                                            </div>
                                            <span className="text-xs font-medium px-3 py-1 rounded-full bg-blue-100/70 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 whitespace-nowrap">
                                                {exp.period}
                                            </span>
                                        </div>

                                        <ul className="space-y-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="relative pl-6">
                                                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-600" />
                                                    <p className="text-gray-700 dark:text-gray-300 mb-2 text-sm">{achievement.text}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {achievement.skills.map((skill, j) => (
                                                            <motion.span
                                                                key={j}
                                                                whileHover={{ scale: 1.08 }}
                                                                className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                                            >
                                                                {skill}
                                                            </motion.span>
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
