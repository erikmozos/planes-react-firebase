import { useState } from "react"
import List from "../components/List.jsx"
import Search from "./Search.jsx"
import Searchbar from "../components/Searchbar.jsx"
import Topic from "./Topic.jsx"

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaneId, setSelectedPlaneId] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleOpenModal = (planeId) => {
    setSelectedPlaneId(planeId);
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-4">
      <Searchbar onSearch={handleSearch} />
      
      {searchTerm ? (
        <Search 
          searchTerm={searchTerm} 
          onOpenModal={handleOpenModal} 
        />
      ) : (
        <List onOpenModal={handleOpenModal} />
      )}

      <Topic 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        planeId={selectedPlaneId}
      />
    </div>
  )
}