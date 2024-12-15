import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Anime from "./pages/Anime";
import Category from "./pages/Category";
import Login from "./pages/Login";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/*"
          element={
            <div className="flex">
              <Sidebar />

              <div className="flex-1 p-2 flex flex-col">
                <div className="flex border rounded-xl shadow-2xl">
                  <Header />
                </div>

                <div className="p-3 mt-2 border rounded-xl border-black">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/anime" element={<Anime />} />
                    <Route path="/category" element={<Category />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
