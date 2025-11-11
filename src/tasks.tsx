export function Tasks() {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        <TaskItem title="Breakfast" isDone />
        <TaskItem title="Lunch" />
        <TaskItem title="Dinner" />
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
