import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const tools = defineCollection({
	// Load Markdown and MDX files in the `src/content/tools/` directory.
	loader: glob({ base: "./src/content/tools", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		name: z.string(),
		description: z.string(),
		descriptionEn: z.string(),
		category: z.string(),
		url: z.string(),
		logoUrl: z.string().optional(),
		price: z.string(),
		creator: z.string(),
		value: z.string(),
		valueEn: z.string(),
		featured: z.boolean().optional(),
		accentColor: z.string().optional(),
	}),
});

export const collections = { tools };
