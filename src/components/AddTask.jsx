import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { db } from "../firebase/config";
import { addTask } from "../models/AddTaskToDb";
import { TasksContext } from "../context/tasksContext";

const AddTask = () => {
  const { getsTs } = useContext(TasksContext);
  const [Tarea, setTarea] = useState({
    titulo: "",
    contenido: "",
    completada: false
  });

  const { titulo, contenido } = Tarea;

  const onInputChange = ({ target: { name, value } }) => {
    setTarea({
      ...Tarea,
      [name]: value,
    });

  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    if( titulo === '' || contenido === "" ) return;

    await addTask(Tarea);

    await getsTs()
  
    // Emitiendo el ID de la tarea, para que el useEffect Haga el cambio en el TaskList
    // newTask(getTask.id)

    setTarea({
      ...Tarea,
      titulo: "",
      contenido: "", 
    });
  };

  return (
    <div className="w-80 border shadow h-min">
      <h1 className="text-center py-3 text-2xl font-rubik font-semibold">
        Agregar Tarea
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <input
              type="text"
              name="titulo"
              className="bg-blue-100 rounded w-10/12 h-8 px-2 font-rubik"
              placeholder="Titulo"
              value={titulo}
              onChange={onInputChange}
            />
          </div>

          <div className="flex justify-center mt-4 mb-4">
            <textarea
              name="contenido"
              cols="30"
              rows="10"
              placeholder="Contenido"
              className="bg-blue-100 rounded w-10/12 px-2 font-rubik"
              value={contenido}
              onChange={onInputChange}
            ></textarea>
          </div>

          <div className="flex justify-center mb-6">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Agregar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AddTask.propTypes = {};

export default AddTask;
