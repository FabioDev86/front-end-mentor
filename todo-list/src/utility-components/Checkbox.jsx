import Image from "next/image";
import { useEffect, useState } from "react";
import { useTask } from "@/contexts/TaskContext";

export default function Checkbox(props){

    //Those are the states from the Context
    const{ completedTasks, setCompletedTasks, activeTasks, setActiveTasks } = useTask();

    //This state is a boolean and it is used to save the state of the Checkbox
    const[checked, setChecked] = useState(completedTasks.includes(props.task)); 

    //Every time a user complete a task or remove a task from completed the state will change.
    //This is necessary because a completed task is present in the completed list and in the general list, 
    //and I can't predict from there in wich list the user is clicking. 
    useEffect(() => {
        setChecked(completedTasks.includes(props.task));
    }, [completedTasks]);
    
    //I use disabled because in the Task adder the user can't check the box. It is there only for
    //styling purpose.
    const handleClick = () => {
        if(!props.disabled && !checked){
            setChecked(!checked);
            //If is not checked that means I have to add the task to the completed list and 
            //remove it from the active list.
            setCompletedTasks([...completedTasks, props.task]);
            setActiveTasks(activeTasks.filter((item) => {
                return item != props.task;
            }))
            
        }else if(!props.disabled && checked){
            //If is checked that means I have to add it back to the active list and remove it from
            //the completed list
            setActiveTasks([...activeTasks, props.task]);
            setCompletedTasks(completedTasks.filter((item) => {
                return item != props.task;
            }));
            setChecked(!checked);
        }     
    }
    return(
        //Here I build the className string conditionally
        <div onClick={handleClick} className={"w-[25px] h-[25px] shrink-0 border-2 rounded-[50%] pt-1 pl-1 dark:border-slate-700 " + (checked ? "bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-sky-500" : "")} >            
            {checked ? <Image width={15} height={15} alt="checked icon" src="/icon-check.svg" /> : ""}
        </div>
    );
}