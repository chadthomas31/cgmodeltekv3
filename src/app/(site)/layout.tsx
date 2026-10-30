export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="min-h-[70dvh]">{children}</main>
    </>
  );
}
