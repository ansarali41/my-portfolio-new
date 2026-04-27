'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';

export default function AnimatedCounter({ value = 0, suffix = '', duration = 2, className = '' }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, value, {
            duration,
            ease: 'easeOut',
            onUpdate: latest => setDisplay(Math.round(latest)),
        });
        return () => controls.stop();
    }, [inView, value, duration]);

    return (
        <span ref={ref} className={className}>
            {display}
            {suffix}
        </span>
    );
}
