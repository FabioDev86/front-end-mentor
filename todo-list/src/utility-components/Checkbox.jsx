import Image from "next/image";
import { useState } from "react";
import { useTask } from "@/contexts/TaskContext";

export default function Checkbox(props){

    const[checked, setChecked] = useState(false);
    const{ task, completedTasks, setCompletedTasks } = useTask();

    const handleClick = () => {
        if(!props.disabled) setChecked(!checked);
        setCompletedTasks([...completedTasks, task[props.index]]);
    }

    return(
        <div onClick={handleClick} className={"w-[25px] h-[25px] shrink-0 border-2 rounded-[50%] pt-1 pl-1 dark:border-slate-700 " + (checked ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-sky-500" : "")} >            
            {checked ? <Image width={15} height={15} alt="checked icon" src="/icon-check.svg" /> : ""}
        </div>
    );
}