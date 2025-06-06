
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, Play, MapPin, GraduationCap, Calendar } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderAboutSection = () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-800">
              Hey there, I'm Sammy 👋
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-slate-600">
              Software Developer & Computer Science Student
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed max-w-2xl">
              I'm a passionate Software Developer and Computer Science student at the University of Central Florida, 
              maintaining a 3.9 GPA while gaining real-world experience through internships and projects. Currently working 
              as a Software Developer Intern at FINDER Software Solutions, where I build high-performance data processing 
              systems and optimize backend infrastructure.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">University of Central Florida - Computer Science (Expected Aug 2026)</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">Orlando, Florida</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-slate-600" />
              <span className="text-slate-600">Available for Full-Time Opportunities</span>
            </div>
          </div>

          <div className="flex gap-4">
            <Button className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3">
              <ExternalLink className="w-5 h-5 mr-2" />
              View Resume
            </Button>
          </div>
        </div>

        {/* Right Content - Profile Picture */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-slate-200 shadow-xl">
              <Avatar className="w-full h-full">
                <AvatarImage src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" alt="Sammy Dabbas" className="object-cover" />
                <AvatarFallback className="text-4xl font-bold bg-slate-100 text-slate-700">SD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSkillsSection = () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          Technical Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Languages */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Code2 className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "C#", "JavaScript", "SQL", "HTML", "CSS"].map((lang) => (
                  <Badge key={lang} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Server className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Frameworks</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[".NET Core", "FastAPI", "React.js", "Django", "Node.js"].map((framework) => (
                  <Badge key={framework} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Database className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Databases</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["MS SQL Server", "Firebase", "DynamoDB", "Firestore"].map((db) => (
                  <Badge key={db} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
                    {db}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cloud & Tools */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Cloud className="w-12 h-12 text-slate-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["AWS", "Docker", "Kubernetes", "Git", "GitHub"].map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-slate-100 text-slate-700 hover:bg-slate-200">
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
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-800">
          Featured Projects
        </h2>
        <div className="grid gap-8">
          {/* Project 1 */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-slate-50 flex items-center justify-center p-8">
                <div className="relative w-full h-64 bg-slate-100 rounded-lg border-2 border-slate-200 flex items-center justify-center">
                  <Play className="w-16 h-16 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">Real-Time Ad Event Processing System</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Designed a scalable system capable of ingesting 1M+ ad events per second with sub-20ms latency. 
                  Built with FastAPI and AWS Kinesis, featuring DynamoDB schemas optimized for microsecond read performance.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "FastAPI", "AWS Kinesis", "DynamoDB", "Docker", "EKS"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-slate-300 text-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Project 2 */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-slate-50 flex items-center justify-center p-8">
                <div className="relative w-full h-64 bg-slate-100 rounded-lg border-2 border-slate-200 flex items-center justify-center">
                  <Play className="w-16 h-16 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">GPU Training Service Platform</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Collaborated with a team of 3 to build a full-stack platform for dynamically deploying and managing ML workloads. 
                  Reduced job setup time by 40% through automated GPU resource provisioning via Kubernetes controllers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Django", "React.js", "Docker", "Kubernetes", "GPU Management"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-slate-300 text-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Project 3 */}
          <Card className="bg-white border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative bg-slate-50 flex items-center justify-center p-8">
                <div className="relative w-full h-64 bg-slate-100 rounded-lg border-2 border-slate-200 flex items-center justify-center">
                  <Play className="w-16 h-16 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors" />
                </div>
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">UCF Lab Inventory System</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Created a React.js application for tracking 200+ lab items using QR codes, reducing check-in/out time by 10 seconds per transaction. 
                  Integrated Firebase Auth and Firestore with role-based access control.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React.js", "Firebase", "Firestore", "HTML5-QRCode", "Authentication"].map((tech) => (
                    <Badge key={tech} variant="outline" className="border-slate-300 text-slate-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-50">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-slate-800">
          Let's Connect
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          I'm always interested in new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-slate-700 hover:bg-slate-800 text-white px-8 py-3">
            <Mail className="w-5 h-5 mr-2" />
            dabbassammy@gmail.com
          </Button>
          <Button 
            variant="outline" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 flex items-center gap-2"
            onClick={() => window.open('https://github.com/Sammy-Dabbas', '_blank')}
          >
            <Github className="w-5 h-5" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 flex items-center gap-2"
            onClick={() => window.open('https://www.linkedin.com/in/sammy-dabbas-61a559309/', '_blank')}
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-slate-800">
              Sammy Dabbas
            </div>
            <div className="flex space-x-8">
              <button 
                onClick={() => setActiveSection("about")}
                className={`hover:text-slate-600 transition-colors ${activeSection === "about" ? "text-slate-800 font-medium" : "text-slate-500"}`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection("skills")}
                className={`hover:text-slate-600 transition-colors ${activeSection === "skills" ? "text-slate-800 font-medium" : "text-slate-500"}`}
              >
                Skills
              </button>
              <button 
                onClick={() => setActiveSection("projects")}
                className={`hover:text-slate-600 transition-colors ${activeSection === "projects" ? "text-slate-800 font-medium" : "text-slate-500"}`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection("contact")}
                className={`hover:text-slate-600 transition-colors ${activeSection === "contact" ? "text-slate-800 font-medium" : "text-slate-500"}`}
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full p-6">
          {activeSection === "about" && renderAboutSection()}
          {activeSection === "skills" && renderSkillsSection()}
          {activeSection === "projects" && renderProjectsSection()}
          {activeSection === "contact" && renderContactSection()}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-slate-400 border-t border-slate-200 bg-white">
        <p>&copy; 2024 Sammy Dabbas. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
