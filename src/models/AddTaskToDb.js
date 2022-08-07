import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export const addTask = async( data ) => {

    try {
        
        const res = await addDoc(collection(db, 'Tareas'),{data})
        
        return res

    } catch (error) {
        console.log(error)
    }

}



