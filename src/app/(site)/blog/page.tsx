import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getContentList } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | cgmodeltek",
  description: "Insights from cgmodeltek on precision machining, robotics, and operations.",
};

export default async function Page() {
  const posts = await getContentList("blog");
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        segments={[
          { href: "/", label: "Home" },
          { href: "/blog", label: "Blog" },
        ]}
        className="mb-6"
      />
      <h1 className="headline-1">Blog</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Our latest updates and guides.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {posts.map(({ slug, frontMatter }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="rounded-lg border p-4 hover:bg-muted/60"
          >
            <h3 className="font-semibold">{frontMatter.title}</h3>
            {frontMatter.description && (
              <p className="mt-1 text-sm text-muted-foreground">{frontMatter.description}</p>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
