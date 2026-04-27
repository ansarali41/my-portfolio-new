'use client';

import { motion } from 'framer-motion';

export default function MotionSection({ children, className = '', id, as = 'section', ...rest }) {
    const MotionTag = motion[as] ?? motion.section;
    return (
        <MotionTag
            id={id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={className}
            {...rest}
        >
            {children}
        </MotionTag>
    );
}
