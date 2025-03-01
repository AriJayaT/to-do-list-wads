import React, { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import useTasks from "./components/useTasks";

export default function Todo() {
  const { tasks, addTask, deleteTask, toggleTask, updateTask } = useTasks();
  const [showCompletedOnly, setShowCompletedOnly] = useState(false);

  const filteredTasks = showCompletedOnly
    ? tasks.filter((task) => task.completed)
    : tasks;

  return (
    <div className="bg-gradient-to-r from-purple-800 to-black min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>
      <div className="max-w-md mx-auto">
        <div className="bg-purple-900 p-6 rounded-lg shadow-lg">
          <TaskForm addTask={addTask} />
          <button
            onClick={() => setShowCompletedOnly(!showCompletedOnly)}
            className="w-full mb-4 p-2 bg-purple-700 rounded hover:bg-purple-600"
          >
            {showCompletedOnly ? "Show All" : "Show Completed"}
          </button>
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            updateTask={updateTask}
          />
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="px-6 py-3 bg-purple-700 rounded hover:bg-purple-600 text-xl"
          >
            Back to Landing
          </Link>
        </div>
      </div>
    </div>
  );
}
