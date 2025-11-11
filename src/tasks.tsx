const dataTasks = [
  { id: 1, title: "Breakfast", isDone: false },
  { id: 2, title: "Lunch", isDone: false },
  { id: 3, title: "Dinner", isDone: true },
];

export function Tasks() {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {dataTasks.map((task) => (
          <TaskItem key={task.id} title={task.title} isDone={task.isDone} />
        ))}
      </ul>
    </div>
  );
}

export function TaskItem({
  title,
  isDone,
}: {
  title: string;
  isDone?: boolean;
}) {
  if (isDone) {
    return null;
  }

  return <li>{title}</li>;
}
