"use client";

import { useTask } from "@/contexts/TaskContext";
import Checkbox from "@/utility-components/Checkbox";
import List from "@/utility-components/List";
import RemoveTask from "@/utility-components/RemoveTask";
import { useEffect, useState } from "react";

export default function TaskList(){    
    
    return(
        <>
        <List type={"general"} />
        <List type={"active"} />
        <List type={"completed"} />
        </>
    );
        
}