import { Tasks } from "@/modules/task/tasks";
import { TimerInterval } from "@/modules/timer/timer-interval";

export function App() {
  return (
    <div className="flex justify-center">
      <main className="w-full max-w-lg space-y-2">
        <TimerInterval />
        <Tasks />
      </main>
    </div>
  );
}
