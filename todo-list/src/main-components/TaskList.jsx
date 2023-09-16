"use client";
import { useTask } from "@/contexts/TaskContext";

export default function TaskList(){
    const {task} = useTask()

    return(
        <div>
            <h1>Task List</h1>
            <h1>{task}</h1>
        </div>
    );
}