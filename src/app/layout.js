import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import ThemeProvider from '../components/ThemeProvider';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-space-grotesk',
    display: 'swap',
});

export const metadata = {
    title: 'MD Ansar Ali - Software Engineer',
    description: 'Portfolio of MD Ansar Ali - A passionate Software Engineer specializing in back-end development and building scalable applications.',
    keywords: ['Software Engineer', 'Back-end Developer', 'Full Stack Developer', 'Node.js', 'React', 'TypeScript'],
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`scroll-smooth ${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
