import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ArrowLeft, Calendar, Users, Zap, Play, Code2, Database, Server, Sparkles, Rocket, Compass, Cpu } from "lucide-react";
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
      "Microsoft OAuth with @ucf.edu domain restriction and popup sign-in",
      "QR code generation and HTML5-QRCode camera scanning for instant item lookup",
      "Reservation system with conflict detection and batch creation",
      "Live Status Grid and Queue/Schedule views with real-time updates",
      "Admin Panel with role-based access, student management, and consumables tracking"
    ],
    challenges: [
      "Configuring Azure AD OAuth with Firebase and @ucf.edu domain restrictions",
      "HTML5-QRCode cross-browser compatibility and camera permissions",
      "Firestore composite indexes and real-time conflict detection for concurrent reservations",
      "Role-based security with custom claims and Firestore security rules"
    ],
    learnings: [
      "Firebase ecosystem: Auth, Firestore, Storage, Hosting with security rules",
      "Microsoft OAuth with Azure AD integration and domain restrictions",
      "HTML5-QRCode camera scanning and QR workflow design",
      "Firestore data modeling, composite indexes, and real-time listeners"
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
    subtitle: "Completed - Data Engineering",
    description: "Ad event processing pipeline with FastAPI, Redis deduplication, and Docker orchestration. Processes synthetic ad events with 40+ field data model, async workers, and real-time analytics dashboard.",
    detailedDescription: "Real-time ad event ingestion and analytics platform built with FastAPI and Python asyncio. Features a comprehensive 40+ field AdEvent data model with proper enums for event types, device types, and ad formats. Redis provides sub-millisecond deduplication with pipeline batching. Multiple consumer instances process events in parallel via Docker Compose orchestration with health checks and resource limits. Includes a FastAPI analytics API with Chart.js dashboard for real-time metrics visualization. DynamoDB client and AWS Kinesis integration are scaffolded for production deployment.",
    status: "Completed",
    statusColor: "green",
    technologies: ["Python", "FastAPI", "Redis", "Docker", "Docker Compose", "asyncio", "DynamoDB"],
    githubUrl: "https://github.com/Sammy-Dabbas/ad-processing-pipeline",
    icon: Zap,
    iconGradient: "from-blue-500 to-indigo-500",
    timeline: "4 months",
    teamSize: "Solo Project",
    highlights: [
      "FastAPI async event processing with multiple parallel consumer instances",
      "Redis deduplication with pipeline batching for high-throughput processing",
      "Comprehensive 40+ field AdEvent data model with typed enums and dataclasses",
      "Docker Compose orchestration with health checks, resource limits, and shared volumes"
    ],
    features: [
      "FastAPI services with async/await for non-blocking event processing",
      "Redis caching layer with pipeline batching for deduplication",
      "40+ field AdEvent dataclass with enums for event types, device types, ad formats",
      "Docker Compose with multiple consumer instances and health checks",
      "Analytics API with Chart.js dashboard for real-time metrics visualization"
    ],
    challenges: [
      "Designing a comprehensive ad event data model covering impressions, clicks, and conversions",
      "Implementing efficient Redis pipeline batching for deduplication at scale",
      "Orchestrating multiple async consumer services with Docker Compose",
      "Building a real-time analytics dashboard with meaningful ad metrics"
    ],
    learnings: [
      "Batching is critical: pipeline batching dramatically improves Redis throughput",
      "Async/await patterns in Python for high-concurrency event processing",
      "Docker Compose service orchestration with health checks and resource management",
      "Data modeling for ad tech: event taxonomies, attribution, and analytics"
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
  <text class="card-label" x="800" y="60" text-anchor="middle">FastAPI • Redis Deduplication • Docker Compose • Async Processing</text>

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
    <text class="card-label" x="700" y="195" text-anchor="middle">Multiple consumers</text>
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

  <!-- System Details -->
  <rect x="80" y="480" width="1480" height="140" rx="12" fill="#DBEAFE" stroke="#2563EB" stroke-width="2" filter="url(#cardShadow)"/>
  <text class="section-title" x="820" y="515" text-anchor="middle">System Details</text>

  <text class="card-title" x="250" y="550" text-anchor="middle">Processing</text>
  <text class="card-label" x="250" y="570" text-anchor="middle">Async workers</text>
  <text class="card-label" x="250" y="585" text-anchor="middle">parallel consumers</text>

  <text class="card-title" x="520" y="550" text-anchor="middle">Deduplication</text>
  <text class="card-label" x="520" y="570" text-anchor="middle">Redis pipeline</text>
  <text class="card-label" x="520" y="585" text-anchor="middle">batching</text>

  <text class="card-title" x="820" y="550" text-anchor="middle">Data Model</text>
  <text class="card-label" x="820" y="570" text-anchor="middle">40+ fields</text>
  <text class="card-label" x="820" y="585" text-anchor="middle">typed enums</text>

  <text class="card-title" x="1120" y="550" text-anchor="middle">Architecture</text>
  <text class="card-label" x="1120" y="570" text-anchor="middle">Containerized</text>
  <text class="card-label" x="1120" y="585" text-anchor="middle">microservices</text>

  <text class="card-title" x="1390" y="550" text-anchor="middle">Dashboard</text>
  <text class="card-label" x="1390" y="570" text-anchor="middle">Chart.js</text>
  <text class="card-label" x="1390" y="585" text-anchor="middle">real-time</text>

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
  "exoplanet-detector": {
    id: "exoplanet-detector",
    title: "Exoplanet Detection System",
    subtitle: "NASA Space Apps Challenge 2024 • Hackathon Project",
    description: "AI/ML system achieving 89.6% accuracy (96.5% ROC AUC) detecting exoplanets from NASA mission data. Built with multiple ML models, real-time TESS integration, and interactive dashboard deployed on Google Cloud Run in 48 hours.",
    detailedDescription: "Advanced AI/ML system for identifying exoplanets from NASA mission data (Kepler, K2, TESS) built for NASA Space Apps Challenge 2024. Implements multiple machine learning models (Random Forest, XGBoost, LightGBM, Neural Networks) achieving 89.6% accuracy with 96.5% ROC AUC on Kepler test set with 9,500+ confirmed and candidate exoplanets. Features real-time TESS Objects of Interest (TOI) integration via NASA APIs, interactive web dashboard for training/prediction/analysis, uncertainty quantification with confidence intervals, adversarial robustness testing, and habitability scoring. Production deployment on Google Cloud Run with Docker containerization completed within 48-hour hackathon timeframe.",
    status: "Live • NASA Space Apps Challenge 2024",
    statusColor: "blue",
    technologies: ["Python", "Flask", "scikit-learn", "XGBoost", "LightGBM", "TensorFlow", "Plotly", "pandas", "numpy", "Docker", "Google Cloud Run", "NASA APIs"],
    githubUrl: "https://github.com/Sammy-Dabbas/PlanetHunterBros",
    liveUrl: "https://exoplanet-detector-430968814485.us-central1.run.app/",
    icon: Sparkles,
    iconGradient: "from-purple-500 to-indigo-500",
    timeline: "48 hours",
    teamSize: "2-person Team",
    highlights: [
      "89.6% accuracy with 96.5% ROC AUC on Kepler test set with 9,500+ exoplanet dataset",
      "Real-time TESS mission data integration via NASA APIs",
      "Multiple ML models: Random Forest, XGBoost, LightGBM, Neural Networks",
      "Advanced features: uncertainty quantification, adversarial testing, habitability scoring",
      "Production deployment on Google Cloud Run completed within 48-hour hackathon"
    ],
    features: [
      "Interactive web dashboard for model training, prediction, and visualization",
      "Real-time TESS Objects of Interest (TOI) fetching and cross-mission prediction",
      "Multiple ML models: Random Forest, XGBoost, LightGBM, Neural Networks",
      "Uncertainty quantification, adversarial testing, and habitability scoring",
      "Transit light curves, phase-folded plots, and solar system comparison charts"
    ],
    challenges: [
      "Processing and normalizing 50+ orbital/stellar parameters from NASA datasets",
      "Handling severe class imbalance with SMOTE oversampling",
      "Building and deploying the full system within 48-hour hackathon constraints",
      "Cross-mission validation: training on Kepler data, predicting on TESS"
    ],
    learnings: [
      "ML for astronomical data: ensemble methods and neural networks on scientific datasets",
      "NASA Exoplanet Archive API integration and TESS mission data formats",
      "Docker containerization and Google Cloud Run serverless deployment",
      "Scientific visualization with Plotly for interactive data exploration"
    ],
    images: [
      "images/nasa-training-results.png",
      "images/nasa-solar-comparison.png",
      "images/nasa-transit-lightcurve.png",
      "images/nasa-phase-folded.png",
      "images/nasa-feature-importance.png"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1000" viewBox="0 0 1600 1000">
  <defs>
    <!-- NASA Blue themed gradients -->
    <linearGradient id="spaceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0B3D91;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1E40AF;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1E3A8A;stop-opacity:1" />
    </linearGradient>

    <linearGradient id="nasaBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:0.1" />
    </linearGradient>

    <linearGradient id="nasaRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FC3D21;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#DC2626;stop-opacity:0.1" />
    </linearGradient>

    <linearGradient id="nasaGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#D97706;stop-opacity:0.1" />
    </linearGradient>

    <!-- Shadow filter -->
    <filter id="spaceShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.3"/>
    </filter>

    <!-- Arrow markers -->
    <marker id="spaceArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#3B82F6" />
    </marker>
  </defs>

  <!-- Normal theme styles -->
  <style>
    .space-title { font-family: -apple-system, system-ui, sans-serif; font-size: 18px; font-weight: 700; fill: #111827; }
    .space-subtitle { font-family: -apple-system, system-ui, sans-serif; font-size: 13px; font-weight: 600; fill: #111827; }
    .space-label { font-family: -apple-system, system-ui, sans-serif; font-size: 12px; font-weight: 500; fill: #1F2937; }
    .space-sublabel { font-family: -apple-system, system-ui, sans-serif; font-size: 11px; font-weight: 500; fill: #374151; }
    .layer-title { font-family: -apple-system, system-ui, sans-serif; font-size: 14px; font-weight: 600; fill: #111827; }
  </style>

  <!-- Background -->
  <rect width="1600" height="1000" fill="#FAFAFA"/>

  <!-- Title -->
  <text class="space-title" x="800" y="40" text-anchor="middle">Exoplanet Detection System - NASA Space Apps Challenge 2024</text>
  <text class="space-sublabel" x="800" y="60" text-anchor="middle">Multi-Model ML Architecture: 98%+ Accuracy on 9,500+ Exoplanet Dataset</text>

  <!-- Layer 1: Data Sources -->
  <g id="data-sources">
    <text class="layer-title" x="150" y="110">NASA Data Sources</text>

    <rect x="50" y="130" width="300" height="120" rx="12" fill="url(#nasaBlue)" stroke="#93C5FD" stroke-width="2" filter="url(#spaceShadow)"/>
    <text class="space-subtitle" x="200" y="155" text-anchor="middle">NASA Exoplanet Archive</text>

    <rect x="70" y="170" width="250" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-label" x="195" y="190" text-anchor="middle">Kepler Mission (2009-2018)</text>
    <text class="space-sublabel" x="195" y="205" text-anchor="middle">K2 Extended Mission (2014-2018)</text>
    <text class="space-sublabel" x="195" y="220" text-anchor="middle">TESS Mission (2018-present)</text>
    <text class="space-sublabel" x="195" y="235" text-anchor="middle">Real-time TOI API Integration</text>
  </g>

  <!-- Layer 2: Data Processing -->
  <g id="processing">
    <text class="layer-title" x="150" y="300">Data Processing Pipeline</text>

    <rect x="50" y="320" width="300" height="160" rx="12" fill="url(#nasaRed)" stroke="#FCA5A5" stroke-width="2" filter="url(#spaceShadow)"/>

    <rect x="70" y="340" width="260" height="50" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-label" x="200" y="360" text-anchor="middle">Feature Engineering</text>
    <text class="space-sublabel" x="200" y="380" text-anchor="middle">50+ orbital &amp; stellar parameters</text>

    <rect x="70" y="400" width="260" height="35" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-label" x="200" y="422" text-anchor="middle">SMOTE Class Balancing</text>

    <rect x="70" y="445" width="260" height="25" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-label" x="200" y="462" text-anchor="middle">Preprocessing &amp; Normalization</text>
  </g>

  <!-- Layer 3: ML Models -->
  <g id="ml-models">
    <text class="layer-title" x="550" y="110">ML Model Ensemble</text>

    <rect x="420" y="130" width="500" height="350" rx="12" fill="url(#nasaRed)" stroke="#FCA5A5" stroke-width="2" filter="url(#spaceShadow)"/>

    <!-- Random Forest -->
    <rect x="440" y="150" width="220" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-subtitle" x="550" y="175" text-anchor="middle">Random Forest</text>
    <text class="space-sublabel" x="550" y="195" text-anchor="middle">Ensemble decision trees</text>
    <text class="space-sublabel" x="550" y="210" text-anchor="middle">Feature importance extraction</text>

    <!-- XGBoost -->
    <rect x="680" y="150" width="220" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-subtitle" x="790" y="175" text-anchor="middle">XGBoost</text>
    <text class="space-sublabel" x="790" y="195" text-anchor="middle">Gradient boosting (best accuracy)</text>
    <text class="space-sublabel" x="790" y="210" text-anchor="middle">Hyperparameter optimization</text>

    <!-- LightGBM -->
    <rect x="440" y="235" width="220" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-subtitle" x="550" y="260" text-anchor="middle">LightGBM</text>
    <text class="space-sublabel" x="550" y="280" text-anchor="middle">Fast training &amp; inference</text>
    <text class="space-sublabel" x="550" y="295" text-anchor="middle">Histogram-based learning</text>

    <!-- Neural Network -->
    <rect x="680" y="235" width="220" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-subtitle" x="790" y="260" text-anchor="middle">Neural Network</text>
    <text class="space-sublabel" x="790" y="280" text-anchor="middle">TensorFlow/Keras</text>
    <text class="space-sublabel" x="790" y="295" text-anchor="middle">Deep learning architecture</text>

    <!-- Model Comparison -->
    <rect x="440" y="320" width="460" height="50" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-label" x="670" y="340" text-anchor="middle">Model Management</text>
    <text class="space-sublabel" x="670" y="360" text-anchor="middle">Save • Load • Compare • Select Best Model</text>

    <!-- Training Metrics -->
    <rect x="440" y="380" width="460" height="90" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-label" x="670" y="400" text-anchor="middle">Training Metrics (LightGBM)</text>
    <text class="space-sublabel" x="670" y="420" text-anchor="middle">89.6% Accuracy • 96.5% ROC AUC • 89.4% Precision • 89.9% Recall</text>
    <text class="space-sublabel" x="670" y="435" text-anchor="middle">89.6% F1-Score • Confusion Matrix • ROC Curves</text>
    <text class="space-sublabel" x="670" y="450" text-anchor="middle">&lt;1s Prediction Time • Cross-Validation</text>
    <text class="space-sublabel" x="670" y="465" text-anchor="middle">9,500+ Training Samples</text>
  </g>

  <!-- Layer 4: Analysis Layer -->
  <g id="analysis">
    <text class="layer-title" x="1150" y="110">Advanced Analysis</text>

    <rect x="990" y="130" width="550" height="350" rx="12" fill="url(#nasaGold)" stroke="#FCD34D" stroke-width="2" filter="url(#spaceShadow)"/>

    <!-- Uncertainty Quantification -->
    <rect x="1010" y="150" width="510" height="60" rx="8" fill="#FEF3C7" stroke="#FCD34D" stroke-width="1.5"/>
    <text class="space-subtitle" x="1265" y="175" text-anchor="middle">Uncertainty Quantification</text>
    <text class="space-sublabel" x="1265" y="195" text-anchor="middle">Confidence intervals • Prediction reliability metrics</text>

    <!-- Adversarial Testing -->
    <rect x="1010" y="220" width="510" height="60" rx="8" fill="#FEF3C7" stroke="#FCD34D" stroke-width="1.5"/>
    <text class="space-subtitle" x="1265" y="245" text-anchor="middle">Adversarial Testing</text>
    <text class="space-sublabel" x="1265" y="265" text-anchor="middle">Robustness evaluation against synthetic false positives</text>

    <!-- Habitability Scoring -->
    <rect x="1010" y="290" width="510" height="60" rx="8" fill="#FEF3C7" stroke="#FCD34D" stroke-width="1.5"/>
    <text class="space-subtitle" x="1265" y="315" text-anchor="middle">Habitability Scoring</text>
    <text class="space-sublabel" x="1265" y="335" text-anchor="middle">Planetary size • Orbital zone • Star temperature analysis</text>

    <!-- Feature Importance -->
    <rect x="1010" y="360" width="510" height="60" rx="8" fill="#FEF3C7" stroke="#FCD34D" stroke-width="1.5"/>
    <text class="space-subtitle" x="1265" y="385" text-anchor="middle">Feature Importance Analysis</text>
    <text class="space-sublabel" x="1265" y="405" text-anchor="middle">Transit duration • Orbital period • Planetary radius impact</text>

    <!-- Visualizations -->
    <rect x="1010" y="430" width="510" height="40" rx="8" fill="#FEF3C7" stroke="#FCD34D" stroke-width="1.5"/>
    <text class="space-label" x="1265" y="455" text-anchor="middle">Transit Light Curves • Phase-Folded Curves • Solar System Comparisons</text>
  </g>

  <!-- Layer 5: Web Interface -->
  <g id="interface">
    <text class="layer-title" x="550" y="530">Interactive Web Dashboard</text>

    <rect x="420" y="550" width="500" height="180" rx="12" fill="url(#nasaBlue)" stroke="#93C5FD" stroke-width="2" filter="url(#spaceShadow)"/>

    <rect x="440" y="570" width="460" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-subtitle" x="670" y="595" text-anchor="middle">Flask Web Dashboard (Port 5000)</text>
    <text class="space-sublabel" x="670" y="615" text-anchor="middle">Model Training • Batch/Manual Prediction • CSV Upload</text>
    <text class="space-sublabel" x="670" y="630" text-anchor="middle">Performance Visualization • Real-time TESS Data Fetch</text>

    <rect x="440" y="650" width="220" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-label" x="550" y="675" text-anchor="middle">User Interface</text>
    <text class="space-sublabel" x="550" y="695" text-anchor="middle">Researchers &amp; Novices</text>
    <text class="space-sublabel" x="550" y="710" text-anchor="middle">Interactive Controls</text>

    <rect x="680" y="650" width="220" height="70" rx="8" fill="#DBEAFE" stroke="#93C5FD" stroke-width="1.5"/>
    <text class="space-label" x="790" y="675" text-anchor="middle">Plotly Visualizations</text>
    <text class="space-sublabel" x="790" y="695" text-anchor="middle">Scientific Charts</text>
    <text class="space-sublabel" x="790" y="710" text-anchor="middle">Interactive Plots</text>
  </g>

  <!-- Layer 6: Deployment -->
  <g id="deployment">
    <text class="layer-title" x="550" y="770">Production Deployment</text>

    <rect x="420" y="790" width="500" height="120" rx="12" fill="url(#nasaRed)" stroke="#FCA5A5" stroke-width="2" filter="url(#spaceShadow)"/>

    <rect x="440" y="810" width="220" height="90" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-subtitle" x="550" y="835" text-anchor="middle">Docker Container</text>
    <text class="space-sublabel" x="550" y="855" text-anchor="middle">Python 3.11 runtime</text>
    <text class="space-sublabel" x="550" y="870" text-anchor="middle">ML dependencies</text>
    <text class="space-sublabel" x="550" y="885" text-anchor="middle">Optimized image</text>

    <rect x="680" y="810" width="220" height="90" rx="8" fill="#FEE2E2" stroke="#FCA5A5" stroke-width="1.5"/>
    <text class="space-subtitle" x="790" y="835" text-anchor="middle">Google Cloud Run</text>
    <text class="space-sublabel" x="790" y="855" text-anchor="middle">Serverless deployment</text>
    <text class="space-sublabel" x="790" y="870" text-anchor="middle">Auto-scaling</text>
    <text class="space-sublabel" x="790" y="885" text-anchor="middle">Global CDN</text>
  </g>

  <!-- Data Flow Arrows -->
  <path d="M 200 250 L 200 320" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#spaceArrow)"/>
  <path d="M 200 480 Q 310 505 420 340" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#spaceArrow)"/>
  <path d="M 920 290 L 990 290" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#spaceArrow)"/>
  <path d="M 670 480 L 370 480 L 370 640 L 420 640" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#spaceArrow)"/>
  <path d="M 670 730 L 370 730 L 370 850 L 420 850" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#spaceArrow)"/>

  <!-- Performance Metrics Box -->
  <rect x="50" y="550" width="300" height="180" rx="12" fill="#DBEAFE" stroke="#93C5FD" stroke-width="2" filter="url(#spaceShadow)"/>
  <text class="space-subtitle" x="200" y="575" text-anchor="middle">🏆 Performance Metrics</text>
  <text class="space-label" x="200" y="600" text-anchor="middle">89.6% Accuracy • 96.5% ROC AUC</text>
  <text class="space-label" x="200" y="620" text-anchor="middle">9,500+ Training Samples</text>
  <text class="space-label" x="200" y="640" text-anchor="middle">&lt;1s Prediction Time</text>
  <text class="space-label" x="200" y="660" text-anchor="middle">50+ Feature Parameters</text>
  <text class="space-label" x="200" y="680" text-anchor="middle">Real-time TESS Integration</text>
  <text class="space-label" x="200" y="700" text-anchor="middle">48-Hour Hackathon Build</text>
  <text class="space-label" x="200" y="720" text-anchor="middle">2-Person Team</text>

  <!-- Technology Stack -->
  <rect x="50" y="790" width="300" height="120" rx="12" fill="#FEF3C7" stroke="#FCD34D" stroke-width="2" filter="url(#spaceShadow)"/>
  <text class="space-subtitle" x="200" y="815" text-anchor="middle">Technology Stack</text>
  <text class="space-sublabel" x="200" y="840" text-anchor="middle">Python • Flask • scikit-learn</text>
  <text class="space-sublabel" x="200" y="860" text-anchor="middle">XGBoost • LightGBM • TensorFlow</text>
  <text class="space-sublabel" x="200" y="880" text-anchor="middle">Plotly • pandas • numpy</text>
  <text class="space-sublabel" x="200" y="900" text-anchor="middle">Docker • Google Cloud Run</text>

  <!-- NASA Branding -->
  <text class="space-sublabel" x="800" y="980" text-anchor="middle">NASA Space Apps Challenge 2024 • Exoplanet Detection with AI/ML • Planet Hunter Bros</text>
</svg>`
  },

  "agricultural-analytics": {
    id: "agricultural-analytics",
    title: "Agricultural Social Media Analytics",
    subtitle: "Faculty-Led Research",
    description: "ML-powered analytics platform analyzing 18,095 Facebook posts from 160 farms using multimodal CLIP image and BERT text embeddings. LightGBM achieves 29.44% R-squared with 76.47% Spearman ranking accuracy and 92.07% NDCG@10.",
    detailedDescription: "Faculty-led research project developing a multimodal ML platform for agricultural social media engagement prediction. Collected 18,095 Facebook posts from 160 Florida farms over 12 months via dual-pipeline infrastructure on Raspberry Pi 5. Engineered multimodal features combining CLIP image embeddings (512-dim), BERT text embeddings (64-dim via PCA), and 29 tabular metadata features. Detected and removed data leakage from preliminary model (42% R-squared to 9.8% baseline), then tuned LightGBM to achieve 29.44% R-squared, 76.47% Spearman ranking accuracy, and 92.07% NDCG@10. BERT dimension interpretation analysis revealed that seasonal produce posts with personal stories generate significantly higher engagement than formal or off-topic content.",
    status: "Active Research",
    statusColor: "purple",
    technologies: ["Python", "LightGBM", "XGBoost", "CLIP", "BERT", "Sentence-Transformers", "Facebook Graph API", "Raspberry Pi 5", "scikit-learn", "pandas", "numpy"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Database,
    iconGradient: "from-green-500 to-emerald-500",
    timeline: "Ongoing (May 2025 - Present)",
    teamSize: "Faculty-Led Research Team",
    highlights: [
      "18,095 Facebook posts from 160 Florida farms collected over 12 months",
      "Multimodal features: CLIP image embeddings + BERT text embeddings + tabular metadata",
      "LightGBM: 29.44% R-squared, 76.47% Spearman ranking, 92.07% NDCG@10",
      "Detected and removed data leakage: 42% R-squared corrected to 9.8% baseline",
      "BERT dimension analysis revealed actionable content strategy insights for farmers"
    ],
    features: [
      "Multimodal feature pipeline: CLIP (512-dim) + BERT (64-dim) + 29 tabular features",
      "Dual-pipeline data collection on Raspberry Pi 5 with systemd orchestration",
      "Ensemble ML models: LightGBM, Random Forest, XGBoost with hyperparameter tuning",
      "Cold-start evaluation for predicting engagement on new/unseen farms",
      "BERT dimension interpretation for actionable content recommendations"
    ],
    challenges: [
      "Detecting subtle data leakage that inflated initial model performance (42% to 9.8%)",
      "Designing fault-tolerant 24/7 data collection on Raspberry Pi hardware",
      "Extracting meaningful engagement signals from noisy multimodal social media data",
      "Cold-start prediction for farms with no historical data"
    ],
    learnings: [
      "Data leakage detection is critical: always validate baseline before optimization",
      "Multimodal features (CLIP + BERT) provide richer signal than tabular data alone",
      "Ensemble methods and proper cross-validation prevent overfitting on farm-specific patterns",
      "Interpretable ML: BERT dimension analysis yields actionable business insights"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="agriGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="agriBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="agriPurple" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6D28D9;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="agriOrange" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#D97706;stop-opacity:1" />
    </linearGradient>
    <filter id="agriShadow">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.15"/>
    </filter>
    <marker id="agriArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
      <path d="M0,0 L0,6 L9,3 z" fill="#10B981" />
    </marker>
  </defs>

  <style>
    .agri-title { font: 700 20px 'Segoe UI', sans-serif; fill: #1F2937; }
    .agri-layer-title { font: 600 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .agri-label { font: 500 13px 'Segoe UI', sans-serif; fill: #1F2937; }
    .agri-sublabel { font: 400 11px 'Segoe UI', sans-serif; fill: #6B7280; }
    .agri-metric { font: 700 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
  </style>

  <rect width="1600" height="900" fill="#F9FAFB"/>
  <text x="800" y="40" text-anchor="middle" class="agri-title">Agricultural Social Media Analytics - ML Pipeline Architecture</text>

  <!-- Data Sources Layer -->
  <rect x="80" y="80" width="400" height="200" rx="12" fill="url(#agriBlue)" filter="url(#agriShadow)"/>
  <text x="280" y="105" text-anchor="middle" class="agri-layer-title">Data Sources</text>

  <rect x="100" y="125" width="170" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="185" y="150" text-anchor="middle" class="agri-label">Facebook Graph API</text>
  <text x="185" y="170" text-anchor="middle" class="agri-sublabel">Page insights</text>
  <text x="185" y="185" text-anchor="middle" class="agri-sublabel">Post engagement</text>
  <text x="185" y="200" text-anchor="middle" class="agri-sublabel">Audience demographics</text>
  <text x="185" y="215" text-anchor="middle" class="agri-sublabel">160 farm pages</text>
  <text x="185" y="230" text-anchor="middle" class="agri-sublabel">Rate limit handling</text>
  <text x="185" y="245" text-anchor="middle" class="agri-sublabel">Token management</text>

  <rect x="290" y="125" width="170" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="375" y="150" text-anchor="middle" class="agri-label">Farm Dataset</text>
  <text x="375" y="170" text-anchor="middle" class="agri-sublabel">168 farms historical</text>
  <text x="375" y="185" text-anchor="middle" class="agri-sublabel">32 farms real-time</text>
  <text x="375" y="200" text-anchor="middle" class="agri-sublabel">18K+ posts collected</text>
  <text x="375" y="215" text-anchor="middle" class="agri-sublabel">Post metadata</text>
  <text x="375" y="230" text-anchor="middle" class="agri-sublabel">Engagement metrics</text>
  <text x="375" y="245" text-anchor="middle" class="agri-sublabel">Content analysis</text>

  <!-- Edge Computing Layer -->
  <rect x="540" y="80" width="400" height="200" rx="12" fill="url(#agriGreen)" filter="url(#agriShadow)"/>
  <text x="740" y="105" text-anchor="middle" class="agri-layer-title">Edge Computing (Raspberry Pi 5)</text>

  <rect x="560" y="125" width="170" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="645" y="150" text-anchor="middle" class="agri-label">Historical Pipeline</text>
  <text x="645" y="170" text-anchor="middle" class="agri-sublabel">Batch processing</text>
  <text x="645" y="185" text-anchor="middle" class="agri-sublabel">168 farm pages</text>
  <text x="645" y="200" text-anchor="middle" class="agri-sublabel">Scheduled collection</text>
  <text x="645" y="215" text-anchor="middle" class="agri-sublabel">Data normalization</text>
  <text x="645" y="230" text-anchor="middle" class="agri-sublabel">CSV export</text>
  <text x="645" y="245" text-anchor="middle" class="agri-sublabel">Error recovery</text>

  <rect x="750" y="125" width="170" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="835" y="150" text-anchor="middle" class="agri-label">Real-Time Pipeline</text>
  <text x="835" y="170" text-anchor="middle" class="agri-sublabel">32 active farms</text>
  <text x="835" y="185" text-anchor="middle" class="agri-sublabel">systemd services</text>
  <text x="835" y="200" text-anchor="middle" class="agri-sublabel">Auto-restart</text>
  <text x="835" y="215" text-anchor="middle" class="agri-sublabel">Automated backups</text>
  <text x="835" y="230" text-anchor="middle" class="agri-sublabel">24/7 collection</text>
  <text x="835" y="245" text-anchor="middle" class="agri-sublabel">Deduplication</text>

  <!-- ML Pipeline Layer -->
  <rect x="1000" y="80" width="520" height="200" rx="12" fill="url(#agriPurple)" filter="url(#agriShadow)"/>
  <text x="1260" y="105" text-anchor="middle" class="agri-layer-title">ML Model Pipeline</text>

  <rect x="1020" y="125" width="150" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1095" y="150" text-anchor="middle" class="agri-label">Random Forest</text>
  <text x="1095" y="170" text-anchor="middle" class="agri-sublabel">Ensemble trees</text>
  <text x="1095" y="185" text-anchor="middle" class="agri-sublabel">Feature importance</text>
  <text x="1095" y="200" text-anchor="middle" class="agri-sublabel">Baseline model</text>
  <text x="1095" y="215" text-anchor="middle" class="agri-sublabel">Interpretable</text>
  <text x="1095" y="230" text-anchor="middle" class="agri-sublabel">Fast training</text>

  <rect x="1185" y="125" width="150" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1260" y="150" text-anchor="middle" class="agri-label">LightGBM</text>
  <text x="1260" y="170" text-anchor="middle" class="agri-sublabel">Gradient boosting</text>
  <text x="1260" y="185" text-anchor="middle" class="agri-sublabel">Histogram-based</text>
  <text x="1260" y="200" text-anchor="middle" class="agri-sublabel">Memory efficient</text>
  <text x="1260" y="215" text-anchor="middle" class="agri-sublabel">Fast inference</text>
  <text x="1260" y="230" text-anchor="middle" class="agri-sublabel">Best performer</text>

  <rect x="1350" y="125" width="150" height="140" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1425" y="150" text-anchor="middle" class="agri-label">XGBoost</text>
  <text x="1425" y="170" text-anchor="middle" class="agri-sublabel">eXtreme Gradient</text>
  <text x="1425" y="185" text-anchor="middle" class="agri-sublabel">Regularization</text>
  <text x="1425" y="200" text-anchor="middle" class="agri-sublabel">Cross-validation</text>
  <text x="1425" y="215" text-anchor="middle" class="agri-sublabel">Grid search</text>
  <text x="1425" y="230" text-anchor="middle" class="agri-sublabel">Hyperparameter tuning</text>

  <!-- Feature Engineering Layer -->
  <rect x="80" y="330" width="680" height="180" rx="12" fill="url(#agriOrange)" filter="url(#agriShadow)"/>
  <text x="420" y="355" text-anchor="middle" class="agri-layer-title">Feature Engineering (20 Actionable Features)</text>

  <rect x="100" y="375" width="200" height="120" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="200" y="400" text-anchor="middle" class="agri-label">Content Features</text>
  <text x="200" y="420" text-anchor="middle" class="agri-sublabel">Post type (image/video/link)</text>
  <text x="200" y="435" text-anchor="middle" class="agri-sublabel">Content category</text>
  <text x="200" y="450" text-anchor="middle" class="agri-sublabel">Educational vs promotional</text>
  <text x="200" y="465" text-anchor="middle" class="agri-sublabel">Text length &amp; sentiment</text>
  <text x="200" y="480" text-anchor="middle" class="agri-sublabel">Hashtag analysis</text>

  <rect x="320" y="375" width="200" height="120" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="420" y="400" text-anchor="middle" class="agri-label">Temporal Features</text>
  <text x="420" y="420" text-anchor="middle" class="agri-sublabel">Posting time (hour/day)</text>
  <text x="420" y="435" text-anchor="middle" class="agri-sublabel">Day of week</text>
  <text x="420" y="450" text-anchor="middle" class="agri-sublabel">Seasonality</text>
  <text x="420" y="465" text-anchor="middle" class="agri-sublabel">Post frequency</text>
  <text x="420" y="480" text-anchor="middle" class="agri-sublabel">Afternoon = 3x engagement</text>

  <rect x="540" y="375" width="200" height="120" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="640" y="400" text-anchor="middle" class="agri-label">Engagement Features</text>
  <text x="640" y="420" text-anchor="middle" class="agri-sublabel">Historical engagement rate</text>
  <text x="640" y="435" text-anchor="middle" class="agri-sublabel">Follower count</text>
  <text x="640" y="450" text-anchor="middle" class="agri-sublabel">Page activity level</text>
  <text x="640" y="465" text-anchor="middle" class="agri-sublabel">Audience reach</text>
  <text x="640" y="480" text-anchor="middle" class="agri-sublabel">Interaction ratios</text>

  <!-- Model Validation Layer -->
  <rect x="820" y="330" width="700" height="180" rx="12" fill="#1F2937" filter="url(#agriShadow)"/>
  <text x="1170" y="355" text-anchor="middle" class="agri-layer-title">Model Validation &amp; Data Leakage Detection</text>

  <rect x="840" y="375" width="210" height="120" rx="8" fill="#374151"/>
  <text x="945" y="400" text-anchor="middle" class="agri-label" fill="#FFFFFF">Leakage Detection</text>
  <text x="945" y="420" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Initial R-squared: 42%</text>
  <text x="945" y="435" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">After correction: 9.8%</text>
  <text x="945" y="450" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Proper train/test split</text>
  <text x="945" y="465" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Temporal validation</text>
  <text x="945" y="480" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">No future data leakage</text>

  <rect x="1070" y="375" width="210" height="120" rx="8" fill="#374151"/>
  <text x="1175" y="400" text-anchor="middle" class="agri-label" fill="#FFFFFF">Hyperparameter Tuning</text>
  <text x="1175" y="420" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">650 iterations</text>
  <text x="1175" y="435" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Grid search CV</text>
  <text x="1175" y="450" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Learning rate tuning</text>
  <text x="1175" y="465" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Tree depth optimization</text>
  <text x="1175" y="480" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Regularization params</text>

  <rect x="1300" y="375" width="200" height="120" rx="8" fill="#374151"/>
  <text x="1400" y="400" text-anchor="middle" class="agri-label" fill="#FFFFFF">Final Results</text>
  <text x="1400" y="420" text-anchor="middle" class="agri-sublabel" fill="#10B981">29.44% R-squared achieved</text>
  <text x="1400" y="435" text-anchor="middle" class="agri-sublabel" fill="#10B981">76.47% Spearman ranking</text>
  <text x="1400" y="450" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Cross-validated</text>
  <text x="1400" y="465" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Production ready</text>
  <text x="1400" y="480" text-anchor="middle" class="agri-sublabel" fill="#9CA3AF">Interpretable insights</text>

  <!-- Key Insights Section -->
  <rect x="80" y="560" width="1440" height="130" rx="12" fill="#ECFDF5" stroke="#10B981" stroke-width="2" filter="url(#agriShadow)"/>
  <text x="800" y="590" text-anchor="middle" class="agri-label" fill="#065F46">Key Research Insights</text>

  <rect x="120" y="610" width="340" height="60" rx="8" fill="#10B981"/>
  <text x="290" y="635" text-anchor="middle" class="agri-metric">Afternoon Posts = 3x Engagement</text>
  <text x="290" y="655" text-anchor="middle" class="agri-sublabel" fill="#D1FAE5">Optimal posting time identified</text>

  <rect x="490" y="610" width="340" height="60" rx="8" fill="#8B5CF6"/>
  <text x="660" y="635" text-anchor="middle" class="agri-metric">Educational Content Wins</text>
  <text x="660" y="655" text-anchor="middle" class="agri-sublabel" fill="#EDE9FE">Higher engagement than promotional</text>

  <rect x="860" y="610" width="340" height="60" rx="8" fill="#3B82F6"/>
  <text x="1030" y="635" text-anchor="middle" class="agri-metric">18K+ Posts Analyzed</text>
  <text x="1030" y="655" text-anchor="middle" class="agri-sublabel" fill="#DBEAFE">160 farms analyzed</text>

  <rect x="1230" y="610" width="270" height="60" rx="8" fill="#F59E0B"/>
  <text x="1365" y="635" text-anchor="middle" class="agri-metric">29.44% R-squared</text>
  <text x="1365" y="655" text-anchor="middle" class="agri-sublabel" fill="#FEF3C7">92.07% NDCG@10</text>

  <!-- Technology Stack -->
  <rect x="80" y="740" width="1440" height="110" rx="12" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/>
  <text x="800" y="770" text-anchor="middle" class="agri-label">Technology Stack</text>

  <text x="200" y="800" text-anchor="middle" class="agri-sublabel">Python / Flask</text>
  <text x="400" y="800" text-anchor="middle" class="agri-sublabel">Facebook Graph API</text>
  <text x="600" y="800" text-anchor="middle" class="agri-sublabel">Raspberry Pi 5</text>
  <text x="800" y="800" text-anchor="middle" class="agri-sublabel">systemd</text>
  <text x="1000" y="800" text-anchor="middle" class="agri-sublabel">scikit-learn</text>
  <text x="1200" y="800" text-anchor="middle" class="agri-sublabel">XGBoost / LightGBM</text>
  <text x="1400" y="800" text-anchor="middle" class="agri-sublabel">pandas / numpy</text>

  <!-- Flow Arrows -->
  <line x1="480" y1="180" x2="540" y2="180" stroke="#10B981" stroke-width="3" marker-end="url(#agriArrow)"/>
  <line x1="940" y1="180" x2="1000" y2="180" stroke="#10B981" stroke-width="3" marker-end="url(#agriArrow)"/>
  <line x1="740" y1="280" x2="740" y2="330" stroke="#10B981" stroke-width="3" marker-end="url(#agriArrow)"/>
  <line x1="420" y1="510" x2="420" y2="560" stroke="#10B981" stroke-width="3" marker-end="url(#agriArrow)"/>
</svg>`
  },

  "flight-computer": {
    id: "flight-computer",
    title: "Model Rocket Flight Computer",
    subtitle: "Completed - Hardware + Software",
    description: "Custom flight computer built on proto board with SAMD21 microcontroller, 9-DOF IMU, barometric sensor, microSD logging, and buzzer. Features a 7-state flight state machine logging 15 telemetry channels at 100ms intervals.",
    detailedDescription: "A complete model rocket avionics system designed and built from scratch. The flight computer runs on a SAMD21 microcontroller with an ICM-20948 9-DOF IMU (accelerometer, gyroscope, magnetometer) and BME280 environmental sensor for temperature, pressure, and altitude. A 7-state flight state machine (IDLE, ARMED, LAUNCH, COAST, APOGEE, DESCENT, LANDED) detects launch via sustained acceleration >1.8g for 3 consecutive readings and identifies apogee through altitude delta detection. All telemetry is logged to microSD at 100ms intervals in CSV format with 15 data fields. Includes safety failsafes for sensor malfunction and a buzzer that plays a recovery melody on landing. A companion real-time IMU visualizer built in Processing renders the rocket's 3D orientation from serial data. The rocket body was fully CAD-designed and 3D printed.",
    status: "Completed",
    statusColor: "green",
    technologies: ["Arduino/SAMD21", "C++", "I2C", "ICM-20948 IMU", "BME280", "MicroSD", "Processing", "3D Printing"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Rocket,
    iconGradient: "from-red-500 to-orange-500",
    timeline: "2 months",
    teamSize: "Solo Project",
    highlights: [
      "7-state flight FSM with launch detection (>1.8g sustained) and apogee identification",
      "15 telemetry channels logged at 100ms intervals: acceleration, gyro, magnetometer, altitude, temperature",
      "Real-time 3D IMU visualizer built in Processing for orientation tracking",
      "Fully CAD-designed and 3D printed rocket body with custom avionics bay"
    ],
    features: [
      "SAMD21 microcontroller with ICM-20948 9-DOF IMU and BME280 barometric sensor",
      "Flight state machine: IDLE -> ARMED -> LAUNCH -> COAST -> APOGEE -> DESCENT -> LANDED",
      "MicroSD CSV logging with auto-generated filenames and 15 data fields per row",
      "Safety failsafes: timeout after 105s armed without launch, 2-min max flight duration",
      "Recovery buzzer with melody playback for locating landed rocket"
    ],
    challenges: [
      "I2C communication with ICM-20948 magnetometer via bank switching and auxiliary registers",
      "Reliable launch detection requiring sustained acceleration to prevent false triggers",
      "Proto board soldering and wiring of multiple I2C devices with power management"
    ],
    learnings: [
      "Embedded systems: I2C protocol, sensor fusion, and real-time data logging",
      "Flight state machine design with robust transition logic and failsafes",
      "3D printing and CAD design for functional aerospace applications",
      "Processing framework for real-time serial data visualization"
    ],
    architectureSvg: undefined
  },

  "space-radiation-research": {
    id: "space-radiation-research",
    title: "Space Radiation Research",
    subtitle: "Active Research - Hybrid Physics-ML",
    description: "Hybrid physics-ML framework for predicting cumulative radiation dose and cancer risk during long-duration spaceflight. Combines Badhwar-O'Neill GCR physics model with Random Forest ML, achieving 84% error reduction on lunar environment data.",
    detailedDescription: "Research project developing a comprehensive framework for predicting cumulative radiation dose and cancer risk exposure for long-duration spaceflight missions (ISS, Lunar Gateway, Mars transit). The hybrid approach combines the Badhwar-O'Neill 2020 GCR physics model as a baseline with Random Forest residual learning that corrects the physics predictions using 38 engineered features including solar indices, proton flux, rolling averages, and mission geometry. Trained on multi-source data: ISS RadLab (3,447 daily records), LRO CRaTER lunar dosimetry (212 records), MSL RAD deep space measurements (254 records), and OMNI2 solar indices (208,886 hourly records). Achieved 84% error reduction on lunar environment (CRaTER MAE: 16.07 to 2.58 cGy/day). Risk modeling uses ICRP 103/116 conversion factors and NASA NSCR framework for Excess Risk of Cancer estimation.",
    status: "In Progress",
    statusColor: "blue",
    technologies: ["Python", "XGBoost", "Random Forest", "Badhwar-O'Neill Model", "NASA APIs", "Streamlit", "pandas", "numpy"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Sparkles,
    iconGradient: "from-red-500 to-orange-500",
    timeline: "Ongoing",
    teamSize: "2-person Team",
    highlights: [
      "84% error reduction on lunar environment data (CRaTER MAE: 16.07 to 2.58 cGy/day)",
      "Hybrid physics-ML: Badhwar-O'Neill 2020 GCR model + Random Forest residual learning",
      "Multi-source data: ISS RadLab, LRO CRaTER, MSL RAD, OMNI2 solar indices",
      "38 engineered features: solar indices, proton flux, rolling averages, mission geometry",
      "Cancer risk modeling with ICRP 103/116 factors and NASA NSCR framework"
    ],
    features: [
      "Badhwar-O'Neill 2020 GCR physics baseline with solar modulation",
      "Random Forest residual learning that corrects physics model predictions",
      "Multi-environment support: LEO (ISS), Lunar, and Deep Space (Mars transit)",
      "Dose-to-risk conversion using ICRP tissue weighting and NASA NSCR cancer risk model",
      "Interactive Streamlit dashboard for mission simulation and dose visualization"
    ],
    challenges: [
      "LEO trapped radiation: physics model underpredicts ISS dose without Van Allen belt modeling",
      "Limited training data: only 218 samples with ground truth dose measurements across all environments",
      "Multi-environment generalization: models trained on solar cycle 24 data may not generalize"
    ],
    learnings: [
      "Physics-informed ML: residual learning outperforms pure data-driven approaches on small datasets",
      "Space radiation physics: GCR flux, solar modulation, shielding attenuation, and SPE events",
      "Multi-source data integration: aligning heterogeneous space mission datasets",
      "Cancer risk modeling frameworks used by NASA for astronaut health assessment"
    ],
    architectureSvg: undefined
  },

  "qbxr-senior-design": {
    id: "qbxr-senior-design",
    title: "QBXR Senior Design",
    subtitle: "In Progress - Senior Design Capstone",
    description: "ML system treating quarterback evaluation as a decision-representation problem. Transforms VR-based QB decisions into consistent, interpretable grades with adaptive coaching feedback.",
    detailedDescription: "Senior design capstone project developing a machine learning system that bridges subjective coaching evaluations with objective, data-driven grading for quarterback performance. The core innovation treats QB evaluation as a decision-representation problem, transforming VR-based quarterback decisions into consistent, interpretable grades and adaptive feedback for coaching staff. The system uses a config-driven architecture with configurable weights for explicit subjectivity modeling, batch re-scoring capability, and session-level QB Report Cards. Currently in Phase II-A: ingesting first real VR exports and reconciling planned data schema with actual data.",
    status: "In Progress",
    statusColor: "purple",
    technologies: ["Python", "Machine Learning", "VR Data Analysis", "YAML/JSON Config"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Zap,
    iconGradient: "from-purple-500 to-indigo-500",
    timeline: "2 semesters (Ongoing)",
    teamSize: "Senior Design Team",
    highlights: [
      "Decision-representation framework for objective QB evaluation from subjective VR data",
      "Config-driven grading engine with adjustable weights and batch re-scoring",
      "Phase II-A: ingesting first real VR data exports and validating schema",
      "Emphasis on coherence over accuracy: grades stable under small perturbations"
    ],
    features: [
      "Feature engineering with categorical, temporal, and normalized encodings",
      "Config-driven architecture (YAML/JSON) for weight adjustment and subjectivity modeling",
      "Data ingestion and validation system with error reporting",
      "Session-level summaries and QB Report Card output"
    ],
    challenges: [
      "Reconciling planned data schema with actual VR export formats and noise",
      "Modeling subjective coaching evaluations in an objective, repeatable way",
      "Ensuring grade stability and ranking coherence with limited initial data"
    ],
    learnings: [
      "Decision-representation as a framework for subjective-to-objective ML problems",
      "Config-driven ML systems for rapid iteration on grading weights",
      "Data validation and schema evolution when working with real-world VR exports"
    ],
    architectureSvg: undefined
  },

  "rover-challenge": {
    id: "rover-challenge",
    title: "University Rover Challenge - Project Storm",
    subtitle: "Early Development - UCF Robotics",
    description: "LIDAR-based terrain simulation for rover navigation using ROS2 and Gazebo. Processed real USGS LIDAR data from Southern Utah into heightmaps for realistic simulation environments.",
    detailedDescription: "Software contribution to UCF's University Rover Challenge team (Project Storm). Built a LIDAR-based heightmap simulation environment for rover navigation and terrain analysis. Processed USGS LIDAR point cloud data (6 tiles, ~198MB compressed) from Southern Utah into GeoTIFF rasters and PNG heightmaps, then integrated them into Gazebo simulation via ROS2. The ROS2 workspace includes a complete package with launch scripts, SDF world definitions, and heightmap terrain models with collision geometry for accurate rover navigation testing.",
    status: "Early Development",
    statusColor: "orange",
    technologies: ["ROS2", "Gazebo", "LIDAR", "Python", "SDF", "USGS Data"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Compass,
    iconGradient: "from-amber-500 to-orange-500",
    timeline: "Ongoing",
    teamSize: "Team Project",
    highlights: [
      "Processed real USGS LIDAR data (6 tiles, ~198MB) into Gazebo-compatible heightmaps",
      "ROS2 workspace with launch scripts, SDF world definitions, and terrain models",
      "Heightmap terrain with collision geometry for realistic rover navigation testing"
    ],
    features: [
      "USGS LIDAR point cloud to GeoTIFF to PNG heightmap processing pipeline",
      "Gazebo simulation environment with heightmap-based terrain and collision detection",
      "ROS2 launch system with configurable world file arguments",
      "1025x1025 pixel heightmap with 73 units of elevation variation"
    ],
    challenges: [
      "Processing and converting large LIDAR point clouds into simulation-ready heightmaps",
      "Configuring ROS2 and Gazebo integration with correct model paths and dependencies",
      "Ensuring heightmap resolution and scale accurately represent real terrain"
    ],
    learnings: [
      "ROS2 package structure, ament_cmake build system, and launch files",
      "Gazebo simulation with SDF model definitions and heightmap geometry",
      "Geospatial data processing: LIDAR point clouds, GeoTIFF, and coordinate systems"
    ],
    architectureSvg: undefined
  },

  "recommendation-system": {
    id: "recommendation-system",
    title: "Two-Tower Recommendation System",
    subtitle: "Completed - Deep Learning",
    description: "Two-tower neural collaborative filtering system built from scratch in PyTorch with FAISS indexing for sub-1ms inference. Trained on MovieLens with BPR loss, achieving 7.13% Recall@10.",
    detailedDescription: "Production-oriented recommendation engine using a two-tower neural architecture. The user tower encodes user ID + demographics (age, gender, occupation) and the item tower encodes item ID + genre features (18-19 flags), both producing 128-dim embeddings scored via dot product. Trained with Bayesian Personalized Ranking loss on MovieLens 100K (943 users, 1,682 movies). Features config-driven hyperparameters (YAML), factory pattern dataset loading supporting both MovieLens 100K and 1M, and FAISS IndexFlatIP for sub-1ms top-K retrieval at inference. Evolved over 20 commits from matrix factorization baseline to full two-tower with feature engineering.",
    status: "Completed",
    statusColor: "green",
    technologies: ["PyTorch", "FAISS", "Python", "NumPy", "pandas", "scikit-learn"],
    githubUrl: "https://github.com/Sammy-Dabbas",
    icon: Database,
    iconGradient: "from-cyan-500 to-blue-500",
    timeline: "1 month",
    teamSize: "Solo Project",
    highlights: [
      "Two-tower neural architecture with user demographics + item genre features",
      "Sub-1ms inference via FAISS inner product indexing over all item embeddings",
      "BPR pairwise ranking loss with temporal train-test split for realistic evaluation",
      "Config-driven (YAML) with factory pattern loaders for MovieLens 100K and 1M"
    ],
    features: [
      "User tower: embedding + age/gender/occupation features -> 128-dim output via 2-layer MLP",
      "Item tower: embedding + 18-19 genre multi-hot features -> 128-dim output via 2-layer MLP",
      "BPR training with negative sampling and Adam optimizer (lr=0.001, weight decay=0.0005)",
      "FAISS IndexFlatIP: pre-computed item embeddings for instant top-K retrieval",
      "Modular pipeline: train -> build_index -> serve with persistent .pth and .faiss artifacts"
    ],
    challenges: [
      "Designing effective feature engineering for sparse user demographics and multi-hot genre vectors",
      "Balancing embedding capacity vs overfitting on 100K interaction dataset",
      "Temporal split evaluation to prevent data leakage from future interactions"
    ],
    learnings: [
      "Two-tower architectures: independent encoding enables pre-computation and fast retrieval",
      "FAISS indexing for production-scale approximate nearest neighbor search",
      "BPR loss vs pointwise loss for implicit feedback recommendation",
      "Config-driven ML pipelines with factory patterns for dataset extensibility"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="950" viewBox="0 0 1600 950">
  <defs>
    <linearGradient id="ttCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06B6D4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#0891B2;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="ttBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2563EB;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="ttPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#8B5CF6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7C3AED;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="ttGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#10B981;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#059669;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="ttAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#D97706;stop-opacity:1" />
    </linearGradient>
    <filter id="ttShadow">
      <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#000" flood-opacity="0.15"/>
    </filter>
    <marker id="ttArrowCyan" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#06B6D4" />
    </marker>
    <marker id="ttArrowBlue" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#3B82F6" />
    </marker>
    <marker id="ttArrowPurple" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#8B5CF6" />
    </marker>
    <marker id="ttArrowGreen" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
      <path d="M0,0 L0,8 L10,4 z" fill="#10B981" />
    </marker>
  </defs>

  <style>
    .tt-title { font: 700 24px 'Segoe UI', sans-serif; fill: #1F2937; }
    .tt-subtitle { font: 400 14px 'Segoe UI', sans-serif; fill: #6B7280; }
    .tt-section { font: 600 16px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .tt-label { font: 600 13px 'Segoe UI', sans-serif; fill: #1F2937; }
    .tt-sublabel { font: 400 11px 'Segoe UI', sans-serif; fill: #6B7280; }
    .tt-dim { font: 700 11px 'Segoe UI', sans-serif; fill: #06B6D4; }
    .tt-metric-label { font: 600 12px 'Segoe UI', sans-serif; fill: #FFFFFF; }
    .tt-metric-value { font: 700 14px 'Segoe UI', sans-serif; fill: #FFFFFF; }
  </style>

  <!-- Background -->
  <rect width="1600" height="950" fill="#F9FAFB"/>

  <!-- Title -->
  <text x="800" y="40" text-anchor="middle" class="tt-title">Two-Tower Recommendation System Architecture</text>
  <text x="800" y="62" text-anchor="middle" class="tt-subtitle">PyTorch + FAISS | BPR Training | MovieLens 100K/1M | Config-Driven Pipeline</text>

  <!-- ==================== DATA LAYER ==================== -->
  <rect x="80" y="90" width="1440" height="120" rx="12" fill="url(#ttAmberGrad)" filter="url(#ttShadow)"/>
  <text x="800" y="115" text-anchor="middle" class="tt-section">Data Layer (MovieLens)</text>

  <rect x="110" y="130" width="200" height="65" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="210" y="152" text-anchor="middle" class="tt-label">User Data</text>
  <text x="210" y="168" text-anchor="middle" class="tt-sublabel">user_id, age, gender, occupation</text>
  <text x="210" y="183" text-anchor="middle" class="tt-sublabel">943 users (100K) / 6,040 (1M)</text>

  <rect x="340" y="130" width="200" height="65" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="440" y="152" text-anchor="middle" class="tt-label">Item Data</text>
  <text x="440" y="168" text-anchor="middle" class="tt-sublabel">item_id, 18 genre flags</text>
  <text x="440" y="183" text-anchor="middle" class="tt-sublabel">1,682 movies (100K) / 3,952 (1M)</text>

  <rect x="570" y="130" width="200" height="65" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="670" y="152" text-anchor="middle" class="tt-label">Interactions</text>
  <text x="670" y="168" text-anchor="middle" class="tt-sublabel">Ratings filtered >= 4 (positive)</text>
  <text x="670" y="183" text-anchor="middle" class="tt-sublabel">Temporal 80/20 train/test split</text>

  <rect x="800" y="130" width="200" height="65" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="900" y="152" text-anchor="middle" class="tt-label">BPR Sampling</text>
  <text x="900" y="168" text-anchor="middle" class="tt-sublabel">(user, pos_item, neg_item)</text>
  <text x="900" y="183" text-anchor="middle" class="tt-sublabel">Random negative sampling</text>

  <rect x="1030" y="130" width="220" height="65" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1140" y="152" text-anchor="middle" class="tt-label">Config (YAML)</text>
  <text x="1140" y="168" text-anchor="middle" class="tt-sublabel">embed=50, hidden=128, lr=0.001</text>
  <text x="1140" y="183" text-anchor="middle" class="tt-sublabel">batch=1024, epochs=10, seed=42</text>

  <rect x="1280" y="130" width="220" height="65" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1390" y="152" text-anchor="middle" class="tt-label">Factory Loader</text>
  <text x="1390" y="168" text-anchor="middle" class="tt-sublabel">Supports MovieLens 100K &amp; 1M</text>
  <text x="1390" y="183" text-anchor="middle" class="tt-sublabel">Config-driven dataset selection</text>

  <!-- ==================== USER TOWER (LEFT) ==================== -->
  <rect x="80" y="250" width="620" height="360" rx="12" fill="url(#ttCyanGrad)" filter="url(#ttShadow)"/>
  <text x="390" y="278" text-anchor="middle" class="tt-section">User Tower</text>

  <!-- Input features -->
  <rect x="110" y="295" width="130" height="80" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="175" y="315" text-anchor="middle" class="tt-label">user_id</text>
  <text x="175" y="332" text-anchor="middle" class="tt-sublabel">Embedding</text>
  <text x="175" y="348" text-anchor="middle" class="tt-dim">dim: 50</text>
  <text x="175" y="365" text-anchor="middle" class="tt-sublabel">943 users</text>

  <rect x="260" y="295" width="100" height="80" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="310" y="315" text-anchor="middle" class="tt-label">age</text>
  <text x="310" y="332" text-anchor="middle" class="tt-sublabel">Normalized</text>
  <text x="310" y="348" text-anchor="middle" class="tt-dim">dim: 1</text>
  <text x="310" y="365" text-anchor="middle" class="tt-sublabel">[0, 1]</text>

  <rect x="380" y="295" width="100" height="80" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="430" y="315" text-anchor="middle" class="tt-label">gender</text>
  <text x="430" y="332" text-anchor="middle" class="tt-sublabel">Embedding</text>
  <text x="430" y="348" text-anchor="middle" class="tt-dim">dim: 4</text>
  <text x="430" y="365" text-anchor="middle" class="tt-sublabel">vocab: 2</text>

  <rect x="500" y="295" width="130" height="80" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="565" y="315" text-anchor="middle" class="tt-label">occupation</text>
  <text x="565" y="332" text-anchor="middle" class="tt-sublabel">Embedding</text>
  <text x="565" y="348" text-anchor="middle" class="tt-dim">dim: 12</text>
  <text x="565" y="365" text-anchor="middle" class="tt-sublabel">vocab: 21</text>

  <!-- Concat -->
  <rect x="160" y="400" width="420" height="35" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="370" y="422" text-anchor="middle" class="tt-label">Concatenate: 50 + 1 + 4 + 12 = 67</text>

  <!-- FC layers -->
  <rect x="160" y="455" width="200" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="260" y="475" text-anchor="middle" class="tt-label">FC1 + ReLU</text>
  <text x="260" y="493" text-anchor="middle" class="tt-dim">67 -> 128</text>

  <rect x="380" y="455" width="200" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="480" y="475" text-anchor="middle" class="tt-label">FC2 (Output)</text>
  <text x="480" y="493" text-anchor="middle" class="tt-dim">128 -> 128</text>

  <!-- Output -->
  <rect x="250" y="530" width="220" height="45" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="360" y="550" text-anchor="middle" class="tt-label">User Embedding</text>
  <text x="360" y="566" text-anchor="middle" class="tt-dim">128-dimensional vector</text>

  <!-- User tower internal arrows -->
  <line x1="175" y1="375" x2="175" y2="400" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="310" y1="375" x2="310" y2="400" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="430" y1="375" x2="430" y2="400" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="565" y1="375" x2="565" y2="400" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="370" y1="435" x2="370" y2="455" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="360" y1="505" x2="360" y2="530" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>

  <!-- ==================== ITEM TOWER (RIGHT) ==================== -->
  <rect x="900" y="250" width="620" height="360" rx="12" fill="url(#ttBlueGrad)" filter="url(#ttShadow)"/>
  <text x="1210" y="278" text-anchor="middle" class="tt-section">Item Tower</text>

  <!-- Input features -->
  <rect x="960" y="295" width="220" height="80" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1070" y="315" text-anchor="middle" class="tt-label">item_id</text>
  <text x="1070" y="332" text-anchor="middle" class="tt-sublabel">Embedding</text>
  <text x="1070" y="348" text-anchor="middle" class="tt-dim">dim: 50</text>
  <text x="1070" y="365" text-anchor="middle" class="tt-sublabel">1,682 movies</text>

  <rect x="1210" y="295" width="260" height="80" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1340" y="315" text-anchor="middle" class="tt-label">genres (multi-hot)</text>
  <text x="1340" y="332" text-anchor="middle" class="tt-sublabel">Action, Comedy, Drama, ...</text>
  <text x="1340" y="348" text-anchor="middle" class="tt-dim">dim: 18</text>
  <text x="1340" y="365" text-anchor="middle" class="tt-sublabel">18 genre flags</text>

  <!-- Concat -->
  <rect x="1000" y="400" width="420" height="35" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1210" y="422" text-anchor="middle" class="tt-label">Concatenate: 50 + 18 = 68</text>

  <!-- FC layers -->
  <rect x="1000" y="455" width="200" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1100" y="475" text-anchor="middle" class="tt-label">FC1 + ReLU</text>
  <text x="1100" y="493" text-anchor="middle" class="tt-dim">68 -> 128</text>

  <rect x="1220" y="455" width="200" height="50" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1320" y="475" text-anchor="middle" class="tt-label">FC2 (Output)</text>
  <text x="1320" y="493" text-anchor="middle" class="tt-dim">128 -> 128</text>

  <!-- Output -->
  <rect x="1100" y="530" width="220" height="45" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1210" y="550" text-anchor="middle" class="tt-label">Item Embedding</text>
  <text x="1210" y="566" text-anchor="middle" class="tt-dim">128-dimensional vector</text>

  <!-- Item tower internal arrows -->
  <line x1="1070" y1="375" x2="1070" y2="400" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="1340" y1="375" x2="1340" y2="400" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="1210" y1="435" x2="1210" y2="455" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>
  <line x1="1210" y1="505" x2="1210" y2="530" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7"/>

  <!-- ==================== SCORING / DOT PRODUCT ==================== -->
  <rect x="580" y="640" width="440" height="80" rx="12" fill="url(#ttPurpleGrad)" filter="url(#ttShadow)"/>
  <text x="800" y="668" text-anchor="middle" class="tt-section">Dot Product Scoring</text>
  <rect x="620" y="683" width="360" height="28" rx="6" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="800" y="702" text-anchor="middle" class="tt-label">score = sum(user_emb * item_emb) -> scalar</text>

  <!-- Arrows from towers to dot product -->
  <path d="M360,575 L360,625 L580,665" stroke="#06B6D4" stroke-width="3" fill="none" marker-end="url(#ttArrowCyan)"/>
  <text x="380" y="620" class="tt-sublabel" fill="#06B6D4">128-d</text>

  <path d="M1210,575 L1210,625 L1020,665" stroke="#3B82F6" stroke-width="3" fill="none" marker-end="url(#ttArrowBlue)"/>
  <text x="1180" y="620" class="tt-sublabel" fill="#3B82F6">128-d</text>

  <!-- ==================== TRAINING FLOW (LEFT) ==================== -->
  <rect x="80" y="760" width="440" height="140" rx="12" fill="url(#ttGreenGrad)" filter="url(#ttShadow)"/>
  <text x="300" y="788" text-anchor="middle" class="tt-section">Training Pipeline</text>

  <rect x="110" y="800" width="180" height="85" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="200" y="822" text-anchor="middle" class="tt-label">BPR Loss</text>
  <text x="200" y="840" text-anchor="middle" class="tt-sublabel">-log sigmoid(pos - neg)</text>
  <text x="200" y="856" text-anchor="middle" class="tt-sublabel">Pairwise ranking objective</text>
  <text x="200" y="872" text-anchor="middle" class="tt-sublabel">Negative sampling per batch</text>

  <rect x="310" y="800" width="190" height="85" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="405" y="822" text-anchor="middle" class="tt-label">Adam Optimizer</text>
  <text x="405" y="840" text-anchor="middle" class="tt-sublabel">lr=0.001, decay=0.0005</text>
  <text x="405" y="856" text-anchor="middle" class="tt-sublabel">batch_size=1024</text>
  <text x="405" y="872" text-anchor="middle" class="tt-sublabel">10 epochs, seed=42</text>

  <!-- Arrow from dot product to training -->
  <path d="M690,720 L690,740 L520,770" stroke="#10B981" stroke-width="3" fill="none" marker-end="url(#ttArrowGreen)"/>
  <text x="580" y="748" class="tt-sublabel" fill="#10B981">pos/neg scores</text>

  <!-- ==================== INFERENCE FLOW (RIGHT) ==================== -->
  <rect x="1080" y="760" width="440" height="140" rx="12" fill="url(#ttPurpleGrad)" filter="url(#ttShadow)"/>
  <text x="1300" y="788" text-anchor="middle" class="tt-section">Inference (FAISS)</text>

  <rect x="1110" y="800" width="190" height="85" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1205" y="822" text-anchor="middle" class="tt-label">FAISS IndexFlatIP</text>
  <text x="1205" y="840" text-anchor="middle" class="tt-sublabel">All item embeddings indexed</text>
  <text x="1205" y="856" text-anchor="middle" class="tt-sublabel">Inner product similarity</text>
  <text x="1205" y="872" text-anchor="middle" class="tt-sublabel">Exact nearest neighbor</text>

  <rect x="1320" y="800" width="180" height="85" rx="8" fill="#FFFFFF" fill-opacity="0.95"/>
  <text x="1410" y="822" text-anchor="middle" class="tt-label">Top-K Retrieval</text>
  <text x="1410" y="840" text-anchor="middle" class="tt-sublabel">Sub-1ms query time</text>
  <text x="1410" y="856" text-anchor="middle" class="tt-sublabel">index.search(user, k=10)</text>
  <text x="1410" y="872" text-anchor="middle" class="tt-sublabel">Returns item_ids + scores</text>

  <!-- Arrow from dot product to inference -->
  <path d="M910,720 L910,740 L1080,770" stroke="#8B5CF6" stroke-width="3" fill="none" marker-end="url(#ttArrowPurple)"/>
  <text x="950" y="748" class="tt-sublabel" fill="#8B5CF6">item embeddings</text>

  <!-- ==================== DATA FLOW ARROWS ==================== -->
  <!-- Data to User Tower -->
  <line x1="210" y1="210" x2="210" y2="250" stroke="#F59E0B" stroke-width="3" marker-end="url(#ttArrowCyan)"/>
  <!-- Data to Item Tower -->
  <line x1="1140" y1="210" x2="1210" y2="250" stroke="#F59E0B" stroke-width="3" marker-end="url(#ttArrowBlue)"/>

  <!-- ==================== ARTIFACTS ==================== -->
  <rect x="580" y="760" width="440" height="60" rx="10" fill="#F3F4F6" stroke="#D1D5DB" stroke-width="2"/>
  <text x="800" y="785" text-anchor="middle" class="tt-label">Saved Artifacts</text>
  <text x="800" y="805" text-anchor="middle" class="tt-sublabel">two_tower_model.pth  |  item_index.faiss  |  config.yaml</text>

  <!-- Arrow from scoring to artifacts -->
  <line x1="800" y1="720" x2="800" y2="760" stroke="#9CA3AF" stroke-width="2" stroke-dasharray="5,5"/>

  <!-- ==================== METRICS FOOTER ==================== -->
  <rect x="580" y="840" width="440" height="60" rx="10" fill="#ECFDF5" stroke="#10B981" stroke-width="2"/>
  <text x="660" y="865" text-anchor="middle" class="tt-label">Recall@10</text>
  <text x="660" y="885" text-anchor="middle" class="tt-dim">7.13%</text>
  <text x="800" y="865" text-anchor="middle" class="tt-label">FAISS Query</text>
  <text x="800" y="885" text-anchor="middle" class="tt-dim">Sub-1ms</text>
  <text x="940" y="865" text-anchor="middle" class="tt-label">Embedding Dim</text>
  <text x="940" y="885" text-anchor="middle" class="tt-dim">128-d</text>
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
    purple: "bg-purple-400",
    blue: "bg-blue-500",
    teal: "bg-teal-400"
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

          {/* Image Gallery for projects with images array */}
          {project.images && project.images.length > 0 && (
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={`${import.meta.env.BASE_URL}${image}`}
                      alt={`${project.title} Screenshot ${index + 1}`}
                      className="rounded-xl border border-gray-200 shadow-md w-full h-auto object-contain cursor-pointer hover:shadow-xl transition-shadow"
                      onClick={() => window.open(`${import.meta.env.BASE_URL}${image}`, '_blank')}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-xl transition-all duration-300 pointer-events-none" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-2">Click any image to view full size</p>
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