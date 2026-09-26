import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/uz/rahmat", "/ru/spasibo"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
