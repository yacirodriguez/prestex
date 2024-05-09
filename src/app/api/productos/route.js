import {NextResponse} from "next/server"
import {collection, getDocs, query, where} from 'firebase/firestore'
import {db} from "@/app/firebase/config"

export async function GET(request, {params}){
    
    const productosRef = collection(db, "productos");

    try {
        const querySnapshot = await getDocs(productosRef);
        if (querySnapshot.empty) {
            return new NextResponse('Producto no encontrado', { status: 404 });
        }
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return NextResponse.json(docs);
    } catch (error) {
        return new NextResponse(error.message, { status: 500 });
    }
}
