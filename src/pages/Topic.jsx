import { useState, useEffect } from "react";
import { getPlaneByCustomId, updatePlane, deletePlane } from "../data/firebase";

export default function Topic({ isOpen, onClose, planeId }) {
  const [plane, setPlane] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    model: "",
    producer: "",
    capacity: "",
    accidents: "",
    description: "",
    img: ""
  });

  useEffect(() => {
    console.log("Topic useEffect - planeId:", planeId);
    const getPlaneData = async () => {
      if (planeId) {
        try {
          setLoading(true);
          console.log(planeId, "antes de enviar datos");
          const planeData = await getPlaneByCustomId(planeId);
          if (planeData) {
            setPlane(planeData);
            setFormData({
              model: planeData.model,
              producer: planeData.producer,
              capacity: planeData.capacity,
              accidents: planeData.accidents,
              description: planeData.description,
              img: planeData.img
            });
          }
        } catch (error) {
          setError("Error al cargar el avión");
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    if (isOpen && planeId) {
      getPlaneData();
    }

    return () => {
      setPlane(null);
      setLoading(true);
      setIsEditing(false);
      setError(null);
    };
  }, [isOpen, planeId]);

  console.log(planeId, "rarete");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);
      await updatePlane(plane.docId, formData);
      setPlane({ ...plane, ...formData });
      setIsEditing(false);
    } catch (error) {
      setError("Error al actualizar el avión");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este avión?")) {
      try {
        setLoading(true);
        await deletePlane(plane.docId);
        onClose();
      } catch (error) {
        setError("Error al eliminar el avión");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  };
  
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-black/30 flex items-center justify-center p-4 overflow-y-auto z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full my-8 shadow-xl">
        <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
          <h3 className="text-xl font-bold dark:text-white">
            {loading ? "Cargando..." : isEditing ? "Editar Avión" : "Detalles del Avión"}
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4">
          {loading ? (
            <div className="text-center">
              <p className="dark:text-white">Cargando datos...</p>
            </div>
          ) : plane ? (
            isEditing ? (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Modelo
                    </label>
                    <input 
                      type="text" 
                      name="model" 
                      value={formData.model} 
                      onChange={handleChange} 
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      placeholder="Modelo" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Fabricante
                    </label>
                    <input 
                      type="text" 
                      name="producer" 
                      value={formData.producer} 
                      onChange={handleChange} 
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      placeholder="Fabricante" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Capacidad
                    </label>
                    <input 
                      type="number" 
                      name="capacity" 
                      value={formData.capacity} 
                      onChange={handleChange} 
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      placeholder="Capacidad" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Accidentes
                    </label>
                    <input 
                      type="number" 
                      name="accidents" 
                      value={formData.accidents} 
                      onChange={handleChange} 
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                      placeholder="Accidentes" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    URL de Imagen
                  </label>
                  <input 
                    type="text" 
                    name="img" 
                    value={formData.img} 
                    onChange={handleChange} 
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                    placeholder="URL de la imagen" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Descripción
                  </label>
                  <textarea 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange} 
                    rows="4"
                    className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white" 
                    placeholder="Descripción del avión" 
                  />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3 text-gray-600 dark:text-gray-300">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white">Información:</h4>
                  <p><b>Modelo:</b> {plane.model}</p>
                  <p><b>Fabricante:</b> {plane.producer}</p>
                  <p><b>Capacidad:</b> {plane.capacity} pasajeros</p>
                  <p><b>Accidentes:</b> {plane.accidents}</p>
                  <div>
                    <p className="font-bold">Descripción:</p> 
                    <p className="mt-1">{plane.description || "Sin descripción disponible"}</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  {plane.img ? (
                    <div className="w-full">
                      <p className="text-center font-bold mb-2 text-gray-800 dark:text-white">Imagen:</p>
                      <img 
                        src={plane.img} 
                        alt={`${plane.model}`} 
                        className="max-h-64 object-contain mx-auto rounded-md"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://placehold.co/400x300?text=Imagen+no+disponible";
                        }}
                      />
                    </div>
                  ) : (
                    <div className="bg-gray-200 dark:bg-gray-700 h-48 w-full flex items-center justify-center rounded-md">
                      <p className="text-gray-600 dark:text-gray-400">Sin imagen disponible</p>
                    </div>
                  )}
                </div>
              </div>
            )
          ) : (
            <p className="text-center text-red-500">No se encontró el avión</p>
          )}
        </div>

        <div className="p-4 border-t dark:border-gray-700 flex justify-end space-x-3">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                Guardar
              </button>
              <button onClick={() => setIsEditing(false)} className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
                Cancelar
              </button>
            </>
          ) : (
            <>
              <button onClick={() => setIsEditing(true)} className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-700 transition-colors">
                Editar
              </button>
              <button onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                Eliminar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}