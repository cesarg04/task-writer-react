import React, { useContext, useEffect, useState } from "react";
import { TasksContext } from "../context/tasksContext";
import { updateContentTask } from "../models/updateTask";


const EditTask = () => {

  const { taskforEdit, settaskforEdit, getsTs } = useContext(TasksContext);
  const [Tarea, setTarea] = useState({
    titulo: taskforEdit.titulo,
    contenido: taskforEdit.contenido,
    id: taskforEdit.id
  });

  useEffect(() => {
    setTarea({
      titulo: taskforEdit.titulo,
      contenido: taskforEdit.contenido,
      id: taskforEdit.id
    })  
  
  }, [taskforEdit])
  
  
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

    updateContentTask(Tarea);

    settaskforEdit({
      ...taskforEdit,
      isEdit: false
    })

    await getsTs();

    setTarea({
      titulo: "",
      contenido: "",
    });
  };

  return (
    <div className="w-80 border shadow h-min">
      <h1 className="text-center py-3 text-2xl font-rubik font-semibold">
        Editar Tarea
      </h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <input
              type="text"
              name="titulo"
              className="bg-blue-100 rounded w-10/12 h-8 px-2 font-rubik"
              placeholder="Titulo"
              value={Tarea.titulo}
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
              value={Tarea.contenido}
              onChange={onInputChange}
            ></textarea>
          </div>

          <div className="flex justify-center mb-6">
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Editar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

EditTask.propTypes = {};

export default EditTask;
