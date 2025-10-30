import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Hero } from "@/components/sections/Hero";
import { Accordion } from "@/components/ui/accordion";
import Link from "next/link";
import { MDXContent } from "@/components/MDXContent";
import Image from "next/image";
import { LeadershipGrid } from "@/components/sections/LeadershipGrid";

export const metadata: Metadata = {
  title: "About Us | cgmodeltek",
  description: "Learn about cgmodeltek's mission, robotics integration, customer reviews, and FAQs.",
};

export default function Page() {
  return (
    <div className="container mx-auto px-0 pb-12">
      <Hero
        className="mb-8"
        title="About Us"
        subtitle="Welcome to CG Model Tek. At CG Model Tek, we are redefining precision in aerospace modeling and design. As a pioneering startup in the aerospace manufacturing industry, our mission is to deliver precision, innovation, and excellence in every project we undertake. Our team of highly skilled professionals brings decades of combined experience in aerospace design, machining, and program management. Together, we push the boundaries of technology to deliver cutting-edge solutions tailored to each client’s unique needs. We take pride in our state-of-the-art equipment and advanced manufacturing capabilities, engineered to meet the highest standards of quality and efficiency. From rapid prototyping to full-scale production, CG Model Tek combines expertise, technology, and passion to transform ideas into flight-ready reality."
        titleClassName="font-sans font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl"
        overlayClassName="hidden"
        image={{ src: "/images/about_us_v2.png", alt: "Team and advanced manufacturing environment" }}
        contentPosition="bottom"
      />
      <div className="px-4">
        <Breadcrumbs
          className="mb-6"
          segments={[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
          ]}
        />

      {/* Optional long-form MDX content */}
      <div className="mt-6">
        {/* Renders content/about/index.mdx when present */}
        <MDXContent collection="about" slug="index" />
      </div>

      {/* Two-column section */}
      <section className="mt-10 grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="headline-2">Built for reliability</h2>
          <p className="text-muted-foreground">
            From prototypes to production, our processes emphasize repeatability, quality, and
            traceability. Our teams integrate robotic tending where it adds throughput and
            consistency.
          </p>
        </div>
        <div className="aspect-video w-full rounded-lg border bg-muted/40" />
      </section>

      {/* Leadership */}
      <section className="mt-12">
        <h2 className="headline-2">Leadership</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">Meet the team guiding our engineering, operations, and customer success.</p>

        <LeadershipGrid
          className="mt-6"
          gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          idFromName
          modalEnabled={false}
          linkToBase="/team"
          people={[
            { name: "Chris Athaide", role: "Founder & CEO", img: "", bio: "Chris Athaide is the Founder and CEO of CG Model Tek LLC. He began his career as a Design and Test Engineer of wind tunnel test models at Boeing/McDonnell Douglas and later served as a CAD/CAM trainer for Unigraphics through EDS and at Boeing. Since 1999, he has held executive roles at Tri Models Inc., serving as Vice President of Sales and Contracts and as Facility Security Officer, leading proposals, pricing, customer engagement, sales, marketing, and senior corporate management while supporting Engineering, Fabrication, and Quality Assurance. He also oversaw IT as IT Manager and served as ISSM for information systems security, Facility Security Officer, ITAR Officer, and Export Compliance Officer. On October 1, 2024, he founded CG Model Tek in Tullahoma, TN, acquiring the assets of Micro Craft and relaunching as a more focused, lean specialty company in the same field. Specialties include wind tunnel model design; full-project estimation and proposal preparation; Siemens NX CAD and surfacing; and client/server troubleshooting, repair, and management." },
            { name: "Naresh Kumar", role: "Chief Financial Officer", img: "", bio: "" },
            { name: "Tony Boyce", role: "Title", img: "", bio: "" },
            { name: "Ian Watts", role: "IT & Information Security Leader", img: "/Leadership/Ian_Watts.Info.sec.ofc.png", bio: "Ian Watts is a seasoned IT Manager and Information Systems Security Manager with extensive experience safeguarding critical infrastructure in the aerospace industry. With over five years of hands-on expertise and multiple industry-recognized certifications — including ISC² SSCP, CompTIA Security+, A+, and Network+ — Ian brings both depth and versatility to every technical challenge. He is driven by the principles of Precision, Innovation, and Excellence, ensuring every system he manages meets the highest standards of performance and security." },
            { name: "John M. Nichols", role: "Executive Advisor", img: "/Leadership/John_Nichols.png", bio: "John M. Nichols is a veteran aerospace and automotive executive with over forty years of leadership experience spanning contracts, procurement, marketing, and program management. He has consistently delivered operational efficiency, regulatory compliance, and sustainable growth while maintaining alignment with both customer objectives and industry standards. Throughout his career, John has held senior management positions at leading organizations including Cubic Corporation, Alliant Techsystems (ATK)/Micro Craft, Ford Aerospace, Bechtel Power Corporation, and Ford Motor Company. His expertise covers all aspects of contract administration, supplier relations, strategic sourcing, and marketing—driving measurable cost reductions, enhanced performance metrics, and high-performing teams. John previously directed procurement operations for Cubic Defense Applications and supported advanced hypersonic testing initiatives at PERIKIN Enterprises, contributing to projects aligned with the National Defense Strategy. As founder of Nichols Consulting, he has advised aerospace and automotive firms on program management, sourcing strategies, and federal acquisition compliance. A results-driven leader recognized for integrity, professionalism, and hands-on management, John has guided organizations through complex, time-critical programs while consistently achieving mission success. He remains deeply committed to operational excellence, innovation, and strengthening America’s industrial and defense capabilities. John studied business and management at Golden Gate University and Mt. San Antonio College, and completed the High-Potential Management Development Program at Ford Motor Company." },
            { name: "John Statum", role: "Vice President of Operations", img: "/Leadership/john_statum.png", bio: "John Statum serves as the Vice President of Operations at CG Model Tek, bringing more than 20 years of experience in aerospace manufacturing and production leadership. Known for his precision, professionalism, and commitment to quality, John excels at guiding teams, optimizing workflows, and ensuring excellence across every stage of manufacturing. Under his leadership, CG Model Tek continues to advance cutting-edge aerospace modeling and production capabilities. John is driven by a deep commitment to innovation, teamwork, and the company’s mission to deliver world-class precision and performance within the aerospace sector." },
            { name: "Larry Phelps", role: "Shop Supervisor", img: "/Leadership/larry_phelps.png", bio: "Larry Phelps serves as the Shop Supervisor at CG Model Tek, bringing over 41 years of hands-on experience in wind tunnel modeling and aerospace manufacturing. Renowned for his creativity, precision, and leadership, Larry has been instrumental in driving research and development initiatives and fostering innovation across complex, high-stakes projects. A dedicated mentor and problem-solver, he leads with integrity and a commitment to excellence—continuously elevating team performance, quality standards, and operational efficiency. Larry’s deep technical knowledge and collaborative approach make him an invaluable part of CG Model Tek’s mission to push the boundaries of aerospace innovation." },
            { name: "John Hill", role: "Quality Manager", img: "/Leadership/john_hill.png", bio: "With nearly two decades of experience in the aerospace industry, John Hill brings a powerful blend of technical expertise and strategic leadership to his role as Quality Manager. Over his 19-year career, he has served as a machinist, supervisor, quality inspector, planner, and program manager—building a deep, hands-on understanding of precision manufacturing and operational excellence. John holds a Bachelor’s degree in Business Management from Trevecca Nazarene University and is a certified Project Management Professional (PMP). His unique combination of technical insight and business acumen enables him to drive quality initiatives, foster cross-functional collaboration, and uphold the highest standards of safety, compliance, and customer satisfaction. Known for his proactive approach to problem-solving and continuous improvement, John ensures that every project reflects the company’s commitment to precision and integrity. Outside of work, he is a dedicated martial artist and Black Belt in Isshin Ryu Karate, embodying the same discipline, focus, and personal growth that define his professional success." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
            { name: "Name Here", role: "Title", img: "", bio: "Short 2–3 sentence bio goes here." },
          ]}
        />
      </section>

      {/* CTA band */}
      <section className="mt-12 rounded-lg border bg-primary/5 p-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h3 className="headline-3">Need a precise part fast?</h3>
            <p className="text-sm text-muted-foreground">Request a quote and we’ll review your CAD same-day.</p>
          </div>
          <Link href="/contact" className="focus-ring rounded-md bg-primary px-4 py-2 text-primary-foreground">
            Request a Quote
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h3 className="headline-3">FAQ</h3>
        <div className="mt-4">
          <Accordion
            items={[
              { id: "tol", title: "What tolerances can you hold?", content: "±0.0005 in typical; tighter possible upon request." },
              { id: "lead", title: "Lead times?", content: "Rapid prototypes in days; production in weeks depending on volume." },
              { id: "materials", title: "Materials?", content: "Aluminum, steels, titanium, copper alloys, engineering plastics, and more." },
            ]}
          />
        </div>
      </section>

      {/* Quick links */}
      <section className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/about/company", label: "Company" },
          { href: "/about/robotic-tending", label: "Robotic Tending" },
          { href: "/about/reviews", label: "Customer Reviews" },
          { href: "/about/faq", label: "FAQ" },
        ].map((l) => (
          <Link key={l.href} href={l.href} className="rounded-md border p-4 hover:bg-muted/60">
            {l.label}
          </Link>
        ))}
      </section>
      </div>
    </div>
  );
}
