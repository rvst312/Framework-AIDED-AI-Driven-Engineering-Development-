'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Copy, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeBlockProps extends React.HTMLAttributes<HTMLPreElement> {
  children?: React.ReactNode;
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Extract the code content for copying
  const getCodeContent = () => {
    if (!contentRef.current) return '';
    return contentRef.current.innerText || '';
  };

  const handleCopy = async () => {
    const code = getCodeContent();
    if (code) {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  // Check content height to determine if we need the expand/collapse button
  useEffect(() => {
    if (contentRef.current) {
      const scrollHeight = contentRef.current.scrollHeight;
      // 300px is the threshold (approx 12-15 lines depending on line height)
      const shouldOverflow = scrollHeight > 300;
      if (shouldOverflow !== isOverflowing) {
        setIsOverflowing(shouldOverflow);
      }
    }
  }, [children, isOverflowing]);

  return (
    <div className="relative my-4 group rounded-lg border border-border bg-muted/40 overflow-hidden">
      {/* Header with Copy Button */}
      <div className="absolute right-2 top-2 z-10 flex items-center gap-2">
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-md hover:bg-background/80 bg-background/50 backdrop-blur-sm transition-colors border border-border/50"
          aria-label="Copy code"
        >
          {isCopied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Code Content */}
      <div
        className={cn(
          "overflow-hidden transition-[max-height] duration-300 ease-in-out relative",
          !isExpanded && isOverflowing ? "max-h-[300px]" : "max-h-none"
        )}
      >
        <div ref={contentRef} className="overflow-x-auto p-4 pt-10 text-sm">
          <pre className={cn("m-0", className)} {...props}>
            {children}
          </pre>
        </div>
        
        {/* Gradient overlay when collapsed */}
        {!isExpanded && isOverflowing && (
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
      </div>

      {/* Expand/Collapse Button */}
      {isOverflowing && (
        <div className="border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 p-1 flex justify-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground px-4 py-1.5 rounded-full hover:bg-background transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="h-3.5 w-3.5" />
                Mostrar menos
              </>
            ) : (
              <>
                <ChevronDown className="h-3.5 w-3.5" />
                Mostrar más
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
