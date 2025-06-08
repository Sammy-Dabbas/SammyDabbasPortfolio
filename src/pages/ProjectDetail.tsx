import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Zap, Play, Code2, Database, Server } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ArchitectureDiagram from "@/components/ui/ArchitectureDiagram";

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
  architectureSvg?: string;
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
    ],
    architectureSvg: undefined
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
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="800" viewBox="0 0 1600 800"> 
  <defs>
    <!-- Clean gradients -->
    <linearGradient id="awsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FF9900;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#FF9900;stop-opacity:0.02" />
    </linearGradient>
    
    <linearGradient id="vpcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563EB;stop-opacity:0.04" />
      <stop offset="100%" style="stop-color:#2563EB;stop-opacity:0.01" />
    </linearGradient>
    
    <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#E3F2FD;stop-opacity:0.2" />
    </linearGradient>
    
    <linearGradient id="archiveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8F5E9;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#E8F5E9;stop-opacity:0.2" />
    </linearGradient>
    
    <linearGradient id="cacheGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF3E0;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#FFF3E0;stop-opacity:0.2" />
    </linearGradient>

    <!-- Clean shadow filter -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.08"/>
    </filter>
    
    <filter id="iconShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.06"/>
    </filter>

    <!-- Clean arrow markers -->
    <marker id="primaryArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563EB" />
    </marker>
    
    <marker id="auxArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#10B981" />
    </marker>
    
    <marker id="encryptArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#F59E0B" />
    </marker>

    <!-- Clean, minimal icons -->
    <symbol id="i-sources" viewBox="0 0 48 48">
      <rect x="4" y="12" width="40" height="24" rx="6" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <path d="M12 24a12 12 0 0 1 24 0h6a9 9 0 0 1 0 18H6a9 9 0 0 1 0-18h6z" fill="#E3F2FD" stroke="#2563EB" stroke-width="1.5"/>
      <circle cx="16" cy="20" r="2" fill="#2563EB"/>
      <circle cx="24" cy="20" r="2" fill="#2563EB"/>
      <circle cx="32" cy="20" r="2" fill="#2563EB"/>
    </symbol>
    
    <symbol id="i-api" viewBox="0 0 48 48">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="10" y="16" width="28" height="3" fill="#2563EB" rx="1.5"/>
      <rect x="10" y="22" width="22" height="3" fill="#93C5FD" rx="1.5"/>
      <rect x="10" y="28" width="16" height="3" fill="#DBEAFE" rx="1.5"/>
      <circle cx="38" cy="17" r="1.5" fill="#10B981"/>
    </symbol>
    
    <symbol id="i-kinesis" viewBox="0 0 48 48">
      <ellipse cx="24" cy="12" rx="18" ry="6" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="6" y="12" width="36" height="24" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="24" cy="36" rx="18" ry="6" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <path d="M10 18 Q24 24 38 18" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M10 24 Q24 30 38 24" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M10 30 Q24 36 38 30" fill="none" stroke="#2563EB" stroke-width="1.5"/>
    </symbol>
    
    <symbol id="i-eks" viewBox="0 0 48 48">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="10" y="14" width="12" height="8" fill="#E3F2FD" stroke="#2563EB" stroke-width="1" rx="1"/>
      <rect x="26" y="14" width="12" height="8" fill="#E3F2FD" stroke="#2563EB" stroke-width="1" rx="1"/>
      <rect x="10" y="26" width="12" height="8" fill="#E3F2FD" stroke="#2563EB" stroke-width="1" rx="1"/>
      <rect x="26" y="26" width="12" height="8" fill="#E3F2FD" stroke="#2563EB" stroke-width="1" rx="1"/>
      <circle cx="24" cy="24" r="4" fill="#2563EB"/>
      <path d="M20 24 L28 24 M24 20 L24 28" stroke="#fff" stroke-width="1.5"/>
    </symbol>
    
    <symbol id="i-dynamodb" viewBox="0 0 48 48">
      <ellipse cx="24" cy="12" rx="18" ry="6" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="6" y="12" width="36" height="24" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="24" cy="36" rx="18" ry="6" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="10" y="17" width="28" height="2" fill="#2563EB" rx="1"/>
      <rect x="10" y="23" width="28" height="2" fill="#2563EB" rx="1"/>
      <rect x="10" y="29" width="28" height="2" fill="#2563EB" rx="1"/>
    </symbol>
    
    <symbol id="i-query-api" viewBox="0 0 48 48">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <circle cx="16" cy="20" r="4" fill="none" stroke="#2563EB" stroke-width="1.5"/>
      <path d="M19 23 L25 29" stroke="#2563EB" stroke-width="1.5"/>
      <rect x="28" y="16" width="12" height="2" fill="#93C5FD" rx="1"/>
      <rect x="28" y="20" width="10" height="2" fill="#DBEAFE" rx="1"/>
      <rect x="28" y="24" width="8" height="2" fill="#DBEAFE" rx="1"/>
    </symbol>
    
    <symbol id="i-clients" viewBox="0 0 48 48">
      <circle cx="24" cy="16" r="7" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <path d="M10 36c6-8 22-8 28 0" fill="#E3F2FD" stroke="#2563EB" stroke-width="2"/>
      <circle cx="16" cy="12" r="4" fill="#DBEAFE" stroke="#2563EB" stroke-width="1"/>
      <circle cx="32" cy="12" r="4" fill="#DBEAFE" stroke="#2563EB" stroke-width="1"/>
    </symbol>
    
    <symbol id="i-firehose" viewBox="0 0 48 48">
      <rect x="4" y="16" width="40" height="16" rx="3" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <path d="M10 22 L38 22 M10 26 L38 26" stroke="#10B981" stroke-width="1.5"/>
      <circle cx="12" cy="24" r="2" fill="#10B981"/>
      <circle cx="24" cy="24" r="2" fill="#10B981"/>
      <circle cx="36" cy="24" r="2" fill="#10B981"/>
    </symbol>
    
    <symbol id="i-s3" viewBox="0 0 48 48">
      <path d="M6 16h36l-4 20H10z" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="6" y="12" width="36" height="6" fill="#E8F5E9" stroke="#10B981" stroke-width="1.5"/>
      <circle cx="14" cy="15" r="1.5" fill="#10B981"/>
      <circle cx="20" cy="15" r="1.5" fill="#10B981"/>
      <circle cx="26" cy="15" r="1.5" fill="#10B981"/>
    </symbol>
    
    <symbol id="i-dax" viewBox="0 0 48 48">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#fff" stroke="#F59E0B" stroke-width="2"/>
      <rect x="6" y="16" width="36" height="4" fill="#F59E0B" rx="2"/>
      <rect x="6" y="23" width="36" height="4" fill="#FCD34D" rx="2"/>
      <rect x="6" y="30" width="36" height="4" fill="#FEF3C7" rx="2"/>
      <circle cx="12" cy="18" r="1.5" fill="#fff"/>
      <circle cx="12" cy="25" r="1.5" fill="#fff"/>
      <circle cx="12" cy="32" r="1.5" fill="#fff"/>
    </symbol>
    
    <symbol id="i-cloudwatch" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="18" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <circle cx="24" cy="24" r="14" fill="#E8F5E9"/>
      <path d="M24 14 L24 24 L32 28" stroke="#10B981" stroke-width="2" stroke-linecap="round"/>
      <circle cx="24" cy="24" r="2" fill="#10B981"/>
    </symbol>
    
    <symbol id="i-kms" viewBox="0 0 48 48">
      <rect x="12" y="22" width="24" height="20" rx="4" fill="#fff" stroke="#F59E0B" stroke-width="2"/>
      <path d="M18 22 L18 14 Q18 8 24 8 Q30 8 30 14 L30 22" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="24" cy="32" r="3" fill="#F59E0B"/>
      <rect x="22.5" y="34" width="3" height="6" fill="#F59E0B" rx="1.5"/>
    </symbol>
  </defs>

  <style>
    .title { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 16px; font-weight: 600; text-anchor: middle; fill: #1F2937; }
    .label { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 13px; font-weight: 500; text-anchor: middle; fill: #374151; }
    .sublabel { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 11px; text-anchor: middle; fill: #6B7280; }
    .flow-primary { fill: none; stroke: #2563EB; stroke-width: 2.5; marker-end: url(#primaryArrow); }
    .flow-aux { fill: none; stroke: #10B981; stroke-width: 2.5; stroke-dasharray: 6 3; marker-end: url(#auxArrow); }
    .flow-encrypt { fill: none; stroke: #F59E0B; stroke-width: 2; stroke-dasharray: 4 2; marker-end: url(#encryptArrow); }
    .container { fill: none; stroke: #D1D5DB; stroke-width: 1.5; stroke-dasharray: 8 4; }
    .zone-primary { fill: url(#coreGradient); stroke: #2563EB; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-archive { fill: url(#archiveGradient); stroke: #10B981; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-cache { fill: url(#cacheGradient); stroke: #F59E0B; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
  </style>

  <!-- AWS Cloud Container -->
  <rect x="50" y="50" width="1500" height="700" fill="url(#awsGradient)" stroke="#FF9900" stroke-width="2" rx="16" filter="url(#cardShadow)"/>
  <text class="title" x="800" y="75" fill="#FF9900">AWS Cloud</text>

  <!-- VPC Container -->
  <rect x="90" y="100" width="1420" height="620" fill="url(#vpcGradient)" class="container" rx="12"/>
  <text class="title" x="800" y="125" fill="#2563EB">Virtual Private Cloud</text>

  <!-- Data Processing Zone -->
  <rect x="130" y="150" width="1340" height="140" class="zone-primary"/>
  <text class="label" x="210" y="175" fill="#2563EB">Core Data Pipeline</text>

  <!-- Archive Zone -->
  <rect x="580" y="340" width="360" height="140" class="zone-archive"/>
  <text class="label" x="660" y="365" fill="#10B981">Data Archival</text>

  <!-- Cache Zone -->
  <rect x="1100" y="340" width="220" height="140" class="zone-cache"/>
  <text class="label" x="1210" y="320" fill="#F59E0B">Caching Layer</text>

  <!-- Core Pipeline Components -->
  <g transform="translate(170, 190)" filter="url(#iconShadow)">
    <use href="#i-sources" width="60" height="60"/>
    <text class="label" x="30" y="80">Data Sources</text>
    <text class="sublabel" x="30" y="92">External APIs</text>
  </g>

  <g transform="translate(320, 190)" filter="url(#iconShadow)">
    <use href="#i-api" width="60" height="60"/>
    <text class="label" x="30" y="80">Ingestion API</text>
    <text class="sublabel" x="30" y="92">Rate Limited</text>
  </g>

  <g transform="translate(480, 185)" filter="url(#iconShadow)">
    <use href="#i-kinesis" width="70" height="70"/>
    <text class="label" x="35" y="90">Kinesis Streams</text>
    <text class="sublabel" x="35" y="102">Real-time Buffer</text>
  </g>

  <g transform="translate(680, 190)" filter="url(#iconShadow)">
    <use href="#i-eks" width="60" height="60"/>
    <text class="label" x="30" y="80">EKS Cluster</text>
    <text class="sublabel" x="30" y="92">Processing</text>
  </g>

  <g transform="translate(860, 185)" filter="url(#iconShadow)">
    <use href="#i-dynamodb" width="70" height="70"/>
    <text class="label" x="35" y="90">DynamoDB</text>
    <text class="sublabel" x="35" y="102">NoSQL Database</text>
  </g>

  <g transform="translate(1080, 190)" filter="url(#iconShadow)">
    <use href="#i-query-api" width="60" height="60"/>
    <text class="label" x="30" y="80">Query API</text>
    <text class="sublabel" x="30" y="92">REST/GraphQL</text>
  </g>

  <g transform="translate(1260, 190)" filter="url(#iconShadow)">
    <use href="#i-clients" width="60" height="60"/>
    <text class="label" x="30" y="80">Client Apps</text>
    <text class="sublabel" x="30" y="92">Web & Mobile</text>
  </g>

  <!-- Archive Components -->
  <g transform="translate(620, 380)" filter="url(#iconShadow)">
    <use href="#i-firehose" width="60" height="60"/>
    <text class="label" x="30" y="80">Kinesis Firehose</text>
    <text class="sublabel" x="30" y="92">Batch Delivery</text>
  </g>

  <g transform="translate(800, 380)" filter="url(#iconShadow)">
    <use href="#i-s3" width="60" height="60"/>
    <text class="label" x="30" y="80">S3 Data Lake</text>
    <text class="sublabel" x="30" y="92">Long-term Storage</text>
  </g>

  <!-- Cache Component -->
  <g transform="translate(1140, 380)" filter="url(#iconShadow)">
    <use href="#i-dax" width="60" height="60"/>
    <text class="label" x="30" y="80">DynamoDB DAX</text>
    <text class="sublabel" x="30" y="92">Microsecond Latency</text>
  </g>

  <!-- Support Services -->
  <g transform="translate(380, 540)" filter="url(#iconShadow)">
    <use href="#i-cloudwatch" width="60" height="60"/>
    <text class="label" x="30" y="80">CloudWatch</text>
    <text class="sublabel" x="30" y="92">Monitoring & Logs</text>
  </g>

  <g transform="translate(980, 540)" filter="url(#iconShadow)">
    <use href="#i-kms" width="60" height="60"/>
    <text class="label" x="30" y="80">AWS KMS</text>
    <text class="sublabel" x="30" y="92">Encryption Keys</text>
  </g>

  <!-- Primary Data Flow -->
  <path d="M230,220 L320,220" class="flow-primary"/>
  <path d="M380,220 L480,220" class="flow-primary"/>
  <path d="M550,220 L680,220" class="flow-primary"/>
  <path d="M740,220 L860,220" class="flow-primary"/>
  <path d="M930,220 L1080,220" class="flow-primary"/>
  <path d="M1140,220 L1260,220" class="flow-primary"/>

  <!-- Archive Branch -->
  <path d="M515,255 L515,340 L620,340 L620,380" class="flow-aux"/>
  <path d="M680,410 L800,410" class="flow-aux"/>

  <!-- Cache Branch -->
  <path d="M895,255 L895,340 L1140,340 L1140,380" class="flow-aux"/>

  <!-- Encryption Lines -->
  <path d="M1010,540 L895,255" class="flow-encrypt"/>
  <path d="M1010,540 L515,255" class="flow-encrypt"/>
  <path d="M1010,540 L830,410" class="flow-encrypt"/>

  <!-- Flow Labels -->
  <text class="sublabel" x="275" y="210" fill="#2563EB">HTTP/JSON</text>
  <text class="sublabel" x="430" y="210" fill="#2563EB">Stream</text>
  <text class="sublabel" x="615" y="210" fill="#2563EB">Process</text>
  <text class="sublabel" x="800" y="210" fill="#2563EB">Store</text>
  <text class="sublabel" x="1010" y="210" fill="#2563EB">Query</text>
  <text class="sublabel" x="1200" y="210" fill="#2563EB">Response</text>

  <!-- Performance Indicators -->
  <circle cx="390" cy="170" r="6" fill="#10B981"/>
  <text class="sublabel" x="445" y="175" fill="#10B981">High Throughput</text>
  
  <circle cx="788" cy="170" r="6" fill="#F59E0B"/>
  <text class="sublabel" x="825" y="175" fill="#F59E0B">Low Latency</text>
</svg>`
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
    ],
    architectureSvg: undefined
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

        {/* Architecture Diagram Section */}
        <div className="mb-8 sm:mb-12">
          <Card className="bg-white border-gray-100 overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">System Architecture</h2>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                {project.architectureSvg ? (
                  <ArchitectureDiagram svgString={project.architectureSvg} />
                ) : (
                  <div className="flex items-center justify-center h-96 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
                    <div className="text-center">
                      <Server className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-lg font-medium text-gray-600 mb-2">Architecture Diagram</p>
                      <p className="text-sm text-gray-500">Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
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