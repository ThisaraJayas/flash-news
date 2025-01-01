import { CATEGORIES_ITEMS } from "@/app/components/Nav/constants";
import Image from "next/image";

export default function CategoryDefaultPage(p: { params: { id: keyof typeof CATEGORIES_ITEMS } }) {

    const categoryItem = CATEGORIES_ITEMS[p.params.id]
  return (
    <div className="flex items-center space-x-4">
        <Image src={categoryItem.src} alt={categoryItem.alt} className="w-10 h-10"/>
      <h1 className="font-bold capitalize text-3xl">{p.params.id} News</h1>
    </div>
  );
}
