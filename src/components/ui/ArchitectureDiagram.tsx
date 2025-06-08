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

    // This ensures we don't add duplicate content on re-renders
    if (container.shadowRoot) {
      const processedSvg = svgString
        .replace(/width="1600"/g, 'width="100%"')
        .replace(/height="800"/g, 'height="100%"');
        
      container.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            height: 100%;
            overflow: auto; /* Add scrollbars if content overflows */
          }
          svg {
            display: block;
            min-width: 800px; /* Minimum width to avoid cramping */
            width: 100%;
            height: auto;
          }
        </style>
        ${processedSvg}
      `;
    }
  }, [svgString]);

  return <div ref={containerRef} />;
};

export default ArchitectureDiagram; 