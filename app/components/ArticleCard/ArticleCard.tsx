"use client"
import { Article } from "@/app/types/article-type";
import Image from "next/image";
import Link from "next/link";
import defaultImagPng from "@/public/default-news.png"
import { CATEGORIES_ITEMS } from "../Nav/constants";
import { useState } from "react";
import { ImageWithFallback } from "../ImageWithFallback/ImageWithFallback";

export function ArticleCard(p :{article: Article}){
    const  [imgSrc, setImgSrc]=useState(p.article.image_url)
    return(
        <>
            <Link href="#" className="block w-80 space-y-4 hover:bg-slate-50 transition transform hover:scale-105 border-2 border-gray-100 pt-1 pb-4 px-6 rounded-xl shadow-sm">
            {/* Header */}
                <div className="capitalize">
                    <div className="flex items-center gap-2">
                        <div className="flex w-10 h-10 justify-center items-center border border-stone-300 rounded-full">
                            <Image className="w-5 h-5" src={CATEGORIES_ITEMS[p.article.category[0]].src} alt="" />
                        </div>
                        <div className="font-bold text-md">{p.article.category}</div>
                    </div>
                    {/* date */}
                    <div className="md-2 text-sm text-gray-400">Published : {new Date(p.article.pubDate).toDateString()}</div>
                </div>
                {/* body */}
                <div>
                    <div className="font-semibold text-xl line-clamp-2 h-14">{p.article.title}</div>
                    {/* articleImg */}
                    <ImageWithFallback className="h-40 rounded-lg" src={p.article.image_url || defaultImagPng} alt="Article Image" height={200} width={300} fallback={defaultImagPng}/>
                </div>
            </Link>
        </>
    );
}