import Script from "next/script";

interface OrganizationSchemaProps {
  siteUrl: string;
}

export function OrganizationSchema({ siteUrl }: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CG Model Tek LLC",
    url: siteUrl,
    logo: `${siteUrl}/images/logo/cgmodelteklogo.png`,
    description:
      "Industrial precision machining and automation specializing in aerospace components, CNC machining, and robotic tending.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      url: `${siteUrl}/contact`,
    },
    sameAs: [],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  provider: string;
}

export function ServiceSchema({
  name,
  description,
  url,
  provider,
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    areaServed: "US",
    serviceType: "Manufacturing",
  };

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
