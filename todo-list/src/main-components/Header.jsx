"use client";

import Image from "next/image";
import { useState } from "react";

function switchTheme (theme) {
    // This function has to set the class of the html element to dark
    theme === "light" ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
}

export default function Header(){
    const [theme, setTheme] = useState("light");
    return(
        <div className="flex gap-[3rem]"> 
            <h1 className="text-white text-4xl font-extrabold">TODO</h1>
              
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
                onClick={ () =>{
                    switchTheme(theme);
                    setTheme("dark");
                }}
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
                onClick={ () => {
                    switchTheme(theme);
                    setTheme("light");                
                }}
            />
            }         
        </div>
    );
}