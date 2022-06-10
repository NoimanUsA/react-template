import { ITask } from '@/types/components';
import { TASKS, TasksAction, TasksState } from '../types/tasks';


const initialState: TasksState = {
  activeTasks: [],
  completedTasks: [],
}

export default (state = initialState, action: TasksAction): TasksState => {

  const { payload, type } = action;

  switch (type) {
    case TASKS.ADD_TASK: {
      return {
        ...state,
        activeTasks: [
          ...state.activeTasks,
          {
            text: payload.text,
            id: payload.id
          }
        ]
      }
    }

    case TASKS.DELETE_TASK: {
      return {
        ...state,
        completedTasks: state.completedTasks.filter((task) => task.id !== payload.id)
      };
    }

    case TASKS.COMPLETE_TASK: {
      const completedTask = state.activeTasks.find((task) => task.id === payload.id) as ITask;
      const newCompletedTasks = [ ...state.completedTasks, completedTask ];
      const filteredActiveTasks = state.activeTasks.filter((task) => task.id !== payload.id);
      return {
        activeTasks: filteredActiveTasks,
        completedTasks: newCompletedTasks
      };
    }

    case TASKS.SET_FETCHED_TASKS: { return payload as TasksState; }

    default: { return state; }

  }
}
