import { Prose } from "@/components/Prose";
import { getContentBySlug, buildFaqJsonLd } from "@/lib/content";

export async function MDXContent({ collection, slug }: { collection: string; slug: string }) {
  try {
    const { content, frontMatter } = await getContentBySlug(collection, slug);
    const faqJsonLd = buildFaqJsonLd(frontMatter.faq);
    return (
      <>
        <Prose>{content}</Prose>
        {faqJsonLd && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
        )}
      </>
    );
  } catch (error) {
    console.error(`Failed to load MDX content: ${collection}/${slug}`, error);
    return (
      <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
        <p className="text-sm text-destructive">Failed to load content. Please try again later.</p>
      </div>
    );
  }
}
