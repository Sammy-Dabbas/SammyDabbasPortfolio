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
    subtitle: "Production SPA • University Project",
    description: "React SPA managing 200+ lab items with Microsoft OAuth (@ucf.edu), QR camera scanning, and Firebase. Reduced check-in/out by ~10 seconds through serverless architecture and real-time updates.",
    detailedDescription: "Production React SPA for UCF MCPL Lab managing 200+ items with Microsoft OAuth (@ucf.edu only), QR workflows, and Firebase BaaS. Features include QR camera scanning for instant identification, reservation system with conflict detection, Live Status Grid for checked-out items, Queue & Schedule views, admin panel, and consumables tracking. Built with React Router v6, Context API, Firestore (NoSQL + security rules), Firebase Storage, and deployed via Firebase Hosting CDN. Role-based access control enforced through custom claims and route guards.",
    status: "Production • University Project",
    statusColor: "orange",
    technologies: ["React.js", "Firebase Auth", "Firestore", "Firebase Storage", "Firebase Hosting", "HTML5-QRCode", "React Router v6", "Context API", "Tailwind CSS", "DaisyUI", "Microsoft OAuth (Azure AD)", "CRACO", "PostCSS"],
    githubUrl: "https://github.com/Sammy-Dabbas/ucf-lab-inventory",
    icon: Database,
    iconGradient: "from-green-500 to-teal-500",
    timeline: "3 months",
    teamSize: "Solo Project",
    highlights: [
      "Reduced check-in/out time by ~10 seconds per transaction",
      "Production SPA managing 200+ items with serverless Firebase",
      "Microsoft OAuth with @ucf.edu domain restriction",
      "Real-time Live Status Grid and Queue/Schedule views",
      "QR camera scanning for instant item identification"
    ],
    features: [
      "Microsoft OAuth with @ucf.edu restriction and popup sign-in",
      "QR code generation and HTML5-QRCode camera scanning",
      "Reservation system with conflict detection and batch creation",
      "Live Status Grid showing checked-out items in real-time",
      "Queue & Schedule views for upcoming reservations",
      "Admin Panel for student and inventory management",
      "Consumables tracking with usage history",
      "Guide editor with versioning",
      "Search and filter with Firestore composite indexes",
      "Role-based routing with ProtectedRoute and AdminRoute",
      "Firestore security rules for access control",
      "Firebase Hosting CDN with SPA rewrites"
    ],
    challenges: [
      "Configuring Azure AD OAuth with Firebase and @ucf.edu restrictions",
      "HTML5-QRCode cross-browser compatibility and camera permissions",
      "Designing and deploying Firestore composite indexes",
      "Real-time conflict detection for concurrent reservations",
      "Role-based security with custom claims and security rules",
      "React Router v6 migration and protected route patterns",
      "Firebase Storage rules and path-based access control",
      "QR scanning UX in varied lighting and code conditions"
    ],
    learnings: [
      "Firebase ecosystem: Auth, Firestore, Storage, Hosting",
      "Microsoft OAuth with Azure AD integration",
      "HTML5-QRCode library and camera stream handling",
      "Firestore data modeling and composite indexes",
      "React Context API for global state management",
      "Firestore security rules DSL and role-based access",
      "Tailwind CSS + DaisyUI with CRACO build pipeline",
      "React Router v6 protected route patterns",
      "SPA deployment with Firebase Hosting",
      "Real-time UX with optimistic updates"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="950" viewBox="0 0 1600 950">
  <defs>
    <linearGradient id="ucfOrangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F97316;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#EA580C;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="ucfBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="ucfGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="ucfYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FBBF24;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F59E0B;stop-opacity:1" />
    </linearGradient>

    <filter id="ucfShadow">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#000" flood-opacity="0.15"/>
    </filter>

    <marker id="ucfArrowBlue" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#3B82F6" />
    </marker>

    <marker id="ucfArrowOrange" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#F97316" />
    </marker>

    <marker id="ucfArrowGreen" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#10B981" />
    </marker>
  </defs>

  <style>
    .ucf-title { font: 700 24px 'Segoe UI', sans-serif; fill: #1F2937; }
    .ucf-section-title { font: 600 16px 'Segoe UI', sans-serif; fill: #374151; }
    .ucf-layer-title { font: 600 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .ucf-label { font: 500 13px 'Segoe UI', sans-serif; fill: #1F2937; }
    .ucf-sublabel { font: 400 11px 'Segoe UI', sans-serif; fill: #6B7280; }
    .ucf-metric-label { font: 600 12px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .ucf-metric-value { font: 700 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
  </style>

  <!-- Background -->
  <rect width="1600" height="950" fill="#F9FAFB"/>

  <!-- Title -->
  <text x="800" y="40" text-anchor="middle" class="ucf-title">UCF Lab Inventory System - Firebase BaaS Architecture</text>

  <!-- Layer 1: Client (React SPA) -->
  <rect x="80" y="90" width="700" height="220" rx="12" fill="url(#ucfBlueGrad)" filter="url(#ucfShadow)"/>
  <text x="430" y="115" text-anchor="middle" class="ucf-layer-title">React SPA (Client)</text>

  <rect x="110" y="145" width="150" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="185" y="170" text-anchor="middle" class="ucf-label">React Components</text>
  <text x="185" y="188" text-anchor="middle" class="ucf-sublabel">Dashboard</text>
  <text x="185" y="203" text-anchor="middle" class="ucf-sublabel">Items List</text>
  <text x="185" y="218" text-anchor="middle" class="ucf-sublabel">My Reservations</text>
  <text x="185" y="233" text-anchor="middle" class="ucf-sublabel">Admin Panel</text>
  <text x="185" y="248" text-anchor="middle" class="ucf-sublabel">Guide Editor</text>
  <text x="185" y="263" text-anchor="middle" class="ucf-sublabel">Queue &amp; Schedule</text>

  <rect x="290" y="145" width="150" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="365" y="170" text-anchor="middle" class="ucf-label">Routing &amp; State</text>
  <text x="365" y="188" text-anchor="middle" class="ucf-sublabel">React Router v6</text>
  <text x="365" y="203" text-anchor="middle" class="ucf-sublabel">ProtectedRoute</text>
  <text x="365" y="218" text-anchor="middle" class="ucf-sublabel">AdminRoute</text>
  <text x="365" y="233" text-anchor="middle" class="ucf-sublabel">Context API</text>
  <text x="365" y="248" text-anchor="middle" class="ucf-sublabel">AuthContext</text>
  <text x="365" y="263" text-anchor="middle" class="ucf-sublabel">Navigate redirects</text>

  <rect x="470" y="145" width="280" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="610" y="170" text-anchor="middle" class="ucf-label">QR Workflows</text>
  <text x="530" y="193" text-anchor="start" class="ucf-sublabel">• QR Generator: printable item labels</text>
  <text x="530" y="208" text-anchor="start" class="ucf-sublabel">• HTML5-QRCode: camera scanning</text>
  <text x="530" y="223" text-anchor="start" class="ucf-sublabel">• Decode-to-action routing</text>
  <text x="530" y="238" text-anchor="start" class="ucf-sublabel">• Checkout/checkin modals</text>
  <text x="530" y="253" text-anchor="start" class="ucf-sublabel">• Instant item identification</text>
  <text x="530" y="268" text-anchor="start" class="ucf-sublabel">• Error recovery for blurry codes</text>

  <!-- Layer 2: Firebase Auth (Microsoft OAuth) -->
  <rect x="840" y="90" width="680" height="220" rx="12" fill="url(#ucfOrangeGrad)" filter="url(#ucfShadow)"/>
  <text x="1180" y="115" text-anchor="middle" class="ucf-layer-title">Firebase Authentication</text>

  <rect x="870" y="145" width="280" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1010" y="170" text-anchor="middle" class="ucf-label">Microsoft OAuth (Azure AD)</text>
  <text x="920" y="193" text-anchor="start" class="ucf-sublabel">• OAuthProvider('microsoft.com')</text>
  <text x="920" y="208" text-anchor="start" class="ucf-sublabel">• @ucf.edu domain restriction</text>
  <text x="920" y="223" text-anchor="start" class="ucf-sublabel">• Popup sign-in flow</text>
  <text x="920" y="238" text-anchor="start" class="ucf-sublabel">• onAuthStateChanged listener</text>
  <text x="920" y="253" text-anchor="start" class="ucf-sublabel">• Tenant configuration (Azure)</text>
  <text x="920" y="268" text-anchor="start" class="ucf-sublabel">• Redirect URIs: firebaseapp.com</text>

  <rect x="1180" y="145" width="310" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1335" y="170" text-anchor="middle" class="ucf-label">Role-Based Access Control</text>
  <text x="1230" y="193" text-anchor="start" class="ucf-sublabel">• Custom claims (admin/user role)</text>
  <text x="1230" y="208" text-anchor="start" class="ucf-sublabel">• Firestore user profiles (users/{uid})</text>
  <text x="1230" y="223" text-anchor="start" class="ucf-sublabel">• isAdmin() check in AuthContext</text>
  <text x="1230" y="238" text-anchor="start" class="ucf-sublabel">• Admin-only UI components</text>
  <text x="1230" y="253" text-anchor="start" class="ucf-sublabel">• Email/password fallback (hidden)</text>
  <text x="1230" y="268" text-anchor="start" class="ucf-sublabel">• Session persistence</text>

  <!-- Layer 3: Firestore &amp; Storage -->
  <rect x="80" y="360" width="1440" height="240" rx="12" fill="url(#ucfGreenGrad)" filter="url(#ucfShadow)"/>
  <text x="800" y="385" text-anchor="middle" class="ucf-layer-title">Firebase Firestore &amp; Storage</text>

  <rect x="110" y="410" width="240" height="165" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="230" y="435" text-anchor="middle" class="ucf-label">Firestore Collections</text>
  <text x="150" y="458" text-anchor="start" class="ucf-sublabel">• items: 200+ lab equipment</text>
  <text x="150" y="473" text-anchor="start" class="ucf-sublabel">• reservations: booking records</text>
  <text x="150" y="488" text-anchor="start" class="ucf-sublabel">• users: profiles &amp; roles</text>
  <text x="150" y="503" text-anchor="start" class="ucf-sublabel">• consumables_usage: logs</text>
  <text x="150" y="518" text-anchor="start" class="ucf-sublabel">• guides: versioned docs</text>
  <text x="150" y="533" text-anchor="start" class="ucf-sublabel">• Real-time listeners</text>
  <text x="150" y="548" text-anchor="start" class="ucf-sublabel">• Conflict detection queries</text>

  <rect x="380" y="410" width="240" height="165" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="500" y="435" text-anchor="middle" class="ucf-label">Composite Indexes</text>
  <text x="420" y="458" text-anchor="start" class="ucf-sublabel">• status + orderBy timestamp</text>
  <text x="420" y="473" text-anchor="start" class="ucf-sublabel">• start/end time queries</text>
  <text x="420" y="488" text-anchor="start" class="ucf-sublabel">• firestore.indexes.json</text>
  <text x="420" y="503" text-anchor="start" class="ucf-sublabel">• Query optimization</text>
  <text x="420" y="518" text-anchor="start" class="ucf-sublabel">• Batch operations</text>
  <text x="420" y="533" text-anchor="start" class="ucf-sublabel">• Transactions for reservations</text>
  <text x="420" y="548" text-anchor="start" class="ucf-sublabel">• Live Status Grid indexes</text>

  <rect x="650" y="410" width="240" height="165" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="770" y="435" text-anchor="middle" class="ucf-label">Security Rules</text>
  <text x="690" y="458" text-anchor="start" class="ucf-sublabel">• Role-based read/write</text>
  <text x="690" y="473" text-anchor="start" class="ucf-sublabel">• User-scoped reservations</text>
  <text x="690" y="488" text-anchor="start" class="ucf-sublabel">• Admin-only item writes</text>
  <text x="690" y="503" text-anchor="start" class="ucf-sublabel">• Ownership validation</text>
  <text x="690" y="518" text-anchor="start" class="ucf-sublabel">• Custom rule functions</text>
  <text x="690" y="533" text-anchor="start" class="ucf-sublabel">• Privilege escalation prevention</text>
  <text x="690" y="548" text-anchor="start" class="ucf-sublabel">• firestore.rules DSL</text>

  <rect x="920" y="410" width="240" height="165" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1040" y="435" text-anchor="middle" class="ucf-label">Firebase Storage</text>
  <text x="960" y="458" text-anchor="start" class="ucf-sublabel">• Item images (PNG/JPG)</text>
  <text x="960" y="473" text-anchor="start" class="ucf-sublabel">• Guide documents (PDF)</text>
  <text x="960" y="488" text-anchor="start" class="ucf-sublabel">• Path-based access control</text>
  <text x="960" y="503" text-anchor="start" class="ucf-sublabel">• images/{userId}/...</text>
  <text x="960" y="518" text-anchor="start" class="ucf-sublabel">• CDN URLs</text>
  <text x="960" y="533" text-anchor="start" class="ucf-sublabel">• Size/type restrictions</text>
  <text x="960" y="548" text-anchor="start" class="ucf-sublabel">• storage.rules enforcement</text>

  <rect x="1190" y="410" width="300" height="165" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1340" y="435" text-anchor="middle" class="ucf-label">Core Features</text>
  <text x="1230" y="458" text-anchor="start" class="ucf-sublabel">• Live Status Grid (checked-out items)</text>
  <text x="1230" y="473" text-anchor="start" class="ucf-sublabel">• Queue &amp; Schedule (upcoming reservations)</text>
  <text x="1230" y="488" text-anchor="start" class="ucf-sublabel">• Batch reservation creation</text>
  <text x="1230" y="503" text-anchor="start" class="ucf-sublabel">• Consumables usage tracking</text>
  <text x="1230" y="518" text-anchor="start" class="ucf-sublabel">• Student management (CSV ops)</text>
  <text x="1230" y="533" text-anchor="start" class="ucf-sublabel">• Admin dashboard &amp; CRUD</text>
  <text x="1230" y="548" text-anchor="start" class="ucf-sublabel">• Search/filter with status queries</text>

  <!-- Arrows -->
  <line x1="780" y1="200" x2="840" y2="200" stroke="#3B82F6" stroke-width="3" marker-end="url(#ucfArrowBlue)"/>
  <text x="810" y="225" text-anchor="middle" class="ucf-sublabel" fill="#3B82F6">Auth Request</text>

  <line x1="430" y1="310" x2="430" y2="360" stroke="#10B981" stroke-width="3" marker-end="url(#ucfArrowGreen)"/>
  <text x="380" y="340" text-anchor="end" class="ucf-sublabel" fill="#10B981">Data Queries</text>

  <line x1="1180" y1="310" x2="1180" y2="360" stroke="#F97316" stroke-width="3" marker-end="url(#ucfArrowOrange)"/>
  <text x="1230" y="340" text-anchor="start" class="ucf-sublabel" fill="#F97316">User Profile</text>

  <!-- Layer 4: Firebase Hosting -->
  <rect x="80" y="650" width="1440" height="110" rx="12" fill="url(#ucfYellowGrad)" filter="url(#ucfShadow)"/>
  <text x="800" y="675" text-anchor="middle" class="ucf-layer-title">Firebase Hosting (CDN)</text>

  <rect x="110" y="695" width="420" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="320" y="720" text-anchor="middle" class="ucf-label">SPA Deployment: firebase deploy --only hosting</text>
  <text x="320" y="735" text-anchor="middle" class="ucf-sublabel">public: build | rewrites: /index.html fallback</text>

  <rect x="560" y="695" width="480" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="800" y="720" text-anchor="middle" class="ucf-label">Production Domains &amp; OAuth URIs</text>
  <text x="800" y="735" text-anchor="middle" class="ucf-sublabel">ucf-lab-inventory.firebaseapp.com • ucf-lab-inventory.web.app</text>

  <rect x="1070" y="695" width="420" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1280" y="720" text-anchor="middle" class="ucf-label">Build Pipeline: CRA + CRACO</text>
  <text x="1280" y="735" text-anchor="middle" class="ucf-sublabel">Tailwind CSS • DaisyUI • PostCSS optimization</text>

  <!-- Performance Metrics Section -->
  <rect x="80" y="800" width="1440" height="110" rx="12" fill="#1F2937" filter="url(#ucfShadow)"/>
  <text x="800" y="830" text-anchor="middle" fill="#FFFFFF" style="font: 600 16px 'Segoe UI', sans-serif;">System Performance &amp; Impact</text>

  <rect x="120" y="850" width="280" height="45" rx="8" fill="#F97316"/>
  <text x="260" y="870" text-anchor="middle" class="ucf-metric-label">Transaction Speed</text>
  <text x="260" y="887" text-anchor="middle" class="ucf-metric-value">~10s faster check-in/out</text>

  <rect x="430" y="850" width="280" height="45" rx="8" fill="#3B82F6"/>
  <text x="570" y="870" text-anchor="middle" class="ucf-metric-label">Inventory Scale</text>
  <text x="570" y="887" text-anchor="middle" class="ucf-metric-value">200+ items managed</text>

  <rect x="740" y="850" width="280" height="45" rx="8" fill="#10B981"/>
  <text x="880" y="870" text-anchor="middle" class="ucf-metric-label">Authentication</text>
  <text x="880" y="887" text-anchor="middle" class="ucf-metric-value">Microsoft OAuth (@ucf.edu)</text>

  <rect x="1050" y="850" width="280" height="45" rx="8" fill="#FBBF24"/>
  <text x="1190" y="870" text-anchor="middle" class="ucf-metric-label">Architecture</text>
  <text x="1190" y="887" text-anchor="middle" class="ucf-metric-value">Serverless Firebase BaaS</text>

  <rect x="1360" y="850" width="160" height="45" rx="8" fill="#8B5CF6"/>
  <text x="1440" y="870" text-anchor="middle" class="ucf-metric-label">Tech Stack</text>
  <text x="1440" y="887" text-anchor="middle" class="ucf-metric-value">React • Firebase • QR</text>
</svg>`
  },
  "ad-event-processing": {
    id: "ad-event-processing",
    title: "Real-Time Ad Event Processing",
    subtitle: "Production Ready",
    description: "Enterprise-grade ad event processing system achieving 375,000-418,000 events/second with 1-2ms latency and 99.99% reliability. Built with AWS, FastAPI, Redis, and Docker orchestration with CloudWatch monitoring.",
    detailedDescription: "A high-performance real-time ad event ingestion and analytics platform designed for enterprise scale. The system processes advertising events with industry-leading performance metrics, validated through AWS CloudWatch with live monitoring. Demonstrates sustained throughput of 375K-418K events/second with sub-2ms latency, featuring Redis deduplication (zero duplicates), comprehensive CloudWatch integration, microservices architecture with 7 containerized services, and proven 99.99% system reliability. Includes scalability roadmap to 1M+ events/second with Kubernetes deployment.",
    status: "Production Ready",
    statusColor: "green",
    technologies: ["Python", "FastAPI", "Redis", "AWS Kinesis", "DynamoDB", "CloudWatch", "Docker", "Docker Compose", "asyncio"],
    githubUrl: "https://github.com/Sammy-Dabbas/ad-processing-pipeline",
    icon: Zap,
    iconGradient: "from-blue-500 to-indigo-500",
    timeline: "4 months",
    teamSize: "Solo Project",
    highlights: [
      "Achieved 375K-418K events/second sustained throughput validated via AWS CloudWatch",
      "Sub-2ms processing latency with 99.99% system reliability over 45-minute test",
      "Zero-duplicate guarantee through Redis SET operations with pipeline batching (50x speedup)",
      "7-service microservices architecture: 25 concurrent workers with auto-scaling capability",
      "Production-grade AWS monitoring with 6 CloudWatch alerts and real-time dashboard"
    ],
    features: [
      "AWS Kinesis Data Streams: Real-time event ingestion with scalable shard architecture",
      "Redis caching layer: Sub-millisecond deduplication with pipeline batching, LRU eviction, AOF persistence",
      "DynamoDB persistence: Partition key + sort key schema with 2 GSIs for flexible querying",
      "7 containerized services: API, 4 consumers, generator, Redis with Docker Compose orchestration",
      "AWS CloudWatch integration: Custom metrics, 6 production alerts, real-time performance dashboard",
      "FastAPI REST API: Real-time analytics endpoints with interactive Chart.js dashboard",
      "Performance optimization: 25 concurrent workers, connection pooling, batch processing (1000 events/batch)",
      "Monitoring metrics: Events/sec, latency (P50/P95/P99), reliability, error rate, resource utilization",
      "Scalability roadmap: 1M+ events/sec with EKS cluster, 200 instances, 30-node Redis cluster",
      "Security: IAM least-privilege, input validation, rate limiting, DynamoDB encryption at rest"
    ],
    challenges: [
      "Achieving sub-2ms latency at 375K-418K events/second sustained throughput",
      "Implementing zero-duplicate guarantee with Redis SET operations and atomic transactions",
      "Optimizing Redis performance: Pipeline batching achieved 50x throughput improvement",
      "Designing fault-tolerant microservices with graceful shutdown, health checks, and auto-restart",
      "AWS CloudWatch integration: Custom metrics namespace with dimensional data and alert configuration",
      "Resource optimization: Container memory limits and CPU constraints for predictable performance",
      "Scaling architecture: Planning path from current 375K to 1M+ events/second with Kubernetes",
      "Testing at scale: Performance validation through rigorous 45-minute sustained load testing"
    ],
    learnings: [
      "Batching is critical: Single operations vs batch processing = 50x performance difference",
      "AWS CloudWatch integration: Monitoring from day 1 enabled rapid debugging and validation",
      "Async/await pattern: Non-blocking I/O throughout the stack for maximum throughput",
      "Resource limits matter: Container memory/CPU limits prevent cascade failures",
      "Testing at scale: Only real load testing (375K+ eps) reveals bottlenecks",
      "Redis optimization: Pipeline batching, connection pooling, LRU eviction for sub-ms latency",
      "Microservices architecture: Service isolation with Docker Compose for independent scaling",
      "AWS infrastructure decisions: Kinesis vs Kafka, DynamoDB vs RDS, managed services trade-offs",
      "Production operational practices: Health checks, graceful shutdown, auto-restart mechanisms",
      "Scalability planning: Clear migration path from Docker Compose to Kubernetes for 1M+ eps"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="850" viewBox="0 0 1600 850"> 
  <defs>
    <!-- Gradients -->
    <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#DBEAFE;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#BFDBFE;stop-opacity:0.3" />
    </linearGradient>

    <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D1FAE5;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#A7F3D0;stop-opacity:0.3" />
    </linearGradient>

    <linearGradient id="yellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FEF3C7;stop-opacity:0.8" />
      <stop offset="100%" style="stop-color:#FDE68A;stop-opacity:0.3" />
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="cardShadow">
      <feDropShadow dx="0" dy="2" stdDeviation="3" flood-opacity="0.1"/>
    </filter>

    <!-- Arrow marker -->
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#2563EB" />
    </marker>
  </defs>

  <!-- Styles -->
  <style>
    .card-title { font-family: system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #1F2937; }
    .card-label { font-family: system-ui, sans-serif; font-size: 11px; fill: #6B7280; }
    .section-title { font-family: system-ui, sans-serif; font-size: 18px; font-weight: 700; fill: #111827; }
    .flow-label { font-family: system-ui, sans-serif; font-size: 10px; fill: #2563EB; font-weight: 500; }
  </style>

  <!-- Background -->
  <rect width="1600" height="850" fill="#F9FAFB"/>

  <!-- Title -->
  <text class="section-title" x="800" y="40" text-anchor="middle">Real-Time Ad Event Processing Architecture</text>
  <text class="card-label" x="800" y="60" text-anchor="middle">375K-418K events/sec • Sub-2ms latency • 99.99% reliability • AWS CloudWatch validated</text>

  <!-- Layer 1: Event Sources -->
  <g id="sources">
    <rect x="80" y="120" width="200" height="140" rx="12" fill="url(#blueGrad)" stroke="#2563EB" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="180" y="150" text-anchor="middle">Event Sources</text>
    <text class="card-label" x="180" y="175" text-anchor="middle">External APIs</text>
    <text class="card-label" x="180" y="195" text-anchor="middle">Impressions</text>
    <text class="card-label" x="180" y="210" text-anchor="middle">Clicks</text>
    <text class="card-label" x="180" y="225" text-anchor="middle">Conversions</text>
  </g>

  <!-- Layer 2: Ingestion -->
  <g id="ingestion">
    <rect x="340" y="120" width="200" height="140" rx="12" fill="url(#blueGrad)" stroke="#2563EB" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="440" y="150" text-anchor="middle">AWS Kinesis</text>
    <text class="card-label" x="440" y="175" text-anchor="middle">Data Streams</text>
    <text class="card-label" x="440" y="195" text-anchor="middle">Scalable shards</text>
    <text class="card-label" x="440" y="210" text-anchor="middle">Real-time buffer</text>
    <text class="card-label" x="440" y="225" text-anchor="middle">Batch: 50 pages/call</text>
  </g>

  <!-- Layer 3: Processing -->
  <g id="processing">
    <rect x="600" y="120" width="200" height="140" rx="12" fill="url(#greenGrad)" stroke="#10B981" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="700" y="150" text-anchor="middle">Event Processors</text>
    <text class="card-label" x="700" y="175" text-anchor="middle">Docker Containers</text>
    <text class="card-label" x="700" y="195" text-anchor="middle">25 concurrent workers</text>
    <text class="card-label" x="700" y="210" text-anchor="middle">FastAPI services</text>
    <text class="card-label" x="700" y="225" text-anchor="middle">Async/await</text>
  </g>

  <!-- Layer 4: Cache -->
  <g id="cache">
    <rect x="860" y="120" width="200" height="140" rx="12" fill="url(#yellowGrad)" stroke="#F59E0B" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="960" y="150" text-anchor="middle">Redis Cache</text>
    <text class="card-label" x="960" y="175" text-anchor="middle">Deduplication</text>
    <text class="card-label" x="960" y="195" text-anchor="middle">Pipeline batching</text>
    <text class="card-label" x="960" y="210" text-anchor="middle">50x speedup</text>
    <text class="card-label" x="960" y="225" text-anchor="middle">Zero duplicates</text>
  </g>

  <!-- Layer 5: Storage -->
  <g id="storage">
    <rect x="1120" y="120" width="200" height="140" rx="12" fill="url(#blueGrad)" stroke="#2563EB" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="1220" y="150" text-anchor="middle">DynamoDB</text>
    <text class="card-label" x="1220" y="175" text-anchor="middle">NoSQL persistence</text>
    <text class="card-label" x="1220" y="195" text-anchor="middle">Partition + Sort keys</text>
    <text class="card-label" x="1220" y="210" text-anchor="middle">2 GSIs</text>
    <text class="card-label" x="1220" y="225" text-anchor="middle">Batch writes</text>
  </g>

  <!-- Layer 6: API -->
  <g id="api">
    <rect x="1380" y="120" width="180" height="140" rx="12" fill="url(#greenGrad)" stroke="#10B981" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="1470" y="150" text-anchor="middle">Analytics API</text>
    <text class="card-label" x="1470" y="175" text-anchor="middle">FastAPI</text>
    <text class="card-label" x="1470" y="195" text-anchor="middle">Real-time metrics</text>
    <text class="card-label" x="1470" y="210" text-anchor="middle">Chart.js dashboard</text>
  </g>

  <!-- Monitoring Layer -->
  <g id="monitoring">
    <rect x="340" y="320" width="980" height="120" rx="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="830" y="350" text-anchor="middle">AWS CloudWatch Monitoring</text>
    <text class="card-label" x="500" y="380" text-anchor="middle">Custom metrics</text>
    <text class="card-label" x="680" y="380" text-anchor="middle">6 production alerts</text>
    <text class="card-label" x="860" y="380" text-anchor="middle">P50/P95/P99 latency</text>
    <text class="card-label" x="1060" y="380" text-anchor="middle">Real-time dashboard</text>
    <text class="card-label" x="830" y="405" text-anchor="middle">Events/sec • Latency • Reliability • Error rate • Resource utilization • Business metrics</text>
  </g>

  <!-- Data Flow Arrows -->
  <path d="M280,190 L340,190" stroke="#2563EB" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text class="flow-label" x="310" y="180">Stream</text>

  <path d="M540,190 L600,190" stroke="#2563EB" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text class="flow-label" x="570" y="180">Process</text>

  <path d="M800,190 L860,190" stroke="#2563EB" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text class="flow-label" x="830" y="180">Dedupe</text>

  <path d="M1060,190 L1120,190" stroke="#2563EB" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text class="flow-label" x="1090" y="180">Store</text>

  <path d="M1320,190 L1380,190" stroke="#2563EB" stroke-width="3" fill="none" marker-end="url(#arrow)"/>
  <text class="flow-label" x="1350" y="180">Query</text>

  <!-- Monitoring connections -->
  <path d="M440,260 L440,320" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
  <path d="M700,260 L700,320" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
  <path d="M960,260 L960,320" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5" fill="none"/>
  <path d="M1220,260 L1220,320" stroke="#F59E0B" stroke-width="2" stroke-dasharray="5,5" fill="none"/>

  <!-- Performance Metrics -->
  <rect x="80" y="480" width="1480" height="140" rx="12" fill="#DBEAFE" stroke="#2563EB" stroke-width="2" filter="url(#cardShadow)"/>
  <text class="section-title" x="820" y="515" text-anchor="middle">System Performance</text>

  <text class="card-title" x="250" y="550" text-anchor="middle">Throughput</text>
  <text class="card-label" x="250" y="570" text-anchor="middle">375K-418K</text>
  <text class="card-label" x="250" y="585" text-anchor="middle">events/sec</text>

  <text class="card-title" x="520" y="550" text-anchor="middle">Latency</text>
  <text class="card-label" x="520" y="570" text-anchor="middle">Sub-2ms</text>
  <text class="card-label" x="520" y="585" text-anchor="middle">processing</text>

  <text class="card-title" x="820" y="550" text-anchor="middle">Reliability</text>
  <text class="card-label" x="820" y="570" text-anchor="middle">99.99%</text>
  <text class="card-label" x="820" y="585" text-anchor="middle">uptime</text>

  <text class="card-title" x="1120" y="550" text-anchor="middle">Architecture</text>
  <text class="card-label" x="1120" y="570" text-anchor="middle">7 services</text>
  <text class="card-label" x="1120" y="585" text-anchor="middle">25 workers</text>

  <text class="card-title" x="1390" y="550" text-anchor="middle">Deduplication</text>
  <text class="card-label" x="1390" y="570" text-anchor="middle">Zero</text>
  <text class="card-label" x="1390" y="585" text-anchor="middle">duplicates</text>

  <!-- Technology Stack -->
  <rect x="80" y="660" width="1480" height="140" rx="12" fill="#F9FAFB" stroke="#D1D5DB" stroke-width="2" filter="url(#cardShadow)"/>
  <text class="section-title" x="820" y="695" text-anchor="middle">Technology Stack</text>

  <text class="card-title" x="200" y="730">Ingestion:</text>
  <text class="card-label" x="200" y="750">AWS Kinesis • FastAPI</text>

  <text class="card-title" x="520" y="730">Processing:</text>
  <text class="card-label" x="520" y="750">Python asyncio • 25 workers</text>

  <text class="card-title" x="840" y="730">Cache:</text>
  <text class="card-label" x="840" y="750">Redis • Pipeline batching</text>

  <text class="card-title" x="1120" y="730">Storage:</text>
  <text class="card-label" x="1120" y="750">DynamoDB • Batch writes</text>

  <text class="card-title" x="1400" y="730">Monitoring:</text>
  <text class="card-label" x="1400" y="750">AWS CloudWatch</text>
</svg>`
  },
  "gpu-training-platform": {
    id: "gpu-training-platform",
    title: "SimpleTrain GPU Training Platform",
    subtitle: "Cloud Infrastructure & ML Operations",
    description: "Production-grade CLI and API platform for GPU-accelerated ML training on Kubernetes. Reduced ML engineer setup time by 75% through automated infrastructure provisioning, unified job management, and real-time monitoring across distributed GPU clusters.",
    detailedDescription: "SimpleTrain is a comprehensive cloud infrastructure platform that democratizes access to GPU-accelerated machine learning training. Built on Kubernetes with a multi-layered architecture (CLI → REST API → K8s Control Plane → GPU Pods), it abstracts away infrastructure complexity while maintaining fine-grained control. The system features JWT-authenticated Express API gateway, Django-based user management, PostgreSQL metadata persistence, and integrated monitoring with ELK/Prometheus. Engineers submit training jobs via intuitive CLI commands (`simpletrain start`, `simpletrain logs`, `simpletrain list`), which automatically provision GPU pods with custom Docker images, manage resource allocation (CPU/GPU/memory quotas), stream real-time logs, and handle lifecycle orchestration (auto-scaling, cleanup, failure recovery). The platform supports PyTorch, TensorFlow, and custom ML frameworks with configurable presets for common training scenarios.",
    status: "In Active Development",
    statusColor: "blue",
    technologies: ["Node.js", "Express.js", "Kubernetes", "Docker", "PostgreSQL", "JWT", "Django", "@kubernetes/client-node", "WebSocket", "ELK Stack", "Prometheus", "Grafana"],
    githubUrl: "https://github.com/Sammy-Dabbas/simple-train",
    icon: Server,
    iconGradient: "from-blue-500 to-indigo-600",
    timeline: "4 months (Ongoing)",
    teamSize: "4-person Team",
    highlights: [
      "Reduced ML engineer job setup time from 30+ minutes to under 5 minutes (75% reduction)",
      "Built 6-layer cloud architecture: CLI → Express API → JWT Auth → K8s Client → Control Plane → GPU Pods",
      "Implemented real-time log streaming with WebSocket connections from distributed training pods",
      "Automated Kubernetes job lifecycle management: provisioning, monitoring, auto-scaling, and cleanup",
      "Designed secure multi-tenant system with JWT authentication and resource isolation per user"
    ],
    features: [
      "Intuitive CLI with commands: start, stop, list, logs, status, delete - zero Kubernetes knowledge required",
      "Automatic GPU pod provisioning with custom Docker image support (PyTorch, TensorFlow, custom frameworks)",
      "Real-time log streaming from training pods using WebSocket connections and Kubernetes log API",
      "RESTful API with 4 core endpoints: POST /api/jobs, GET /api/jobs, GET /api/jobs/:name/logs, DELETE /api/jobs/:name",
      "JWT-based authentication and authorization with Django user management backend",
      "PostgreSQL metadata store tracking job history, user quotas, resource usage, and training presets",
      "Configurable resource allocation: CPU cores, GPU count, memory limits, storage volumes per job",
      "Auto-scaling GPU pod deployment based on queue depth and resource availability",
      "Integrated monitoring with ELK Stack (log aggregation) and Prometheus/Grafana (metrics dashboards)",
      "Automated cleanup and resource deallocation on job completion or failure"
    ],
    challenges: [
      "Kubernetes API complexity: Mastering programmatic job creation, pod lifecycle management, and resource quota enforcement using @kubernetes/client-node library",
      "Real-time log streaming: Implementing efficient WebSocket-based log tailing from distributed pods without overwhelming the API gateway or losing log lines during network interruptions",
      "Multi-tenant security: Designing resource isolation to prevent users from accessing each other's jobs, logs, or GPU resources while maintaining shared cluster efficiency",
      "Asynchronous state management: Handling eventual consistency between Kubernetes cluster state, PostgreSQL metadata, and user-facing CLI responses during long-running training jobs",
      "Error handling and recovery: Building robust failure scenarios for pod crashes, GPU OOM errors, network timeouts, and Kubernetes control plane unavailability",
      "Docker image management: Supporting custom ML framework images while enforcing security scanning, size limits, and preventing malicious container execution",
      "Resource contention: Implementing fair scheduling and queue management when GPU demand exceeds cluster capacity",
      "Authentication flow: Integrating Django session-based auth with stateless JWT tokens for CLI-to-API communication"
    ],
    learnings: [
      "Deep expertise in Kubernetes architecture: API server internals, pod scheduling, resource quotas, deployments, services, persistent volumes, and RBAC policies",
      "Kubernetes client library (@kubernetes/client-node): Programmatic job creation, watch streams for pod events, exec API for log streaming, and batch operations",
      "JWT authentication design patterns: Token generation, refresh strategies, expiration policies, and secure storage in CLI tools",
      "Building production-grade CLI tools: Argument parsing, config file management, colorized output, progress indicators, and error reporting",
      "WebSocket protocols for real-time data streaming: Connection management, reconnection logic, backpressure handling, and graceful degradation",
      "Distributed systems concepts: Eventual consistency, state reconciliation, idempotency, retry mechanisms, and failure detection",
      "Docker and containerization: Multi-stage builds, layer optimization, security best practices, and GPU-enabled base images (CUDA, cuDNN)",
      "System observability: Structured logging (JSON logs), metrics instrumentation (Prometheus client), distributed tracing, and alerting pipelines",
      "API gateway patterns: Request routing, rate limiting, authentication middleware, error handling, and response serialization",
      "PostgreSQL schema design for metadata: Indexing strategies for job queries, JSONB for flexible metadata storage, and connection pooling for high throughput"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <linearGradient id="gpuBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="gpuIndigoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366F1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#4338CA;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="gpuGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="gpuYellowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#D97706;stop-opacity:1" />
    </linearGradient>

    <filter id="gpuShadow">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#000" flood-opacity="0.15"/>
    </filter>

    <marker id="gpuArrowBlue" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#3B82F6" />
    </marker>

    <marker id="gpuArrowGreen" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#10B981" />
    </marker>

    <marker id="gpuArrowYellow" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#F59E0B" />
    </marker>
  </defs>

  <style>
    .gpu-title { font: 700 24px 'Segoe UI', sans-serif; fill: #1F2937; }
    .gpu-section-title { font: 600 16px 'Segoe UI', sans-serif; fill: #374151; }
    .gpu-layer-title { font: 600 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .gpu-label { font: 500 13px 'Segoe UI', sans-serif; fill: #1F2937; }
    .gpu-sublabel { font: 400 11px 'Segoe UI', sans-serif; fill: #6B7280; }
    .gpu-metric-label { font: 600 12px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .gpu-metric-value { font: 700 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
  </style>

  <!-- Background -->
  <rect width="1600" height="1000" fill="#F9FAFB"/>

  <!-- Title -->
  <text x="800" y="40" text-anchor="middle" class="gpu-title">SimpleTrain GPU Training Platform Architecture</text>

  <!-- Layer 1: CLI & Client -->
  <rect x="80" y="90" width="220" height="180" rx="12" fill="url(#gpuBlueGrad)" filter="url(#gpuShadow)"/>
  <text x="190" y="115" text-anchor="middle" class="gpu-layer-title">CLI Layer</text>

  <rect x="105" y="135" width="170" height="110" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="190" y="160" text-anchor="middle" class="gpu-label">SimpleTrain CLI</text>
  <text x="190" y="178" text-anchor="middle" class="gpu-sublabel">simpletrain start</text>
  <text x="190" y="193" text-anchor="middle" class="gpu-sublabel">simpletrain logs</text>
  <text x="190" y="208" text-anchor="middle" class="gpu-sublabel">simpletrain list</text>
  <text x="190" y="223" text-anchor="middle" class="gpu-sublabel">simpletrain delete</text>

  <!-- Layer 2: API Gateway -->
  <rect x="360" y="90" width="220" height="180" rx="12" fill="url(#gpuIndigoGrad)" filter="url(#gpuShadow)"/>
  <text x="470" y="115" text-anchor="middle" class="gpu-layer-title">API Gateway</text>

  <rect x="385" y="135" width="170" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="470" y="155" text-anchor="middle" class="gpu-label">Express.js API</text>
  <text x="470" y="173" text-anchor="middle" class="gpu-sublabel">Node.js Runtime</text>

  <rect x="385" y="195" width="170" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="470" y="215" text-anchor="middle" class="gpu-label">JWT Auth</text>
  <text x="470" y="233" text-anchor="middle" class="gpu-sublabel">Token Verification</text>

  <!-- Layer 3: Authentication Service -->
  <rect x="640" y="90" width="220" height="180" rx="12" fill="url(#gpuGreenGrad)" filter="url(#gpuShadow)"/>
  <text x="750" y="115" text-anchor="middle" class="gpu-layer-title">Auth Service</text>

  <rect x="665" y="135" width="170" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="750" y="155" text-anchor="middle" class="gpu-label">Django Backend</text>
  <text x="750" y="173" text-anchor="middle" class="gpu-sublabel">User Management</text>

  <rect x="665" y="195" width="170" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="750" y="215" text-anchor="middle" class="gpu-label">PostgreSQL</text>
  <text x="750" y="233" text-anchor="middle" class="gpu-sublabel">User DB</text>

  <!-- Layer 4: Kubernetes Client -->
  <rect x="920" y="90" width="220" height="180" rx="12" fill="url(#gpuBlueGrad)" filter="url(#gpuShadow)"/>
  <text x="1030" y="115" text-anchor="middle" class="gpu-layer-title">K8s Interface</text>

  <rect x="945" y="135" width="170" height="110" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1030" y="160" text-anchor="middle" class="gpu-label">@kubernetes/client-node</text>
  <text x="1030" y="178" text-anchor="middle" class="gpu-sublabel">Job Creation</text>
  <text x="1030" y="193" text-anchor="middle" class="gpu-sublabel">Pod Management</text>
  <text x="1030" y="208" text-anchor="middle" class="gpu-sublabel">Log Streaming</text>
  <text x="1030" y="223" text-anchor="middle" class="gpu-sublabel">Resource Allocation</text>

  <!-- Layer 5: Kubernetes Control Plane -->
  <rect x="1200" y="90" width="320" height="180" rx="12" fill="url(#gpuIndigoGrad)" filter="url(#gpuShadow)"/>
  <text x="1360" y="115" text-anchor="middle" class="gpu-layer-title">Kubernetes Control Plane</text>

  <rect x="1225" y="135" width="135" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1292" y="155" text-anchor="middle" class="gpu-label">API Server</text>
  <text x="1292" y="173" text-anchor="middle" class="gpu-sublabel">Resource API</text>

  <rect x="1380" y="135" width="115" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1437" y="155" text-anchor="middle" class="gpu-label">Scheduler</text>
  <text x="1437" y="173" text-anchor="middle" class="gpu-sublabel">Pod Placement</text>

  <rect x="1225" y="195" width="135" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1292" y="215" text-anchor="middle" class="gpu-label">Controller</text>
  <text x="1292" y="233" text-anchor="middle" class="gpu-sublabel">Job Orchestration</text>

  <rect x="1380" y="195" width="115" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1437" y="215" text-anchor="middle" class="gpu-label">etcd</text>
  <text x="1437" y="233" text-anchor="middle" class="gpu-sublabel">State Store</text>

  <!-- Arrows Layer 1-5 -->
  <line x1="300" y1="180" x2="360" y2="180" stroke="#3B82F6" stroke-width="3" marker-end="url(#gpuArrowBlue)"/>
  <line x1="580" y1="180" x2="640" y2="180" stroke="#6366F1" stroke-width="3" marker-end="url(#gpuArrowBlue)"/>
  <line x1="860" y1="180" x2="920" y2="180" stroke="#10B981" stroke-width="3" marker-end="url(#gpuArrowGreen)"/>
  <line x1="1140" y1="180" x2="1200" y2="180" stroke="#3B82F6" stroke-width="3" marker-end="url(#gpuArrowBlue)"/>

  <!-- GPU Training Pods Section -->
  <rect x="80" y="320" width="1440" height="280" rx="12" fill="#DBEAFE" stroke="#3B82F6" stroke-width="2"/>
  <text x="800" y="350" text-anchor="middle" class="gpu-section-title">GPU Training Pods (Kubernetes Cluster)</text>

  <!-- Pod 1 -->
  <rect x="120" y="380" width="200" height="180" rx="10" fill="url(#gpuGreenGrad)" filter="url(#gpuShadow)"/>
  <text x="220" y="405" text-anchor="middle" class="gpu-layer-title">Training Pod 1</text>
  <rect x="140" y="420" width="160" height="45" rx="6" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="220" y="438" text-anchor="middle" class="gpu-label">PyTorch Container</text>
  <text x="220" y="453" text-anchor="middle" class="gpu-sublabel">python:3.10-cuda12.1</text>
  <rect x="140" y="475" width="160" height="70" rx="6" fill="#FEF3C7"/>
  <text x="220" y="495" text-anchor="middle" class="gpu-label">GPU Resources</text>
  <text x="220" y="510" text-anchor="middle" class="gpu-sublabel">NVIDIA A100 40GB</text>
  <text x="220" y="525" text-anchor="middle" class="gpu-sublabel">4 CPU cores</text>
  <text x="220" y="540" text-anchor="middle" class="gpu-sublabel">32GB RAM</text>

  <!-- Pod 2 -->
  <rect x="360" y="380" width="200" height="180" rx="10" fill="url(#gpuGreenGrad)" filter="url(#gpuShadow)"/>
  <text x="460" y="405" text-anchor="middle" class="gpu-layer-title">Training Pod 2</text>
  <rect x="380" y="420" width="160" height="45" rx="6" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="460" y="438" text-anchor="middle" class="gpu-label">TensorFlow Container</text>
  <text x="460" y="453" text-anchor="middle" class="gpu-sublabel">tensorflow:2.14-gpu</text>
  <rect x="380" y="475" width="160" height="70" rx="6" fill="#FEF3C7"/>
  <text x="460" y="495" text-anchor="middle" class="gpu-label">GPU Resources</text>
  <text x="460" y="510" text-anchor="middle" class="gpu-sublabel">NVIDIA V100 32GB</text>
  <text x="460" y="525" text-anchor="middle" class="gpu-sublabel">4 CPU cores</text>
  <text x="460" y="540" text-anchor="middle" class="gpu-sublabel">32GB RAM</text>

  <!-- Pod 3 -->
  <rect x="600" y="380" width="200" height="180" rx="10" fill="url(#gpuGreenGrad)" filter="url(#gpuShadow)"/>
  <text x="700" y="405" text-anchor="middle" class="gpu-layer-title">Training Pod 3</text>
  <rect x="620" y="420" width="160" height="45" rx="6" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="700" y="438" text-anchor="middle" class="gpu-label">Custom Container</text>
  <text x="700" y="453" text-anchor="middle" class="gpu-sublabel">user/custom-ml:latest</text>
  <rect x="620" y="475" width="160" height="70" rx="6" fill="#FEF3C7"/>
  <text x="700" y="495" text-anchor="middle" class="gpu-label">GPU Resources</text>
  <text x="700" y="510" text-anchor="middle" class="gpu-sublabel">NVIDIA A100 80GB</text>
  <text x="700" y="525" text-anchor="middle" class="gpu-sublabel">8 CPU cores</text>
  <text x="700" y="540" text-anchor="middle" class="gpu-sublabel">64GB RAM</text>

  <!-- Pod N (Auto-scaled) -->
  <rect x="840" y="380" width="200" height="180" rx="10" fill="url(#gpuGreenGrad)" fill-opacity="0.5" stroke="#10B981" stroke-width="3" stroke-dasharray="10,5"/>
  <text x="940" y="405" text-anchor="middle" class="gpu-layer-title" fill-opacity="0.7">Training Pod N</text>
  <text x="940" y="470" text-anchor="middle" class="gpu-label" fill-opacity="0.7">(Auto-scaled)</text>
  <text x="940" y="490" text-anchor="middle" class="gpu-sublabel" fill-opacity="0.7">Dynamically provisioned</text>
  <text x="940" y="505" text-anchor="middle" class="gpu-sublabel" fill-opacity="0.7">based on demand</text>

  <!-- Monitoring Stack -->
  <rect x="1080" y="380" width="200" height="85" rx="8" fill="url(#gpuYellowGrad)" filter="url(#gpuShadow)"/>
  <text x="1180" y="403" text-anchor="middle" class="gpu-layer-title">ELK Stack</text>
  <text x="1180" y="425" text-anchor="middle" class="gpu-sublabel" fill="#FFFFFF">Log Aggregation</text>
  <text x="1180" y="440" text-anchor="middle" class="gpu-sublabel" fill="#FFFFFF">Elasticsearch</text>
  <text x="1180" y="455" text-anchor="middle" class="gpu-sublabel" fill="#FFFFFF">Kibana Dashboards</text>

  <rect x="1320" y="380" width="200" height="85" rx="8" fill="url(#gpuYellowGrad)" filter="url(#gpuShadow)"/>
  <text x="1420" y="403" text-anchor="middle" class="gpu-layer-title">Prometheus</text>
  <text x="1420" y="425" text-anchor="middle" class="gpu-sublabel" fill="#FFFFFF">Metrics Collection</text>
  <text x="1420" y="440" text-anchor="middle" class="gpu-sublabel" fill="#FFFFFF">Grafana Visualization</text>
  <text x="1420" y="455" text-anchor="middle" class="gpu-sublabel" fill="#FFFFFF">Alert Manager</text>

  <!-- WebSocket Connections -->
  <rect x="1080" y="485" width="440" height="70" rx="8" fill="#FFFFFF" stroke="#6366F1" stroke-width="2"/>
  <text x="1300" y="510" text-anchor="middle" class="gpu-label">WebSocket Connections</text>
  <text x="1300" y="528" text-anchor="middle" class="gpu-sublabel">Real-time log streaming from pods</text>
  <text x="1300" y="543" text-anchor="middle" class="gpu-sublabel">Bidirectional communication channel</text>

  <!-- Arrows from K8s to Pods -->
  <line x1="1360" y1="270" x2="220" y2="380" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#gpuArrowBlue)" opacity="0.7"/>
  <line x1="1360" y1="270" x2="460" y2="380" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#gpuArrowBlue)" opacity="0.7"/>
  <line x1="1360" y1="270" x2="700" y2="380" stroke="#3B82F6" stroke-width="2.5" marker-end="url(#gpuArrowBlue)" opacity="0.7"/>
  <line x1="1360" y1="270" x2="940" y2="380" stroke="#3B82F6" stroke-width="2.5" stroke-dasharray="6,4" marker-end="url(#gpuArrowBlue)" opacity="0.5"/>

  <!-- Arrows from Pods to Monitoring -->
  <line x1="320" y1="470" x2="1080" y2="420" stroke="#F59E0B" stroke-width="2" marker-end="url(#gpuArrowYellow)" opacity="0.6"/>
  <line x1="560" y1="470" x2="1080" y2="430" stroke="#F59E0B" stroke-width="2" marker-end="url(#gpuArrowYellow)" opacity="0.6"/>
  <line x1="800" y1="470" x2="1320" y2="430" stroke="#F59E0B" stroke-width="2" marker-end="url(#gpuArrowYellow)" opacity="0.6"/>

  <!-- Performance Metrics Section -->
  <rect x="80" y="650" width="1440" height="130" rx="12" fill="#1F2937" filter="url(#gpuShadow)"/>
  <text x="800" y="680" text-anchor="middle" class="gpu-section-title" fill="#FFFFFF">Platform Performance Metrics</text>

  <rect x="120" y="700" width="260" height="60" rx="8" fill="#3B82F6"/>
  <text x="250" y="720" text-anchor="middle" class="gpu-metric-label">Setup Time Reduction</text>
  <text x="250" y="745" text-anchor="middle" class="gpu-metric-value">75% faster (30min → 5min)</text>

  <rect x="410" y="700" width="260" height="60" rx="8" fill="#10B981"/>
  <text x="540" y="720" text-anchor="middle" class="gpu-metric-label">CLI Commands</text>
  <text x="540" y="745" text-anchor="middle" class="gpu-metric-value">6 core operations</text>

  <rect x="700" y="700" width="260" height="60" rx="8" fill="#6366F1"/>
  <text x="830" y="720" text-anchor="middle" class="gpu-metric-label">Real-time Streaming</text>
  <text x="830" y="745" text-anchor="middle" class="gpu-metric-value">WebSocket + K8s Log API</text>

  <rect x="990" y="700" width="260" height="60" rx="8" fill="#F59E0B"/>
  <text x="1120" y="720" text-anchor="middle" class="gpu-metric-label">Security Model</text>
  <text x="1120" y="745" text-anchor="middle" class="gpu-metric-value">JWT + Multi-tenant Isolation</text>

  <rect x="1280" y="700" width="240" height="60" rx="8" fill="#8B5CF6"/>
  <text x="1400" y="720" text-anchor="middle" class="gpu-metric-label">Supported Frameworks</text>
  <text x="1400" y="745" text-anchor="middle" class="gpu-metric-value">PyTorch • TensorFlow • Custom</text>

  <!-- Technology Stack Section -->
  <rect x="80" y="820" width="1440" height="130" rx="12" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/>
  <text x="800" y="850" text-anchor="middle" class="gpu-section-title">Technology Stack</text>

  <text x="180" y="880" class="gpu-label">Backend:</text>
  <text x="180" y="900" class="gpu-sublabel">Node.js • Express.js • Django • PostgreSQL</text>
  <text x="180" y="920" class="gpu-sublabel">JWT • WebSocket • @kubernetes/client-node</text>

  <text x="700" y="880" class="gpu-label">Infrastructure:</text>
  <text x="700" y="900" class="gpu-sublabel">Kubernetes • Docker • NVIDIA GPU (A100/V100)</text>
  <text x="700" y="920" class="gpu-sublabel">CUDA 12.1 • cuDNN • Multi-stage Builds</text>

  <text x="1200" y="880" class="gpu-label">Monitoring:</text>
  <text x="1200" y="900" class="gpu-sublabel">ELK Stack (Elasticsearch/Kibana)</text>
  <text x="1200" y="920" class="gpu-sublabel">Prometheus • Grafana • AlertManager</text>
</svg>`
  },
  "portfolio-website": {
    id: "portfolio-website",
    title: "Portfolio Website",
    subtitle: "Personal Project",
    description: "Developed a responsive portfolio website using React.js and styled with Tailwind CSS. The website showcases my skills, projects, and contact information.",
    detailedDescription: "A personal portfolio website designed to highlight my skills, projects, and contact information. The website is built using React.js for dynamic content and styled with Tailwind CSS for responsive design.",
    status: "Personal Project",
    statusColor: "teal",
    technologies: ["React.js", "Tailwind CSS", "Netlify"],
    githubUrl: "https://github.com/Sammy-Dabbas/portfolio-website",
    // liveUrl: "https://sammy-dabbas.netlify.app",
    icon: ExternalLink,
    iconGradient: "from-teal-500 to-blue-500",
    timeline: "1 month",
    teamSize: "Solo Project",
    highlights: [
      "Responsive design for mobile and desktop",
      "Dynamic content with React.js",
      "Styled with Tailwind CSS",
      "Deployed on Netlify"
    ],
    features: [
      "Home page with project highlights",
      "About section with personal background",
      "Projects page with detailed descriptions",
      "Contact form for inquiries"
    ],
    challenges: [
      "Ensuring responsiveness across different devices",
      "Creating a visually appealing design",
      "Implementing smooth transitions between pages",
      "Ensuring accessibility"
    ],
    learnings: [
      "Advanced React.js state management techniques",
      "Tailwind CSS utility classes for rapid development",
      "Implementing smooth transitions with Framer Motion",
      "Building a responsive website with Tailwind CSS"
    ],
    architectureSvg: undefined
  },
  "facebook-farm-analytics": {
    id: "facebook-farm-analytics",
    title: "Facebook Farm Analytics Platform",
    subtitle: "Research Project",
    description: "Built a production-grade social media analytics system with dual-pipeline architecture. Static scraper collected historical data from 168 farms, while dynamic scraper provides real-time 54-point lifecycle tracking for 32 active farms on Raspberry Pi 5.",
    detailedDescription: "A comprehensive social media analytics platform for agricultural research, conducted under faculty supervision with a collaborative research team. Built complete data collection infrastructure including: (1) Static scraper collecting historical post data (May 2024-2025) from 168 farms across crop, dairy, meat, and value-added categories, and (2) Dynamic scraper monitoring 32 active farms via Facebook Graph API with 15-minute polling and 54-point lifecycle tracking. Deployed on Raspberry Pi 5 with automated systemd services, Flask dashboard, and Google Drive backups. The ML analytics and research insights are developed collaboratively with the research team.",
    status: "Research Project",
    statusColor: "emerald",
    technologies: ["Python", "Flask", "Facebook Graph API", "Plotly", "TextBlob", "Raspberry Pi 5", "systemd", "rclone", "Pandas", "scikit-learn"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Database,
    iconGradient: "from-emerald-500 to-green-500",
    timeline: "6+ months",
    teamSize: "Research Team (Faculty-supervised)",
    highlights: [
      "Built dual-pipeline data collection infrastructure: Static (168 farms) + Dynamic (32 farms) scrapers",
      "Designed and deployed 54-point lifecycle tracking system with adaptive sampling strategy",
      "Implemented production-grade Raspberry Pi 5 deployment with 24/7 systemd orchestration",
      "Developed automated data processing pipeline with Google Drive backup integration",
      "Contributing to collaborative ML analytics and agricultural social media research"
    ],
    features: [
      "Static Scraper (Individual): Collected historical posts (May 2024-2025) from 168 farms with full engagement metrics",
      "Dynamic Scraper (Individual): Real-time monitoring of 32 active farms via Facebook Graph API v23.0",
      "Batch API optimization (Individual): Up to 50 pages per call for efficient rate limit usage",
      "54-point lifecycle tracking (Individual): 15m intervals (first hour) → hourly (day 1) → 6-hourly (week 1) → weekly",
      "Polling system (Individual): Every 15 minutes for new post detection (avg 7-min delay)",
      "Flask web dashboard (Individual): 30-second auto-refresh for real-time monitoring",
      "Infrastructure deployment (Individual): Raspberry Pi 5 with systemd services and automated backups",
      "Data pipeline (Individual): Comprehensive organization with timeline CSVs, comments tracking, metadata JSONs",
      "Photo manager (Individual): Local image storage to avoid Facebook URL expiration",
      "ML analytics (Collaborative): Sentiment analysis, anomaly detection, performance forecasting with research team",
      "Research visualizations (Collaborative): Plotly-based engagement trends, growth curves, content analysis"
    ],
    challenges: [
      "Architecting dual-scraper system: Static (one-time 168 farms) vs Dynamic (continuous 32 farms)",
      "Managing Facebook API rate limits across both scrapers with intelligent throttling",
      "Implementing 54-point adaptive sampling schedule for comprehensive post lifecycle tracking",
      "Designing efficient batch processing to maximize API efficiency (50 pages/call)",
      "Ensuring 24/7 reliability on Raspberry Pi 5 hardware with systemd auto-restart",
      "Handling timezone consistency with UTC scheduling to prevent drift across measurements",
      "Processing and normalizing complex nested API responses into research-quality datasets",
      "Implementing robust deduplication for comments across multiple collection points",
      "Balancing real-time monitoring (15-min polling) with API usage constraints and capacity limits (35 post max)"
    ],
    learnings: [
      "Production deployment on embedded Linux systems (Raspberry Pi 5 + Ubuntu)",
      "systemd service management for reliable 24/7 operation",
      "Facebook Graph API batch processing and rate limit optimization",
      "Advanced data pipeline architecture: collection → processing → storage → analysis",
      "Time-series data collection with adaptive sampling strategies",
      "Cloud backup automation with rclone and Google Drive API",
      "Flask dashboard development for real-time monitoring",
      "API error handling with exponential backoff and retry logic",
      "Collaborative research methodology in academic environment",
      "Contributing technical infrastructure to support team-based ML research"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <!-- Clean gradients -->
    <linearGradient id="fbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1877F2;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#0A66C2;stop-opacity:0.02" />
    </linearGradient>

    <linearGradient id="piGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10B981;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:0.02" />
    </linearGradient>

    <linearGradient id="collectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E0F2FE;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#BAE6FD;stop-opacity:0.2" />
    </linearGradient>

    <linearGradient id="storageGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#DCFCE7;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#BBF7D0;stop-opacity:0.2" />
    </linearGradient>

    <linearGradient id="analyticsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FEF3C7;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#FDE68A;stop-opacity:0.2" />
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.08"/>
    </filter>

    <!-- Arrow markers -->
    <marker id="dataArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#1877F2" />
    </marker>

    <marker id="backupArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#10B981" />
    </marker>
  </defs>

  <!-- Modern professional styles -->
  <style>
    .card-title { font-family: -apple-system, system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #1F2937; }
    .tech-label { font-family: -apple-system, system-ui, sans-serif; font-size: 11px; font-weight: 500; fill: #6B7280; }
    .flow-label { font-family: -apple-system, system-ui, sans-serif; font-size: 12px; font-weight: 500; fill: #4B5563; }
    .section-title { font-family: -apple-system, system-ui, sans-serif; font-size: 16px; font-weight: 700; fill: #111827; }
    .sublabel { font-family: -apple-system, system-ui, sans-serif; font-size: 10px; font-weight: 400; fill: #9CA3AF; }
  </style>

  <!-- Background -->
  <rect width="1600" height="900" fill="#FAFAFA"/>

  <!-- Title -->
  <text class="section-title" x="800" y="40" text-anchor="middle">Facebook Farm Analytics Platform - Dual-Pipeline Architecture</text>
  <text class="sublabel" x="800" y="60" text-anchor="middle">Static Scraper (168 farms historical) + Dynamic Scraper (32 farms real-time) on Raspberry Pi 5</text>

  <!-- Layer 1: Data Sources -->
  <g id="data-sources">
    <text class="flow-label" x="100" y="110">Data Sources</text>

    <!-- Static Scraper Source -->
    <rect x="60" y="130" width="140" height="80" rx="10" fill="url(#fbGradient)" stroke="#1877F2" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="130" y="150" text-anchor="middle" font-size="12">Static Scraper</text>
    <text class="tech-label" x="130" y="168" text-anchor="middle">168 Farms</text>
    <text class="sublabel" x="130" y="183" text-anchor="middle">May 2024-2025</text>
    <text class="sublabel" x="130" y="198" text-anchor="middle">Historical data</text>

    <!-- Dynamic Scraper Source -->
    <rect x="220" y="130" width="140" height="80" rx="10" fill="url(#fbGradient)" stroke="#10B981" stroke-width="2" filter="url(#cardShadow)"/>
    <text class="card-title" x="290" y="150" text-anchor="middle" font-size="12">Dynamic Scraper</text>
    <text class="tech-label" x="290" y="168" text-anchor="middle">32 Active Farms</text>
    <text class="sublabel" x="290" y="183" text-anchor="middle">15-min polling</text>
    <text class="sublabel" x="290" y="198" text-anchor="middle">54-point tracking</text>
  </g>

  <!-- Layer 2: Data Collection Layer -->
  <g id="collection-layer">
    <text class="flow-label" x="450" y="110">Collection Pipeline</text>
    <rect x="380" y="130" width="280" height="220" rx="12" fill="url(#collectionGradient)" stroke="#0EA5E9" stroke-width="2" filter="url(#cardShadow)"/>

    <!-- Batch Dynamic Scraper -->
    <rect x="400" y="150" width="240" height="70" rx="8" fill="#FFFFFF" stroke="#0EA5E9" stroke-width="1.5"/>
    <text class="card-title" x="520" y="170" text-anchor="middle">Batch Dynamic Scraper</text>
    <text class="sublabel" x="520" y="188" text-anchor="middle">• 15-minute polling intervals</text>
    <text class="sublabel" x="520" y="203" text-anchor="middle">• 54-point lifecycle tracking</text>

    <!-- API Layer -->
    <rect x="400" y="235" width="240" height="55" rx="8" fill="#FFFFFF" stroke="#0EA5E9" stroke-width="1.5"/>
    <text class="card-title" x="520" y="255" text-anchor="middle">API Layer (fb_api.py)</text>
    <text class="sublabel" x="520" y="273" text-anchor="middle">Rate limiting • Retry logic • Error handling</text>

    <!-- Data Processing -->
    <rect x="400" y="305" width="240" height="35" rx="8" fill="#FFFFFF" stroke="#0EA5E9" stroke-width="1.5"/>
    <text class="card-title" x="520" y="328" text-anchor="middle">Transform &amp; Normalize</text>
  </g>

  <!-- Layer 3: Raspberry Pi Infrastructure -->
  <g id="infrastructure">
    <rect x="50" y="390" width="650" height="260" rx="16" fill="url(#piGradient)" stroke="#10B981" stroke-width="3" filter="url(#cardShadow)"/>
    <text class="section-title" x="375" y="420" text-anchor="middle">Raspberry Pi 5 Infrastructure (Ubuntu + systemd)</text>

    <!-- Storage System -->
    <rect x="80" y="440" width="280" height="190" rx="10" fill="url(#storageGradient)" stroke="#10B981" stroke-width="2"/>
    <text class="card-title" x="220" y="465" text-anchor="middle">Storage System</text>

    <rect x="100" y="480" width="240" height="45" rx="6" fill="#FFFFFF" stroke="#059669" stroke-width="1"/>
    <text class="tech-label" x="220" y="495" text-anchor="middle">Local Filesystem</text>
    <text class="sublabel" x="220" y="510" text-anchor="middle">organized_output/</text>
    <text class="sublabel" x="220" y="520" text-anchor="middle">Timeline • Comments • Photos</text>

    <rect x="100" y="535" width="240" height="45" rx="6" fill="#FFFFFF" stroke="#059669" stroke-width="1"/>
    <text class="tech-label" x="220" y="550" text-anchor="middle">State Management</text>
    <text class="sublabel" x="220" y="565" text-anchor="middle">tracked_posts.json</text>
    <text class="sublabel" x="220" y="575" text-anchor="middle">last_seen_posts.json</text>

    <rect x="100" y="590" width="240" height="30" rx="6" fill="#FFFFFF" stroke="#059669" stroke-width="1"/>
    <text class="tech-label" x="220" y="610" text-anchor="middle">Photo Manager</text>

    <!-- Services -->
    <rect x="390" y="440" width="290" height="190" rx="10" fill="#F0FDF4" stroke="#10B981" stroke-width="2"/>
    <text class="card-title" x="535" y="465" text-anchor="middle">systemd Services</text>

    <rect x="410" y="480" width="250" height="32" rx="6" fill="#FFFFFF" stroke="#059669" stroke-width="1"/>
    <text class="tech-label" x="535" y="500" text-anchor="middle">facebook-scraper.service</text>

    <rect x="410" y="520" width="250" height="32" rx="6" fill="#FFFFFF" stroke="#059669" stroke-width="1"/>
    <text class="tech-label" x="535" y="540" text-anchor="middle">facebook-web-monitor.service</text>

    <rect x="410" y="560" width="250" height="32" rx="6" fill="#FFFFFF" stroke="#059669" stroke-width="1"/>
    <text class="tech-label" x="535" y="580" text-anchor="middle">facebook-backup.service + timer</text>
  </g>

  <!-- Layer 4: Analytics & ML -->
  <g id="analytics">
    <text class="flow-label" x="800" y="410">Analytics &amp; ML Pipeline</text>
    <rect x="750" y="430" width="380" height="220" rx="12" fill="url(#analyticsGradient)" stroke="#F59E0B" stroke-width="2" filter="url(#cardShadow)"/>

    <!-- Enhanced Analyzer -->
    <rect x="770" y="450" width="340" height="75" rx="8" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
    <text class="card-title" x="940" y="470" text-anchor="middle">Enhanced Analyzer</text>
    <text class="sublabel" x="940" y="490" text-anchor="middle">Sentiment Analysis (TextBlob) • Feature Engineering (TF-IDF, SVD)</text>
    <text class="sublabel" x="940" y="505" text-anchor="middle">Anomaly Detection (Isolation Forest) • Predictive Forecasting</text>

    <!-- Visualization -->
    <rect x="770" y="540" width="340" height="100" rx="8" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
    <text class="card-title" x="940" y="560" text-anchor="middle">Visualization Suite</text>
    <text class="sublabel" x="940" y="580" text-anchor="middle">Static Analysis (GraphVis.py)</text>
    <text class="sublabel" x="940" y="595" text-anchor="middle">• Engagement trends • Content analysis • Farm comparisons</text>
    <text class="sublabel" x="940" y="610" text-anchor="middle">Dynamic Analysis (DynamicGraphVis.py)</text>
    <text class="sublabel" x="940" y="625" text-anchor="middle">• Growth curves • Rolling performance • Comment trajectories</text>
  </g>

  <!-- Layer 5: Monitoring & Backup -->
  <g id="monitoring">
    <text class="flow-label" x="1280" y="410">Monitoring &amp; Backup</text>
    <rect x="1180" y="430" width="340" height="140" rx="12" fill="#FEF3C7" stroke="#F59E0B" stroke-width="2" filter="url(#cardShadow)"/>

    <rect x="1200" y="450" width="300" height="50" rx="8" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1.5"/>
    <text class="card-title" x="1350" y="470" text-anchor="middle">Flask Web Dashboard</text>
    <text class="sublabel" x="1350" y="488" text-anchor="middle">Real-time monitoring • Port 5000 • 30s auto-refresh</text>

    <rect x="1200" y="510" width="145" height="50" rx="8" fill="#FFFFFF" stroke="#10B981" stroke-width="1.5"/>
    <text class="tech-label" x="1272" y="530" text-anchor="middle">Google Drive</text>
    <text class="sublabel" x="1272" y="545" text-anchor="middle">rclone daily sync</text>

    <rect x="1355" y="510" width="165" height="50" rx="8" fill="#FFFFFF" stroke="#10B981" stroke-width="1.5"/>
    <text class="tech-label" x="1437" y="530" text-anchor="middle">Healthchecks.io</text>
    <text class="sublabel" x="1437" y="545" text-anchor="middle">Uptime monitoring</text>
  </g>

  <!-- Data Flow Arrows -->
  <!-- Sources to Collection -->
  <path d="M 320 200 L 380 240" stroke="#1877F2" stroke-width="2.5" fill="none" marker-end="url(#dataArrow)"/>

  <!-- Collection to Infrastructure -->
  <path d="M 520 350 L 520 390" stroke="#0EA5E9" stroke-width="2.5" fill="none" marker-end="url(#dataArrow)"/>
  <text class="sublabel" x="540" y="375" fill="#0EA5E9">Every 15 minutes</text>

  <!-- Infrastructure to Storage -->
  <path d="M 360 520 L 380 520" stroke="#10B981" stroke-width="2" fill="none" marker-end="url(#backupArrow)"/>

  <!-- Storage to Analytics -->
  <path d="M 700 520 L 750 520" stroke="#10B981" stroke-width="2.5" fill="none" marker-end="url(#dataArrow)"/>

  <!-- Storage to Flask Dashboard (curved path going up and over analytics) -->
  <path d="M 700 490 Q 940 380 1180 470" stroke="#10B981" stroke-width="2.5" fill="none" marker-end="url(#dataArrow)" stroke-dasharray="5,5"/>
  <text class="sublabel" x="940" y="365" text-anchor="middle" fill="#10B981">Data Feed to Dashboard</text>

  <!-- Backup path -->
  <path d="M 360 590 Q 800 800 1200 535" stroke="#10B981" stroke-width="2" stroke-dasharray="5,5" fill="none" marker-end="url(#backupArrow)"/>
  <text class="sublabel" x="800" y="820" text-anchor="middle" fill="#10B981">Automated Daily Backup</text>

  <!-- Key Metrics Box -->
  <rect x="1180" y="590" width="340" height="60" rx="12" fill="#E0F2FE" stroke="#0EA5E9" stroke-width="2" filter="url(#cardShadow)"/>
  <text class="card-title" x="1350" y="615" text-anchor="middle">Platform Metrics</text>
  <text class="sublabel" x="1350" y="630" text-anchor="middle">168 farms static • 32 farms dynamic • 54-point tracking</text>
  <text class="sublabel" x="1350" y="643" text-anchor="middle">15min polling • 35 post capacity</text>

  <!-- Technology Stack -->
  <g id="tech-stack">
    <text class="flow-label" x="100" y="710">Technology Stack</text>
    <rect x="80" y="730" width="1440" height="80" rx="12" fill="#FFFFFF" stroke="#D1D5DB" stroke-width="2" filter="url(#cardShadow)"/>

    <text class="tech-label" x="120" y="755">Data Collection:</text>
    <text class="sublabel" x="120" y="775">Python 3.12+ • Facebook Graph API v23.0 • asyncio • requests</text>

    <text class="tech-label" x="520" y="755">Processing:</text>
    <text class="sublabel" x="520" y="775">Pandas • NumPy • JSON/CSV • Photo Manager</text>

    <text class="tech-label" x="820" y="755">ML &amp; Analytics:</text>
    <text class="sublabel" x="820" y="775">scikit-learn • TextBlob • Plotly • TF-IDF • Isolation Forest</text>

    <text class="tech-label" x="1200" y="755">Infrastructure:</text>
    <text class="sublabel" x="1200" y="775">Raspberry Pi 5 • Ubuntu • systemd • Flask • rclone</text>
  </g>

  <!-- Architecture Notes -->
  <text class="sublabel" x="800" y="850" text-anchor="middle">Dual-pipeline: Static scraper (168 farms historical) + Dynamic scraper (32 farms with 54-point lifecycle tracking)</text>
  <text class="sublabel" x="800" y="870" text-anchor="middle">Polling: Every 15min (avg 7min delay) | Tracking: 15m → hourly → 6h → weekly | Max 35 posts concurrent</text>
</svg>`
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

          {/* Show screenshot for UCF Lab Inventory System */}
          {project.id === "ucf-lab-inventory" && (
            <div className="flex justify-center mb-10">
              <img
                src={`${import.meta.env.BASE_URL}images/ucf-lab-inventory.png`}
                alt="UCF Lab Inventory System Screenshot"
                className="rounded-2xl border border-gray-200 shadow-lg max-w-full h-auto object-contain"
                style={{ maxHeight: 400 }}
              />
            </div>
          )}

          {/* Show screenshot for Ad Event Processing */}
          {project.id === "ad-event-processing" && (
            <div className="flex justify-center mb-10">
              <img
                src={`${import.meta.env.BASE_URL}images/AdEvent-375k-eventspersecond_2559x705p.png`}
                alt="Ad Event Processing Performance - 375K Events/Second"
                className="rounded-2xl border border-gray-200 shadow-lg max-w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Show screenshot for Facebook Farm Analytics */}
          {project.id === "facebook-farm-analytics" && (
            <div className="flex justify-center mb-10">
              <img
                src={`${import.meta.env.BASE_URL}images/FacebookDashboardUI.png`}
                alt="Facebook Farm Analytics Dashboard UI"
                className="rounded-2xl border border-gray-200 shadow-lg max-w-full h-auto object-contain"
                style={{ maxHeight: 600 }}
              />
            </div>
          )}

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

        {/* Video/Demo Section - Disabled for now, uncomment when videos/demos are ready */}
        {/* <div className="mb-8 sm:mb-12">
          <Card className="bg-white border-gray-100 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
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
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-2xl transition-all duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-0 group-hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300">
                      <Play className="w-8 h-8 text-transparent group-hover:text-white transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </div>

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
        </div> */}

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