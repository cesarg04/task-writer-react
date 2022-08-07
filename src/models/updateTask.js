import { db } from "../firebase/config";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";


export const updateContentTask = async(datanew) => {

    const { id, titulo, contenido } = datanew;

    const data = {
        titulo,
        contenido
    }

    try {
        await updateDoc(doc(db, 'Tareas', id), {data:data});
        
    } catch (error) {
        console.log(error)
    }

} 


export const completeTask = async( datanew ) => {

    const { id, titulo, contenido } = datanew;


    const data = {
        titulo,
        contenido,
        completada: true
    }
    console.log(data);

    

    try {
        await updateDoc(doc(db, 'Tareas', id), {data: data})
    } catch (error) {
        
    }

}


export const deleteTask = async( id ) => {
    console.log(id)

    try {
        await deleteDoc(doc(db, 'Tareas', id))

    } catch (error) {
        console.log(error)
    }

}



