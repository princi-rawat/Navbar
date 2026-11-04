
import { useState } from "react";

function todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-sm rounded-lg bg-white p-5 shadow">
        <h1 className="mb-4 text-center text-2xl font-bold">
          To-Do List
        </h1>

        <input
          className="w-full rounded border p-2"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          className="mt-3 w-full rounded bg-blue-500 p-2 text-white"
          onClick={() => {
            if (task.trim() !== "") {
              setTasks([...tasks, task]);
              setTask("");
            }
          }}
        >
          Add Task
        </button>

        {tasks.map((item, index) => (
          <p key={index} className="mt-3 rounded bg-gray-200 p-2">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

export default todo;
