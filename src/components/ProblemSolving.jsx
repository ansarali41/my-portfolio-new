'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';
import { SiCodeforces, SiHackerrank, SiLeetcode } from 'react-icons/si';
import MotionSection from './MotionSection';
import SectionHeading from './SectionHeading';

const profiles = [
    {
        platform: 'Codeforces',
        url: 'https://codeforces.com/profile/Ansar_ict',
        Icon: SiCodeforces,
        brandColor: '#1F8ACB',
        accent: 'from-sky-500 to-blue-500',
        glow: 'shadow-sky-500/25',
    },
    {
        platform: 'LeetCode',
        url: 'https://leetcode.com/ansar_41',
        Icon: SiLeetcode,
        brandColor: '#FFA116',
        accent: 'from-amber-500 to-orange-500',
        glow: 'shadow-amber-500/25',
    },
    {
        platform: 'HackerRank',
        url: 'https://www.hackerrank.com/ansar_sdp75',
        Icon: SiHackerrank,
        brandColor: '#00EA64',
        accent: 'from-emerald-500 to-green-500',
        glow: 'shadow-emerald-500/25',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProblemSolving = () => {
    return (
        <MotionSection id="problem-solving" className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/40 to-purple-50/40 dark:from-gray-900 dark:to-gray-800/80 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <SectionHeading eyebrow="Coding" title="Problem" highlight="Solving" description="Check out my competitive programming profiles." />

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-6">
                    {profiles.map((profile, idx) => {
                        const Icon = profile.Icon;
                        return (
                            <motion.a
                                key={idx}
                                variants={itemVariants}
                                whileHover={{ y: -6 }}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`group relative overflow-hidden rounded-2xl p-8 bg-white dark:bg-gray-800/80 backdrop-blur-sm border border-[var(--border-subtle)] shadow-sm hover:shadow-xl ${profile.glow} transition-all`}
                            >
                                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${profile.accent}`} />
                                <div className={`absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br ${profile.accent} opacity-10 blur-2xl group-hover:opacity-25 transition-opacity`} />

                                <div className="flex flex-col items-center gap-4 text-center">
                                    <div className="inline-flex w-16 h-16 items-center justify-center rounded-2xl bg-gray-50 dark:bg-gray-900/60 border border-[var(--border-subtle)] shadow-sm">
                                        <Icon className="w-9 h-9" style={{ color: profile.brandColor }} />
                                    </div>
                                    <h3 className="font-display text-xl font-semibold">{profile.platform}</h3>
                                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        View Profile <FiArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </span>
                                </div>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </MotionSection>
    );
};

export default ProblemSolving;
