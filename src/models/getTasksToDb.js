
import { db } from "../firebase/config";
import { collection, getFirestore, getDocs } from "firebase/firestore";

export const getsTasks = async() => {

    const identify = collection(db, 'Tareas');

    const task = await getDocs(identify);


    
    const TaskWithId = []

    const tasks = task.docs.map( doc => {
        
        // Unificando el ID con la data Firestore
        const { data:{ titulo, contenido, completada } } = doc.data()
        const ParseData = {
            id: doc.id,
            titulo,
            contenido,
            completada
        }

        TaskWithId.push(ParseData)
    })


    
    return TaskWithId

}
