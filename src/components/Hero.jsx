'use client';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiNestjs, SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    const techStack = [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933] w-8 h-8" /> },
        { name: 'Nest.js', icon: <SiNestjs className="text-[#E0234E] w-7 h-7" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6] w-7 h-7" /> },
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB] w-8 h-8" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white w-8 h-8" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4] w-8 h-8" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248] w-8 h-8" /> },
        { name: 'MySQL', icon: <SiMysql className="text-[#4479A1] w-8 h-8" /> },
    ];

    return (
        <div className="relative min-h-screen">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 -z-10" />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Left side - Text content */}
                    <div className="md:w-1/2 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Welcome to my portfolio</h2>
                            <h1 className="text-5xl lg:text-6xl font-bold">
                                Hi, I'm <span className="hero-gradient bg-clip-text text-transparent">MD Ansar Ali</span>
                            </h1>
                            <div className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-20">
                                <TypeAnimation
                                    sequence={['Software Engineer', 1000, 'Back-end Developer', 1000, 'Full Stack Developer', 1000]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </div>
                        </div>

                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
                            Passionate about building scalable, reliable, and efficient applications. Specializing in back-end development with expertise in modern frameworks and
                            databases.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="https://www.linkedin.com/in/dev-ansar-ali"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hero-gradient px-8 py-4 rounded-full text-white hover:opacity-90 transition-opacity"
                            >
                                Connect on LinkedIn
                            </a>
                            <a
                                href="https://drive.google.com/file/d/13f1LSYShtJyVGZyurW4mD-_1FoD7Q1Yg/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="gradient-border inline-block"
                            >
                                <span className="block px-8 py-4 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                                    View Resume
                                </span>
                            </a>
                        </div>

                        {/* Tech stack icons */}
                        <div className="pt-8">
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Tech Stack</p>
                            <div className="flex flex-wrap gap-4">
                                {techStack?.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow"
                                        title={tech.name}
                                    >
                                        {tech.icon}
                                        <span className="text-sm font-medium">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-96 md:h-96 floating">
                            <div className="absolute inset-0 hero-gradient rounded-full blur-2xl opacity-20 scale-110" />
                            <div className="relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                                <img src="/images/me.png" alt="Ansar Ali" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
