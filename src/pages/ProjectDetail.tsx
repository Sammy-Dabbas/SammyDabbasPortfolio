import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Zap, Play, Code2, Database, Server } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  detailedDescription: string;
  status: string;
  statusColor: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  videoUrl?: string;
  icon: any;
  iconGradient: string;
  timeline: string;
  teamSize: string;
  highlights: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  images?: string[];
}

const projectsData: { [key: string]: ProjectData } = {
  "ucf-lab-inventory": {
    id: "ucf-lab-inventory",
    title: "UCF Lab Inventory System",
    subtitle: "University Project",
    description: "Developed a React.js application for tracking 200+ lab items using QR codes. Reduced check-in/out time by 10 seconds per transaction with Firebase integration.",
    detailedDescription: "A comprehensive inventory management system built for UCF labs to streamline the tracking of equipment and materials. The system uses QR code technology for quick item identification and features a user-friendly interface for students and staff to check items in and out efficiently.",
    status: "University Project",
    statusColor: "orange",
    technologies: ["React.js", "Firebase", "Firestore", "HTML5-QRCode", "Authentication"],
    githubUrl: "https://github.com/Sammy-Dabbas/ucf-lab-inventory",
    icon: Database,
    iconGradient: "from-green-500 to-teal-500",
    timeline: "3 months",
    teamSize: "Solo Project",
    highlights: [
      "Reduced check-in/out time by 10 seconds per transaction",
      "Successfully tracks 200+ lab items",
      "Implemented QR code scanning for instant item recognition",
      "Real-time database updates with Firebase"
    ],
    features: [
      "QR Code Generation and Scanning",
      "Real-time Inventory Tracking",
      "User Authentication System",
      "Item Check-in/Check-out Management",
      "Search and Filter Functionality",
      "Admin Dashboard for Inventory Management",
      "Responsive Design for Mobile and Desktop"
    ],
    challenges: [
      "Implementing reliable QR code scanning across different devices",
      "Designing an intuitive user interface for quick operations",
      "Managing real-time data synchronization",
      "Handling authentication and user permissions"
    ],
    learnings: [
      "Advanced React.js state management techniques",
      "Firebase integration and real-time database operations",
      "QR code implementation in web applications",
      "User experience design for efficiency-focused applications"
    ]
  },
  "ad-event-processing": {
    id: "ad-event-processing",
    title: "Real-Time Ad Event Processing",
    subtitle: "Production Ready",
    description: "Engineered a high-performance system processing 1M+ events per second with sub-20ms latency. Built with FastAPI and AWS Kinesis for enterprise-scale data ingestion.",
    detailedDescription: "A scalable microservices architecture designed to handle millions of advertising events in real-time. The system processes user interactions, ad impressions, and conversions with extremely low latency while maintaining high availability and data consistency.",
    status: "Production Ready",
    statusColor: "green",
    technologies: ["Python", "FastAPI", "AWS Kinesis", "DynamoDB", "Docker", "EKS"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Zap,
    iconGradient: "from-blue-500 to-indigo-500",
    timeline: "6 months",
    teamSize: "3 developers",
    highlights: [
      "Processes 1M+ events per second",
      "Sub-20ms latency for real-time processing",
      "Deployed on AWS EKS for high availability",
      "Horizontal scaling capabilities"
    ],
    features: [
      "High-throughput event ingestion",
      "Real-time stream processing",
      "Automated scaling based on load",
      "Comprehensive monitoring and alerting",
      "Data validation and error handling",
      "API documentation with FastAPI",
      "Docker containerization"
    ],
    challenges: [
      "Achieving sub-20ms latency at scale",
      "Designing fault-tolerant distributed systems",
      "Managing memory efficiency for high-volume processing",
      "Implementing proper monitoring and observability"
    ],
    learnings: [
      "Advanced AWS Kinesis stream processing",
      "High-performance Python optimization techniques",
      "Kubernetes deployment and scaling strategies",
      "Distributed systems architecture patterns"
    ]
  },
  "gpu-training-platform": {
    id: "gpu-training-platform",
    title: "GPU Training Platform",
    subtitle: "Team Project",
    description: "Collaborated with a 3-person team to build a full-stack ML workload management platform. Reduced job setup time by 40% through automated Kubernetes-based GPU provisioning.",
    detailedDescription: "A comprehensive platform for managing machine learning training workloads across GPU clusters. The system automates resource allocation, job scheduling, and monitoring to streamline the ML development workflow for data science teams.",
    status: "Team Project",
    statusColor: "purple",
    technologies: ["Django", "React.js", "Docker", "Kubernetes", "GPU Management"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Server,
    iconGradient: "from-purple-500 to-pink-500",
    timeline: "4 months",
    teamSize: "3 developers",
    highlights: [
      "Reduced job setup time by 40%",
      "Automated Kubernetes-based GPU provisioning",
      "Full-stack platform with modern UI",
      "Efficient resource utilization"
    ],
    features: [
      "Automated GPU cluster management",
      "Job queue and scheduling system",
      "Real-time monitoring dashboard",
      "Resource usage analytics",
      "User authentication and authorization",
      "Docker-based job containerization",
      "RESTful API for integrations"
    ],
    challenges: [
      "Orchestrating GPU resources efficiently",
      "Building a scalable job scheduling system",
      "Implementing real-time monitoring",
      "Coordinating work across a distributed team"
    ],
    learnings: [
      "Kubernetes orchestration for specialized workloads",
      "Full-stack development with Django and React",
      "Team collaboration and project management",
      "GPU resource management and optimization"
    ]
  }
};

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (projectId && projectsData[projectId]) {
      setProject(projectsData[projectId]);
    }
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/?section=projects')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  const IconComponent = project.icon;
  const statusColors = {
    green: "bg-green-400",
    orange: "bg-orange-400", 
    purple: "bg-purple-400"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <nav className="bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm sticky top-0">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            <Button 
              variant="ghost"
              onClick={() => navigate('/?section=projects')}
              className="text-gray-600 hover:text-blue-600 text-sm sm:text-base"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Back to Projects</span>
              <span className="sm:hidden">Back</span>
            </Button>
            <div className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Sammy Dabbas
            </div>
            <div className="flex gap-2 sm:gap-4">
              <Button
                variant="outline"
                onClick={() => window.open(project.githubUrl, '_blank')}
                className="border-gray-200 text-gray-700 hover:bg-gray-50 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
              {project.liveUrl && (
                                  <Button
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-sm sm:text-base"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span className="hidden sm:inline">Live Demo</span>
                    <span className="sm:hidden">Demo</span>
                  </Button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-12">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${project.iconGradient} rounded-2xl flex items-center justify-center`}>
              <IconComponent className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-3 h-3 ${statusColors[project.statusColor as keyof typeof statusColors]} rounded-full`}></div>
                <span className="text-sm font-medium text-gray-600">{project.status}</span>
              </div>
                             <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">{project.title}</h1>
            </div>
          </div>
          
          <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mb-8">
            {project.detailedDescription}
          </p>

          {/* Project Meta */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <Calendar className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Timeline</p>
                <p className="text-sm text-gray-600">{project.timeline}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <Users className="w-5 h-5 text-indigo-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Team Size</p>
                <p className="text-sm text-gray-600">{project.teamSize}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100">
              <Code2 className="w-5 h-5 text-purple-600" />
              <div>
                <p className="text-sm font-medium text-gray-900">Technologies</p>
                <p className="text-sm text-gray-600">{project.technologies.length} tools</p>
              </div>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="border-blue-200 text-blue-700 bg-blue-50 hover:bg-blue-100 transition-colors px-3 py-1">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Video/Demo Section */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-white border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video/Demo Preview */}
              <div className={`relative bg-gradient-to-br ${project.iconGradient} p-4 sm:p-8 flex items-center justify-center`}>
                <div className="relative w-full h-64 sm:h-80 bg-white rounded-2xl border border-gray-100 shadow-inner flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer group">
                  <div className="text-center">
                    <div className={`w-24 h-24 bg-gradient-to-br ${project.iconGradient} rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Project Demo</h3>
                    <p className="text-gray-600 font-medium">Click to watch presentation</p>
                    <div className="mt-4 px-4 py-2 bg-gray-100 rounded-full inline-block">
                      <p className="text-sm text-gray-600">Video coming soon</p>
                    </div>
                  </div>
                  {/* Play button overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-0 group-hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                      <Play className="w-8 h-8 text-transparent group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Demo Info */}
              <CardContent className="p-4 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Live Demonstration</h3>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg mb-4 sm:mb-6">
                      Watch a comprehensive walkthrough of {project.title} showcasing its key features, 
                      user interface, and technical capabilities in action.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Play className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-gray-700">Full feature walkthrough</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Code2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-gray-700">Technical architecture overview</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <Database className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">Real-world usage scenarios</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    {project.videoUrl && (
                      <Button
                        onClick={() => window.open(project.videoUrl, '_blank')}
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Demo
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="border-blue-200 text-blue-700 hover:bg-blue-50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Try Live Version
                      </Button>
                    )}
                    {!project.videoUrl && !project.liveUrl && (
                      <Button
                        variant="outline"
                        className="border-gray-200 text-gray-600 cursor-not-allowed"
                        disabled
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Demo Coming Soon
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Key Highlights */}
            <Card className="bg-white border-gray-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Highlights</h2>
                <div className="grid gap-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-white border-gray-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Features & Capabilities</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Challenges */}
            <Card className="bg-white border-gray-100">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-white border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="w-full bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                  {project.liveUrl && (
                    <Button
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      variant="outline"
                      className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {project.videoUrl && (
                    <Button
                      onClick={() => window.open(project.videoUrl, '_blank')}
                      variant="outline"
                      className="w-full border-purple-200 text-purple-700 hover:bg-purple-50"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Key Learnings */}
            <Card className="bg-white border-gray-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Learnings</h3>
                <div className="space-y-3">
                  {project.learnings.map((learning, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-4 h-4 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{learning}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Interested in this project?</h3>
                <p className="text-sm text-gray-600 mb-4">Let's discuss how I can bring similar value to your team.</p>
                <Button 
                  onClick={() => window.open('mailto:dabbassammy@gmail.com?subject=Interested%20in%20your%20' + project.title + '%20project&body=Hi%20Sammy,%0A%0AI%20saw%20your%20' + project.title + '%20project%20and%20would%20like%20to%20discuss%20it%20further.%0A%0A', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 