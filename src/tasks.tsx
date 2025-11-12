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
    <ul className="tasks">
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
    <section className="task-item">
      <h2>{task.title}</h2>
      <p>{task.isDone ? "✅ Done" : "📝 To-Do"}</p>
    </section>
  );
}
