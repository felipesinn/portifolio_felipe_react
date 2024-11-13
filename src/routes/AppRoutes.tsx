import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/header/Header";
import { HomePage } from "../components/home/HomePage";
import { SkillsPage } from "../components/skills/Skills";
import { ContactPage } from "../components/contact/ContactPage";
import { ProjectsPage } from "../components/projects/ProjectsPage";
import { AboutPage } from "../components/about/AboutPage";

function MainPage() {
  return (
    <div>
      <HomePage />
      <SkillsPage />
      <ContactPage />
      <ProjectsPage />
      <AboutPage />
    </div>
  );
}

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
