import type { Tasks } from "@/modules/task/schema";
import { useParams } from "react-router";

const initialDataTasks: Tasks = [
  { id: 1, title: "Breakfast", description: "Eat eggs & toast", isDone: true },
  { id: 2, title: "Lunch", description: "Rice + chicken", isDone: false },
  {
    id: 3,
    title: "Dinner",
    description: "Salad and fruits only",
    isDone: false,
  },
];

export function TaskId() {
  const params = useParams();
  const { taskId } = params;

  const task = initialDataTasks.find((task) => task.id == Number(taskId));

  if (!task) {
    return (
      <div>
        <h1>Task not found!</h1>
      </div>
    );
  }

  return (
    <section className="flex justify-between gap-4 rounded-lg bg-green-100 p-4">
      <div>
        <h2 className="text-lg font-bold">{task.title}</h2>
        {task.description && (
          <p className="text-sm text-gray-700">{task.description}</p>
        )}
        <p className="text-xs text-gray-500">
          {task.isDone ? "✅ Done" : "📝 To-Do"}
        </p>
      </div>
    </section>
  );
}
