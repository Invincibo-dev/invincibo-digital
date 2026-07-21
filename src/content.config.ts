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
    caseStudyReady: z.boolean().default(false),
    category: z.string(),
    visibility: z.enum(["public", "anonymized", "private"]),
    publicTitle: z.string().trim().min(1).optional(),
    clientName: z.string().optional(),
    clientNameIsPublic: z.boolean().default(false),
    challenge: z.string().trim().min(1).optional(),
    solution: z.string().trim().min(1).optional(),
    capabilities: z.array(z.string()).max(3),
    technologies: z.array(z.string()).optional(),
    coverImage: z.string().optional(),
    coverImageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    statusLabel: z.string(),
    confidentialityNote: z.string().optional(),
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
