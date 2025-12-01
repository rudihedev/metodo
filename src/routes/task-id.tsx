import type { Tasks } from "@/modules/task/schema";
import { Link, useParams } from "react-router";

export function TaskId() {
  const params = useParams();
  const { taskId } = params;

  const storedTasks = localStorage.getItem("tasks");

  if (!storedTasks) {
    return (
      <div>
        <h1>Task data unavailable!</h1>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  const parsedTasks = JSON.parse(storedTasks) as Tasks;

  const task = parsedTasks.find((task) => task.id == Number(taskId));

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
          {task.status === "todo" && "📝 To-Do"}
          {task.status === "ongoing" && "⏳ On-Going"}
          {task.status === "done" && "✅ Done"}
        </p>
      </div>
    </section>
  );
}
