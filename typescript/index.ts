export type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

export type Tasks = Task[];

export const dataTasks = [
  {
    id: 1,
    title: "Breakfast",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Lunch",
    isCompleted: false,
  },
];
