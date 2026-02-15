import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Code2, Database, Server, Cloud, MapPin, GraduationCap, Calendar, ArrowRight, Sparkles, Cpu } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const section = urlParams.get('section');
    if (section && ['about', 'skills', 'projects', 'contact'].includes(section)) {
      setActiveSection(section);
    }
  }, [location]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dabbassammy@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  const renderAboutSection = () => (
    <div className="flex-1 flex items-center justify-center pt-4 sm:pt-8 pb-8 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section with Floating Elements */}
        <div className="relative">
          {/* Floating decoration elements */}
          <div className="absolute -top-8 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-50 rounded-full opacity-60 blur-xl hidden sm:block"></div>
          <div className="absolute top-16 right-1/3 w-24 h-24 bg-gradient-to-br from-slate-100 to-gray-50 rounded-full opacity-40 blur-lg hidden sm:block"></div>
          
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Available for opportunities
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                  Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sammy</span>
                </h1>
                
                <div className="space-y-3">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700">
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
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <div>
                  <Button onClick={handleCopyEmail} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-gray-500 mt-2 text-center sm:text-left">
                    Or email directly at <button onClick={handleCopyEmail} className="text-blue-600 hover:underline font-medium">dabbassammy@gmail.com</button>
                  </p>
                </div>
                <a href="/SammyDabbasPortfolio/sammydabbas_resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-8 py-6 text-base transition-all">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    View Resume
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Picture - 5 columns */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end order-first lg:order-last">
              <div className="relative">
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-50 rounded-full blur-2xl opacity-60 scale-110"></div>
                
                {/* Profile container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                    <Avatar className="w-full h-full">
                      <AvatarImage src={`${import.meta.env.BASE_URL}images/profile.png`} alt="Sammy Dabbas" className="object-cover" />
                      <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700">SD</AvatarFallback>
                    </Avatar>
                  </div>
                  
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
    <div className="flex-1 flex items-center justify-center pt-4 sm:pt-8 pb-8 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Arsenal</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Languages */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Languages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Python", "C++", "C#", "JavaScript", "SQL", "HTML/CSS"].map((lang) => (
                  <Badge key={lang} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-blue-200 transition-colors">
                    {lang}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Frameworks */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Server className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Frameworks</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {[".NET Core", "FastAPI", "React.js", "Django", "Node.js", "Flask"].map((framework) => (
                  <Badge key={framework} variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-200 transition-colors">
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Databases */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Database className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Databases</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["MS SQL Server", "Firebase", "DynamoDB", "Firestore"].map((db) => (
                  <Badge key={db} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 border-purple-200 transition-colors">
                    {db}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* ML & Data Science */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">ML & Data Science</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["PyTorch", "scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "FAISS"].map((ml) => (
                  <Badge key={ml} variant="secondary" className="bg-amber-50 text-amber-700 hover:bg-amber-100 border-amber-200 transition-colors">
                    {ml}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Cloud & Tools */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cloud className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Cloud & DevOps</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["AWS", "GCP", "Docker", "Kubernetes", "Git", "GitHub"].map((tool) => (
                  <Badge key={tool} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border-green-200 transition-colors">
                    {tool}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Embedded & Robotics */}
          <Card className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-rose-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Cpu className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-gray-800">Embedded & Robotics</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Arduino", "ROS2", "Gazebo", "I2C", "LIDAR", "3D Printing"].map((hw) => (
                  <Badge key={hw} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100 border-red-200 transition-colors">
                    {hw}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  const projectCards = [
    {
      id: "ad-event-processing",
      title: "Real-Time Ad Event Processing",
      shortDescription: "FastAPI async event pipeline with Redis deduplication, Docker orchestration, and real-time analytics dashboard.",
      status: "Completed",
      statusColor: "bg-green-400",
      tags: ["Python", "FastAPI", "Redis", "Docker"],
      githubUrl: "https://github.com/Sammy-Dabbas/ad-processing-pipeline"
    },
    {
      id: "exoplanet-detector",
      title: "Exoplanet Detection System",
      shortDescription: "AI/ML system with 89.6% accuracy detecting exoplanets from NASA mission data. Global Nominee at NASA Space Apps 2024.",
      status: "NASA Global Nominee",
      statusColor: "bg-purple-400",
      tags: ["Python", "XGBoost", "Flask", "GCP"],
      githubUrl: "https://github.com/Sammy-Dabbas/PlanetHunterBros"
    },
    {
      id: "ucf-lab-inventory",
      title: "UCF Lab Inventory System",
      shortDescription: "Production React SPA managing 200+ lab items with Microsoft OAuth, QR camera scanning, and Firebase serverless backend.",
      status: "Production",
      statusColor: "bg-orange-400",
      tags: ["React", "Firebase", "OAuth", "QR Code"],
      githubUrl: "https://github.com/Sammy-Dabbas/ucf-lab-inventory"
    },
    {
      id: "recommendation-system",
      title: "Two-Tower Recommendation System",
      shortDescription: "PyTorch two-tower neural network with FAISS sub-1ms retrieval. BPR training on MovieLens, config-driven pipeline.",
      status: "Completed",
      statusColor: "bg-green-400",
      tags: ["PyTorch", "FAISS", "Python", "RecSys"],
      githubUrl: "https://github.com/Sammy-Dabbas"
    },
    {
      id: "agricultural-analytics",
      title: "Agricultural Social Media Analytics",
      shortDescription: "ML platform analyzing 18,095 posts from 160 farms with multimodal CLIP+BERT features. 29.44% R-squared, 92% NDCG@10.",
      status: "Active Research",
      statusColor: "bg-emerald-400",
      tags: ["Python", "LightGBM", "CLIP", "BERT"],
      githubUrl: "https://github.com/Sammy-Dabbas"
    },
    {
      id: "space-radiation-research",
      title: "Space Radiation Research",
      shortDescription: "Research framework for predicting spaceflight radiation dose. Validating NASA mission data against Badhwar-O'Neill 2020 GCR physics model.",
      status: "In Progress",
      statusColor: "bg-blue-500",
      tags: ["Python", "Random Forest", "NASA APIs"],
      githubUrl: "https://github.com/Sammy-Dabbas"
    },
    {
      id: "qbxr-senior-design",
      title: "QBXR Senior Design",
      shortDescription: "ML system treating QB evaluation as a decision-representation problem with VR-based adaptive coaching feedback.",
      status: "In Progress",
      statusColor: "bg-purple-400",
      tags: ["Python", "ML", "VR Data"],
      githubUrl: "https://github.com/Sammy-Dabbas"
    },
    {
      id: "flight-computer",
      title: "Model Rocket Flight Computer",
      shortDescription: "Custom avionics with SAMD21, 9-DOF IMU, and barometric sensor. 7-state flight FSM logging 15 telemetry channels. 3D printed rocket.",
      status: "Completed",
      statusColor: "bg-green-400",
      tags: ["C++", "SAMD21", "IMU", "3D Printing"],
      githubUrl: "https://github.com/Sammy-Dabbas"
    },
    {
      id: "rover-challenge",
      title: "Rover Challenge - Project Storm",
      shortDescription: "LIDAR-based terrain simulation for rover navigation using ROS2 and Gazebo with real USGS elevation data.",
      status: "Early Development",
      statusColor: "bg-orange-400",
      tags: ["ROS2", "Gazebo", "LIDAR", "Python"],
      githubUrl: "https://github.com/Sammy-Dabbas"
    }
  ];

  const renderProjectsSection = () => (
    <div className="flex-1 pt-4 sm:pt-8 pb-8 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            From production systems to research and hardware
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectCards.map((project) => (
            <Card
              key={project.id}
              className="bg-white border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col"
              onClick={() => navigate(`/project/${project.id}`)}
            >
              <CardContent className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`w-2.5 h-2.5 ${project.statusColor} rounded-full`}></div>
                  <span className="text-xs font-medium text-gray-500">{project.status}</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100 text-gray-600 text-xs px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 flex-1 text-xs"
                    onClick={(e) => { e.stopPropagation(); navigate(`/project/${project.id}`); }}
                  >
                    <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                    View Details
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50 h-8 w-8"
                    onClick={(e) => { e.stopPropagation(); window.open(project.githubUrl, '_blank'); }}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderContactSection = () => (
    <div className="flex-1 flex items-center justify-center pt-4 sm:pt-8 pb-8 sm:pb-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-900">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8 sm:mb-12">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
          
          <div className="inline-flex flex-col items-center">
            <Button onClick={handleCopyEmail} size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-12 py-8 text-xl shadow-lg hover:shadow-xl transition-all mb-4">
              <Mail className="w-6 h-6 mr-3" />
              dabbassammy@gmail.com
            </Button>
            <p className="text-sm text-gray-500">Click to copy email</p>
          </div>

          <div className="mt-12 sm:mt-16">
            <p className="text-lg text-gray-600 mb-4">You can also find me on:</p>
            <div className="flex justify-center space-x-6">
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
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
      {/* Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm sticky top-0">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <button
              onClick={() => setActiveSection("about")}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
            >
              Sammy Dabbas
            </button>
            <div className="flex space-x-2 sm:space-x-8">
              <button 
                onClick={() => setActiveSection("about")}
                className={`px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  activeSection === "about" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                About
              </button>
              <button 
                onClick={() => setActiveSection("skills")}
                className={`px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  activeSection === "skills" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Skills
              </button>
              <button 
                onClick={() => setActiveSection("projects")}
                className={`px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
                  activeSection === "projects" 
                    ? "bg-blue-50 text-blue-700 font-semibold" 
                    : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
              >
                Projects
              </button>
              <button 
                onClick={() => setActiveSection("contact")}
                className={`px-2 sm:px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base ${
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
        <p className="font-medium">&copy; 2025 Sammy Dabbas. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Index;
