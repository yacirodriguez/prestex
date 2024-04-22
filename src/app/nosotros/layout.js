import Image from "next/image";

export default function NosotrosLayout({ children }) {
    return (
        <>
            <main className="container mx-auto px-4">
                <div className="bg-slate-300 rounded-lg shadow-md p-6 my-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Quiénes Somos</h1>
                    <p className="text-gray-700">Somos una cooperativa de ahorro y crédito recientemente fundada. Con el objetivo de acercar mayores posibilidades a quienes necesiten una mano económica.</p>
                </div>
                <hr className="my-4" />
                <div className="bg-slate-400 rounded-lg shadow-md p-6 mb-4">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Nuestros Locales</h1>
                    
                </div>
                {children}
            </main>
        </>
    );
}
