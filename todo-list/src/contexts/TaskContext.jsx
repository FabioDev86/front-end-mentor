'use client'

import { createContext, useContext, useState } from "react";

const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }) => {

  const [task, setTask] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  
  return (
    <TaskContext.Provider value={{task, setTask, completedTasks, setCompletedTasks, activeTasks, setActiveTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
