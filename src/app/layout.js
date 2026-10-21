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
    title: 'Under Maintenance',
    description: 'This website is currently under maintenance.',
    robots: { index: false },
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
