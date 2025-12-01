import * as z from "zod";

export const TaskSchema = z.object({
  id: z.number("ID must be numbers!").positive("ID must be positive numbers!"),
  title: z
    .string("Title is required!")
    .min(3, "Too short min. 3 chars!")
    .max(50, "Too long max. 50 chars."),
  description: z.string().min(1).max(100),
  isDone: z.enum(["todo", "ongoing", "done"]),
  createdAt: z.string().optional(),
});

export const TasksSchema = TaskSchema.array();

export type Task = z.infer<typeof TaskSchema>;
export type Tasks = z.infer<typeof TasksSchema>;
