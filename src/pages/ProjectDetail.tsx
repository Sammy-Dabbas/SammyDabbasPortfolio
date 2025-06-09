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
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs>
    <!-- Clean gradients -->
    <linearGradient id="firebaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFCA28;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#FF6F00;stop-opacity:0.02" />
    </linearGradient>
    
    <linearGradient id="clientGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563EB;stop-opacity:0.04" />
      <stop offset="100%" style="stop-color:#1D4ED8;stop-opacity:0.01" />
    </linearGradient>
    
    <linearGradient id="reactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#BBDEFB;stop-opacity:0.2" />
    </linearGradient>
    
    <linearGradient id="authGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF3E0;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#FFE0B2;stop-opacity:0.2" />
    </linearGradient>
    
    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8F5E9;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#C8E6C9;stop-opacity:0.2" />
    </linearGradient>

    <!-- Clean shadow filter -->
    <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="2" stdDeviation="4" flood-color="#000" flood-opacity="0.08"/>
    </filter>
    
    <filter id="iconShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="1" stdDeviation="2" flood-color="#000" flood-opacity="0.06"/>
    </filter>

    <!-- Arrow markers -->
    <marker id="primaryArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#2563EB" />
    </marker>
    
    <marker id="authArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#FF6F00" />
    </marker>
    
    <marker id="dataArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#10B981" />
    </marker>

    <!-- Clean, minimal icons -->
    <symbol id="i-admin" viewBox="0 0 48 48">
      <circle cx="24" cy="16" r="8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <path d="M8 40c0-12 8-16 16-16s16 4 16 16" fill="#E3F2FD" stroke="#2563EB" stroke-width="2"/>
      <rect x="18" y="10" width="12" height="8" fill="#2563EB" rx="2"/>
      <circle cx="24" cy="16" r="3" fill="#fff"/>
    </symbol>
    
    <symbol id="i-browser" viewBox="0 0 48 48">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="4" y="8" width="40" height="8" fill="#E3F2FD" rx="4"/>
      <circle cx="12" cy="12" r="2" fill="#2563EB"/>
      <circle cx="18" cy="12" r="2" fill="#10B981"/>
      <circle cx="24" cy="12" r="2" fill="#F59E0B"/>
      <rect x="8" y="20" width="32" height="2" fill="#93C5FD" rx="1"/>
      <rect x="8" y="24" width="24" height="2" fill="#DBEAFE" rx="1"/>
      <rect x="8" y="28" width="28" height="2" fill="#DBEAFE" rx="1"/>
    </symbol>
    
    <symbol id="i-react" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="4" fill="#2563EB"/>
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#2563EB" stroke-width="2" transform="rotate(120 24 24)"/>
      <ellipse cx="24" cy="24" rx="16" ry="6" fill="none" stroke="#2563EB" stroke-width="2" transform="rotate(240 24 24)"/>
      <circle cx="24" cy="24" r="2" fill="#fff"/>
    </symbol>
    
    <symbol id="i-router" viewBox="0 0 48 48">
      <rect x="8" y="16" width="32" height="16" rx="4" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="12" y="20" width="24" height="2" fill="#2563EB" rx="1"/>
      <rect x="12" y="24" width="16" height="2" fill="#93C5FD" rx="1"/>
      <rect x="12" y="28" width="20" height="2" fill="#DBEAFE" rx="1"/>
      <path d="M4 24 L8 24 M40 24 L44 24" stroke="#2563EB" stroke-width="2"/>
    </symbol>
    
    <symbol id="i-context" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="18" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <circle cx="24" cy="24" r="12" fill="#E3F2FD"/>
      <circle cx="24" cy="24" r="6" fill="#2563EB"/>
      <circle cx="24" cy="24" r="2" fill="#fff"/>
      <path d="M24 6 L24 12 M24 36 L24 42 M6 24 L12 24 M36 24 L42 24" stroke="#2563EB" stroke-width="2"/>
    </symbol>
    
    <symbol id="i-firebase" viewBox="0 0 48 48">
      <path d="M8 32 L24 8 L40 32 L24 40 Z" fill="#fff" stroke="#FF6F00" stroke-width="2"/>
      <path d="M8 32 L24 16 L40 32 L24 40 Z" fill="#FFCC02"/>
      <path d="M16 24 L24 8 L32 24 L24 32 Z" fill="#FF6F00"/>
      <circle cx="24" cy="24" r="3" fill="#fff"/>
    </symbol>
    
    <symbol id="i-auth" viewBox="0 0 48 48">
      <rect x="12" y="22" width="24" height="20" rx="4" fill="#fff" stroke="#FF6F00" stroke-width="2"/>
      <path d="M18 22 L18 14 Q18 8 24 8 Q30 8 30 14 L30 22" fill="none" stroke="#FF6F00" stroke-width="2"/>
      <circle cx="24" cy="32" r="3" fill="#FF6F00"/>
      <rect x="22.5" y="34" width="3" height="6" fill="#FF6F00" rx="1.5"/>
      <circle cx="12" cy="12" r="2" fill="#10B981"/>
      <circle cx="36" cy="12" r="2" fill="#10B981"/>
    </symbol>
    
    <symbol id="i-firestore" viewBox="0 0 48 48">
      <ellipse cx="24" cy="12" rx="18" ry="6" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="6" y="12" width="36" height="24" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <ellipse cx="24" cy="36" rx="18" ry="6" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="10" y="17" width="28" height="2" fill="#10B981" rx="1"/>
      <rect x="10" y="23" width="22" height="2" fill="#10B981" rx="1"/>
      <rect x="10" y="29" width="24" height="2" fill="#10B981" rx="1"/>
      <path d="M38 16 L42 16 M38 24 L42 24 M38 32 L42 32" stroke="#10B981" stroke-width="2"/>
    </symbol>
    
    <symbol id="i-storage" viewBox="0 0 48 48">
      <path d="M6 16h36l-4 20H10z" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="6" y="12" width="36" height="6" fill="#E8F5E9" stroke="#10B981" stroke-width="1.5"/>
      <circle cx="14" cy="15" r="1.5" fill="#10B981"/>
      <circle cx="20" cy="15" r="1.5" fill="#10B981"/>
      <circle cx="26" cy="15" r="1.5" fill="#10B981"/>
      <path d="M16 24 L32 24" stroke="#10B981" stroke-width="2"/>
      <path d="M16 28 L28 28" stroke="#10B981" stroke-width="2"/>
    </symbol>
    
    <symbol id="i-hosting" viewBox="0 0 48 48">
      <rect x="8" y="14" width="32" height="20" rx="4" fill="#fff" stroke="#FF6F00" stroke-width="2"/>
      <circle cx="24" cy="24" r="6" fill="#FFCC02" stroke="#FF6F00" stroke-width="1.5"/>
      <path d="M24 18 L24 30 M18 24 L30 24" stroke="#FF6F00" stroke-width="2"/>
      <circle cx="24" cy="24" r="2" fill="#fff"/>
      <path d="M12 8 L36 8 M12 40 L36 40" stroke="#FF6F00" stroke-width="2"/>
    </symbol>
    
    <symbol id="i-qr" viewBox="0 0 48 48">
      <rect x="8" y="8" width="32" height="32" rx="2" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="12" y="12" width="6" height="6" fill="#2563EB"/>
      <rect x="30" y="12" width="6" height="6" fill="#2563EB"/>
      <rect x="12" y="30" width="6" height="6" fill="#2563EB"/>
      <rect x="20" y="20" width="2" height="2" fill="#2563EB"/>
      <rect x="24" y="20" width="2" height="2" fill="#2563EB"/>
      <rect x="28" y="20" width="2" height="2" fill="#2563EB"/>
      <rect x="20" y="24" width="2" height="2" fill="#2563EB"/>
      <rect x="28" y="24" width="2" height="2" fill="#2563EB"/>
      <rect x="20" y="28" width="2" height="2" fill="#2563EB"/>
      <rect x="24" y="28" width="2" height="2" fill="#2563EB"/>
      <rect x="28" y="28" width="2" height="2" fill="#2563EB"/>
      <rect x="32" y="28" width="2" height="2" fill="#2563EB"/>
    </symbol>
    
    <symbol id="i-scanner" viewBox="0 0 48 48">
      <rect x="8" y="8" width="32" height="32" rx="4" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <circle cx="24" cy="24" r="8" fill="#E8F5E9" stroke="#10B981" stroke-width="1.5"/>
      <circle cx="24" cy="24" r="4" fill="#10B981"/>
      <path d="M16 16 L12 12 M32 16 L36 12 M16 32 L12 36 M32 32 L36 36" stroke="#10B981" stroke-width="2"/>
      <path d="M8 24 L16 24 M32 24 L40 24" stroke="#10B981" stroke-width="2"/>
    </symbol>
  </defs>

  <style>
    .title { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 18px; font-weight: 700; text-anchor: middle; fill: #1F2937; }
    .subtitle { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; fill: #374151; }
    .label { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 13px; font-weight: 500; text-anchor: middle; fill: #374151; }
    .sublabel { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 11px; text-anchor: middle; fill: #6B7280; }
    .flow-primary { fill: none; stroke: #2563EB; stroke-width: 2.5; marker-end: url(#primaryArrow); }
    .flow-auth { fill: none; stroke: #FF6F00; stroke-width: 2.5; stroke-dasharray: 6 3; marker-end: url(#authArrow); }
    .flow-data { fill: none; stroke: #10B981; stroke-width: 2; marker-end: url(#dataArrow); }
    .container { fill: none; stroke: #D1D5DB; stroke-width: 1.5; stroke-dasharray: 8 4; }
    .zone-client { fill: url(#reactGradient); stroke: #2563EB; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-auth { fill: url(#authGradient); stroke: #FF6F00; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-data { fill: url(#dataGradient); stroke: #10B981; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
  </style>

  <!-- Firebase Cloud Container -->
  <rect x="50" y="50" width="1500" height="800" fill="url(#firebaseGradient)" stroke="#FF6F00" stroke-width="2" rx="16" filter="url(#cardShadow)"/>
  <text class="title" x="800" y="80" fill="#FF6F00">Firebase Cloud Platform</text>

  <!-- Client Side Container -->
  <rect x="90" y="120" width="1420" height="200" fill="url(#clientGradient)" class="container" rx="12"/>
  <text class="subtitle" x="800" y="145" fill="#2563EB">Client-Side (React SPA)</text>

  <!-- React Application Zone -->
  <rect x="130" y="165" width="1340" height="130" class="zone-client"/>
  <text class="label" x="220" y="190" fill="#2563EB">React Application</text>

  <!-- Authentication Zone -->
  <rect x="130" y="350" width="720" height="140" class="zone-auth"/>
  <text class="label" x="220" y="385" fill="#FF6F00">Authentication Layer</text>

  <!-- Data Services Zone -->
  <rect x="890" y="350" width="580" height="280" class="zone-data"/>
  <text class="label" x="970" y="375" fill="#10B981">Data Services</text>

  <!-- Hosting Zone -->
  <rect x="130" y="660" width="720" height="140" class="zone-auth"/>
  <text class="label" x="220" y="685" fill="#FF6F00">Firebase Hosting</text>

  <!-- Client Components -->
  <g transform="translate(160, 200)" filter="url(#iconShadow)">
    <use href="#i-admin" width="50" height="50"/>
    <text class="label" x="25" y="65">Admin User</text>
    <text class="sublabel" x="25" y="77">Lab Manager</text>
  </g>

  <g transform="translate(260, 200)" filter="url(#iconShadow)">
    <use href="#i-browser" width="50" height="50"/>
    <text class="label" x="25" y="65">Web Browser</text>
    <text class="sublabel" x="25" y="77">Chrome/Firefox</text>
  </g>

  <g transform="translate(380, 195)" filter="url(#iconShadow)">
    <use href="#i-react" width="60" height="60"/>
    <text class="label" x="30" y="75">React App</text>
    <text class="sublabel" x="30" y="87">Components</text>
  </g>

  <g transform="translate(480, 200)" filter="url(#iconShadow)">
    <use href="#i-router" width="50" height="50"/>
    <text class="label" x="25" y="65">React Router</text>
    <text class="sublabel" x="25" y="77">Navigation</text>
  </g>

  <g transform="translate(580, 195)" filter="url(#iconShadow)">
    <use href="#i-context" width="60" height="60"/>
    <text class="label" x="30" y="75">Context API</text>
    <text class="sublabel" x="30" y="87">State Management</text>
  </g>

  <g transform="translate(720, 200)" filter="url(#iconShadow)">
    <use href="#i-qr" width="50" height="50"/>
    <text class="label" x="25" y="65">QR Generator</text>
    <text class="sublabel" x="25" y="77">Item Labels</text>
  </g>

  <g transform="translate(840, 200)" filter="url(#iconShadow)">
    <use href="#i-scanner" width="50" height="50"/>
    <text class="label" x="25" y="65">QR Scanner</text>
    <text class="sublabel" x="25" y="77">Camera Access</text>
  </g>

  <!-- Authentication Components -->
  <g transform="translate(180, 390)" filter="url(#iconShadow)">
    <use href="#i-firebase" width="50" height="50"/>
    <text class="label" x="25" y="65">Firebase SDK</text>
    <text class="sublabel" x="25" y="77">Client Library</text>
  </g>

  <g transform="translate(300, 390)" filter="url(#iconShadow)">
    <use href="#i-auth" width="50" height="50"/>
    <text class="label" x="25" y="65">Firebase Auth</text>
    <text class="sublabel" x="25" y="77">Admin Login</text>
  </g>

  <!-- Data Service Components -->
  <g transform="translate(930, 390)" filter="url(#iconShadow)">
    <use href="#i-firestore" width="50" height="50"/>
    <text class="label" x="25" y="65">Firestore</text>
    <text class="sublabel" x="25" y="77">NoSQL Database</text>
  </g>

  <g transform="translate(1050, 390)" filter="url(#iconShadow)">
    <use href="#i-storage" width="50" height="50"/>
    <text class="label" x="25" y="65">Firebase Storage</text>
    <text class="sublabel" x="25" y="77">Image Hosting</text>
  </g>

  <g transform="translate(1200, 390)" filter="url(#iconShadow)">
    <use href="#i-firestore" width="50" height="50"/>
    <text class="label" x="25" y="65">Collections</text>
    <text class="sublabel" x="25" y="77">items/students</text>
  </g>

  <g transform="translate(1350, 390)" filter="url(#iconShadow)">
    <use href="#i-firestore" width="50" height="50"/>
    <text class="label" x="25" y="65">Security Rules</text>
    <text class="sublabel" x="25" y="77">Access Control</text>
  </g>

  <g transform="translate(1100, 490)" filter="url(#iconShadow)">
    <use href="#i-firestore" width="50" height="50"/>
    <text class="label" x="25" y="65">Indexes</text>
    <text class="sublabel" x="25" y="77">Query Optimization</text>
  </g>

  <g transform="translate(1250, 490)" filter="url(#iconShadow)">
    <use href="#i-firestore" width="50" height="50"/>
    <text class="label" x="25" y="65">Transactions</text>
    <text class="sublabel" x="25" y="77">Audit Logs</text>
  </g>

  <!-- Hosting Components -->
  <g transform="translate(200, 700)" filter="url(#iconShadow)">
    <use href="#i-hosting" width="50" height="50"/>
    <text class="label" x="25" y="65">Firebase Hosting</text>
    <text class="sublabel" x="25" y="77">CDN Deploy</text>
  </g>

  <g transform="translate(350, 700)" filter="url(#iconShadow)">
    <use href="#i-browser" width="50" height="50"/>
    <text class="label" x="25" y="65">Build Process</text>
    <text class="sublabel" x="25" y="77">React Build</text>
  </g>

  <!-- Primary Flow Lines -->
  <path d="M210,225 L260,225" class="flow-primary"/>
  <path d="M310,225 L380,225" class="flow-primary"/>
  <path d="M440,225 L480,225" class="flow-primary"/>
  <path d="M530,225 L580,225" class="flow-primary"/>
  <path d="M640,225 L720,225" class="flow-primary"/>
  <path d="M770,225 L840,225" class="flow-primary"/>

  <!-- Authentication Flow -->
  <path d="M205,250 L205,375" class="flow-auth"/>
  <path d="M230,415 L300,415" class="flow-auth"/>
  <path d="M325,390 L325,320 L610,320 L610,285" class="flow-auth"/>

  <!-- Data Flow -->
  <path d="M610,290 L610,320 L925,320 L927,415" class="flow-data"/>
  <path d="M980,415 L1050,415" class="flow-data"/>
  <path d="M1100,415 L1200,415" class="flow-data"/>
  <path d="M1250,415 L1350,415" class="flow-data"/>
  <path d="M1125,440 L1125,490" class="flow-data"/>
  <path d="M1275,440 L1275,490" class="flow-data"/>

  <!-- Hosting Flow -->
  <path d="M285,250 L285,320 L135,320 L140,730" class="flow-auth"/>
  <path d="M250,725 L350,725" class="flow-auth"/>

  <!-- Feature Labels -->
  <text class="sublabel" x="230" y="215" fill="#2563EB">User Access</text>
  <text class="sublabel" x="345" y="215" fill="#2563EB">UI Render</text>
  <text class="sublabel" x="460" y="215" fill="#2563EB">Routing</text>
  <text class="sublabel" x="560" y="215" fill="#2563EB">State</text>
  <text class="sublabel" x="680" y="215" fill="#2563EB">QR Code</text>
  <text class="sublabel" x="805" y="215" fill="#2563EB">Scanning</text>

  <!-- Service Labels -->
  <text class="sublabel" x="265" y="405" fill="#FF6F00">Auth SDK</text>
  <text class="sublabel" x="1000" y="405" fill="#10B981">Database</text>
  <text class="sublabel" x="1125" y="405" fill="#10B981">Files</text>
  <text class="sublabel" x="1275" y="405" fill="#10B981">Schema</text>
  <text class="sublabel" x="1420" y="405" fill="#10B981">Security</text>

  <!-- Deployment Labels -->
  <text class="sublabel" x="300" y="715" fill="#FF6F00">Deploy</text>

  <!-- Performance Indicators -->
  <circle cx="410" cy="180" r="6" fill="#10B981"/>
  <text class="sublabel" x="465" y="185" fill="#10B981">SPA Performance</text>
  
  <circle cx="955" cy="340" r="6" fill="#F59E0B"/>
  <text class="sublabel" x="1010" y="345" fill="#F59E0B">Real-time Updates</text>
  
  <circle cx="225" cy="650" r="6" fill="#2563EB"/>
  <text class="sublabel" x="280" y="655" fill="#2563EB">Global CDN</text>

  <!-- Architecture Notes -->
  <text class="sublabel" x="800" y="560" fill="#6B7280">Firebase BaaS Architecture - Serverless Backend</text>
  <text class="sublabel" x="800" y="580" fill="#6B7280">React SPA with Firebase SDK for real-time data synchronization</text>
  <text class="sublabel" x="800" y="600" fill="#6B7280">QR Code integration for efficient lab equipment tracking</text>
</svg>`
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
    title: "SimpleTrain GPU Training Platform",
    subtitle: "Cloud & Systems Development",
    description: "A CLI tool to simplify GPU-intensive model training on a managed Kubernetes cluster, increasing developer productivity by abstracting infrastructure complexities.",
    detailedDescription: "SimpleTrain is a command-line interface designed to streamline the process of training machine learning models on a Kubernetes-managed GPU cluster. It provides simple commands to start, monitor, and manage training jobs, handling the complexities of Docker image selection, resource allocation, and job lifecycle management in the background.",
    status: "In Development",
    statusColor: "blue",
    technologies: ["Node.js", "Express", "Kubernetes", "Docker", "PostgreSQL", "JWT", "Django"],
    githubUrl: "https://github.com/Sammy-Dabbas/simple-train",
    icon: Server,
    iconGradient: "from-blue-500 to-indigo-600",
    timeline: "Ongoing",
    teamSize: "Solo Project",
    highlights: [
      "Simplified CLI for complex Kubernetes job management",
      "Automated Docker image handling and pod creation",
      "Secure API with JWT-based authentication",
      "Real-time log streaming from training pods"
    ],
    features: [
      "Start and stop training jobs via CLI",
      "List all active training jobs",
      "Stream logs from any running job",
      "User authentication and authorization",
      "Persistent job metadata storage",
      "Automated resource cleanup on job completion"
    ],
    challenges: [
      "Interfacing with the Kubernetes API programmatically",
      "Ensuring secure and isolated multi-tenant job execution",
      "Managing state and metadata for asynchronous training jobs",
      "Streaming logs and events efficiently over a web API"
    ],
    learnings: [
      "In-depth Kubernetes API and client library usage",
      "Designing secure, token-based authentication systems (JWT)",
      "Building robust and user-friendly CLI tools",
      "System design for distributed and asynchronous workloads"
    ],
    architectureSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900"> 
  <defs>
    <!-- Clean gradients -->
    <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563EB;stop-opacity:0.06" />
      <stop offset="100%" style="stop-color:#2563EB;stop-opacity:0.02" />
    </linearGradient>
    
    <linearGradient id="k8sGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#326CE5;stop-opacity:0.04" />
      <stop offset="100%" style="stop-color:#326CE5;stop-opacity:0.01" />
    </linearGradient>
    
    <linearGradient id="apiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#E3F2FD;stop-opacity:0.2" />
    </linearGradient>
    
    <linearGradient id="workloadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8F5E9;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#E8F5E9;stop-opacity:0.2" />
    </linearGradient>
    
    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#FFF3E0;stop-opacity:0.6" />
      <stop offset="100%" style="stop-color:#FFF3E0;stop-opacity:0.2" />
    </linearGradient>

    <linearGradient id="auxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8F5E9;stop-opacity:0.4" />
      <stop offset="100%" style="stop-color:#E8F5E9;stop-opacity:0.1" />
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
    
    <marker id="k8sArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#326CE5" />
    </marker>
    
    <marker id="auxArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#10B981" />
    </marker>
    
    <marker id="dataArrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L8,3 z" fill="#F59E0B" />
    </marker>

    <!-- Clean, minimal icons -->
    <symbol id="i-cli" viewBox="0 0 48 48">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#000" stroke="#2563EB" stroke-width="2"/>
      <text x="8" y="20" fill="#00FF00" font-family="monospace" font-size="8">$</text>
      <text x="12" y="20" fill="#00FF00" font-family="monospace" font-size="6">simpletrain</text>
      <rect x="6" y="30" width="8" height="1" fill="#00FF00"/>
      <rect x="6" y="32" width="12" height="1" fill="#00FF00"/>
    </symbol>
    
    <symbol id="i-django" viewBox="0 0 48 48">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="10" y="14" width="28" height="4" fill="#10B981" rx="2"/>
      <rect x="10" y="20" width="22" height="3" fill="#34D399" rx="1.5"/>
      <rect x="10" y="26" width="18" height="3" fill="#6EE7B7" rx="1.5"/>
      <circle cx="38" cy="17" r="2" fill="#EF4444"/>
      <path d="M16 32 Q24 28 32 32" fill="none" stroke="#10B981" stroke-width="2"/>
    </symbol>
    
    <symbol id="i-express" viewBox="0 0 48 48">
      <rect x="4" y="10" width="40" height="28" rx="4" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="10" y="16" width="28" height="3" fill="#2563EB" rx="1.5"/>
      <rect x="10" y="22" width="22" height="3" fill="#93C5FD" rx="1.5"/>
      <rect x="10" y="28" width="16" height="3" fill="#DBEAFE" rx="1.5"/>
      <circle cx="38" cy="17" r="1.5" fill="#10B981"/>
      <text x="12" y="35" fill="#2563EB" font-family="monospace" font-size="6">API</text>
    </symbol>
    
    <symbol id="i-jwt" viewBox="0 0 48 48">
      <rect x="12" y="18" width="24" height="12" rx="4" fill="#fff" stroke="#F59E0B" stroke-width="2"/>
      <path d="M18 18 L18 12 Q18 8 24 8 Q30 8 30 12 L30 18" fill="none" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="24" cy="24" r="2" fill="#F59E0B"/>
      <text x="14" y="40" fill="#F59E0B" font-family="monospace" font-size="6">JWT</text>
    </symbol>
    
    <symbol id="i-k8s" viewBox="0 0 48 48">
      <circle cx="24" cy="24" r="18" fill="#fff" stroke="#326CE5" stroke-width="2"/>
      <circle cx="24" cy="24" r="3" fill="#326CE5"/>
      <path d="M24 10 L28 18 L24 24 L20 18 Z" fill="#326CE5"/>
      <path d="M38 24 L30 28 L24 24 L30 20 Z" fill="#326CE5"/>
      <path d="M24 38 L20 30 L24 24 L28 30 Z" fill="#326CE5"/>
      <path d="M10 24 L18 20 L24 24 L18 28 Z" fill="#326CE5"/>
    </symbol>
    
    <symbol id="i-pod" viewBox="0 0 48 48">
      <rect x="8" y="12" width="32" height="24" rx="4" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="12" y="16" width="8" height="6" fill="#E8F5E9" stroke="#10B981" stroke-width="1" rx="1"/>
      <rect x="28" y="16" width="8" height="6" fill="#E8F5E9" stroke="#10B981" stroke-width="1" rx="1"/>
      <rect x="12" y="26" width="24" height="6" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1" rx="1"/>
      <text x="18" y="30" fill="#F59E0B" font-family="monospace" font-size="6">GPU</text>
    </symbol>
    
    <symbol id="i-postgres" viewBox="0 0 48 48">
      <ellipse cx="24" cy="14" rx="19" ry="8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="6" y="14" width="37" height="20" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <ellipse cx="24" cy="35" rx="19" ry="8" fill="#fff" stroke="#2563EB" stroke-width="2"/>
      <rect x="10" y="20" width="29" height="2" fill="#2563EB" rx="1"/>
      <rect x="10" y="26" width="29" height="2" fill="#2563EB" rx="1"/>
      <text x="9" y="37" fill="#2563EB" font-family="monospace" font-size="6">PostgreSQL</text>
    </symbol>
    
    <symbol id="i-logs" viewBox="0 0 48 48">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#fff" stroke="#10B981" stroke-width="2"/>
      <rect x="8" y="14" width="32" height="2" fill="#10B981" rx="1"/>
      <rect x="8" y="18" width="28" height="2" fill="#34D399" rx="1"/>
      <rect x="8" y="22" width="24" height="2" fill="#6EE7B7" rx="1"/>
      <rect x="8" y="26" width="30" height="2" fill="#10B981" rx="1"/>
      <rect x="8" y="30" width="26" height="2" fill="#34D399" rx="1"/>
      <rect x="8" y="34" width="20" height="2" fill="#6EE7B7" rx="1"/>
    </symbol>
    
    <symbol id="i-metrics" viewBox="0 0 48 48">
      <rect x="4" y="8" width="40" height="32" rx="4" fill="#fff" stroke="#F59E0B" stroke-width="2"/>
      <path d="M8 32 L12 28 L16 30 L20 24 L24 26 L28 20 L32 18 L36 22 L40 16" 
            fill="none" stroke="#F59E0B" stroke-width="2"/>
      <circle cx="12" cy="28" r="1.5" fill="#F59E0B"/>
      <circle cx="20" cy="24" r="1.5" fill="#F59E0B"/>
      <circle cx="28" cy="20" r="1.5" fill="#F59E0B"/>
      <circle cx="36" cy="22" r="1.5" fill="#F59E0B"/>
    </symbol>
  </defs>

  <style>
    .title { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 18px; font-weight: 700; text-anchor: middle; fill: #1F2937; }
    .zone-title { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 14px; font-weight: 600; text-anchor: middle; fill: #374151; }
    .label { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 12px; font-weight: 500; text-anchor: middle; fill: #374151; }
    .sublabel { font-family: 'Segoe UI', system-ui, sans-serif; font-size: 10px; text-anchor: middle; fill: #6B7280; }
    .flow-primary { fill: none; stroke: #2563EB; stroke-width: 2.5; marker-end: url(#primaryArrow); }
    .flow-k8s { fill: none; stroke: #326CE5; stroke-width: 2.5; marker-end: url(#k8sArrow); }
    .flow-aux { fill: none; stroke: #10B981; stroke-width: 2.5; stroke-dasharray: 6 3; marker-end: url(#auxArrow); }
    .flow-data { fill: none; stroke: #F59E0B; stroke-width: 2; stroke-dasharray: 4 2; marker-end: url(#dataArrow); }
    .container { fill: none; stroke: #D1D5DB; stroke-width: 1.5; stroke-dasharray: 8 4; }
    .zone-api { fill: url(#apiGradient); stroke: #2563EB; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-workload { fill: url(#workloadGradient); stroke: #10B981; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-data { fill: url(#dataGradient); stroke: #F59E0B; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
    .zone-aux { fill: url(#auxGradient); stroke: #10B981; stroke-width: 1.5; stroke-dasharray: 6 3; rx: 12; }
  </style>

  <!-- Cloud Container -->
  <rect x="50" y="50" width="1500" height="800" fill="url(#cloudGradient)" stroke="#2563EB" stroke-width="2" rx="16" filter="url(#cardShadow)"/>
  <text class="title" x="800" y="75" fill="#2563EB">SimpleTrain System Architecture</text>

  <!-- Kubernetes Cluster Container -->
  <rect x="90" y="100" width="1420" height="720" fill="url(#k8sGradient)" class="container" rx="12"/>
  <text class="zone-title" x="800" y="125" fill="#326CE5">Kubernetes Cluster</text>

  <!-- API Layer Zone -->
  <rect x="130" y="150" width="1340" height="120" class="zone-api"/>
  <text class="zone-title" x="246" y="175" fill="#2563EB">API Layer</text>

  <!-- Workload Zone -->
  <rect x="130" y="300" width="900" height="200" class="zone-workload"/>
  <text class="zone-title" x="210" y="325" fill="#10B981">Training Workloads</text>

  <!-- Data and Support Zone -->
  <rect x="1080" y="300" width="390" height="200" class="zone-data"/>
  <text class="zone-title" x="1160" y="325" fill="#F59E0B">Data and Support</text>

  <!-- Monitoring Zone -->
  <rect x="130" y="540" width="650" height="120" class="zone-aux"/>
  <text class="zone-title" x="210" y="565" fill="#10B981">Monitoring and Logs</text>

  <!-- Client Interface -->
  <g transform="translate(120, 50)" filter="url(#iconShadow)">
    <use href="#i-cli" width="60" height="60"/>
    <text class="label" x="20" y="75">CLI Interface</text>
    <text class="sublabel" x="20" y="87">simpletrain/cli</text>
  </g>

  <!-- API Layer Components -->
  <g transform="translate(170, 185)" filter="url(#iconShadow)">
    <use href="#i-django" width="60" height="60"/>
    <text class="label" x="30" y="70">Django Auth</text>
    <text class="sublabel" x="30" y="82">User Management</text>
  </g>

  <g transform="translate(320, 185)" filter="url(#iconShadow)">
    <use href="#i-express" width="60" height="60"/>
    <text class="label" x="30" y="70">Express API</text>
    <text class="sublabel" x="30" y="82">Gateway</text>
  </g>

  <g transform="translate(470, 185)" filter="url(#iconShadow)">
    <use href="#i-jwt" width="60" height="60"/>
    <text class="label" x="30" y="70">JWT Middleware</text>
    <text class="sublabel" x="30" y="82">Auth Verification</text>
  </g>

  <g transform="translate(620, 185)" filter="url(#iconShadow)">
    <use href="#i-k8s" width="60" height="70"/>
    <text class="label" x="30" y="72">K8s Client</text>
    <text class="sublabel" x="30" y="82">@kubernetes/client</text>
  </g>

  <!-- Kubernetes Control Plane -->
  <g transform="translate(900, 185)" filter="url(#iconShadow)">
    <use href="#i-k8s" width="80" height="80"/>
    <text class="label" x="55" y="98">K8s Control Plane</text>
    <text class="sublabel" x="45" y="125">API Server</text>
  </g>

  <!-- Training Workloads -->
  <g transform="translate(170, 340)" filter="url(#iconShadow)">
    <use href="#i-pod" width="70" height="70"/>
    <text class="label" x="35" y="85">GPU Training Pod</text>
    <text class="sublabel" x="35" y="97">PyTorch/TensorFlow</text>
  </g>

  <g transform="translate(300, 340)" filter="url(#iconShadow)">
    <use href="#i-pod" width="70" height="70"/>
    <text class="label" x="35" y="85">GPU Training Pod</text>
    <text class="sublabel" x="35" y="97">Custom Images</text>
  </g>

  <g transform="translate(430, 340)" filter="url(#iconShadow)">
    <use href="#i-pod" width="70" height="70"/>
    <text class="label" x="35" y="85">GPU Training Pod</text>
    <text class="sublabel" x="35" y="97">Auto-scaling</text>
  </g>

  <!-- Job Management -->
  <g transform="translate(600, 340)" filter="url(#iconShadow)">
    <use href="#i-k8s" width="60" height="60"/>
    <text class="label" x="30" y="75">Deployments</text>
    <text class="sublabel" x="30" y="87">Job Orchestration</text>
  </g>

  <g transform="translate(750, 340)" filter="url(#iconShadow)">
    <use href="#i-k8s" width="60" height="60"/>
    <text class="label" x="30" y="75">Services</text>
    <text class="sublabel" x="30" y="87">Network Access</text>
  </g>

  <!-- Data and Support -->
  <g transform="translate(1120, 340)" filter="url(#iconShadow)">
    <use href="#i-postgres" width="70" height="70"/>
    <text class="label" x="35" y="85">PostgreSQL</text>
    <text class="sublabel" x="35" y="97">Metadata Store</text>
  </g>

  <g transform="translate(1280, 340)" filter="url(#iconShadow)">
    <use href="#i-django" width="60" height="60"/>
    <text class="label" x="30" y="75">Django ORM</text>
    <text class="sublabel" x="30" y="87">Data Layer</text>
  </g>

  <!-- Monitoring -->
  <g transform="translate(170, 575)" filter="url(#iconShadow)">
    <use href="#i-logs" width="60" height="60"/>
    <text class="label" x="15" y="65">Log Aggregator</text>
    <text class="sublabel" x="15" y="79">ELK/CloudWatch</text>
  </g>

  <g transform="translate(320, 575)" filter="url(#iconShadow)">
    <use href="#i-metrics" width="60" height="60"/>
    <text class="label" x="30" y="70">Metrics</text>
    <text class="sublabel" x="43" y="80">Prometheus/Grafana</text>
  </g>

  <!-- Primary Flow: Authentication and Job Creation -->
  <path d="M163,80 L200,185" class="flow-primary"/>
  <path d="M230,215 L320,215" class="flow-primary"/>
  <path d="M380,215 L470,215" class="flow-primary"/>
  <path d="M530,215 L620,215" class="flow-primary"/>
  <path d="M680,215 L900,215" class="flow-k8s"/>

  <!-- Kubernetes Operations -->
  <path d="M940,245 L630,340" class="flow-k8s"/>
  <path d="M940,245 L780,340" class="flow-k8s"/>
  <path d="M940,245 L205,340" class="flow-k8s"/>
  <path d="M940,245 L335,340" class="flow-k8s"/>
  <path d="M940,245 L465,340" class="flow-k8s"/>

  <!-- Data Flow -->
  <path d="M1310,185 L1310,340" class="flow-data"/>
  <path d="M1155,340 L1280,340" class="flow-data"/>

  <!-- Monitoring Flow -->
  <path d="M205,445 L205,545" class="flow-aux"/>
  <path d="M335,445 L335,575" class="flow-aux"/>
  <path d="M465,445 L350,575" class="flow-aux"/>

  <!-- Response Flow (dashed back) -->
  <path d="M900,225 L680,225" class="flow-k8s" stroke-dasharray="6 3" opacity="0.6"/>
  <path d="M620,225 L530,225" class="flow-primary" stroke-dasharray="6 3" opacity="0.6"/>
  <path d="M470,225 L380,225" class="flow-primary" stroke-dasharray="6 3" opacity="0.6"/>
  <path d="M320,225 L230,225" class="flow-primary" stroke-dasharray="6 3" opacity="0.6"/>
  <path d="M200,225 L150,90" class="flow-primary" stroke-dasharray="6 3" opacity="0.6"/>

  <!-- Flow Labels -->
  <text class="sublabel" x="215" y="140" fill="#2563EB">Login/Auth</text>
  <text class="sublabel" x="275" y="205" fill="#2563EB">JWT Token</text>
  <text class="sublabel" x="425" y="205" fill="#2563EB">Verify</text>
  <text class="sublabel" x="575" y="205" fill="#2563EB">K8s API</text>
  <text class="sublabel" x="790" y="205" fill="#326CE5">Job Request</text>

  <!-- API Endpoints -->
  <text class="sublabel" x="350" y="165" fill="#2563EB">POST /api/jobs</text>
  <text class="sublabel" x="450" y="165" fill="#2563EB">GET /api/jobs</text>
  <text class="sublabel" x="580" y="165" fill="#2563EB">GET /api/jobs/:name/logs</text>
  <text class="sublabel" x="720" y="165" fill="#2563EB">DELETE /api/jobs/:name</text>

  <!-- Performance Indicators -->
  <circle cx="520" cy="140" r="6" fill="#10B981"/>
  <text class="sublabel" x="580" y="145" fill="#10B981">JWT Secured</text>
  
  <circle cx="750" cy="140" r="6" fill="#F59E0B"/>
  <text class="sublabel" x="820" y="145" fill="#F59E0B">GPU Optimized</text>

  <circle cx="1000" cy="140" r="6" fill="#326CE5"/>
  <text class="sublabel" x="1080" y="145" fill="#326CE5">Auto-scaling</text>

  <!-- Additional Labels -->
  <text class="sublabel" x="940" y="325" fill="#326CE5">Creates Pods</text>
  <text class="sublabel" x="940" y="340" fill="#326CE5">Manages Resources</text>
  <text class="sublabel" x="940" y="360" fill="#326CE5">Fetches Logs</text>

  <text class="sublabel" x="1220" y="380" fill="#F59E0B">User Data</text>
  <text class="sublabel" x="1220" y="395" fill="#F59E0B">Job Metadata</text>
  <text class="sublabel" x="1220" y="410" fill="#F59E0B">Presets</text>

  <text class="sublabel" x="270" y="620" fill="#10B981">Training Logs</text>
  <text class="sublabel" x="270" y="635" fill="#10B981">System Metrics</text>
  <text class="sublabel" x="273" y="650" fill="#10B981">Performance Data</text>
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
    liveUrl: "https://sammy-dabbas.netlify.app",
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