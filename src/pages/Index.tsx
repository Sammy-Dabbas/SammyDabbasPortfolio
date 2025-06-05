
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, Play, MapPin, GraduationCap, Calendar } from "lucide-react";

const Index = () => {
  const skills = [
    { name: "Python", icon: Code2, category: "Language" },
    { name: "C#", icon: Code2, category: "Language" },
    { name: "JavaScript", icon: Code2, category: "Language" },
    { name: ".NET Core", icon: Server, category: "Framework" },
    { name: "FastAPI", icon: Server, category: "Framework" },
    { name: "React.js", icon: Code2, category: "Framework" },
    { name: "Node.js", icon: Server, category: "Runtime" },
    { name: "Django", icon: Server, category: "Framework" },
    { name: "SQL Server", icon: Database, category: "Database" },
    { name: "DynamoDB", icon: Database, category: "Database" },
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Docker", icon: Server, category: "DevOps" },
    { name: "Kubernetes", icon: Server, category: "DevOps" },
    { name: "Firebase", icon: Cloud, category: "Platform" },
  ];

  const projects = [
    {
      title: "Real-Time Ad Event Processing System",
      description: "Designed a scalable system ingesting 1M+ ad events/sec with <20ms latency using FastAPI and AWS Kinesis. Modeled DynamoDB schemas for low-latency access with DAX caching for microsecond read performance.",
      tech: ["Python", "FastAPI", "AWS Kinesis", "DynamoDB", "Docker", "EKS"],
      link: "#",
      videoId: "ad-processing-demo"
    },
    {
      title: "GPU Training Service Platform",
      description: "Collaborated with 2 teammates to build a full-stack platform dynamically deploying and managing ML workloads, cutting job setup time by 40%. Automated GPU resource provisioning via Kubernetes controllers.",
      tech: ["Django", "React.js", "Docker", "Kubernetes", "GPU Management"],
      link: "#",
      videoId: "gpu-training-demo"
    },
    {
      title: "UCF Lab Inventory System",
      description: "Created an app tracking 200+ lab items with QR codes, reducing check-in/out time by 10 seconds per transaction. Integrated Firebase Auth and Firestore security rules for role-based access.",
      tech: ["React.js", "Firebase", "HTML5-QRCode", "Firestore"],
      link: "#",
      videoId: "inventory-demo"
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
                Sammy Dabbas
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-slate-300">
                Software Developer & Computer Science Student
              </h2>
              <p className="text-xl lg:text-2xl text-slate-300 mb-8 leading-relaxed">
                Building scalable, high-performance systems that power modern applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  View My Work
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg transition-all duration-300 hover:scale-105">
                  Download Resume
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Orlando, Florida</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  <span>UCF Computer Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Expected Aug 2026</span>
                </div>
              </div>
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
              Computer Science student at UCF with a 3.9 GPA and hands-on experience building production systems. 
              Currently working as a Software Developer Intern at FINDER Software Solutions, where I've built scalable 
              services and ETL pipelines processing 10+ GB/day. Previously contributed to NASA's weather prediction 
              systems, improving forecast accuracy for Kennedy Space Center launches.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3.9</div>
                <div className="text-slate-300">GPA at UCF</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">10+GB</div>
                <div className="text-slate-300">Daily Data Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">1M+</div>
                <div className="text-slate-300">Events/Sec Handled</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
              {skills.map((skill, index) => (
                <Card key={skill.name} className="bg-slate-700/50 border-slate-600 hover:bg-slate-600/50 transition-all duration-300 hover:scale-105 hover:border-blue-500/50 group">
                  <CardContent className="p-4 text-center">
                    <skill.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                    <h3 className="font-semibold text-white mb-2 text-sm">{skill.name}</h3>
                    <Badge variant="secondary" className="bg-slate-600 text-slate-300 text-xs">
                      {skill.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section - Now Larger */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-20 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="space-y-16">
              {projects.map((project, index) => (
                <Card key={project.title} className="bg-slate-800/80 border-slate-600 hover:border-blue-500/50 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-0">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                      {/* Video Section */}
                      <div className={`relative bg-slate-900/50 aspect-video lg:aspect-auto min-h-[300px] flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                        <div className="relative z-10 text-center">
                          <div className="w-20 h-20 bg-blue-600/80 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-blue-500/80 transition-colors cursor-pointer">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                          <p className="text-slate-300 text-lg font-medium">Demo Video</p>
                          <p className="text-slate-400 text-sm mt-1">Click to play</p>
                        </div>
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-start justify-between mb-6">
                          <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {project.title}
                          </h3>
                          <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors flex-shrink-0 ml-4" />
                        </div>
                        <p className="text-slate-300 mb-8 leading-relaxed text-lg">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 px-3 py-1">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
            <div className="space-y-12">
              <Card className="bg-slate-800/80 border-slate-600">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Software Developer Intern</h3>
                      <p className="text-blue-400 font-semibold">FINDER Software Solutions</p>
                    </div>
                    <div className="text-slate-400 md:text-right">
                      <p>Orlando, FL</p>
                      <p>Sep 2024 – Present</p>
                    </div>
                  </div>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Built and launched a Python & .NET Core service converting HTTP-processed vehicle images to RTSP streams, reducing integration time by 30%</li>
                    <li>• Engineered C# and Python ETL pipelines processing 10+ GB/day, improving ingestion accuracy by 15% and reducing latency by 25%</li>
                    <li>• Created high-throughput .NET data parsers validating 5GB+ SQL/XML datasets, cutting processing errors by 50%</li>
                    <li>• Delivered 20+ feature enhancements, including performance optimization reducing query time by 20%</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/80 border-slate-600">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">Statistical Analyst, NASA Research Team Member</h3>
                      <p className="text-blue-400 font-semibold">NASA</p>
                    </div>
                    <div className="text-slate-400 md:text-right">
                      <p>Orlando, FL</p>
                      <p>Nov 2023 – Feb 2024</p>
                    </div>
                  </div>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Used Python to forecast severe weather and perform error analysis, improving prediction accuracy by 5% for Kennedy Space Center launches</li>
                    <li>• Analyzed 10+ years of weather-fatality data with Pandas and Matplotlib, uncovering insights adopted by the National Weather Service</li>
                    <li>• Built a Python tool estimating Lightning Launch Commit Criteria violations for operational planning</li>
                  </ul>
                </CardContent>
              </Card>
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
                dabbassammy@gmail.com
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
            <div className="mt-8 text-slate-400">
              <p>(407) 800-2029 • Orlando, Florida</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-700">
        <div className="container mx-auto px-6 text-center text-slate-400">
          <p>&copy; 2024 Sammy Dabbas. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
