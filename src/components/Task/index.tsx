import React from "react";
import './Task.scss'

// Types
import { ITask } from '@/types/components';

interface IProps {
  task: ITask;
  children?: JSX.Element;
  className?: string;
  handler: (id: number) => void

}

export const Task: React.FC<IProps> = ({ task, handler }) => {
  const { text, id } = task

  return (
    <div className="task" >
      <div className="task__text">
        {text}
      </div>
      <div className="task__handler" onClick={() => handler(id)}>x</div>
    </div >
  )
}
