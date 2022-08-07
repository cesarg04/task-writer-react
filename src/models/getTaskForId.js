import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const getTaskForId = async( id ) => {

    const docRef = doc(db, 'Tareas', id)
    const docSnap = await getDoc(docRef);
    

    return docSnap;
}

