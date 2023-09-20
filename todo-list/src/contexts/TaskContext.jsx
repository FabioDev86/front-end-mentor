'use client'

import { createContext, useContext, useState } from "react";

const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  return (
    <TaskContext.Provider value={{task, setTask, completedTasks, setCompletedTasks}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
