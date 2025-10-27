export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-8 text-sm text-muted-foreground flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} CG Model Tek LLC. All rights reserved.
        </p>
        <p className="opacity-80">207 Big Springs Avenue, Tullahoma, TN 37388</p>
      </div>
    </footer>
  );
}
