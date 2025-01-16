'use client';

import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
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
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                Welcome to my portfolio
              </h2>
              <h1 className="text-5xl lg:text-6xl font-bold">
                Hi, I'm{' '}
                <span className="hero-gradient bg-clip-text text-transparent">
                  MD Ansar Ali
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-20">
                <TypeAnimation
                  sequence={[
                    'Software Engineer',
                    1000,
                    'Back-end Developer',
                    1000,
                    'Full Stack Developer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about building scalable, reliable, and efficient applications. 
              Specializing in back-end development with expertise in modern frameworks and databases.
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
                href="https://github.com/ansarali41"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-border inline-block"
              >
                <span className="block px-8 py-4 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  View GitHub
                </span>
              </a>
            </div>

            {/* Tech stack icons */}
            <div className="pt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-4">
                {['typescript', 'react', 'nodejs', 'nextjs'].map((tech) => (
                  <div key={tech} className="card p-3">
                    <Image
                      src={`/${tech}.svg`}
                      alt={tech}
                      width={24}
                      height={24}
                      className="dark:invert"
                    />
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
                <Image
                  src="/profile.jpg"
                  alt="MD Ansar Ali"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
