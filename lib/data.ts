import articlesData from "@/data/articles.json";
import { Project, Article } from "@/types";

export function getArticles(): Article[] {
  return articlesData as Article[];
}

export function getFeaturedArticles(): Article[] {
  return (articlesData as Article[]).filter((a) => a.featured);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return (articlesData as Article[]).find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return (articlesData as Article[]).filter((a) => a.category === category);
}
