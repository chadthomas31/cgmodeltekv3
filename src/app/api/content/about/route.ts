import { NextResponse } from "next/server";
import { getContentBySlug } from "@/lib/content";

export async function GET() {
  try {
    const { frontMatter } = await getContentBySlug("about", "index");
    return NextResponse.json({ faq: frontMatter.faq ?? [] });
  } catch {
    return NextResponse.json({ faq: [] }, { status: 200 });
  }
}
