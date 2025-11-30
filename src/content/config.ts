import { defineCollection, z } from 'astro:content';

const accommodationCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string(),
      description: z.string(), // Markdown or HTML description
      squareMeters: z.string(),
      beds: z.string(),
      bathrooms: z.string().default("1"),
      kitchenette: z.string(),
      people: z.string(),
      level: z.string().optional(),
      amenities: z
        .array(
          z.object({
            name: z.string(),
          })
        )
        .optional(),
      images: z.array(image()), // replaces widget: "list" with image field
      imageOnRight: z.boolean().default(false),
      featured: z.boolean().default(false),
      order: z.number().default(0),
    }),
});

const settings = defineCollection({
  type: 'data', // αυτό σημαίνει ότι είναι global config
  schema: z.object({
    siteName: z.string(),
    phone: z.string(),
    landline: z.string(),
    email: z.string().email(),
    address: z.object({ en: z.string(), el: z.string() }),
    instagram: z.string().url().optional(),
    facebook: z.string().url().optional(),
    tripadvisor: z.string().url().optional(),
    license: z.string(),
  }),
});


const beachesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      draft: z.boolean().default(false),
    }),
});

const attractionsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      draft: z.boolean().default(false),
    }),
});

const servicesCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      draft: z.boolean().default(false),
      order: z.number(),
    }),
});

export const collections = {
  accommodation: accommodationCollection,
  settings: settings,
  beaches: beachesCollection,
  attractions: attractionsCollection,
  services: servicesCollection,
};
