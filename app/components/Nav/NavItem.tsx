"use client"
import { ArticleCategory } from "@/app/types/article-type";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavItem(p:{category: ArticleCategory, alt: string, src: StaticImageData}){
    const pathName = usePathname() //get pathname from browser ex: bussinees,environment
    const isActive ="/articles/category"+p.category===pathName;

    return <Link href={"/articles/category/"+p.category} className={`flex items-center h-12 gap-2 p-3 hover:bg-slate-100 transform transition hover:scale-105 rounded-xl
    ${isActive && "bg-orange-50"}`}>
        <div className="flex justify-center items-center rounded-full border border-[#BBC2CC] w-5 h-5">
            <Image src={p.src} alt={p.alt} className="h-5 w-5"/>
        </div>
        <div className="capitalize font-semibold">
            {p.category}
        </div>
    </Link> 
}