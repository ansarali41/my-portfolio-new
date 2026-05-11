'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaAws, FaLinkedinIn, FaNodeJs, FaReact } from 'react-icons/fa';
import { FiArrowDown, FiFileText } from 'react-icons/fi';
import { SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiPostgresql, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const techStack = [
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] w-4 h-4" /> },
    { name: 'Nest.js', icon: <SiNestjs className="text-[#E0234E] w-4 h-4" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] w-4 h-4" /> },
    { name: 'React.js', icon: <FaReact className="text-[#61DAFB] w-4 h-4" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-4 h-4" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] w-4 h-4" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1] w-4 h-4" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] w-4 h-4" /> },
    { name: 'MySQL', icon: <SiMysql className="text-[#4479A1] w-4 h-4" /> },
    { name: 'AWS', icon: <FaAws className="text-[#FF9900] w-4 h-4" /> },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
    const photoY = useTransform(scrollYProgress, [0, 1], [0, 60]);

    return (
        <div ref={ref} id="home" className="relative min-h-screen overflow-hidden">
            <div className="absolute inset-0 bg-grid -z-10 opacity-70" />

            <div className="relative max-w-6xl mx-auto px-6 pt-36 pb-20">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">
                    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="md:w-1/2 space-y-8">
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-subtle)] bg-[var(--surface)]">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                            </span>
                            <span className="text-xs font-medium text-[var(--muted-strong)]">Available for new opportunities</span>
                        </motion.div>

                        <div className="space-y-5">
                            <motion.h1 variants={itemVariants} className="font-display text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
                                MD Ansar Ali
                            </motion.h1>
                            <motion.div variants={itemVariants} className="text-xl lg:text-2xl font-medium text-[var(--muted-strong)] h-8">
                                <TypeAnimation
                                    sequence={['Software Engineer', 1500, 'Back-end Developer', 1500, 'Full Stack Developer', 1500]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </motion.div>
                            <motion.p variants={itemVariants} className="text-base leading-relaxed text-[var(--muted)] max-w-lg">
                                Building reliable back-end systems and scalable APIs for healthcare, SaaS, and enterprise platforms.
                            </motion.p>
                        </div>

                        <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
                            <a
                                href="https://www.linkedin.com/in/dev-ansar-ali"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                <FaLinkedinIn className="w-4 h-4" />
                                <span>Connect on LinkedIn</span>
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1PTy9wcXbyVvXBKoHYoqxhc3VvPm9YvHX/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <FiFileText className="w-4 h-4" />
                                <span>View Resume</span>
                            </a>
                        </motion.div>

                        <motion.div variants={itemVariants} className="pt-2">
                            <p className="eyebrow mb-4">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack?.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors"
                                        title={tech.name}
                                    >
                                        {tech.icon}
                                        <span className="text-xs font-medium text-[var(--muted-strong)]">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                        style={{ y: photoY }}
                        className="md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-[22rem] md:h-[22rem]">
                            <div className="absolute inset-0 rounded-full border border-[var(--border-subtle)]" />
                            <div className="absolute -inset-3 rounded-full border border-[var(--border-subtle)] opacity-60" />
                            <div className="absolute -inset-6 rounded-full border border-[var(--border-subtle)] opacity-30" />
                            <div className="relative w-full h-full rounded-full overflow-hidden bg-[var(--surface-muted)] ring-1 ring-[var(--border-strong)]">
                                <Image src="/images/me.png" alt="Ansar Ali" fill priority sizes="(max-width: 768px) 256px, 384px" className="object-cover" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.a
                    href="#about"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                    <span className="text-[10px] uppercase tracking-[0.22em] font-medium">Scroll</span>
                    <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}>
                        <FiArrowDown className="w-4 h-4" />
                    </motion.span>
                </motion.a>
            </div>
        </div>
    );
};

export default Hero;
