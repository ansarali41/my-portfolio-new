'use client';

const Experience = () => {
    const experiences = [
        {
            title: 'Software Engineer (Back-End)',
            company: 'Amharc Tech Ltd',
            location: 'Dublin, Ireland (Remote)',
            period: 'April 2023 – Present',
            achievements: [
                {
                    text: 'Designed a scalable back-end architecture for SaaS, POS, and eCommerce platforms using Nest.js, TypeScript, and microservices.',
                    skills: ['Nest.js', 'TypeScript', 'Microservices'],
                },
                {
                    text: 'Implemented secure JWT-based authentication and optimized database performance with TypeORM and MySQL.',
                    skills: ['JWT', 'TypeORM', 'MySQL'],
                },
                {
                    text: 'Integrated Kafka and Socket.IO to enable real-time communication, reducing system latency by 25%.',
                    skills: ['Kafka', 'Socket.IO'],
                },
                {
                    text: 'Collaborated with cross-functional teams to deliver an enterprise-ready platform, enhancing system reliability by 30%.',
                    skills: ['Team Collaboration', 'System Architecture'],
                },
            ],
        },
        {
            title: 'Assistant Software Engineer (Back-End)',
            company: 'Soft BD Ltd',
            location: 'Dhaka, Bangladesh (Onsite)',
            period: 'Oct 2022 – April 2023',
            achievements: [
                {
                    text: 'Developed core back-end modules for the Future Nation project using Node.js, Nest.js, and Redis.',
                    skills: ['Node.js', 'Nest.js', 'Redis'],
                },
                {
                    text: 'Automated workflows with RabbitMQ and Keycloak, improving API response time by 20%.',
                    skills: ['RabbitMQ', 'Keycloak'],
                },
                {
                    text: 'Enhanced user authentication processes via HAProxy and Kong Gateway, ensuring high availability.',
                    skills: ['HAProxy', 'Kong Gateway'],
                },
            ],
        },
        {
            title: 'Front-End Developer',
            company: 'A Foot in the Door, Inc',
            location: 'New York, United States (Remote)',
            period: 'Jun 2021 – Feb 2022',
            achievements: [
                {
                    text: 'Built dynamic user interfaces using React.js and Redux, achieving a 15% increase in user engagement.',
                    skills: ['React.js', 'Redux'],
                },
                {
                    text: "Optimized the app's performance by implementing best practices with Next.js and Material UI.",
                    skills: ['Next.js', 'Material UI'],
                },
            ],
        },
        {
            title: 'Intern: Front-End Developer',
            company: 'NetArt-India',
            location: 'Tamil Nadu, India (Remote)',
            period: 'Dec 2020 – Feb 2021',
            achievements: [
                {
                    text: 'Collaborated on UI designs and implemented responsive components using HTML5, CSS3, and Bootstrap.',
                    skills: ['HTML5', 'CSS3', 'Bootstrap', 'UI Design'],
                },
            ],
        },
    ];

    return (
        <section id="experience" className="relative py-20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800 -z-10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">
                        Work <span className="hero-gradient bg-clip-text text-transparent">Experience</span>
                    </h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">My professional journey and achievements</p>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 to-purple-500" />

                    <div className="space-y-12">
                        {experiences?.map((exp, index) => (
                            <div key={index} className="relative flex flex-col gap-8">
                                {/* Timeline dot */}
                                <div className="absolute left-3 w-6 h-6 rounded-full hero-gradient" />

                                {/* Content */}
                                <div className="ml-12 w-[calc(100%-3rem)]">
                                    <div className="card p-6 hover:translate-y-[-4px] transition-all duration-300">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                            <div className="text-gray-600 dark:text-gray-400">
                                                <p className="font-medium">{exp.company}</p>
                                                <p className="text-sm">{exp.location}</p>
                                                <p className="text-sm italic">{exp.period}</p>
                                            </div>
                                        </div>

                                        <ul className="space-y-3">
                                            {exp?.achievements?.map((achievement, i) => (
                                                <li key={i} className="relative pl-6">
                                                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-blue-600" />
                                                    <p className="text-gray-700 dark:text-gray-300 mb-2">{achievement.text}</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {achievement?.skills?.map((skill, j) => (
                                                            <span
                                                                key={j}
                                                                className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
