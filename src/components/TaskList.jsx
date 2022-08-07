import React, { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/tasksContext";
import TaskShow from "./TaskShow";

const TaskList = ({ }) => {
  const { getsTs, tasks } = useContext(TasksContext);

  return (
    <>
      {tasks.map( ({id, titulo, contenido, completada }) => (
        <>
          <TaskShow key={id} titulo={titulo} contenido={contenido} id={id} completada={completada} />
        </>
      ))}
    </>
  );
};

export default TaskList;
