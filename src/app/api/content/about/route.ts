import { NextResponse } from "next/server";
import { getContentBySlug } from "@/lib/content";

export async function GET() {
  try {
    const { frontMatter } = await getContentBySlug("about", "index");
    return NextResponse.json({ faq: frontMatter.faq ?? [] });
  } catch (error) {
    console.error("Failed to fetch about content:", error);
    return NextResponse.json(
      {
        faq: [],
        error: "Failed to load FAQ data"
      },
      { status: 500 }
    );
  }
}
