import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().min(70).max(180),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum([
      'photographie-video',
      'reception-restauration',
      'ambiance-decoration',
      'organisation-accompagnement',
    ]),
    tags: z.array(z.string()).min(1),
    draft: z.boolean().default(true),
  }),
});

export const collections = { blog };
