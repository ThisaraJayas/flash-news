import { ArticleApi } from "@/app/api/article-api";
import { ArticleList } from "../ArticleList/ArticleList";
import Image from "next/image";
import topPng from "@/public/top.png"

export async function LatestNews(){
    const article = await ArticleApi.fetchToday()
    return(
        <>
        <div className="flex items-center space-x-4 mb-16">
            <Image src={topPng} className="h-10 w-10" alt="Latest News Icon"/>
            <h1 className="text-4xl font-bold capitalize">Latest News</h1>
        </div>
        <ArticleList article={article}/>
        </>
    );
}