import { Code2, Database, Globe, Layout, Server, Terminal } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      icon: <Code2 className="text-green-400 w-10 h-10" />,
      title: "Frontend Development",
      description:
        "Building responsive and performant user interfaces using React, TypeScript, and modern CSS frameworks. Focus on creating intuitive and engaging user experiences.",
    },
    {
      icon: <Server className="text-green-400 w-10 h-10" />,
      title: "Backend Development",
      description:
        "Developing robust server-side applications with Node.js, Express, and various databases. Implementing RESTful APIs and microservices architecture.",
    },
    {
      icon: <Database className="text-green-400 w-10 h-10" />,
      title: "Database Design",
      description:
        "Designing and implementing efficient database schemas, optimizing queries, and managing data relationships for scalable applications.",
    },
    {
      icon: <Layout className="text-green-400 w-10 h-10" />,
      title: "UI/UX Design",
      description:
        "Creating modern and accessible user interfaces with a focus on user experience. Using design systems and component libraries for consistency.",
    },
    {
      icon: <Globe className="text-green-400 w-10 h-10" />,
      title: "Web Performance",
      description:
        "Optimizing web applications for speed and efficiency. Implementing best practices for loading, rendering, and runtime performance.",
    },
    {
      icon: <Terminal className="text-green-400 w-10 h-10" />,
      title: "DevOps & CI/CD",
      description:
        "Setting up automated deployment pipelines, containerization with Docker, and implementing continuous integration practices.",
    },
  ];

  return (
    <section id="projects" className="bg-[#0A1124] text-white">
      <div className="mx-auto px-6 md:px-24 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-semibold mb-6">
            My <span className="neon-text">Expertise_</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto text-lg">
            Specialized in full-stack development with a focus on modern web
            technologies. Here are the key areas where I excel in software
            development.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              data-aos="fade-up"
              key={index}
              className="flex flex-col items-center text-center neon-border-only p-8 rounded-xl"
            >
              <div className="bg-[#0A1124] p-4 rounded-full mb-6">
                {project.icon}
              </div>
              <h3 className="text-2xl font-semibold neon-text mb-4">
                {project.title}
              </h3>
              <p className="text-white text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
