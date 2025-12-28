export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://zennithdevelopments.com/#organization",
    "name": "Zennith Developments",
    "url": "https://zennithdevelopments.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://zennithdevelopments.com/logo.png",
      "width": "250",
      "height": "60"
    },
    "description": "Professional web development agency in Jamaica specializing in custom websites, e-commerce solutions, and web applications.",
    "email": "zennithdevelopments@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kingston",
      "addressCountry": "JM",
      "addressRegion": "Kingston"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.0179",
      "longitude": "-76.8099"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "sameAs": [
      "https://www.facebook.com/zennithdevelopments",
      "https://twitter.com/zennithdev",
      "https://www.instagram.com/zennithdevelopments",
      "https://www.linkedin.com/company/zennith-developments"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://zennithdevelopments.com/#business",
    "name": "Zennith Developments",
    "image": "https://zennithdevelopments.com/og-image.jpg",
    "description": "Leading web development agency in Jamaica. We create custom websites, e-commerce platforms, and web applications that drive real business results.",
    "url": "https://zennithdevelopments.com",
    "telephone": "+1-876-839-6403",
    "email": "zennithdevelopments@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kingston",
      "addressCountry": "JM"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.0179",
      "longitude": "-76.8099"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://zennithdevelopments.com/#website",
    "url": "https://zennithdevelopments.com",
    "name": "Zennith Developments",
    "description": "Professional web development agency in Jamaica",
    "publisher": {
      "@id": "https://zennithdevelopments.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://zennithdevelopments.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development",
    "provider": {
      "@id": "https://zennithdevelopments.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Jamaica"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Bespoke website solutions tailored to your business needs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-commerce Development",
            "description": "Full-featured online stores with secure payment processing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Application Development",
            "description": "Complex web applications with advanced functionality"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Search engine optimization to improve online visibility"
          }
        }
      ]
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://zennithdevelopments.com"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
