import { Breadcrumb } from "@/components/Breadcrumb";
import { getDocBySlug } from "@/lib/content";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    lang: string;
    slug: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const doc = await getDocBySlug(slug, lang);

  if (!doc) {
    return {
      title: "Not Found",
      description: "The page you are looking for does not exist."
    };
  }

  return {
    title: doc.metadata.title,
    description: doc.metadata.description,
    openGraph: {
      title: doc.metadata.title,
      description: doc.metadata.description,
      type: "article",
      locale: lang === 'en' ? "en_US" : "es_ES",
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: "AIDED Framework",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.metadata.title,
      description: doc.metadata.description,
    }
  };
}

export default async function DocPage({ params }: PageProps) {
  const { lang, slug } = await params;
  const doc = await getDocBySlug(slug, lang);

  if (!doc) {
    notFound();
  }

  const isEn = lang === 'en';

  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-neutral-950 p-8 md:p-12 transition-colors duration-300">
      <section className="max-w-3xl mx-auto">
        <Breadcrumb 
          items={[
            { label: "AIDED Framework", href: `/${lang}` },
            { label: isEn ? "Documentation" : "Documentación", href: `/${lang}/docs/intro` },
            { label: doc.metadata.title }
          ]} 
          className="mb-8"
        />
        
        <article className="prose prose-slate dark:prose-invert max-w-none transition-colors">
          <h1>{doc.metadata.title}</h1>
          {doc.metadata.description && (
            <p className="text-xl text-gray-500 dark:text-gray-400 lead">{doc.metadata.description}</p>
          )}
          {doc.content}
        </article>
      </section>
    </div>
  );
}
