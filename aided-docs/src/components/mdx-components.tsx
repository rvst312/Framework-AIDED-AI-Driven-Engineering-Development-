import React from 'react';
import { CodeBlock } from './CodeBlock';
import Mermaid from './Mermaid';

export const mdxComponents = {
  pre: ({ children, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    // Validar si es un bloque de código mermaid
    const child = children as React.ReactElement<{ className?: string; children?: React.ReactNode }>;
    if (React.isValidElement(child) && child.props.className?.includes('language-mermaid')) {
      // El contenido suele ser texto directo dentro de <code>
      const chart = child.props.children;
      if (typeof chart === 'string') {
        return <Mermaid chart={chart} />;
      }
    }
    return <CodeBlock {...props}>{children}</CodeBlock>;
  },
  Mermaid, // Permitir uso explícito también
};
