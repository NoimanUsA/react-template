import { LOCATION_CHANGE } from "connected-react-router";
import { fork, select, takeLatest } from "redux-saga/effects";
import { setTasksWorker } from "./tasks";

function* watchPath() {
  const path: string = yield select(({ router }) => router.location.pathname);

  switch (path) {
    case '/tasks':
      yield fork(setTasksWorker);
    default:
      yield fork(setTasksWorker);
  }
}

export default function* rootSaga() {
  yield takeLatest(LOCATION_CHANGE, watchPath);
}