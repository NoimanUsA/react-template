import { TASKS, TasksState } from "../types/tasks";
import { takeEvery, select, put, fork, join } from 'redux-saga/effects';
import taskActions from '@/store/actions/tasks';
import { Task } from "redux-saga";

const getTasks = (): TasksState => {
  const tasks = window.localStorage.getItem('tasks');
  if (!tasks) {
    return {
      activeTasks: [],
      completedTasks: []
    };
  }

  return JSON.parse(tasks);
}

const setTasks = (tasks: TasksState) => {
  window.localStorage.setItem('tasks', JSON.stringify(tasks));
}

function* tasksWorker() {
  const allTasks: TasksState = yield select((state) => state.tasks);
  yield fork(setTasks, allTasks);
}

export function* setTasksWorker() {
  const tasks: Task = yield fork(getTasks);
  const first: TasksState = yield join(tasks);
  yield put(taskActions.setTasks(first));
}

export default function* () {
  yield takeEvery(TASKS.ADD_TASK, tasksWorker);
  yield takeEvery(TASKS.COMPLETE_TASK, tasksWorker);
  yield takeEvery(TASKS.DELETE_TASK, tasksWorker);

}