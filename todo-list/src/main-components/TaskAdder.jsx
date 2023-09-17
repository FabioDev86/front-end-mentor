"use client";

import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import { useEffect, useState } from "react";

export default function TaskAdder(){
    
    const [localtask, setLocaltask] = useState("");
    const {setTask} = useTask();

    useEffect(() =>{
        const input = document.getElementById("input");
    }, []);    

    function handleChange(e){
        setLocaltask(e.target.value);
    }
    function handleKeyDown(e){
        if(e.key === "Enter"){
            setTask(localtask);
            input.value = "";            
        }
    }

    return(
        <div className="flex justify-start bg-white dark:bg-slate-800 px-5 py-3 gap-3 rounded-lg">
            <Checkbox />
            <input id="input" placeholder="Create a new to do..." onChange={handleChange} onKeyDown={handleKeyDown} className="focus:outline-none border-none text-slate-800 dark:placeholder:text-slate-600 w-full dark:text-slate-400 dark:bg-slate-800 "/>
        </div>
    );
}