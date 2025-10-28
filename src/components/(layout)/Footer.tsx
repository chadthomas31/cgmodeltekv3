export default function Footer() {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1 text-sm text-muted-foreground">
          <div className="font-medium text-foreground">CG Model Tek LLC</div>
          <div>
            <a href="https://maps.google.com/?q=207+Big+Springs+Avenue,+Tullahoma,+TN+37388" className="hover:underline">
              207 Big Springs Ave, Tullahoma, TN 37388
            </a>
          </div>
          <div>
            <a href="tel:5736463996" className="hover:underline">
              573-646-3996
            </a>
          </div>
          <div className="opacity-70">© {new Date().getFullYear()} CG Model Tek LLC. All rights reserved.</div>
        </div>

        <div className="flex items-center gap-3">
          <a href="/contact" className="rounded-md bg-primary px-4 py-2 text-primary-foreground text-sm">
            Request a Quote
          </a>
        </div>
      </div>
    </footer>
  );
}
