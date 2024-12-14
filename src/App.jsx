import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dasboard from "./pages/Dashboard";
import Anime from "./pages/Anime";
import Category from "./pages/Category";

function App() {

  return (
    <BrowserRouter>
    <div className="flex">
      <Sidebar/>
      <div className="flex-1 p-2 flex flex-col">
        <div className="flex p-3 justify-center border rounded-xl border-black">
          <h1>Header</h1>
        </div>
        <div className="p-3 mt-2 border rounded-xl border-black">
        <Routes>
        <Route path="/" element={<Dasboard/>}></Route>
        <Route path="/anime" element={<Anime/>}></Route>
        <Route path="/category" element={<Category/>}></Route>
        </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
