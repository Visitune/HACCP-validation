import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Partie1Pourquoi from "./pages/Partie1Pourquoi";
import Partie2Comment from "./pages/Partie2Comment";
import Partie3AvecQuoi from "./pages/Partie3AvecQuoi";
import Sources from "./pages/Sources";
import "./App.css";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partie-1-pourquoi" element={<Partie1Pourquoi />} />
          <Route path="/partie-2-comment" element={<Partie2Comment />} />
          <Route path="/partie-3-avec-quoi" element={<Partie3AvecQuoi />} />
          <Route path="/sources" element={<Sources />} />
        </Routes>
      </main>
    </div>
  );
}
