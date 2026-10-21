import { FiTool } from 'react-icons/fi';

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
                    This website is currently under maintenance. Please check back soon.
                </p>
            </div>
        </main>
    );
}
