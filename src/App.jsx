import Navbar from "./components/Navbar.jsx"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import Form from "./pages/Form.jsx"
import Search from "./pages/Search.jsx"
import Home from "./pages/Home.jsx"
import Topic from "./pages/Topic.jsx"


function App() {


  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/form" element={<Form />}/>
            <Route path="/topic" element={<Topic />}/>
            <Route path="/search" element={<Search />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App;
