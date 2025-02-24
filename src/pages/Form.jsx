import { useState } from "react"
import { addPlanes } from "../data/firebase.js"

export default function Form() {

  const [plane, setPlane] = useState({
    model: "",
    producer: "",
    capacity: "",
    accidents: "",

    
  })

  const handleChange = (e) =>{
    setPlane({...plane, [e.target.name]: e.target.value})
    console.log("Hola");
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setPlane({model: "", producer: "", capacity:"", accidents:""})
    console.log("Plane added");
    console.log(plane);
    addPlanes(plane)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">ADD A NEW PLANE MODEL</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="model"
          value={plane.model}
          onChange={handleChange}
          placeholder="Model"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="producer"
          value={plane.producer}
          onChange={handleChange}
          placeholder="Producer"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="capacity"
          value={plane.capacity}
          onChange={handleChange}
          placeholder="Passengers capacity"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="accidents"
          value={plane.accidents}
          onChange={handleChange}
          placeholder="Number of accidents"
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Agregar Avión
        </button>
      </form>
    </div>
  )
}
