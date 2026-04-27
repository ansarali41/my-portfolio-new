'use client';

import { motion } from 'framer-motion';
import { FiArrowRight, FiMail, FiSend, FiUsers } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaMedium, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const directContacts = [
    {
        name: 'Email',
        value: 'ansar.ict14@gmail.com',
        href: 'mailto:ansar.ict14@gmail.com',
        Icon: FiMail,
        accent: 'from-blue-500 to-cyan-500',
        external: false,
    },
    {
        name: 'WhatsApp',
        value: '+880 1750-392947',
        href: 'https://wa.me/8801750392947',
        Icon: FaWhatsapp,
        accent: 'from-emerald-500 to-green-500',
        external: true,
    },
    {
        name: 'Telegram',
        value: '@ansar41',
        href: 'https://t.me/ansar41',
        Icon: FaTelegramPlane,
        accent: 'from-sky-400 to-blue-500',
        external: true,
    },
];

const socials = [
    {
        name: 'GitHub',
        handle: '@ansarali41',
        url: 'https://github.com/ansarali41',
        Icon: FaGithub,
        accent: 'from-gray-700 to-gray-900',
    },
    {
        name: 'LinkedIn',
        handle: 'dev-ansar-ali',
        url: 'https://www.linkedin.com/in/dev-ansar-ali',
        Icon: FaLinkedinIn,
        accent: 'from-sky-500 to-blue-700',
    },
    {
        name: 'Medium',
        handle: '@ansar-ali',
        url: 'https://medium.com/@ansar-ali',
        Icon: FaMedium,
        accent: 'from-zinc-700 to-neutral-900',
    },
];

const Contact = () => {
    return (
        <MotionSection id="contact" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-dots opacity-50 -z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/40 via-transparent to-purple-50/40 dark:from-gray-900/60 dark:via-transparent dark:to-gray-900/60 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading eyebrow="Contact" title="Let's" highlight="Connect" description="Have a question or want to work together?" />

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl p-7 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--border-subtle)] shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md mb-4">
                            <FiSend className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-1">Reach Out</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Drop me a message directly</p>
                        <div className="space-y-2">
                            {directContacts.map(({ name, value, href, Icon, accent, external }) => (
                                <motion.a
                                    key={name}
                                    href={href}
                                    target={external ? '_blank' : undefined}
                                    rel={external ? 'noopener noreferrer' : undefined}
                                    whileHover={{ x: 2 }}
                                    className="group flex items-center gap-3 rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60 border border-[var(--border-subtle)] hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
                                >
                                    <div className={`inline-flex w-9 h-9 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white flex-shrink-0`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{name}</p>
                                        <p className="text-sm font-medium truncate">{value}</p>
                                    </div>
                                    <FiArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 flex-shrink-0" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        className="rounded-2xl p-7 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--border-subtle)] shadow-sm hover:shadow-xl transition-all"
                    >
                        <div className="inline-flex w-12 h-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white shadow-md mb-4">
                            <FiUsers className="w-5 h-5" />
                        </div>
                        <h3 className="font-display text-lg font-semibold mb-1">Social</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Connect with me on these platforms</p>
                        <div className="space-y-2">
                            {socials.map(({ name, handle, url, Icon, accent }) => (
                                <motion.a
                                    key={name}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 2 }}
                                    className="group flex items-center gap-3 rounded-xl p-3 bg-gray-50 dark:bg-gray-800/60 border border-[var(--border-subtle)] hover:border-purple-300 dark:hover:border-purple-700 transition-colors"
                                >
                                    <div className={`inline-flex w-9 h-9 items-center justify-center rounded-lg bg-gradient-to-br ${accent} text-white flex-shrink-0`}>
                                        <Icon className="w-4 h-4" />
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">{name}</p>
                                        <p className="text-sm font-medium truncate">{handle}</p>
                                    </div>
                                    <FiArrowRight className="w-4 h-4 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400 flex-shrink-0" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </MotionSection>
    );
};

export default Contact;
