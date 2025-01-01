import { Article } from "@/app/types/article-type";
import { ArticleCard } from "../ArticleCard/ArticleCard";

export function ArticleList(p:{article: Article[]}){
    return(
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-20 md:justify-normal">
            {p.article.map(article => <ArticleCard key={article.article_id} article={article}/>)}
        </div>
    );
}