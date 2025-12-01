import type { Tasks } from "@/modules/task/schema";

export const initialDataTasks: Tasks = [
  {
    id: 1,
    title: "Breakfast",
    description: "Eat eggs & toast",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Lunch",
    description: "Rice + chicken",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: "Dinner",
    description: "Salad and fruits only",
    status: "todo",
    createdAt: new Date().toISOString(),
  },
];
