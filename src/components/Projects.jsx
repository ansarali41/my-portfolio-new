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
    { id: 'all', label: 'All' },
    { id: 'backend', label: 'Backend' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
];

const FeaturedCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.5 }}
        className="surface-card overflow-hidden group"
    >
        <div className="grid md:grid-cols-2">
            <div className="relative h-72 md:h-auto overflow-hidden bg-[var(--surface-muted)]">
                <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            </div>
            <div className="p-8 md:p-10 flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                    <span className="eyebrow">Featured</span>
                    <span className="h-px flex-1 bg-[var(--border-subtle)]" />
                </div>
                <h3 className="font-display text-2xl md:text-[28px] font-semibold mb-3 tracking-tight leading-tight">{project.title}</h3>
                <p className="text-[var(--muted)] mb-5 leading-relaxed text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map(tech => (
                        <span key={tech} className="chip text-[11px]">
                            {tech}
                        </span>
                    ))}
                </div>
                <ul className="space-y-2 mb-7">
                    {project.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--muted-strong)]">
                            <FiCheck className="w-4 h-4 mt-0.5 flex-shrink-0 accent-text" />
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>
                <div className="mt-auto">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Visit Live <FiArrowUpRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
    </motion.div>
);

const ProjectCard = ({ project }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16, scale: 0.97 }}
        transition={{ duration: 0.4 }}
        className="surface-card overflow-hidden group flex flex-col"
    >
        <div className="relative h-52 overflow-hidden bg-[var(--surface-muted)]">
            <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="p-6 flex flex-col flex-1">
            <h3 className="font-display text-lg font-semibold mb-2 tracking-tight">{project.title}</h3>
            <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.slice(0, 4).map(tech => (
                    <span key={tech} className="chip text-[11px]">
                        {tech}
                    </span>
                ))}
                {project.technologies.length > 4 && (
                    <span className="chip text-[11px]">+{project.technologies.length - 4}</span>
                )}
            </div>
            <p className="text-sm text-[var(--muted)] mb-4 leading-relaxed">{project.description}</p>
            <ul className="space-y-1.5 mb-5">
                {project.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[var(--muted-strong)]">
                        <FiCheck className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 accent-text" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
            <div className="mt-auto pt-2">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] hover:opacity-70 transition-opacity"
                >
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
        <MotionSection id="projects" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="Portfolio" title="Featured" highlight="Projects" description="Some of my recent work and contributions." />

                <div className="flex justify-center mb-10">
                    <div className="relative inline-flex rounded-full bg-[var(--surface-muted)] p-1 border border-[var(--border-subtle)]">
                        {categories.map(category => {
                            const isActive = activeTab === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`relative px-5 py-1.5 rounded-full text-sm font-medium transition-colors ${isActive ? 'text-[var(--background)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]'}`}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="projects-tab-bg"
                                            className="absolute inset-0 bg-[var(--foreground)] rounded-full"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">{category.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <div className="space-y-6">
                    <AnimatePresence mode="popLayout">
                        {featured && <FeaturedCard key={featured.title} project={featured} />}
                        {rest.length > 0 && (
                            <motion.div layout className="grid md:grid-cols-2 gap-5">
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
