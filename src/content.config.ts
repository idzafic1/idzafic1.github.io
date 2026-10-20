import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    report: z.string().url().optional(),
    order: z.number(),
    featured: z.boolean(),
    period: z.string().optional(),
    team: z.string().optional(),
    status: z.enum(['completed', 'in-progress']).optional(),
    cover: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })).optional(),
    highlights: z.array(z.string()).optional(),
  }),
});

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    platform: z.string(),
    level: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    summary: z.string(),
  }),
});

export const collections = { projects, writeups };
