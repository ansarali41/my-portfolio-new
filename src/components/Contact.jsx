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
        external: false,
    },
    {
        name: 'WhatsApp',
        value: '+880 1750-392947',
        href: 'https://wa.me/8801750392947',
        Icon: FaWhatsapp,
        external: true,
    },
    {
        name: 'Telegram',
        value: '@ansar41',
        href: 'https://t.me/ansar41',
        Icon: FaTelegramPlane,
        external: true,
    },
];

const socials = [
    {
        name: 'GitHub',
        handle: '@ansarali41',
        url: 'https://github.com/ansarali41',
        Icon: FaGithub,
    },
    {
        name: 'LinkedIn',
        handle: 'dev-ansar-ali',
        url: 'https://www.linkedin.com/in/dev-ansar-ali',
        Icon: FaLinkedinIn,
    },
    {
        name: 'Medium',
        handle: '@ansar-ali',
        url: 'https://medium.com/@ansar-ali',
        Icon: FaMedium,
    },
];

const ContactRow = ({ name, value, href, Icon, external }) => (
    <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="group flex items-center gap-3 rounded-xl p-3 border border-transparent hover:border-[var(--border-subtle)] hover:bg-[var(--surface-muted)] transition-all"
    >
        <div className="icon-tile w-10 h-10 flex-shrink-0">
            <Icon className="w-4 h-4" />
        </div>
        <div className="flex-grow min-w-0">
            <p className="text-[10px] uppercase tracking-[0.18em] font-medium text-[var(--muted)]">{name}</p>
            <p className="text-sm font-medium truncate">{value}</p>
        </div>
        <FiArrowRight className="w-4 h-4 text-[var(--muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--foreground)] flex-shrink-0" />
    </a>
);

const Contact = () => {
    return (
        <MotionSection id="contact" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="Contact" title="Let's" highlight="Connect" description="Have a question or want to work together?" />

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="surface-card p-7"
                    >
                        <div className="icon-tile w-10 h-10 mb-5">
                            <FiSend className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-base font-semibold mb-1 tracking-tight">Reach Out</h3>
                        <p className="text-sm text-[var(--muted)] mb-5">Drop me a message directly</p>
                        <div className="space-y-1">
                            {directContacts.map(contact => (
                                <ContactRow key={contact.name} {...contact} />
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="surface-card p-7"
                    >
                        <div className="icon-tile w-10 h-10 mb-5">
                            <FiUsers className="w-4 h-4" />
                        </div>
                        <h3 className="font-display text-base font-semibold mb-1 tracking-tight">Social</h3>
                        <p className="text-sm text-[var(--muted)] mb-5">Connect with me on these platforms</p>
                        <div className="space-y-1">
                            {socials.map(({ name, handle, url, Icon }) => (
                                <ContactRow key={name} name={name} value={handle} href={url} Icon={Icon} external />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </MotionSection>
    );
};

export default Contact;
