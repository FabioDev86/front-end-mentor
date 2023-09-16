'use client'

import { createContext, useContext, useState } from "react";

const TaskContext = createContext(undefined);

export const TaskProvider = ({ children }) => {
  const [task, setTask] = useState("");

  return (
    <TaskContext.Provider value={{task, setTask}}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
