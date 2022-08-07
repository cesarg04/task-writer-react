import { useState } from "react";
import { getsTasks } from "../models/getTasksToDb";
import { TasksContext } from "./tasksContext";


export const TasksProvider = ({ children }) => {
  const [tasks, settasks] = useState([]);
  const [taskforEdit, settaskforEdit] = useState({
    titulo: '',
    contenido: '',
    id: '',
    isEdit: false
  })

  const getsTs = async() => {

    const resp = await getsTasks();
    settasks(resp)
  }

  const editiingTask = ( data ) => {
    settaskforEdit(data)
  }

  // getsTs()
  return (
    <TasksContext.Provider value={{ tasks, settasks ,editiingTask, taskforEdit, settaskforEdit, getsTs }}>
        { children }
    </TasksContext.Provider>
  )
}