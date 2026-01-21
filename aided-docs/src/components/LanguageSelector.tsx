"use client";

import { Check, Globe } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export function LanguageSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  // Extract current locale from pathname (assuming /es/... or /en/...)
  // Default to 'es' if not found
  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'es';

  const languages = [
    { code: 'es', name: 'Español' },
    { code: 'en', name: 'English' }
  ];

  const handleLanguageChange = (locale: string) => {
    const segments = pathname.split('/');
    // segments[0] is empty string because pathname starts with /
    // segments[1] is the locale if it exists, or the first path segment
    
    if (segments[1] === 'es' || segments[1] === 'en') {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
        aria-label="Select Language"
      >
        <Globe className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-lg py-1 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 flex items-center justify-between"
            >
              {lang.name}
              {currentLocale === lang.code && (
                <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
