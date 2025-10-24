import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Category = "guia" | "artigo";

// Point to the new content root: src/content/ajuda
const CONTENT_DIR = path.join(process.cwd(), "src", "content", "ajuda");

function findFileBySlug(category: Category, slug: string): string | null {
	const baseDir = path.join(CONTENT_DIR, category);
	if (!fs.existsSync(baseDir)) return null;

	const stack: string[] = [baseDir];
	while (stack.length) {
		const current = stack.pop() as string;
		const entries = fs.readdirSync(current, { withFileTypes: true });
		for (const entry of entries) {
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
			} else if (entry.isFile() && entry.name.toLowerCase() === `${slug}.md`) {
				return full;
			}
		}
	}
	return null;
}

export function getContent(category: Category, slug: string) {
	const filePath = findFileBySlug(category, slug);
	if (!filePath || !fs.existsSync(filePath)) {
		return null;
	}
	const file = fs.readFileSync(filePath, "utf-8");
	const { content, data } = matter(file);
	return { content, data } as { content: string; data: Record<string, any> };
}

export function getAllSlugs(category: Category): string[] {
	const baseDir = path.join(CONTENT_DIR, category);
	if (!fs.existsSync(baseDir)) return [];
	const slugs = new Set<string>();
	const stack: string[] = [baseDir];
	while (stack.length) {
		const current = stack.pop() as string;
		const entries = fs.readdirSync(current, { withFileTypes: true });
		for (const entry of entries) {
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
			} else if (entry.isFile() && entry.name.endsWith(".md")) {
				slugs.add(entry.name.replace(/\.md$/i, ""));
			}
		}
	}
	return Array.from(slugs);
}

export function getTitleFromSlug(slug: string) {
	return slug
		.replace(/-/g, " ")
		.replace(/\b\w/g, (m) => m.toUpperCase());
}