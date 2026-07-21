import type { APIRoute } from "astro";
import { publicRoutes, siteConfig } from "../config/site";

export const GET: APIRoute = () => {
  const urls = publicRoutes
    .map(
      (route) => `  <url><loc>${new URL(route, siteConfig.domain)}</loc></url>`,
    )
    .join("\n");

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
