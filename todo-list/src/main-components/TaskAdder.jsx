"use client";

import Checkbox from "@/utility-components/Checkbox";
import { useState } from "react";

export default function TaskAdder(){
    const [task, setTask] = useState("");
    function handleChange(e){
        setTask(e.target.value);
    }
    function handleKeyDown(e){
        if(e.key === "Enter"){
            alert("You added task: "+task);
        }
    }
    return(
        <div className="flex justify-start bg-white dark:bg-slate-800 px-5 py-3 gap-3 rounded-lg">
            <Checkbox />
            <input placeholder="Create a new to do..." onChange={handleChange} onKeyDown={handleKeyDown} className="focus:outline-none border-none text-slate-800 w-full dark:text-slate-400 dark:bg-slate-800 "/>
        </div>
    );
}