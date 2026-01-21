import { mdxComponents } from '@/components/mdx-components';
import fs from 'fs';
import { compileMDX } from 'next-mdx-remote/rsc';
import path from 'path';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';

const contentDirectory = path.join(process.cwd(), 'content');

export interface DocMetadata {
  title: string;
  description?: string;
  slug: string;
}

export interface DocContent {
  metadata: DocMetadata;
  content: React.ReactNode;
}

export async function getDocBySlug(slug: string[], locale: string = 'es'): Promise<DocContent | null> {
  const realSlug = slug.join('/');
  // Look in content/{locale}/{slug}.mdx
  const fullPath = path.join(contentDirectory, locale, `${realSlug}.mdx`);
  const indexFullPath = path.join(contentDirectory, locale, realSlug, 'index.mdx');
  
  let fileContents = '';
  try {
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else if (fs.existsSync(indexFullPath)) {
      fileContents = fs.readFileSync(indexFullPath, 'utf8');
    } else {
      // Fallback to Spanish if English not found? Or just return null (404)
      // For now, return null to show 404
      return null;
    }
  } catch (e) {
    return null;
  }

  const { content, frontmatter } = await compileMDX<{ title: string; description?: string }>({
    source: fileContents,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeHighlight],
      },
    },
  });

  return {
    metadata: {
      title: frontmatter.title || 'Untitled',
      description: frontmatter.description,
      slug: realSlug,
    },
    content,
  };
}

export function getAllDocs(): DocMetadata[] {
  // simplified recursive walker could go here
  return [];
}
