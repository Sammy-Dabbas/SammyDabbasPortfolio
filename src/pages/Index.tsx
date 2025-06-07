import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, Play, MapPin, GraduationCap, Calendar, ArrowRight, Sparkles, Link, Link } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useStat1e("about");

  const renderAboutSection = () => (
    <div className="flex-1 flex items-center justify-center pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Floating Elements */}
        <div className="relative">
          {/* Floating decoration elements */}
          <div className="absolute -top-8 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute top-16 right-1/3 w-24 h-24 bg-gradient-to-br from-slate-100 to-gray-50 rounded-full opacity-40 blur-lg"></div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Available for opportunities
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sammy</span>
                </h1>
                
                <div className="space-y-3">
                  <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700">
                    Software Developer & CS Student
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Passionate about building scalable systems and elegant solutions. Currently pursuing Computer Science 
                  at UCF with a 3.9 GPA while gaining hands-on experience as a Software Developer Intern at FINDER Software Solutions.
                </p>
              </div>
              
              {/* Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">UCF Computer Science</p>
                    <p className="text-xs text-gray-500">Expected Aug 2026</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Orlando, FL</p>
                    <p className="text-xs text-gray-500">Open to relocate</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">Full-Time Ready</p>
                    <p className="text-xs text-gray-500">Immediate start</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:dabbassammy@gmail.com?subject=Hello%20Sammy&body=Hi%20Sammy,%0A%0AI%20found%20your%20portfolio%20and%20would%20like%20to%20get%20in%20touch.%0A%0A">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href="/SammyDabbasResume.pdf" target="_blank" rel="noopener noreferrer">
               <Button
                variant="outline"
                 className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-6 text-base transition-all">
                <ExternalLink className="w-5 h-5 mr-2" />
                   View Resume
               </Button>
               </a>
            </div>

            {/* Right Content - Profile Picture - 5 columns */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 rounded-full blur-2xl opacity-60 scale-110"></div>
                
                {/* Profile container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Avatar className="w-full h-full">
                    <AvatarImage src="/SammyDabbasPortfolio/images/profile.png" alt="Sammy Dabbas" className="object-cover" />                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700">SD</AvatarFallback>
                    </Avatar>
                  </div>
                  {/* Profile picture */}
                  {/* Floating badges */}
                  <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-100">
                    <Code2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-gray-100">
                    <Database className="w-6 h-6 text-indigo-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="flex-1 flex items-center justify-center pt-8 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Arsenal</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "C#", "JavaScript", "SQL", "HTML", "CSS"].map((lang) => (
                  <Badge key={lang} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 transition-colors">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Frameworks</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[".NET Core", "FastAPI", "React.js", "Django", "Node.js"].map((framework) => (
                  <Badge key={framework} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200 transition-colors">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Databases</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["MS SQL Server", "Firebase", "DynamoDB", "Firestore"].map((db) => (
                  <Badge key={db} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200 transition-colors">
                    {db}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cloud & Tools */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["AWS", "Docker", "Kubernetes", "Git", "GitHub"].map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200 transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderProjectsSection = () => (
    <div className="flex-1 flex items-center justify-center pt-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications solving complex problems with elegant solutions
          </p>
        </div>
        
        <div className="space-y-12">
          {/* Project 1 */}
          <Card className="bg-white border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">
                <div className="relative w-full h-64 bg-white rounded-2xl border border-gray-100 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Live Demo</p>
                  </div>
                </div>
              </div>
              <CardContent className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium text-green-600">Production Ready</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">Real-Time Ad Event Processing</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Engineered a high-performance system processing 1M+ events per second with sub-20ms latency. 
                  Built with FastAPI and AWS Kinesis for enterprise-scale data ingestion.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Python", "FastAPI", "AWS Kinesis", "DynamoDB", "Docker", "EKS"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                  Explore Project
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Project 2 */}
          <Card className="bg-white border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="grid lg:grid-cols-5 gap-0">
              <CardContent className="lg:col-span-3 p-8 lg:p-12 order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-600">Team Project</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">GPU Training Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Collaborated with a 3-person team to build a full-stack ML workload management platform. 
                  Reduced job setup time by 40% through automated Kubernetes-based GPU provisioning.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["Django", "React.js", "Docker", "Kubernetes", "GPU Management"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-purple-200 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                  View Details
                </Button>
              </CardContent>
              <div className="lg:col-span-2 relative bg-gradient-to-br from-purple-50 to-pink-50 p-8 flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full h-64 bg-white rounded-2xl border border-gray-100 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Server className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Platform Demo</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Project 3 */}
          <Card className="bg-white border-gray-100 hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="grid lg:grid-cols-5 gap-0">
              <div className="lg:col-span-2 relative bg-gradient-to-br from-green-50 to-teal-50 p-8 flex items-center justify-center">
                <div className="relative w-full h-64 bg-white rounded-2xl border border-gray-100 shadow-inner flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                      <Database className="w-10 h-10 text-white" />
                    </div>
                    <p className="text-sm text-gray-600 font-medium">Inventory System</p>
                  </div>
                </div>
              </div>
              <CardContent className="lg:col-span-3 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                  <span className="text-sm font-medium text-orange-600">University Project</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900">UCF Lab Inventory System</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Developed a React.js application for tracking 200+ lab items using QR codes. 
                  Reduced check-in/out time by 10 seconds per transaction with Firebase integration.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {["React.js", "Firebase", "Firestore", "HTML5-QRCode", "Authentication"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-green-200 text-green-700 bg-green-50 hover:bg-green-100 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 group">
                  <ExternalLink className="w-4 h-4 mr-2 group-hover:rotate-45 transition-transform" />
                  View Project
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="flex-1 flex items-center justify-center pt-8 pb-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Something Amazing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to collaborate on your next project or discuss exciting opportunities. 
            I'm always excited to connect with fellow developers and innovative teams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Me</h3>
              <p className="text-blue-600 font-medium">dabbassammy@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card 
            className="bg-white border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            onClick={() => window.open('https://github.com/Sammy-Dabbas', '_blank')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">GitHub</h3>
              <p className="text-gray-600 font-medium">View my repositories</p>
            </CardContent>
          </Card>
          
          <Card 
            className="bg-white border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            onClick={() => window.open('https://www.linkedin.com/in/sammy-dabbas-61a559309/', '_blank')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600 font-medium">Professional network</p>
            </CardContent>
          </Card>
        </div>
        
        <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
          <Mail className="w-6 h-6 mr-3" />
          Start a Conversation
          <ArrowRight className="w-5 h-5 ml-3" />
        </Button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm sticky top-0">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sammy Dabbas
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveSection("about")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === "about" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection("skills")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === "skills" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Skills
              </button>
              <button 
                onClick={() => setActiveSection("projects")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === "projects" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection("contact")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === "contact" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full">
          {activeSection === "about" && renderAboutSection()}
          {activeSection === "skills" && renderSkillsSection()}
          {activeSection === "projects" && renderProjectsSection()}
          {activeSection === "contact" && renderContactSection()}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 border-t border-gray-100 bg-white">
        <p className="font-medium">&copy; 2024 Sammy Dabbas. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
