import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "@/index.css";
import { App } from "@/app";
import { About } from "@/routes/about";
import { Layout } from "@/layouts/layout";
import { TaskId } from "@/routes/task-id";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <>
    <Toaster />
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/tasks/:taskId" element={<TaskId />} />
        </Route>
      </Routes>
    </BrowserRouter>
    ,
  </>,
);
