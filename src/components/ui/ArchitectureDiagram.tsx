import { useEffect, useRef } from 'react';

interface ArchitectureDiagramProps {
  svgString: string;
}

const ArchitectureDiagram = ({ svgString }: ArchitectureDiagramProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !svgString) return;

    // Use a shadow DOM to encapsulate styles
    if (!container.shadowRoot) {
      container.attachShadow({ mode: 'open' });
    }
    
    // Create a DOM parser to manipulate the SVG string
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgString, "image/svg+xml");
    const svgElement = svgDoc.documentElement;

    if (svgElement) {
      // Remove hardcoded width and height to allow CSS control
      svgElement.removeAttribute('width');
      svgElement.removeAttribute('height');

      if (container.shadowRoot) {
        // Clear previous content
        container.shadowRoot.innerHTML = '';
        
        // Inject CSS for responsive scaling
        const style = document.createElement('style');
        style.textContent = `
          :host {
            display: block;
            width: 100%;
          }
          .responsive-svg {
            width: 100%;
            height: auto;
            max-width: 1200px; /* Cap size on desktop */
            margin: 0 auto;
            display: block;
          }
          @media (max-width: 768px) {
            .responsive-svg {
              max-width: 100%; /* Allow full width on smaller screens */
            }
          }
        `;
        
        // Add a class to the SVG for styling
        svgElement.classList.add('responsive-svg');
        
        container.shadowRoot.appendChild(style);
        container.shadowRoot.appendChild(svgElement);
      }
    }
  }, [svgString]);

  return <div ref={containerRef} />;
};

export default ArchitectureDiagram; 