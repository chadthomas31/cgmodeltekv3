import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

export type FAQ = { question: string; answer: string };
export type FrontMatter = {
  title: string;
  description?: string;
  thumb?: string;
  updatedAt?: string;
  faq?: FAQ[];
  [key: string]: any;
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function toSlug(filename: string) {
  return filename.replace(/\.(md|mdx)$/i, "");
}

export async function getCollectionSlugs(collection: string): Promise<string[]> {
  const dir = path.join(CONTENT_DIR, collection);
  try {
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith(".md") || f.endsWith(".mdx")).map(toSlug);
  } catch {
    return [];
  }
}

export async function getContentList<T extends FrontMatter = FrontMatter>(collection: string) {
  const slugs = await getCollectionSlugs(collection);
  const items = await Promise.all(
    slugs.map(async (slug) => {
      const fullPath = path.join(CONTENT_DIR, collection, `${slug}.mdx`);
      const raw = await fs.readFile(fullPath, "utf8").catch(async () => {
        // fallback to .md
        return fs.readFile(path.join(CONTENT_DIR, collection, `${slug}.md`), "utf8");
      });
      const { data } = matter(raw);
      const fm = data as T;
      return { slug, frontMatter: fm };
    })
  );
  return items.sort((a, b) => {
    const ad = Date.parse(a.frontMatter.updatedAt || "1970-01-01");
    const bd = Date.parse(b.frontMatter.updatedAt || "1970-01-01");
    return bd - ad;
  });
}

export async function getContentBySlug<T extends FrontMatter = FrontMatter>(collection: string, slug: string) {
  const base = path.join(CONTENT_DIR, collection);
  const mdxPath = path.join(base, `${slug}.mdx`);
  const mdPath = path.join(base, `${slug}.md`);
  let raw = "";
  let filePath = mdxPath;
  try {
    raw = await fs.readFile(mdxPath, "utf8");
  } catch {
    raw = await fs.readFile(mdPath, "utf8");
    filePath = mdPath;
  }
  const { content, data } = matter(raw);
  const { content: jsx } = await compileMDX<{ frontMatter: T }>({
    source: content,
    options: { parseFrontmatter: false },
  });
  return {
    slug,
    filePath,
    frontMatter: data as T,
    content: jsx,
  };
}

export function buildFaqJsonLd(faq: FAQ[] | undefined) {
  if (!faq || !faq.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
