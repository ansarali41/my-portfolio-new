'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

const navItems = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            entries => {
                const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
                if (visible[0]) setActiveId(visible[0].target.id);
            },
            { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
        );
        sections.forEach(s => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? 'glass-effect py-3 border-b border-[var(--border-subtle)]' : 'bg-transparent py-5'
            }`}
        >
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <a href="#" className="font-display text-lg font-semibold tracking-tight text-[var(--foreground)]">
                        Ansar Ali<span className="accent-text">.</span>
                    </a>

                    <div className="hidden md:flex items-center gap-1">
                        {navItems?.map(item => {
                            const isActive = activeId === item.id;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                                        isActive ? 'text-[var(--foreground)]' : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="navbar-underline"
                                            className="absolute left-3 right-3 -bottom-0.5 h-[2px] rounded-full bg-[var(--foreground)]"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                        <div className="ml-2 flex items-center gap-2">
                            <ThemeToggle />
                            <a
                                href="https://github.com/ansarali41"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] text-sm font-medium hover:opacity-90 transition-opacity"
                            >
                                <FaGithub className="w-4 h-4" />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            aria-label="Toggle menu"
                            className="text-[var(--foreground)] p-2 rounded-lg hover:bg-[var(--surface-muted)] transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="py-3 mt-3 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface)]">
                                {navItems?.map(item => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`block py-2.5 px-5 text-sm transition-colors ${
                                            activeId === item.id
                                                ? 'text-[var(--foreground)] font-medium'
                                                : 'text-[var(--muted)] hover:text-[var(--foreground)]'
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="https://github.com/ansarali41"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 py-2.5 px-5 text-sm text-[var(--muted)] hover:text-[var(--foreground)]"
                                >
                                    <FaGithub className="w-4 h-4" /> GitHub
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
