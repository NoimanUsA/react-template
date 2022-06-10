import { useTypedSelector } from "@/hooks/useTypedSelector";

// Components
import { Button } from "@/components/Button";
import { TaskList } from "@/components/TaskList";

// Layout
import { MainLayout } from "@/layout/MainLayout/MainLayout";

// Methods
import tasksActions from "@/store/actions/tasks";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";

// Styles
import './ActualTasks.scss';

export const ActualTasks = () => {
  const dispatch = useDispatch();
  const tasks = useTypedSelector(state => state.tasks.activeTasks);

  const input = useRef<HTMLInputElement>(null);

  const addNewTask = () => {
    if (!input.current?.value) return;
    dispatch(tasksActions.addTask({
      text: input.current?.value,
      id: Math.floor(Math.random() * 100),
    }))
    input.current.value = "";
  }

  const completeTask = (id: number) => {
    dispatch(tasksActions.completeTask({ id }))
  };

  return (
    <MainLayout className="actual-tasks">
      <TaskList tasks={tasks} taskHandler={completeTask} />
      <div className="actual-tasks__handlers">
        <input type="text" ref={input} className="actual-tasks__new-task" />
        <Button onClick={addNewTask} className="actual-tasks__add-task">Добавить задачу</Button>
      </div>
    </MainLayout>
  );
}