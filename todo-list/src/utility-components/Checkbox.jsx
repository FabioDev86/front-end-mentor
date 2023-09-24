import Image from "next/image";
import { useEffect, useState } from "react";
import { useTask } from "@/contexts/TaskContext";

export default function Checkbox(props){

    
    const{ completedTasks, setCompletedTasks, activeTasks, setActiveTasks } = useTask();
    const[checked, setChecked] = useState(completedTasks.includes(props.task)); 

    useEffect(() => {
        setChecked(completedTasks.includes(props.task));
    }, [completedTasks]);
    
    const handleClick = () => {
        if(!props.disabled && !checked){
            setChecked(!checked);
            setCompletedTasks([...completedTasks, props.task]);
            setActiveTasks(activeTasks.filter((item) => {
                return item != props.task;
            }))
            
        }else if(!props.disabled && checked){
            setActiveTasks([...activeTasks, props.task]);
            setCompletedTasks(completedTasks.filter((item) => {
                return item != props.task;
            }));
            setChecked(!checked);
        }     
    }
    return(
        <div onClick={handleClick} className={"w-[25px] h-[25px] shrink-0 border-2 rounded-[50%] pt-1 pl-1 dark:border-slate-700 " + (checked ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-sky-500" : "")} >            
            {checked ? <Image width={15} height={15} alt="checked icon" src="/icon-check.svg" /> : ""}
        </div>
    );
}