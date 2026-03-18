import { defineCollection, z } from 'astro:content';

const concepts = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    category: z.string().optional(),
    cover: z.string().optional(),
    date: z.coerce.date(),
    location: z.string().optional(),
    photos: z.array(z.object({
      src: z.string(),
      caption: z.string().optional(),
      featured: z.boolean().optional(),
    })).optional(),
  }),
});

export const collections = { concepts };
