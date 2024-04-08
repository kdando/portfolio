"use client"

import { NavLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react"
import { Transition } from "./Transition";


export function Navigation () {

    const path = usePathname();

    const [isRouting, setIsRouting] = useState(false);
    const [prevPath, setPrevPath] = useState("/");

    //if previous path, i.e. last page, does not equal current pathname, i.e. page we are on, then set isRouting to true...
    //check this whenever path or previous path change
    useEffect(() => {
        if (prevPath !== path) {
            setIsRouting(true);
        }
    }, [path, prevPath])

    //if isRouting is true, set previous path to equal current pathname, then, after a timeout, set isRouting to false.
    //the timeout is space for the transition animation to play
    useEffect(() => {
        if (isRouting === true) {
            setPrevPath(path);
            const timeout = setTimeout(() => {
                setIsRouting(false);
            }, 1200)
            return () => clearTimeout(timeout)
        }
    }, [isRouting])
    

   return (
    
    // render the div that actually contains/"is" the navigation bar
    <div  style={{left: "20%"}} className="absolute z-[50] -bottom-20 w-[50%] md:w-[20%] max-h-[150px] flex-full justify-between items-center border border-white py-1 px-4 bg-black">

        {/* if isRouting is true we render the Transition animation */}
        {isRouting && <Transition />}

        {/* then we render the navigation bar links within the containing div */}
        {NavLinks.map((nav) => (
            <Link key={nav.name} href={nav.link} className="mb-16 pl-4 min-w-[20%]">
                <nav.icon className={`w-[24px] h-[24px] ${path === nav.name ? "text-purple-800" : "text-white"}`} />
            </Link>
        ))}
    </div>
   )


}

