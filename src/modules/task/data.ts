import type { Tasks } from "@/modules/task/schema";

export const initialDataTasks: Tasks = [
  { id: 1, title: "Breakfast", description: "Eat eggs & toast", isDone: false },
  { id: 2, title: "Lunch", description: "Rice + chicken", isDone: false },
  {
    id: 3,
    title: "Dinner",
    description: "Salad and fruits only",
    isDone: false,
  },
];
