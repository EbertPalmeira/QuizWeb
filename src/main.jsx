import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./content/Inicio";
import Welcome from "./content/Welcome";
import Medicina from "./pages/Medicina";
import Programacao from "./pages/Programacao";
import Matematica from "./pages/Matematica";
import { QuizProvider } from "./context/quiz";
import { QuizProvider2 } from "./context/quizConhecimentos";
import { QuizProviderMedicina } from "./context/quizMedicina";
import { QuizProviderMatematica } from "./context/quizMatematica";
import ConhecimentosGerais from "./pages/ConhecimentosGerais";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QuizProvider>
      <QuizProvider2>
        <QuizProviderMedicina>
          <QuizProviderMatematica>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/inicio" element={<Inicio />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/medicina" element={<Medicina />} />
                <Route path="/programacao" element={<Programacao />} />
                <Route path="/matematica" element={<Matematica />} />
                <Route
                  path="/conhecimentos"
                  element={<ConhecimentosGerais />}
                />
              </Routes>
            </BrowserRouter>
          </QuizProviderMatematica>
        </QuizProviderMedicina>
      </QuizProvider2>
    </QuizProvider>
  </React.StrictMode>
);
