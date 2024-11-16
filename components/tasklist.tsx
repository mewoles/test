import React, { useState, useEffect } from 'react';

interface Task {
  id: number;
  name: string;
  reward: number;
  requiredTaps?: number;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch('/tasks.json')
      .then((res) => res.json())
      .then((data) => setTasks(data.tasks));
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <strong>{task.name}</strong> - Ödül: {task.reward}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
