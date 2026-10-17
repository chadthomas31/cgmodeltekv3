"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-4">
          <div className="mx-auto max-w-md text-center">
            <h2 className="mb-4 text-3xl font-bold">Application Error</h2>
            <p className="mb-6 text-gray-600">
              A critical error occurred. Please try refreshing the page.
            </p>
            {error.digest && <p className="mb-4 text-sm text-gray-500">Error ID: {error.digest}</p>}
            <button
              onClick={reset}
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
