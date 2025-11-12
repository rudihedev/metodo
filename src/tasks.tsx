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
    <section className="rounded-lg bg-green-100 p-4">
      <h2 className="text-lg font-bold">{task.title}</h2>
      <p>{task.isDone ? "✅ Done" : "📝 To-Do"}</p>
    </section>
  );
}
