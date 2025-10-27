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
  } catch {
    return null;
  }
}
