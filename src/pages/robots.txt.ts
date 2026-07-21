import type { APIRoute } from "astro";
import { provisionalLegalRoutes, siteConfig } from "../config/site";

export const GET: APIRoute = () => {
  const directives = siteConfig.domainIsProvisional
    ? ["User-agent: *", "Disallow: /"]
    : [
        "User-agent: *",
        "Allow: /",
        "Disallow: /design-system/",
        ...provisionalLegalRoutes.map((route) => `Disallow: ${route}`),
      ];

  directives.push(`Sitemap: ${new URL("/sitemap.xml", siteConfig.domain)}`);

  return new Response(`${directives.join("\n")}\n`, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
