import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
};

const SEO = ({ title, description, jsonLd }: SEOProps) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    let jsonLdScript: HTMLScriptElement | null = null;
    if (jsonLd) {
      jsonLdScript = document.createElement("script");
      jsonLdScript.type = "application/ld+json";
      jsonLdScript.text = JSON.stringify(jsonLd);
      jsonLdScript.setAttribute("data-generated", "true");
      document.head.appendChild(jsonLdScript);
    }

    return () => {
      document.title = previousTitle;
      if (jsonLdScript) {
        document.head.removeChild(jsonLdScript);
      }
    };
  }, [title, description, jsonLd]);

  return null;
};

export default SEO;
