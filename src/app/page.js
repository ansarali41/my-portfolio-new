import Image from 'next/image';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import ProblemSolving from '../components/ProblemSolving';
import Contact from '../components/Contact';

export default function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <ProblemSolving />
                <Contact />
            </main>
        </>
    );
}
