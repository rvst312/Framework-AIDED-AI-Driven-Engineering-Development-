"use client";

import { getMenuNavigation, getPrimaryNavigation, NavigationItem } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import { ChevronRight, FileText, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeToggle } from "./ThemeToggle";

export function Sidebar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Extract locale
  const currentLocale = pathname.split('/')[1] === 'en' ? 'en' : 'es';

  const primaryNavigation = getPrimaryNavigation(currentLocale);
  const menuNavigation = getMenuNavigation(currentLocale);

  // Close sidebar on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "f") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredMenu = menuNavigation.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* Mobile Header Trigger */}
      <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-colors">
            <FileText className="text-white dark:text-black w-5 h-5 transition-colors" />
          </div>
          <span className="font-bold text-sm text-gray-900 dark:text-white transition-colors">AIDED Framework</span>
        </div>
        <button 
          onClick={() => setIsOpen(true)} 
          className="p-2 -mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <aside className={cn(
        "w-72 bg-gray-50 dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 flex flex-col transition-all duration-300 ease-in-out",
        "fixed inset-y-0 left-0 z-50 h-full shadow-2xl md:shadow-none", // Mobile styles
        isOpen ? "translate-x-0" : "-translate-x-full", // Mobile toggle
        "md:translate-x-0 md:static md:h-screen md:sticky md:top-0" // Desktop styles
      )}>
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-black dark:bg-white rounded-lg flex items-center justify-center transition-colors">
               <FileText className="text-white dark:text-black w-5 h-5 transition-colors" />
            </div>
            <div>
              <h1 className="font-bold text-sm text-gray-900 dark:text-white transition-colors">AIDED Framework</h1>
              <span className="text-xs text-gray-500 dark:text-gray-400 transition-colors">v1.0</span>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <LanguageSelector />
            <ThemeToggle />
            {/* Close button - Mobile only */}
            <button 
              onClick={() => setIsOpen(false)}
              className="md:hidden p-1.5 text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search */}
      <div className="px-4 mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            placeholder={currentLocale === 'en' ? "Search" : "Buscar"}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg pl-9 pr-8 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 dark:text-gray-200 placeholder:text-gray-400 transition-colors"
          />
          <div className="absolute right-2.5 top-2.5 border border-gray-200 dark:border-neutral-600 rounded px-1.5 text-[10px] text-gray-400 font-medium transition-colors">
            ⌘F
          </div>
        </div>
      </div>

      {/* Primary Navigation */}
      <nav className="px-2 space-y-1 mb-6">
        {primaryNavigation.map((item) => (
          <NavItem key={item.href} item={item} isActive={pathname === item.href} />
        ))}
      </nav>

      {/* Menu Divider */}
      <div className="px-4 mb-2">
        <span className="text-xs font-medium text-gray-400">{currentLocale === 'en' ? "Menu" : "Menú"}</span>
      </div>

      {/* Menu Navigation */}
      <nav className="px-2 space-y-1 pb-4">
        {filteredMenu.map((item) => (
          <NavItem key={item.href} item={item} isActive={pathname === item.href || pathname.startsWith(item.href)} />
        ))}
        {filteredMenu.length === 0 && (
          <div className="px-3 py-2 text-sm text-gray-500 dark:text-gray-400 text-center">
            {currentLocale === 'en' ? "No results found" : "No se encontraron resultados"}
          </div>
        )}
      </nav>
    </aside>
    </>
  );
}

function NavItem({ item, isActive }: { item: NavigationItem; isActive: boolean }) {
  const Icon = item.icon;
  
  return (
    <Link
      href={item.href}
      target={item.external ? "_blank" : undefined}
      className={cn(
        "flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors duration-200",
        isActive
          ? "bg-white dark:bg-neutral-800 shadow-sm text-gray-900 dark:text-white font-medium"
          : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-white"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className={cn("w-4 h-4 transition-colors", isActive ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-gray-500")} />
        <span>{item.title}</span>
      </div>
      
      <div className="flex items-center gap-2">
        {item.badge && (
          <span className={cn(
            "text-[10px] font-medium px-1.5 py-0.5 rounded-full transition-colors",
            item.badge === "hot" 
              ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" 
              : "bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400"
          )}>
            {item.badge === "hot" ? "Hot" : item.badge}
          </span>
        )}
        {item.external && (
          <span className="text-gray-400">↗</span>
        )}
        {item.children && (
          <ChevronRight className="w-3 h-3 text-gray-400" />
        )}
      </div>
    </Link>
  );
}
