import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
	const tools = await getCollection("tools");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: tools.map((tool) => ({
			title: tool.data.name,
			description: tool.data.descriptionEn,
			link: `/tools/${tool.id}/`,
			pubDate: new Date(),
		})),
	});
}
