import { useEffect, useState } from "react";
import { getPlanes } from "../data/firebase";

export default function Search({ searchTerm, onOpenModal }) {
    const [planes, setPlanes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const unsubscribe = getPlanes((planesData) => {
            if (!searchTerm) {
                setPlanes([]);
            } else {
                const filtered = planesData.filter(plane =>
                    plane.model.toLowerCase().includes(searchTerm.toLowerCase())
                );
                console.log("Planes filtrados:", filtered);
                setPlanes(filtered);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, [searchTerm]);

    if (loading) return <div className="flex justify-center items-center p-8">
        <div className="animate-pulse text-lg font-medium">Cargando...</div>
    </div>;
    
    if (planes.length === 0) return <div className="flex justify-center items-center p-8">
        <div className="text-lg font-medium">No se encontraron aviones</div>
    </div>;
    
    const handlePlaneClick = (planeId) => {
        console.log("ID del avión seleccionado:", planeId);
        onOpenModal(planeId);
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-6 text-center">Resultados de búsqueda</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {planes.map((plane) => (
                    <div 
                        key={plane.id} 
                        className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden dark:bg-gray-800 dark:border-gray-700"
                    >
                        <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                            {plane.img ? (
                                <img 
                                    src={plane.img} 
                                    alt={`${plane.model}`} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/400x250?text=Sin+imagen";
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                                    <p className="text-gray-500 dark:text-gray-400">Sin imagen disponible</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="p-5">
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {plane.model}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                <span className="font-medium">Fabricante:</span> {plane.producer}<br/>
                                <span className="font-medium">Capacidad:</span> {plane.capacity} pasajeros<br/>
                                <span className="font-medium">Accidentes:</span> {plane.accidents}
                            </p>
                            <button 
                                onClick={() => handlePlaneClick(plane.id)}
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors duration-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Ver detalles
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}