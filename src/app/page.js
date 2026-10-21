import { FiGithub, FiLinkedin, FiMail, FiTool } from 'react-icons/fi';

const links = [
    { href: 'mailto:ansar.ict14@gmail.com', label: 'Email', icon: FiMail },
    { href: 'https://github.com/ansarali41', label: 'GitHub', icon: FiGithub },
    { href: 'https://www.linkedin.com/in/dev-ansar-ali', label: 'LinkedIn', icon: FiLinkedin },
];

export const metadata = {
    title: 'Under Maintenance - MD Ansar Ali',
    robots: { index: false },
};

export default function Home() {
    return (
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
            <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent-soft)] blur-3xl animate-blob" />

            <div className="relative w-full max-w-lg text-center">
                <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[var(--surface)] text-[var(--accent)]">
                    <FiTool className="h-7 w-7" />
                </div>

                <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">Under Maintenance</h1>
                <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                    I&apos;m currently updating this website. It&apos;ll be back shortly — thanks for your patience.
                </p>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                    {links.map(({ href, label, icon: Icon }) => (
                        <a
                            key={label}
                            href={href}
                            target={href.startsWith('http') ? '_blank' : undefined}
                            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--muted-strong)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                            <Icon className="h-4 w-4" />
                            {label}
                        </a>
                    ))}
                </div>

                <p className="mt-12 text-xs text-[var(--muted)]">© {new Date().getFullYear()} MD Ansar Ali</p>
            </div>
        </main>
    );
}
