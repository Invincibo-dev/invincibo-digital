import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    published: z.boolean().default(false),
    order: z.number().int().nonnegative(),
    publicClient: z.boolean().default(false),
    heroImage: z.string().optional(),
    technologies: z.array(z.string()).optional(),
    date: z.coerce.date().optional(),
    category: z.string(),
    capabilities: z.array(z.string()).default([]),
    caseStudyReady: z.boolean().default(false),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/services" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    order: z.number().int().nonnegative(),
    published: z.boolean().default(false),
    icon: z.enum(["business", "code", "automation"]),
    problem: z.string(),
    benefits: z.array(z.string()).min(1),
    examples: z.array(z.string()).min(1),
    suitableFor: z.string(),
    callToActionLabel: z.string().optional(),
  }),
});

export const collections = { projects, services };
