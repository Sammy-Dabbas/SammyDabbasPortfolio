
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, Play, MapPin, GraduationCap, Calendar } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-stone-900 to-neutral-800 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-neutral-900/80 backdrop-blur-md z-50 border-b border-neutral-700">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              SD
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
              <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
              <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-stone-500/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-6 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="animate-fade-in">
              {/* Profile Picture and Name Section */}
              <div className="flex flex-col items-center mb-6">
                <div className="flex items-center gap-8 mb-4">
                  <Avatar className="w-32 h-32 border-4 border-emerald-500/30">
                    <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="Sammy Dabbas" />
                    <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-emerald-600 to-teal-600 text-white">SD</AvatarFallback>
                  </Avatar>
                  <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    Sammy Dabbas
                  </h1>
                </div>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-stone-300">
                Software Developer & Computer Science Student
              </h2>
              <p className="text-lg text-stone-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                Building scalable backend systems and data pipelines. Currently pursuing Computer Science at UCF with expertise in Python, .NET Core, and cloud technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8 py-3 transition-all duration-300 hover:scale-105">
                  <Mail className="w-5 h-5 mr-2" />
                  Get In Touch
                </Button>
                <Button size="lg" variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 px-8 py-3 transition-all duration-300 hover:scale-105">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  View Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                  I'm a passionate Software Developer and Computer Science student at the University of Central Florida, 
                  maintaining a 3.9 GPA while gaining real-world experience through internships and projects.
                </p>
                <p className="text-lg text-stone-300 mb-6 leading-relaxed">
                  Currently working as a Software Developer Intern at FINDER Software Solutions, where I build high-performance 
                  data processing systems and optimize backend infrastructure for traffic monitoring applications.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-emerald-400" />
                    <span className="text-stone-300">University of Central Florida - Computer Science (Expected Aug 2026)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                    <span className="text-stone-300">Orlando, Florida</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    <span className="text-stone-300">Available for Full-Time Opportunities</span>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <Card className="bg-neutral-800/80 border-stone-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">Current Role</h3>
                    <p className="text-stone-300 mb-2 font-medium">Software Developer Intern</p>
                    <p className="text-stone-400">FINDER Software Solutions</p>
                    <p className="text-stone-500 text-sm">Sep 2024 - Present</p>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-800/80 border-stone-700">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-emerald-400">Previous Experience</h3>
                    <p className="text-stone-300 mb-2 font-medium">Statistical Analyst</p>
                    <p className="text-stone-400">NASA Research Team</p>
                    <p className="text-stone-500 text-sm">Nov 2023 - Feb 2024</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Languages */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Code2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-emerald-400">Languages</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Python", "C#", "JavaScript", "SQL", "HTML", "CSS"].map((lang) => (
                      <Badge key={lang} variant="secondary" className="bg-stone-700 text-stone-300 hover:bg-emerald-900/30">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Frameworks */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Server className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-emerald-400">Frameworks</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {[".NET Core", "FastAPI", "React.js", "Django", "Node.js"].map((framework) => (
                      <Badge key={framework} variant="secondary" className="bg-stone-700 text-stone-300 hover:bg-emerald-900/30">
                        {framework}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Databases */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Database className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-emerald-400">Databases</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["MS SQL Server", "Firebase", "DynamoDB", "Firestore"].map((db) => (
                      <Badge key={db} variant="secondary" className="bg-stone-700 text-stone-300 hover:bg-emerald-900/30">
                        {db}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Cloud & Tools */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <Cloud className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-emerald-400">Cloud & Tools</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["AWS", "Docker", "Kubernetes", "Git", "GitHub"].map((tool) => (
                      <Badge key={tool} variant="secondary" className="bg-stone-700 text-stone-300 hover:bg-emerald-900/30">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-20 bg-neutral-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid gap-12">
              {/* Project 1 */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative bg-neutral-900 flex items-center justify-center p-8">
                    <div className="relative w-full h-64 bg-neutral-800 rounded-lg border-2 border-stone-700 flex items-center justify-center">
                      <Play className="w-16 h-16 text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-lg"></div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-emerald-400">Real-Time Ad Event Processing System</h3>
                    <p className="text-stone-300 mb-4 leading-relaxed">
                      Designed a scalable system capable of ingesting 1M+ ad events per second with sub-20ms latency. 
                      Built with FastAPI and AWS Kinesis, featuring DynamoDB schemas optimized for microsecond read performance.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "FastAPI", "AWS Kinesis", "DynamoDB", "Docker", "EKS"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-emerald-500/50 text-emerald-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-900/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/* Project 2 */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative bg-neutral-900 flex items-center justify-center p-8">
                    <div className="relative w-full h-64 bg-neutral-800 rounded-lg border-2 border-stone-700 flex items-center justify-center">
                      <Play className="w-16 h-16 text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-lg"></div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-emerald-400">GPU Training Service Platform</h3>
                    <p className="text-stone-300 mb-4 leading-relaxed">
                      Collaborated with a team of 3 to build a full-stack platform for dynamically deploying and managing ML workloads. 
                      Reduced job setup time by 40% through automated GPU resource provisioning via Kubernetes controllers.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Django", "React.js", "Docker", "Kubernetes", "GPU Management"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-emerald-500/50 text-emerald-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-900/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/* Project 3 */}
              <Card className="bg-neutral-800/80 border-stone-700 hover:border-emerald-500/50 transition-all duration-300 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative bg-neutral-900 flex items-center justify-center p-8">
                    <div className="relative w-full h-64 bg-neutral-800 rounded-lg border-2 border-stone-700 flex items-center justify-center">
                      <Play className="w-16 h-16 text-emerald-400 hover:text-emerald-300 cursor-pointer transition-colors" />
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-teal-900/20 rounded-lg"></div>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-emerald-400">UCF Lab Inventory System</h3>
                    <p className="text-stone-300 mb-4 leading-relaxed">
                      Created a React.js application for tracking 200+ lab items using QR codes, reducing check-in/out time by 10 seconds per transaction. 
                      Integrated Firebase Auth and Firestore with role-based access control.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["React.js", "Firebase", "Firestore", "HTML5-QRCode", "Authentication"].map((tech) => (
                        <Badge key={tech} variant="outline" className="border-emerald-500/50 text-emerald-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-900/30">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-stone-300 mb-12">
              I'm always interested in new opportunities and collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-8 py-3 transition-all duration-300 hover:scale-105">
                <Mail className="w-5 h-5" />
                dabbassammy@gmail.com
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-stone-600 text-stone-300 hover:bg-stone-800 px-8 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://github.com/Sammy-Dabbas', '_blank')}
              >
                <Github className="w-5 h-5" />
                GitHub
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-stone-600 text-stone-300 hover:bg-stone-800 px-8 py-3 flex items-center gap-2 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://www.linkedin.com/in/sammy-dabbas-61a559309/', '_blank')}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-stone-400 border-t border-stone-800">
        <p>&copy; 2024 Sammy Dabbas. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
