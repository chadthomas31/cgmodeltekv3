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
        Our people bring decades of experience across aerospace modeling, manufacturing, quality,
        and security.
      </p>

      <section className="mt-10">
        <LeadershipGrid
          className="mt-6"
          idFromName
          gridClassName="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          cardClassName="p-3"
          modalEnabled={false}
          maxPreviewChars={10000}
          people={[
            {
              name: "Chris Athaide",
              role: "Founder & CEO",
              img: "/Leadership/Chris_Athaide.png",
              bio: "Chris Athaide is the Founder and CEO of CG Model Tek LLC. He began his career as a Design and Test Engineer of wind tunnel test models at Boeing/McDonnell Douglas and later served as a CAD/CAM trainer for Unigraphics through EDS and at Boeing. Since 1999, he has held executive roles at Tri Models Inc., serving as Vice President of Sales and Contracts and as Facility Security Officer, leading proposals, pricing, customer engagement, sales, marketing, and senior corporate management while supporting Engineering, Fabrication, and Quality Assurance. He also oversaw IT as IT Manager and served as ISSM for information systems security, Facility Security Officer, ITAR Officer, and Export Compliance Officer. On October 1, 2024, he founded CG Model Tek in Tullahoma, TN, acquiring the assets of Micro Craft and relaunching as a more focused, lean specialty company in the same field. Specialties include wind tunnel model design; full-project estimation and proposal preparation; Siemens NX CAD and surfacing; and client/server troubleshooting, repair, and management.",
            },
            { name: "Naresh Kumar", role: "Chief Financial Officer", img: "", bio: "" },
            { name: "Tony Boyce", role: "Title", img: "", bio: "" },
            {
              name: "Ian Watts",
              role: "IT & Information Security Leader",
              img: "/Leadership/Ian_Watts.Info.sec.ofc.png",
              bio: "Ian Watts is a seasoned IT Manager and Information Systems Security Manager with extensive experience safeguarding critical infrastructure in the aerospace industry. With over five years of hands-on expertise and multiple industry-recognized certifications — including ISC² SSCP, CompTIA Security+, A+, and Network+ — Ian brings both depth and versatility to every technical challenge. He is driven by the principles of Precision, Innovation, and Excellence, ensuring every system he manages meets the highest standards of performance and security.",
            },
            {
              name: "John M. Nichols",
              role: "Executive Advisor",
              img: "/Leadership/John_Nichols.png",
              bio: "John M. Nichols is a veteran aerospace and automotive executive with over forty years of leadership experience spanning contracts, procurement, marketing, and program management. He has consistently delivered operational efficiency, regulatory compliance, and sustainable growth while maintaining alignment with both customer objectives and industry standards. Throughout his career, John has held senior management positions at leading organizations including Cubic Corporation, Alliant Techsystems (ATK)/Micro Craft, Ford Aerospace, Bechtel Power Corporation, and Ford Motor Company. His expertise covers all aspects of contract administration, supplier relations, strategic sourcing, and marketing—driving measurable cost reductions, enhanced performance metrics, and high-performing teams. John previously directed procurement operations for Cubic Defense Applications and supported advanced hypersonic testing initiatives at PERIKIN Enterprises, contributing to projects aligned with the National Defense Strategy. As founder of Nichols Consulting, he has advised aerospace and automotive firms on program management, sourcing strategies, and federal acquisition compliance. A results-driven leader recognized for integrity, professionalism, and hands-on management, John has guided organizations through complex, time-critical programs while consistently achieving mission success. He remains deeply committed to operational excellence, innovation, and strengthening America’s industrial and defense capabilities. John studied business and management at Golden Gate University and Mt. San Antonio College, and completed the High-Potential Management Development Program at Ford Motor Company.",
            },
            {
              name: "John Statum",
              role: "Vice President of Operations",
              img: "/Leadership/john_statum.png",
              bio: "John Statum serves as the Vice President of Operations at CG Model Tek, bringing more than 20 years of experience in aerospace manufacturing and production leadership. Known for his precision, professionalism, and commitment to quality, John excels at guiding teams, optimizing workflows, and ensuring excellence across every stage of manufacturing. Under his leadership, CG Model Tek continues to advance cutting-edge aerospace modeling and production capabilities. John is driven by a deep commitment to innovation, teamwork, and the company’s mission to deliver world-class precision and performance within the aerospace sector.",
            },
            {
              name: "Larry Phelps",
              role: "Shop Supervisor",
              img: "/Leadership/larry_phelps.png",
              bio: "Larry Phelps serves as the Shop Supervisor at CG Model Tek, bringing over 41 years of hands-on experience in wind tunnel modeling and aerospace manufacturing. Renowned for his creativity, precision, and leadership, Larry has been instrumental in driving research and development initiatives and fostering innovation across complex, high-stakes projects. A dedicated mentor and problem-solver, he leads with integrity and a commitment to excellence—continuously elevating team performance, quality standards, and operational efficiency. Larry’s deep technical knowledge and collaborative approach make him an invaluable part of CG Model Tek’s mission to push the boundaries of aerospace innovation.",
            },
            {
              name: "John Hill",
              role: "Quality Manager",
              img: "/Leadership/john_hill.png",
              bio: "With nearly two decades of experience in the aerospace industry, John Hill brings a powerful blend of technical expertise and strategic leadership to his role as Quality Manager. Over his 19-year career, he has served as a machinist, supervisor, quality inspector, planner, and program manager—building a deep, hands-on understanding of precision manufacturing and operational excellence. John holds a Bachelor’s degree in Business Management from Trevecca Nazarene University and is a certified Project Management Professional (PMP). His unique combination of technical insight and business acumen enables him to drive quality initiatives, foster cross-functional collaboration, and uphold the highest standards of safety, compliance, and customer satisfaction. Known for his proactive approach to problem-solving and continuous improvement, John ensures that every project reflects the company’s commitment to precision and integrity. Outside of work, he is a dedicated martial artist and Black Belt in Isshin Ryu Karate, embodying the same discipline, focus, and personal growth that define his professional success.",
            },
          ]}
        />
      </section>
    </div>
  );
}
