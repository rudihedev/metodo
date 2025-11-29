import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "@/index.css";
import { App } from "@/app";
import { About } from "@/routes/about";
import { Layout } from "@/layouts/layout";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
