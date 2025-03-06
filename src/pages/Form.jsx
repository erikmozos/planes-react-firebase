import { useState } from "react"
import { addPlanes } from "../data/firebase.js"

export default function Form() {

  const [plane, setPlane] = useState({
    model: "",
    producer: "",
    capacity: "",
    accidents: "",
    description: "",
    img: "",
  })

  const handleChange = (e) => {
    setPlane({...plane, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlanes(plane); 
    console.log("Avión añadido:", plane);
    setPlane({ model: "", producer: "", capacity: "", accidents: "", description: "", img: "" });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-xl dark:bg-gray-800 dark:text-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Añadir Nuevo Avión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="model" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Modelo
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={plane.model}
            onChange={handleChange}
            placeholder="Ej: Boeing 747"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="producer" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Fabricante
          </label>
          <input
            type="text"
            id="producer"
            name="producer"
            value={plane.producer}
            onChange={handleChange}
            placeholder="Ej: Boeing"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="capacity" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Capacidad (pasajeros)
          </label>
          <input
            type="number"
            id="capacity"
            name="capacity"
            value={plane.capacity}
            onChange={handleChange}
            placeholder="Ej: 366"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="accidents" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Número de accidentes
          </label>
          <input
            type="number"
            id="accidents"
            name="accidents"
            value={plane.accidents}
            onChange={handleChange}
            placeholder="Ej: 5"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Descripción
          </label>
          <textarea
            id="description"
            name="description"
            value={plane.description}
            onChange={handleChange}
            placeholder="Describe las características del avión..."
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          ></textarea>
        </div>
        
        <div>
          <label htmlFor="img" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            URL de la imagen
          </label>
          <input
            type="text"
            id="img"
            name="img"
            value={plane.img}
            onChange={handleChange}
            placeholder="https://ejemplo.com/imagen.jpg"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-6"
        >
          Añadir Avión
        </button>
      </form>
    </div>
  )
}