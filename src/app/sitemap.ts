import type { MetadataRoute } from "next";
import { getCollectionSlugs } from "@/lib/content";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const staticRoutes = [
    "/",
    "/about",
    "/about/company",
    "/about/robotic-tending",
    "/about/reviews",
    "/about/faq",
    "/services",
    "/services/milling",
    "/services/turning",
    "/services/multi-axis",
    "/services/prototyping",
    "/services/production",
    "/services/finishing",
    "/aerospace",
    "/blog",
    "/contact",
  ];

  const blogSlugs = await getCollectionSlugs("blog");

  const mk = (
    url: string,
    changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
    priority: number
  ): MetadataRoute.Sitemap[number] => ({ url, changeFrequency, priority });

  const urls: MetadataRoute.Sitemap = [
    // Homepage - highest priority
    mk(new URL("/", siteUrl).toString(), "weekly", 1.0),
    // Aerospace - high priority as core focus
    mk(new URL("/aerospace", siteUrl).toString(), "weekly", 0.9),
    // Other static routes
    ...staticRoutes.filter(p => p !== "/" && p !== "/aerospace").map((p) =>
      mk(new URL(p, siteUrl).toString(), "weekly", 0.7)
    ),
    // Blog posts
    ...blogSlugs.map((slug) =>
      mk(new URL(`/blog/${slug}`, siteUrl).toString(), "weekly", 0.6)
    ),
  ];
  return urls;
}
