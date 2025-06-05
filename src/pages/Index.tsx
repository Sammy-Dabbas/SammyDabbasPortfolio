
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Node.js", icon: Server, category: "Runtime" },
    { name: "Python", icon: Code2, category: "Language" },
    { name: "PostgreSQL", icon: Database, category: "Database" },
    { name: "MongoDB", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Redis", icon: Database, category: "Cache" },
    { name: "GraphQL", icon: Code2, category: "API" },
  ];

  const projects = [
    {
      title: "Distributed Task Queue System",
      description: "Built a high-performance task queue system handling 10k+ jobs/minute using Redis and Node.js with automatic scaling and fault tolerance.",
      tech: ["Node.js", "Redis", "Docker", "AWS"],
      link: "#"
    },
    {
      title: "Real-time Analytics API",
      description: "Developed a real-time analytics platform processing millions of events daily with sub-100ms latency using Python and PostgreSQL.",
      tech: ["Python", "PostgreSQL", "Kafka", "TimescaleDB"],
      link: "#"
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented a scalable microservices architecture serving 1M+ users with 99.9% uptime and automated deployment.",
      tech: ["Go", "Kubernetes", "gRPC", "MongoDB"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Backend Engineer
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Building scalable, high-performance systems that power modern applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  View My Work
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 group">
                  <CardContent className="p-6 text-center">
                    <skill.icon className="w-12 h-12 mx-auto mb-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <h3 className="font-semibold text-white mb-2">{skill.name}</h3>
                    <Badge variant="secondary" className="bg-slate-600 text-slate-300">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="bg-slate-800/80 border-slate-600 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {project.title}
                      </h3>
                      <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              Passionate backend engineer with 5+ years of experience building scalable systems. 
              I specialize in designing robust architectures that handle millions of requests while 
              maintaining high performance and reliability. Always excited about new technologies 
              and solving complex distributed systems challenges.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                <div className="text-slate-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
                <div className="text-slate-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-slate-300">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Ready to discuss your next project or explore opportunities? I'd love to hear from you.
            </p>
            <div className="flex justify-center gap-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
                Email Me
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p>&copy; 2024 Backend Engineer Portfolio. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
