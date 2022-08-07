import PropTypes from 'prop-types'
import { Icon } from '@iconify/react';
import { useContext, useState } from 'react';
import { TasksContext } from '../context/tasksContext';
import { completeTask, deleteTask } from '../models/updateTask';

const TaskShow = ({titulo, contenido, id, completada}) => {

  const { editiingTask, getsTs } = useContext(TasksContext);
  
  const data = {
    titulo,
    contenido,
    id,
    isEdit: true
  }

  const editButt = () => {
    editiingTask(data)

  }

  const borrarTarea = async() => {
    await deleteTask(id)

    await getsTs();
  }

  const tareaCompletada = async() => {
    console.log('comlete');
    await completeTask(data)
    await getsTs()
  }

  return (
    <div className={`flex shadow-lg w-4/5 p-2 hover:bg-green-50 min-h-3 mb-3 ${ completada && 'bg-blue-200' }`}>
      <div className='w-4/5'>
        <h1 className='font-rubik font-2xl font-semibold px-4'>{titulo}</h1>
        <p className='font-rubik font-2xl font-medium px-4'>{contenido}</p>
      </div>

      <div className='w-1/5 flex content-start justify-between'>
        <div className='bg-yellow-500 p-1 rounded cursor-pointer hover:bg-yellow-400 h-min' onClick={editButt}>
          <Icon icon="akar-icons:chat-edit" className='text-3xl text-white' />
        </div>

        <div className='bg-red-500 p-1 rounded cursor-pointer hover:bg-red-400 h-min' onClick={borrarTarea}>
        <Icon icon="ep:delete" className='text-3xl text-white'/>
        </div>

        <div className='bg-blue-500 p-1 rounded cursor-pointer hover:bg-blue-400 h-min' onClick={tareaCompletada}>
        <Icon icon="icon-park-outline:file-success" className='text-3xl text-white'/>
        </div>
      
      </div>
        
    </div>
  )
}

TaskShow.propTypes = {
    titulo: PropTypes.string.isRequired,
    contenido: PropTypes.string.isRequired,
    editing: PropTypes.func
}

export default TaskShow