import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { EyeIcon } from "lucide-react";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

type Tasks = Task[];

const dataTasks: Tasks = [
  { id: 1, title: "Breakfast", isDone: true },
  { id: 2, title: "Lunch", isDone: false },
  { id: 3, title: "Dinner", isDone: false },
];

export function Tasks() {
  return (
    <ul className="flex flex-col gap-2">
      {dataTasks.map((task) => (
        <li key={task.id}>
          <TaskItem task={task} />
        </li>
      ))}
    </ul>
  );
}

export function TaskItem({ task }: { task: Task }) {
  return (
    <section className="flex justify-between gap-4 rounded-lg bg-green-100 p-4">
      <div>
        <h2 className="text-lg font-bold">{task.title}</h2>
        <p>{task.isDone ? "✅ Done" : "📝 To-Do"}</p>
      </div>
      <div className="flex gap-2">
        <Button size="xs">
          <EyeIcon className="size-3" />
          <span className="text-xs">View</span>
        </Button>

        <Button size="xs" variant="destructive">
          <TrashIcon className="size-3" />
          <span className="text-xs">Delete</span>
        </Button>
      </div>
    </section>
  );
}
