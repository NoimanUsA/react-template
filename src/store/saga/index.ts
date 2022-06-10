import { LOCATION_CHANGE } from "connected-react-router";
import { fork, select, takeLatest, spawn } from "redux-saga/effects";
import tasksSaga, { setTasksWorker } from "./tasks";

function* watchPath() {
  const path: string = yield select(({ router }) => router.location.pathname);

  switch (path) {
    case '/tasks':
      yield fork(setTasksWorker);
      break;
    default:
      yield fork(setTasksWorker);
  }
}

export default function* rootSaga() {
  yield spawn(tasksSaga);
  yield takeLatest(LOCATION_CHANGE, watchPath);
}
