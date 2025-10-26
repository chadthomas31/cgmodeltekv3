export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} cgmodeltek. All rights reserved.
        </p>
        <p className="opacity-80">
          Built with Next.js, Tailwind CSS, shadcn/ui, and Framer Motion.
        </p>
      </div>
    </footer>
  );
}
