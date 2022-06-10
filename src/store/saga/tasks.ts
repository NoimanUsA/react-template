import { takeEvery, select, put, fork, join } from 'redux-saga/effects';
import { Task } from "redux-saga";
import { TASKS, TasksState } from "../types/tasks";
import taskActions from '@/store/actions/tasks';

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
  console.log("asdqweq");
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
