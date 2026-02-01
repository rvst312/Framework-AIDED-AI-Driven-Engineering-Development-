import { Breadcrumb } from "@/components/Breadcrumb";
import { DocCard } from "@/components/DocCard";
import {
  Bot,
  CheckCircle,
  ClipboardList,
  Code,
  Database,
  Palette,
  Rocket,
  Scale
} from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const isEn = lang === 'en';

  return {
    title: isEn 
      ? "AIDED Framework (AI-Driven Engineering Development)"
      : "Framework AIDED (AI-Driven Engineering Development)",
    description: isEn 
      ? "This site is designed to help you get the most out of the AIDED methodology. Here you will find a collection of guides, processes, and tutorials covering all aspects of Artificial Intelligence-assisted development."
      : "Este sitio está diseñado para ayudarte a obtener el máximo provecho de la metodología AIDED. Aquí encontrarás una colección de guías, procesos y tutoriales que cubren todos los aspectos del desarrollo asistido por Inteligencia Artificial.",
    openGraph: {
      title: isEn 
        ? "AIDED Framework (AI-Driven Engineering Development)"
        : "Framework AIDED (AI-Driven Engineering Development)",
      description: isEn 
        ? "AI-Driven Development Methodology"
        : "Metodología de Desarrollo Asistido por IA",
      locale: isEn ? "en_US" : "es_ES",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "AIDED Framework",
        },
      ],
    },
  };
}

export default async function DashboardPage({ params }: PageProps) {
  const { lang } = await params;
  const isEn = lang === 'en';
  const prefix = isEn ? '/en' : '/es';

  const t = {
    breadcrumbHome: isEn ? "Home" : "Inicio",
    title: isEn 
      ? "AIDED Framework (AI-Driven Engineering Development)"
      : "Framework AIDED (AI-Driven Engineering Development)",
    subtitle: isEn ? "AI-Driven Development Methodology" : "Metodología de Desarrollo Asistido por IA",
    description: isEn 
      ? "This site is designed to help you get the most out of the AIDED methodology. Here you will find a collection of guides, processes, and tutorials covering all aspects of Artificial Intelligence-assisted development."
      : "Este sitio está diseñado para ayudarte a obtener el máximo provecho de la metodología AIDED. Aquí encontrarás una colección de guías, procesos y tutoriales que cubren todos los aspectos del desarrollo asistido por Inteligencia Artificial.",
    startingPoints: isEn ? "Starting Points" : "Puntos de Partida",
    startingPointsDesc: isEn ? "Everything you need to start using the framework quickly and efficiently." : "Todo lo que necesitas para empezar a utilizar el framework de forma rápida y eficiente.",
    helpTitle: isEn ? "Need help?" : "¿Necesitas ayuda?",
    helpDesc: isEn ? "If you have questions or need advice about the framework, check our support section." : "Si tienes preguntas o necesitas asesoramiento sobre el framework, consulta nuestra sección de soporte.",
    helpLinkPrefix: isEn ? "See: " : "Ver: ",
    helpLinkText: isEn ? "Get Help" : "Obtener Ayuda",
    
    // Cards
    cardPrincipiosTitle: isEn ? "Fundamental Principles" : "Principios Fundamentales",
    cardPrincipiosDesc: isEn ? "The pillars of Human-AI collaboration." : "Los pilares de la colaboración Humano-IA.",
    cardFase0Title: isEn ? "Phase 0: Conceptualization" : "Fase 0: Conceptualización",
    cardFase0Desc: isEn ? "Architecture and product definition." : "Arquitectura y definición del producto.",
    cardFase1Title: isEn ? "Phase 1: Management" : "Fase 1: Gestión",
    cardFase1Desc: isEn ? "Documentation centralization (ClickUp)." : "Centralización de documentación (ClickUp).",
    cardFase2Title: isEn ? "Phase 2: Backend" : "Fase 2: Backend",
    cardFase2Desc: isEn ? "Data infrastructure with Supabase." : "Infraestructura de datos con Supabase.",
    cardFase3Title: isEn ? "Phase 3: Frontend" : "Fase 3: Frontend",
    cardFase3Desc: isEn ? "Next.js initialization and structure." : "Inicialización de Next.js y estructura.",
    cardFase4Title: isEn ? "Phase 4: UX/UI Design" : "Fase 4: Diseño UX/UI",
    cardFase4Desc: isEn ? "AI-assisted design flows." : "Flujos de diseño asistido por IA.",
    cardFase5Title: isEn ? "Phase 5: Development" : "Fase 5: Desarrollo",
    cardFase5Desc: isEn ? "Implementation with specialized Agents." : "Implementación con Agentes especializados.",
    cardFase6Title: isEn ? "Phase 6: Testing & CI/CD" : "Fase 6: Testing & CI/CD",
    cardFase6Desc: isEn ? "Automation and quality assurance." : "Automatización y garantía de calidad.",
  };

  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 p-8 md:p-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        {/* Header Area */}
        <Breadcrumb 
          items={[
            { label: t.breadcrumbHome, href: prefix },
            { label: t.title }
          ]} 
          className="mb-6"
        />
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
          {t.title}
        </h1>
        
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-2 max-w-3xl leading-relaxed transition-colors font-medium">
          {t.subtitle}
        </p>

        <p className="text-base text-gray-500 dark:text-gray-400 mb-10 max-w-3xl leading-relaxed transition-colors">
          {t.description}
        </p>

        <hr className="border-gray-100 dark:border-neutral-800 mb-10 transition-colors" />

        {/* Section: Puntos de Partida */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            {t.startingPoints}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 transition-colors">
            {t.startingPointsDesc}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DocCard
              title={t.cardPrincipiosTitle}
              description={t.cardPrincipiosDesc}
              icon={Scale}
              href={`${prefix}/docs/principios`}
            />
            <DocCard
              title={t.cardFase0Title}
              description={t.cardFase0Desc}
              icon={Rocket}
              href={`${prefix}/docs/fase-0`}
            />
            <DocCard
              title={t.cardFase1Title}
              description={t.cardFase1Desc}
              icon={ClipboardList}
              href={`${prefix}/docs/fase-1`}
            />
            <DocCard
              title={t.cardFase2Title}
              description={t.cardFase2Desc}
              icon={Database}
              href={`${prefix}/docs/fase-2`}
            />
            <DocCard
              title={t.cardFase3Title}
              description={t.cardFase3Desc}
              icon={Code}
              href={`${prefix}/docs/fase-3`}
            />
            <DocCard
              title={t.cardFase4Title}
              description={t.cardFase4Desc}
              icon={Palette}
              href={`${prefix}/docs/fase-4`}
            />
            <DocCard
              title={t.cardFase5Title}
              description={t.cardFase5Desc}
              icon={Bot}
              href={`${prefix}/docs/fase-5`}
            />
            <DocCard
              title={t.cardFase6Title}
              description={t.cardFase6Desc}
              icon={CheckCircle}
              href={`${prefix}/docs/fase-6`}
            />
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-16 pt-8 border-t border-gray-100 dark:border-neutral-800 transition-colors">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors">
            {t.helpTitle}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 transition-colors">
            {t.helpDesc}
          </p>
          <div className="mt-2">
            <span className="text-gray-500 dark:text-gray-400 transition-colors">{t.helpLinkPrefix}</span>
            <Link href={`${prefix}/docs/support`} className="text-gray-900 dark:text-white font-medium hover:underline transition-colors">
              {t.helpLinkText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
