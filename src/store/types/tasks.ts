import { ITask } from '@/types/components';

export enum TASKS {
  ADD_TASK = "ADD_TASK",
  DELETE_TASK = "DELETE_TASK",
  COMPLETE_TASK = "COMPLETE_TASK",
  FETCH_TASKS = "FETCH_TASKS",
  SET_FETCHED_TASKS = "SET_FETCHED_TASKS"
}

export interface TasksState {
  activeTasks: ITask[];
  completedTasks: ITask[];
}
// Payloads

export type TasksPayload = { id: number; text?: string; };

// Actions
export interface SetTasksAction {
  type: TASKS.SET_FETCHED_TASKS,
  payload: TasksState
}

export interface MainTasksAction {
  type: Omit<TASKS, "SET_FETCHED_TASKS" | "FETCH_TASKS">;
  payload: TasksPayload
}

export type TasksAction = MainTasksAction | SetTasksAction;