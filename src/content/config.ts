import { defineCollection, z } from "astro:content";

const serveces = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        slug: z.string(),
        graphic: z.enum(["Accounting", "Business", "Payroll", "Remote"]),
        order: z.number(),
    }),
});

export const collections = { serveces };