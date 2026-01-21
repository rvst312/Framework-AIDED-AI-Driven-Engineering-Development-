import {
  BookOpen,
  Bot,
  CheckCircle,
  ClipboardList,
  Code,
  Database,
  FileText,
  Github,
  Layers,
  Lightbulb,
  LucideIcon,
  Palette,
  Rocket,
  Scale
} from 'lucide-react';

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
  badge?: "hot" | "new" | "beta";
  external?: boolean;
  children?: NavigationItem[];
}

export const getPrimaryNavigation = (lang: string = 'es'): NavigationItem[] => {
  const prefix = lang === 'en' ? '/en' : '/es';
  return [
    {
      title: "Framework AIDED",
      href: prefix,
      icon: FileText
    },
    {
      title: "GitHub",
      href: "https://github.com/rvst312/Framework-AIDED-AI-Driven-Engineering-Development-",
      icon: Github,
      external: true
    }
  ];
};

export const getMenuNavigation = (lang: string = 'es'): NavigationItem[] => {
  const prefix = lang === 'en' ? '/en' : '/es';
  const isEn = lang === 'en';

  return [
    {
      title: isEn ? "Introduction" : "Introducción",
      href: `${prefix}/docs/intro`,
      icon: BookOpen
    },
    {
      title: isEn ? "Methodology" : "Metodología",
      href: `${prefix}/docs/metodologia`,
      icon: Lightbulb
    },
    {
      title: isEn ? "Fundamental Principles" : "Principios Fundamentales",
      href: `${prefix}/docs/principios`,
      icon: Scale
    },
    {
      title: isEn ? "Phase 0: Conceptualization" : "Fase 0: Conceptualización",
      href: `${prefix}/docs/fase-0`,
      icon: Rocket
    },
    {
      title: isEn ? "Phase 1: Management" : "Fase 1: Gestión",
      href: `${prefix}/docs/fase-1`,
      icon: ClipboardList
    },
    {
      title: isEn ? "Phase 2: Backend" : "Fase 2: Backend",
      href: `${prefix}/docs/fase-2`,
      icon: Database
    },
    {
      title: isEn ? "Phase 3: Frontend" : "Fase 3: Frontend",
      href: `${prefix}/docs/fase-3`,
      icon: Code
    },
    {
      title: isEn ? "Phase 4: UX/UI Design" : "Fase 4: Diseño UX/UI",
      href: `${prefix}/docs/fase-4`,
      icon: Palette
    },
    {
      title: isEn ? "Phase 5: Development" : "Fase 5: Desarrollo",
      href: `${prefix}/docs/fase-5`,
      icon: Bot
    },
    {
      title: isEn ? "Phase 6: Testing & CI/CD" : "Fase 6: Testing & CI/CD",
      href: `${prefix}/docs/fase-6`,
      icon: CheckCircle
    },
    {
      title: isEn ? "Guide for Agents" : "Guía para Agentes",
      href: `${prefix}/docs/agentes`,
      icon: Bot
    },
    {
      title: isEn ? "Resources" : "Recursos",
      href: `${prefix}/docs/recursos`,
      icon: Layers
    }
  ];
};

// Backward compatibility
export const primaryNavigation = getPrimaryNavigation('es');
export const menuNavigation = getMenuNavigation('es');
