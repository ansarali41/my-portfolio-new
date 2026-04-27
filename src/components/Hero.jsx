'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const techStack = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] w-7 h-7" /> },
    { name: 'Nest.js', icon: <SiNestjs className="text-[#E0234E] w-6 h-6" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] w-6 h-6" /> },
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB] w-7 h-7" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white w-7 h-7" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] w-7 h-7" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1] w-6 h-6" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] w-7 h-7" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1] w-7 h-7" /> },
    { name: 'AWS', icon: <FaAws className="text-[#FF9900] w-7 h-7" /> },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const photoY = useTransform(scrollYProgress, [0, 1], [0, 80]);

    return (
        <div ref={ref} id="home" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 -z-20" />
            <div className="absolute inset-0 bg-grid -z-10 opacity-60" />

            <div className="absolute top-20 -left-10 w-72 h-72 blob bg-blue-400 dark:bg-blue-600" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-0 w-80 h-80 blob bg-purple-400 dark:bg-purple-600" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-10 left-1/3 w-72 h-72 blob bg-cyan-400 dark:bg-cyan-600" style={{ animationDelay: '4s' }} />

            <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="md:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <motion.p variants={itemVariants} className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600 dark:text-blue-400">
                                Welcome to my portfolio
                            </motion.p>
                            <motion.h1 variants={itemVariants} className="font-display text-5xl lg:text-6xl font-bold leading-tight">
                                Hi, I'm <span className="text-gradient-animated">MD Ansar Ali</span>
                            </motion.h1>
                            <motion.div variants={itemVariants} className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-20">
                                <TypeAnimation
                                    sequence={['Software Engineer', 1000, 'Back-end Developer', 1000, 'Full Stack Developer', 1000]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                            <a
                                href="https://www.linkedin.com/in/dev-ansar-ali"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-gradient px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
                            >
                                Connect on LinkedIn
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1PTy9wcXbyVvXBKoHYoqxhc3VvPm9YvHX/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-border inline-block"
                            >
                                <span className="block px-8 py-4 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">View Resume</span>
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-4">
                            <p className="text-xs uppercase tracking-[0.2em] font-semibold text-gray-500 dark:text-gray-400 mb-4">Tech Stack</p>
                            <div className="flex flex-wrap gap-3">
                                {techStack?.map((tech, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -4, scale: 1.05 }}
                                        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                                        className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md border border-[var(--border-subtle)]"
                                        title={tech.name}
                                    >
                                        {tech.icon}
                                        <span className="text-sm font-medium">{tech.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        style={{ y: photoY }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-96 md:h-96 floating">
                            <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-30 scale-110" />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[3px]">
                                <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900">
                                    <Image src="/images/me.png" alt="Ansar Ali" fill priority sizes="(max-width: 768px) 256px, 384px" className="object-cover" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
