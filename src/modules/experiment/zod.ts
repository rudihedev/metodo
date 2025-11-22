import * as z from "zod";

const TaskSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1).max(100),
  isDone: z.boolean(),
});

TaskSchema.parse({
  id: 1,
  title: "Learn",
  isDone: true,
});
