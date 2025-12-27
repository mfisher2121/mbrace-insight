import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: "website" | "article";
}

export default function SEO({
  title = "MBRACE Insight - The Operating System for HVAC Growth in the DMV",
  description = "Turn your ad spend, reviews, and field ops into a predictable EBITDA machine. Built specifically for HVAC contractors in Washington DC, Maryland, and Northern Virginia.",
  keywords = "HVAC marketing, HVAC contractors DMV, HVAC lead generation, local HVAC SEO, HVAC growth systems, Washington DC HVAC, Maryland HVAC, Northern Virginia HVAC, heat pump incentives, HVAC automation",
  canonical,
  ogImage = "/og-image.jpg",
  type = "website"
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Description
    updateMetaTag("description", description);

    // Keywords
    updateMetaTag("keywords", keywords);

    // Open Graph
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:image", ogImage, true);
    updateMetaTag("og:url", canonical || window.location.href, true);

    // Twitter Card
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage);

    // Canonical link
    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical || window.location.href);

    // Structured Data - Organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MBRACE Insight",
      "description": "The Operating System for HVAC Growth in the DMV",
      "url": "https://mbraceinsight.com",
      "logo": "https://mbraceinsight.com/logo.png",
      "sameAs": [
        "https://calc.mbraceinsight.com",
        "https://dmvheatpumps.com"
      ],
      "areaServed": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": "38.9072",
          "longitude": "-77.0369"
        },
        "geoRadius": {
          "@type": "Distance",
          "name": "DMV Region"
        }
      },
      "serviceType": "HVAC Marketing Services",
      "audience": {
        "@type": "Audience",
        "audienceType": "HVAC Contractors"
      }
    };

    // Remove existing structured data script
    const existingScript = document.getElementById("structured-data");
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement("script");
    script.id = "structured-data";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [title, description, keywords, canonical, ogImage, type]);

  return null;
}

