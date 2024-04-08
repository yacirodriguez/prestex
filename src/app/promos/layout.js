import { Productos } from "../data/mockData";
import Card from "./ui/Card";

export default function PromosLayout({children}) {
    return (
        <div className="promos-layout">
            {Productos.map(producto => (
                <Card key={producto.slug} producto={producto} />
            
            ))}
    {children}
        </div>
    );
}

