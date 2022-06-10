import React from "react";
import './TaskList.scss'

// Components
import { Task } from "@/components/Task";

// Types
import { ITask } from "@/types/components";

interface IProps {
  tasks: ITask[];
  title?: string;
  taskHandler: (id: number) => void
}

export const TaskList: React.FC<IProps> = ({ tasks, title = "Нет задач", taskHandler }) => {
  function renderTasks(tasks: ITask[]) {
    return tasks.map((task: ITask, index: number) => {
      return (
        <Task task={task} key={index} handler={taskHandler} />
      )
    })
  };

  return (
    <div className={tasks.length ? `task-list` : 'task-list task-list--empty'}>
      {
        tasks.length ?
          renderTasks(tasks) :
          <h2 className="task-list__empty">{title}</h2>
      }
    </div>
  )
}