import { useContext, useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import TaskList from "./components/TaskList";
import { TasksContext } from "./context/tasksContext";

function App() {

  const { taskforEdit, getsTs } = useContext(TasksContext);
  
  useEffect(() => {
    getsTs()
  
  }, [])
  

  return (
    <>
      <div className="mt-20 ml-20 grid grid-cols-3">
        {taskforEdit.isEdit ? (
          <EditTask />
        ) : (
          <AddTask />
        )}
        <div className="col-span-2">
          <TaskList
          />
        </div>
      </div>
    </>
      

  );
}

export default App;
