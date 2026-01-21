'use client';

import { Maximize2, X } from 'lucide-react';
import mermaid from 'mermaid';
import { useEffect, useId, useState } from 'react';

// Inicializar mermaid una vez
if (typeof window !== 'undefined') {
  mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
      primaryColor: '#f1f5f9', // slate-100
      primaryTextColor: '#0f172a', // slate-900
      primaryBorderColor: '#cbd5e1', // slate-300
      lineColor: '#64748b', // slate-500
      secondaryColor: '#f8fafc', // slate-50
      tertiaryColor: '#ffffff', // white
    },
    securityLevel: 'loose',
    fontFamily: 'inherit',
    logLevel: 5, // Suppress logs
  });
}

interface MermaidProps {
  chart: string;
}

const Mermaid = ({ chart }: MermaidProps) => {
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  
  // Usar un ID único estable para este renderizado
  const uniqueId = useId();
  const id = `mermaid-${uniqueId.replace(/:/g, '')}`;

  useEffect(() => {
    if (chart && typeof window !== 'undefined') {
      try {
        mermaid.render(id, chart)
          .then(({ svg }) => {
            setSvg(svg);
            setError(null);
          })
          .catch((err) => {
            if (process.env.NODE_ENV === 'development') {
              console.warn('Mermaid rendering error:', err);
            }
            setError('Error al renderizar diagrama');
          });
      } catch (e) {
         if (process.env.NODE_ENV === 'development') {
           console.warn('Mermaid sync error:', e);
         }
         setTimeout(() => setError('Error inesperado en diagrama'), 0);
      }
    }
  }, [chart, id]);

  // Manejar tecla ESC para cerrar modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (error) {
    return (
      <div className="p-4 border border-red-200 bg-red-50 text-red-600 rounded">
        {error}
        <pre className="text-xs mt-2 overflow-auto">{chart}</pre>
      </div>
    );
  }

  // Renderizar un placeholder mientras se genera el SVG
  if (!svg) {
    return <div className="animate-pulse bg-gray-100 dark:bg-slate-800 h-24 rounded w-full flex items-center justify-center text-gray-400 text-sm">Cargando diagrama...</div>;
  }

  return (
    <>
      {/* Vista previa en el contenido */}
      <div 
        className="mermaid-chart group relative my-6 flex justify-center bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800 cursor-pointer transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-800"
        onClick={() => setIsOpen(true)}
      >
        <div className="overflow-x-auto w-full flex justify-center" dangerouslySetInnerHTML={{ __html: svg }} />
        
        {/* Indicador de zoom */}
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-slate-800 p-1.5 rounded-md shadow-sm border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400">
          <Maximize2 size={16} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 pointer-events-none bg-blue-500 rounded-lg transition-opacity" />
      </div>

      {/* Modal / Visualizador */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          {/* Botón cerrar */}
          <button 
            className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X size={24} className="text-gray-600 dark:text-gray-300" />
          </button>

          {/* Contenedor del SVG grande */}
          <div 
            className="w-full h-full flex items-center justify-center overflow-auto"
            onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer clic en el diagrama
          >
            <div 
              className="max-w-full max-h-full overflow-auto bg-white dark:bg-slate-900 p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-800"
              dangerouslySetInnerHTML={{ __html: svg }}
              style={{ minWidth: '50%', minHeight: '30%' }}
            />
          </div>
          
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md pointer-events-none">
            Presiona ESC para cerrar
          </div>
        </div>
      )}
    </>
  );
};

export default Mermaid;
