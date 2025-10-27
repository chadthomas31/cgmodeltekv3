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
    "/industries",
    "/industries/aerospace",
    "/industries/automotive",
    "/industries/medical",
    "/industries/energy",
    "/industries/consumer",
    "/industries/defense",
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
    ...staticRoutes.map((p) => mk(new URL(p, siteUrl).toString(), "weekly", 0.7)),
    ...blogSlugs.map((slug) => mk(new URL(`/blog/${slug}`, siteUrl).toString(), "weekly", 0.6)),
  ];
  return urls;
}
