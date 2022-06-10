import { TasksPayload, TASKS, TasksAction, TasksState } from "../types/tasks"

const addTask = (payload: TasksPayload): TasksAction => ({ type: TASKS.ADD_TASK, payload });
const deleteTask = (payload: TasksPayload): TasksAction => ({ type: TASKS.DELETE_TASK, payload })
const completeTask = (payload: TasksPayload): TasksAction => ({ type: TASKS.COMPLETE_TASK, payload });
const setTasks = (payload: TasksState): TasksAction => ({ type: TASKS.SET_FETCHED_TASKS, payload });

export default {
  addTask,
  deleteTask,
  completeTask,
  setTasks
}