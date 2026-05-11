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
    },
    {
        platform: 'LeetCode',
        url: 'https://leetcode.com/ansar_41',
        Icon: SiLeetcode,
        brandColor: '#FFA116',
    },
    {
        platform: 'HackerRank',
        url: 'https://www.hackerrank.com/ansar_sdp75',
        Icon: SiHackerrank,
        brandColor: '#00B85A',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProblemSolving = () => {
    return (
        <MotionSection id="problem-solving" className="relative py-24">
            <div className="max-w-6xl mx-auto px-6">
                <SectionHeading eyebrow="Coding" title="Problem" highlight="Solving" description="Check out my competitive programming profiles." />

                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }} className="grid md:grid-cols-3 gap-5">
                    {profiles.map((profile, idx) => {
                        const Icon = profile.Icon;
                        return (
                            <motion.a
                                key={idx}
                                variants={itemVariants}
                                href={profile.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="surface-card group p-7 flex flex-col items-center gap-4 text-center"
                            >
                                <div className="icon-tile w-14 h-14">
                                    <Icon className="w-7 h-7" style={{ color: profile.brandColor }} />
                                </div>
                                <h3 className="font-display text-base font-semibold tracking-tight">{profile.platform}</h3>
                                <span className="inline-flex items-center gap-1.5 text-sm text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors">
                                    View Profile <FiArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>
        </MotionSection>
    );
};

export default ProblemSolving;
