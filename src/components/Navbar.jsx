'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
            setScrolled(window.scrollY > 50);
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
                scrolled ? 'glass-effect py-2 border-b border-[var(--border-subtle)]' : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex justify-between items-center">
                    <a href="#" className="font-display text-2xl font-bold hero-gradient bg-clip-text text-transparent">
                        {'</ Ansar Ali >'}
                    </a>

                    <div className="hidden md:flex items-center space-x-2">
                        {navItems?.map(item => {
                            const isActive = activeId === item.id;
                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-3 py-2 text-sm transition-colors ${
                                        isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                                    }`}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.span
                                            layoutId="navbar-underline"
                                            className="absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full hero-gradient"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            );
                        })}
                        <ThemeToggle className="ml-2" />
                        <a
                            href="https://github.com/ansarali41"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 px-4 py-2 rounded-full hero-gradient text-white text-sm hover:opacity-90 transition-opacity"
                        >
                            GitHub
                        </a>
                    </div>

                    <div className="md:hidden flex items-center gap-2">
                        <ThemeToggle />
                        <button aria-label="Toggle menu" className="text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            <div className="py-4 glass-effect mt-2 rounded-xl border border-[var(--border-subtle)]">
                                {navItems?.map(item => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`block py-2 px-4 transition-colors ${
                                            activeId === item.id
                                                ? 'text-blue-600 dark:text-blue-400 font-medium'
                                                : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
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
                                    className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    GitHub
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
