import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Prose } from "@/components/Prose";
import { getContentBySlug, buildFaqJsonLd } from "@/lib/content";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const { frontMatter } = await getContentBySlug("blog", params.slug);
  return {
    title: `${frontMatter.title} | Blog | cgmodeltek`,
    description: frontMatter.description,
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { frontMatter, content } = await getContentBySlug("blog", params.slug);
  const faqJsonLd = buildFaqJsonLd(frontMatter.faq);
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
          { href: `/blog/${params.slug}`, label: frontMatter.title },
        ]}
      />

      <h1 className="headline-1">{frontMatter.title}</h1>
      {frontMatter.updatedAt && (
        <p className="mt-2 text-xs text-muted-foreground">Updated {new Date(frontMatter.updatedAt).toLocaleDateString()}</p>
      )}

      <div className="mt-8">
        <Prose>{content}</Prose>
      </div>

      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
    </div>
  );
}
