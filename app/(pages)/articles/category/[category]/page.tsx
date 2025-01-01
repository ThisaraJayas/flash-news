import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "@/app/components/ArticleList/ArticleList";
import { CATEGORIES_ITEMS } from "@/app/components/Nav/constants";
import { Article, ArticleCategory } from "@/app/types/article-type";
import Image from "next/image";

export default async function CategoryDefaultPage(p: { params: { category: ArticleCategory; articles : Article[] } }) {

    // const categoryItem = CATEGORIES_ITEMS[p.params.category];
    const articles = await ArticleApi.fetchByCategory(p.params.category)
  return (

    <div>
      <div className="flex items-center space-x-4 mb-16">
            <Image src={CATEGORIES_ITEMS[p.params.category].src} className="h-10 w-10" alt="Latest News Icon"/>
            <h1 className="text-4xl font-bold capitalize">Latest News</h1>
        </div>
      <ArticleList article={articles}/></div>
  );
}
