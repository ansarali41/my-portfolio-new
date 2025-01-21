const Skills = () => {
    const skillCategories = [
        {
            title: 'Languages & Frameworks',
            icon: (
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            skills: [
                { name: 'Node.js', level: 75 },
                { name: 'Nest.js', level: 75 },
                { name: 'TypeScript', level: 65 },
                { name: 'React.js', level: 70 },
                { name: 'Next.js', level: 65 },
            ],
        },
        {
            title: 'Databases & Tools',
            icon: (
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                </svg>
            ),
            skills: [
                { name: 'MySQL / TypeORM / Prisma', level: 70 },
                { name: 'MongoDB / Mongoose', level: 80 },
                { name: 'Redis', level: 60 },
                { name: 'Kafka', level: 75 },
                { name: 'Socket.IO', level: 70 },
            ],
        },
        {
            title: 'UI Frameworks',
            icon: (
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                </svg>
            ),
            skills: [
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Material UI', level: 85 },
                { name: 'Bootstrap', level: 90 },
            ],
        },
    ];

    return (
        <section id="skills" className="relative py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800 -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">
                        Technical <span className="hero-gradient bg-clip-text text-transparent">Skills</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Expertise in modern technologies and frameworks</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories?.map((category, index) => (
                        <div key={index} className="card p-8 hover:translate-y-[-4px] transition-all duration-300">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="rounded-lg bg-gray-100 dark:bg-gray-800 p-3">{category?.icon}</div>
                                <h3 className="text-xl font-semibold">{category?.title}</h3>
                            </div>

                            <div className="space-y-6">
                                {category?.skills?.map(skill => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                            <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                                        </div>
                                        <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                            <div
                                                className="absolute top-0 left-0 h-full hero-gradient rounded-full transition-all duration-500"
                                                style={{ width: `${skill.level}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills */}
                <div className="mt-16">
                    <h3 className="text-xl font-semibold text-center mb-8">Additional Tools & Technologies</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Github Action', 'Git', 'RabbitMQ', 'REST APIs', 'GraphQL'].map(tool => (
                            <span key={tool} className="px-4 py-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300">
                                {tool}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
