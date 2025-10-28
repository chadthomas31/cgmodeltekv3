import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";

export const metadata: Metadata = {
  title: "Team | cgmodeltek",
  description: "Meet the CG Model Tek team.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs
        className="mb-6"
        segments={[
          { href: "/", label: "Home" },
          { href: "/team", label: "Team" },
        ]}
      />
      <h1 className="headline-1">Team</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Our people bring decades of experience across aerospace modeling, manufacturing, quality, and security.
      </p>

      <section className="mt-10">
        <LeadershipGrid
          className="mt-6"
          textOnly
          gridClassName="grid gap-3 sm:grid-cols-3 lg:grid-cols-6"
          cardClassName="p-2"
          modalEnabled={false}
          people={[
            { name: "Chris Athaide", role: "Founder & CEO", img: "", bio: "" },
            { name: "Naresh Kumar", role: "Chief Financial Officer", img: "", bio: "" },
            { name: "Tony Boyce", role: "Title", img: "", bio: "" },
            { name: "Ian Watts", role: "IT & Information Security Leader", img: "/Leadership/Ian_Watts.Info.sec.ofc.png", bio: "" },
            { name: "John M. Nichols", role: "Executive Advisor", img: "/Leadership/John_Nichols.png", bio: "" },
            { name: "John Statum", role: "Vice President of Operations", img: "/Leadership/john_statum.png", bio: "" },
            { name: "Larry Phelps", role: "Shop Supervisor", img: "/Leadership/larry_phelps.png", bio: "" },
            { name: "John Hill", role: "Quality Manager", img: "/Leadership/john_hill.png", bio: "" },
          ]}
        />
      </section>
    </div>
  );
}
