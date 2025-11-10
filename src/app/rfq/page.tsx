"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitRFQ } from "@/app/actions";
import Link from "next/link";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-semibold hover:bg-white/90 disabled:opacity-60"
    >
      {pending ? "Submitting..." : "Submit request"}
    </button>
  );
}

export default function RFQPage() {
  const [state, formAction] = useFormState(submitRFQ, null);

  return (
    <main className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      <div className="max-w-5xl mx-auto">
        {/* Quick exits */}
        <div className="mb-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <Link href="/" className="underline hover:opacity-90">
              ← Back to Home
            </Link>
            <Link href="/services" className="underline hover:opacity-90">
              Browse Services
            </Link>
          </div>
          <Link href="/contact" className="underline hover:opacity-90">
            Need help? Contact
          </Link>
        </div>
        <header className="mb-8 sm:mb-12 text-center">
          <p className="text-sm uppercase tracking-wider text-white/70">Request for Quote</p>
          <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
            Share your project details
          </h1>
          <p className="mt-3 text-base sm:text-lg text-white/80">
            We&apos;ll review your requirements and respond within 1-2 business days.
          </p>
        </header>

        {!state?.success ? (
          <form
            action={formAction}
            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-8 grid grid-cols-1 gap-4"
          >
            {state?.error && (
              <div className="rounded-md bg-red-500/10 border border-red-500/30 p-3 text-red-200 text-sm">
                {state.error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Full name</label>
                <input
                  name="name"
                  required
                  placeholder="Jane Doe"
                  className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Company</label>
                <input
                  name="company"
                  placeholder="Your company"
                  className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="(555) 000-0000"
                  className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Project title</label>
              <input
                name="title"
                required
                placeholder="Wind tunnel model machining"
                className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Project details</label>
              <textarea
                name="details"
                required
                rows={6}
                placeholder="Materials, tolerances, quantity, target dates, certifications, etc."
                className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Desired timeline</label>
                <input
                  name="timeline"
                  placeholder="e.g., 4-6 weeks"
                  className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Estimated budget</label>
                <input
                  name="budget"
                  placeholder="$10,000 - $25,000"
                  className="w-full rounded-md bg-black/20 border border-white/15 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm mb-1">Attachments</label>
              <div className="rounded-md border border-dashed border-white/20 bg-black/20 p-4 text-sm text-white/80">
                File upload coming soon. You can email drawings to{" "}
                <a href="mailto:info@cgmodeltek.com" className="underline">
                  info@cgmodeltek.com
                </a>
                .
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between gap-3">
              <p className="text-xs text-white/60">
                By submitting, you agree to be contacted about your request.
              </p>
              <SubmitButton />
            </div>
          </form>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 text-center">
            <div className="mb-4 text-4xl">✓</div>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              Thanks! Your request has been received.
            </h2>
            <p className="mt-2 text-white/80">
              {state.message || "We'll reach out shortly. If it's urgent, please contact us."}
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-center gap-3">
                <Link
                  href="/"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm hover:bg-white/10"
                >
                  Back to Home
                </Link>
                <Link
                  href="/services"
                  className="rounded-full border border-white/20 px-5 py-2.5 text-sm hover:bg-white/10"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
