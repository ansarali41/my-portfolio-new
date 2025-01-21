'use client';

import Image from 'next/image';
import { useState } from 'react';
import futureImage from '../../public/images/future.png';
import saasImage from '../../public/images/saas.png';

const Projects = () => {
    const [activeTab, setActiveTab] = useState('all');

    const projects = [
        {
            title: 'High-Performance SaaS Platform',
            description:
                'Multi-role software ecosystem for SaaS, POS, and eCommerce platforms. Implemented real-time communication with Socket.IO and optimized database performance with TypeORM.',
            image: saasImage,
            link: 'https://serviceadmin.amharctech.com',
            github: 'https://github.com/yourusername/saas-platform',
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
            github: 'https://github.com/yourusername/future-nation',
            category: 'fullstack',
            technologies: ['Nest.js', 'Redis', 'RabbitMQ', 'Next.js', 'MongoDB', 'MySQL'],
            features: ['Real-time updates and notifications', 'Multi-tenant architecture', 'Advanced caching system', 'Automated deployment pipeline'],
        },
    ];

    const categories = [
        { id: 'all', label: 'All Projects' },
        { id: 'backend', label: 'Backend' },
        { id: 'fullstack', label: 'Full Stack' },
    ];

    const filteredProjects = activeTab === 'all' ? projects : projects.filter(project => project.category === activeTab);

    return (
        <section id="projects" className="relative py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800 -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">
                        Featured <span className="hero-gradient bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Some of my recent work and contributions</p>
                </div>

                {/* Project Categories */}
                <div className="flex justify-center mb-12">
                    <div className="inline-flex rounded-lg bg-gray-100 dark:bg-gray-800 p-2">
                        {categories?.map(category => (
                            <button
                                key={category.id}
                                onClick={() => setActiveTab(category.id)}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                    activeTab === category.id ? 'bg-white dark:bg-gray-700 shadow-md' : 'hover:bg-white/50 dark:hover:bg-gray-700/50'
                                }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects?.map((project, index) => (
                        <div key={index} className="group card overflow-hidden hover:translate-y-[-4px] transition-all duration-300">
                            {/* Project Image */}
                            <div className="relative h-64 overflow-hidden">
                                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project?.technologies?.slice(0, 3)?.map(tech => (
                                            <span key={tech} className="text-sm px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="text-sm px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm">+{project.technologies.length - 3} more</span>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Project Details */}
                            <div className="p-6">
                                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                                <div className="space-y-4">
                                    <h4 className="font-medium">Key Features:</h4>
                                    <ul className="space-y-2">
                                        {project?.features?.map((feature, index) => (
                                            <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                                                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="flex gap-4 mt-6">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hero-gradient px-6 py-2 rounded-lg text-white hover:opacity-90 transition-opacity"
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
