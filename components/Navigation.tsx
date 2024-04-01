"use client"

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react"


export function Navigation () {

    const path = usePathname();

    const [isRouting, setIsRouting] = useState(false);
    const [prevPath, setPrevPath] = useState("/");

    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true);
        }
    }, [path, prevPath])

    useEffect(() => {
        if (isRouting === true) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200)

            return() => clearTimeout(timeout)
        }
    }, [isRouting])
    

   return (
    <div  style={{left: "20%"}} className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] flex-full justify-between items-center border border-white py-1">
        {NavLinks.map((nav) => (
            <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
                <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`} />
            </Link>
        ))}
    </div>
   )


}

