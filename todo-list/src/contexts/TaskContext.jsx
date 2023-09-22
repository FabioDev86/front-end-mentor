'use client'

import { createContext, useContext, useState } from "react";

const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }) => {

  // I nedd only two list. I will combine the general list in TaskList
  const [completedTasks, setCompletedTasks] = useState([]);
  const [activeTasks, setActiveTasks] = useState([]);
  
  return (
    <TaskContext.Provider value={{completedTasks, setCompletedTasks, activeTasks, setActiveTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
