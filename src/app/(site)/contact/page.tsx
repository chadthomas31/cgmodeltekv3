import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with CG Model Tek for precision manufacturing and aerospace modeling services.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/contact", label: "Contact" },
        ]}
      />
      <h1 className="headline-1">Contact Us</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Ready to discuss your precision manufacturing needs? Get in touch with our team.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6">
          <h2 className="headline-3">Location</h2>
          <div className="mt-4 space-y-1 text-sm">
            <div className="font-semibold">CG Model Tek LLC</div>
            <div>207 Big Springs Avenue</div>
            <div>Tullahoma, TN 37388</div>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-6">
          <h2 className="headline-3">Get a Quote</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Have a project in mind? Send us your requirements and we'll get back to you with a detailed quote.
          </p>
        </div>
      </div>
    </div>
  );
}
