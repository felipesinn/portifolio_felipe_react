import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/header/Header"
import { HomePage } from "../components/home/HomePage"

export function Router() {
    return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/projetos" element={<ProjetosPage />} />
        <Route path="/sobre" element={<SobrePage />} /> */}
      </Routes>
    </BrowserRouter>
    );
}