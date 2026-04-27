'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiArrowUpRight, FiCheck } from 'react-icons/fi';
import empathikaImage from '../../public/images/emp.png';
import footImage from '../../public/images/foot.png';
import futureImage from '../../public/images/future.png';
import gainImage from '../../public/images/gain.png';
import saasImage from '../../public/images/saas.png';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const projects = [
    {
        title: 'Empathika – Home Care Platform',
        description:
            'Home care application connecting caregivers with clients. Built on a Nest.js monorepo with PostgreSQL on AWS RDS, using AWS SQS and EventBridge for event-driven workflows across scheduling, billing, and care coordination.',
        image: empathikaImage,
        link: 'https://empathika.com',
        category: 'backend',
        featured: true,
        technologies: ['Nest.js', 'TypeScript', 'PostgreSQL', 'AWS RDS', 'AWS SQS', 'AWS EventBridge', 'Monorepo'],
        features: [
            'Event-driven architecture with SQS & EventBridge',
            'Monorepo with shared modules and services',
            'Caregiver scheduling and client management',
            'Scalable REST APIs on AWS infrastructure',
        ],
    },
    {
        title: 'Gain.io – Modern CRM Platform',
        description:
            'A modern CRM helping growing teams manage contacts, deals, and customer interactions in one unified workspace. Replaces scattered tools with structured pipelines, real-time visibility, and automation for consistent sales execution.',
        image: gainImage,
        link: 'https://gain.io',
        category: 'backend',
        technologies: ['Node.js', 'GraphQL', 'PostgreSQL', 'Sequelize', 'AWS Lambda', 'AWS EventBridge'],
        features: [
            'Contact & organization management',
            'Deal pipelines and sales stages',
            'Activity tracking (emails, notes, tasks)',
            'Automated notifications & workflows',
            'Sales insights and performance visibility',
        ],
    },
    {
        title: 'High-Performance SaaS Platform',
        description:
            'Multi-role software ecosystem for SaaS, POS, and eCommerce platforms. Implemented real-time communication with Socket.IO and optimized database performance with TypeORM.',
        image: saasImage,
        link: 'https://serviceadmin.amharctech.com',
        category: 'backend',
        technologies: ['Nest.js', 'MySQL', 'TypeORM', 'Next.js', 'Socket.IO'],
        features: ['Microservices architecture', 'Message queue system', 'OAuth2 authentication', 'Real-time analytics'],
    },
    {
        title: 'Future Nation Platform',
        description:
            'Developed scalable APIs and automated workflows using Node.js, Redis, and RabbitMQ. Focused on empowering youth with digital tools and resources for entrepreneurship.',
        image: futureImage,
        link: 'https://platform.futurenation.gov.bd',
        category: 'fullstack',
        technologies: ['Nest.js', 'Redis', 'RabbitMQ', 'Next.js', 'MongoDB', 'MySQL'],
        features: ['Real-time updates and notifications', 'Multi-tenant architecture', 'Advanced caching system', 'Automated deployment pipeline'],
    },
    {
        title: 'A Foot in the Door – Job Seeker Platform',
        description:
            'Job seeker platform helping candidates discover opportunities and connect with employers. Built dynamic, responsive interfaces and optimized page performance with Next.js and Material UI.',
        image: footImage,
        link: 'https://afootinthedoor.work/home',
        category: 'frontend',
        technologies: ['React.js', 'Redux', 'Next.js', 'Material UI'],
        features: ['Dynamic, responsive user interfaces', 'State management with Redux', 'Performance-optimized pages with Next.js', 'Polished Material UI component system'],
    },
];

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
];

const FeaturedCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800/80 border border-[var(--border-subtle)] shadow-lg group"
    >
        <div className="absolute inset-x-0 top-0 px-6 py-2 flex items-center gap-2 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-amber-400 to-rose-500 text-white shadow">Featured</span>
        </div>
        <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-auto overflow-hidden">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/40 via-transparent to-purple-600/30 mix-blend-multiply" />
            </div>
            <div className="p-7 md:p-9 flex flex-col">
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-5 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map(tech => (
                        <span key={tech} className="text-xs px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-800/50">
                            {tech}
                        </span>
                    ))}
                </div>
                <ul className="space-y-2 mb-6">
                    {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <FiCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <motion.a whileHover={{ x: 2 }} href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hero-gradient px-5 py-2.5 rounded-full text-white text-sm shadow-lg shadow-blue-500/20">
                        Visit Live <FiArrowUpRight className="w-4 h-4" />
                    </motion.a>
                </div>
            </div>
        </div>
    </motion.div>
);

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4 }}
        whileHover={{ y: -6 }}
        className="group rounded-2xl overflow-hidden bg-white dark:bg-gray-800/80 border border-[var(--border-subtle)] shadow-sm hover:shadow-xl transition-shadow"
    >
        <div className="relative h-56 overflow-hidden">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="font-display text-xl font-semibold mb-2">{project.title}</h3>
                <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map(tech => (
                        <span key={tech} className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm">
                            {tech}
                        </span>
                    ))}
                    {project.technologies.length > 3 && (
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm">+{project.technologies.length - 3}</span>
                    )}
                </div>
            </div>
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">{project.description}</p>
            <ul className="space-y-1.5 mb-5">
                {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <FiCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hero-gradient px-4 py-2 rounded-lg text-white text-sm hover:opacity-90 transition-opacity">
                    View Live <FiArrowUpRight className="w-3.5 h-3.5" />
                </a>
            </div>
        </div>
    </motion.div>
);

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');
    const filtered = activeTab === 'all' ? projects : projects.filter(p => p.category === activeTab);
    const featured = filtered.find(p => p.featured);
    const rest = filtered.filter(p => !p.featured);

    return (
        <MotionSection id="projects" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-mesh -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading eyebrow="Portfolio" title="Featured" highlight="Projects" description="Some of my recent work and contributions." />

                <div className="flex justify-center mb-10">
                    <div className="relative inline-flex rounded-full bg-gray-100 dark:bg-gray-800 p-1.5 border border-[var(--border-subtle)]">
                        {categories.map(category => {
                            const isActive = activeTab === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'}`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="projects-tab-bg"
                                            className="absolute inset-0 hero-gradient rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-8">
                    <AnimatePresence mode="popLayout">
                        {featured && <FeaturedCard key={featured.title} project={featured} />}
                        {rest.length > 0 && (
                            <motion.div layout className="grid md:grid-cols-2 gap-6">
                                {rest.map(project => (
                                    <ProjectCard key={project.title} project={project} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </MotionSection>
    );
};

export default Projects;
