import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const concepts = defineCollection({
  loader: glob({ pattern: '**/[^_]*/index.md', base: './src/content/concepts' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.string().optional(),
    cover: z.string().optional(),
    date: z.coerce.date(),
    location: z.string().optional(),
    hero: z.object({
      src: z.string(),
      caption: z.string().optional(),
      illustration: z.string().optional(),
    }).optional(),
    annotations: z.array(z.object({
      id: z.number(),
      label: z.string(),
      x: z.number().min(0).max(100),
      y: z.number().min(0).max(100),
      summary: z.string().optional(),
    })).optional(),
    photos: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
      featured: z.boolean().optional(),
    })).optional(),
  }),
});

export const collections = { concepts };
