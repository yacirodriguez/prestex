'use client'
import{ref, uploadBytes ,getDownloadURL, uploadBytesResumable} from 'firebase/storage'
import {db, storage} from '@/app/firebase/config'
export default function SubirImagen(){
    const handleInput = async (e)=>{
        const refStorage = ref(storage, "imagen")
        const fileSnapshot = await uploadBytes(refStorage, e.target.files[0])
        const fileUrl= await getDownloadURL(fileSnapshot.ref)
        console.dir(fileUrl)

    }
    return (
        <div className="p-4">
            <input type="file" onChange={handleInput}/>
        </div>
    )
}