"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header(){
    const [theme, setTheme] = useState("light");
    return(
        <div className="flex"> 
            <h1 className="text-white text-4xl font-extrabold">TODO</h1>
            <h1>{theme === "light" ? "light" : "dark"}</h1>   
            {/*I had to add style={height: "30px"} because for some reason the heigth won't go under 50px otherwise */}
            {theme === "light" ? 
            <Image
                src="/icon-moon.svg"
                width={30}
                height={30}
                style={{
                    width: "30px",
                    height: "30px"
                }}
                alt="Dark theme"
                onClick={ () => setTheme("dark")}
            /> : 
            <Image
                src="/icon-sun.svg"
                width={30}
                height={30}
                style={{
                    width: "30px",
                    height: "30px"
                }}
                alt="Light theme"
                onClick={ () => setTheme("light")}
            />
            }         
        </div>
    );
}