import Image from 'next/image';

export default function Card({ titulo, descripcion,img }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {img && (
                <Image 
                    src={img} 
                    alt={`Imagen de ${titulo}`} 
                    width={500} 
                    height={300}
                    className="relative overflow-hidden bg-gray-200"
                    />
                    )}
            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
                <p className="text-gray-700">{descripcion}</p>
            </div>
        </div>
    );
}
