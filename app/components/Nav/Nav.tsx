import React from "react";
import { NAV_ITEMS } from "./constants";
import Image from "next/image";
import logoPng from "@/public/logo.png"
import { NavItem } from "./NavItem";

export function Nav() {
  return (
    <div>
        <Image src={logoPng} alt="Logo" className="w-40"/>
      <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) => (
          <NavItem {...navItem}/>
        ))}
      </nav>
    </div>
  );
}
