import { Todo } from '../pages/todo';

const routes = [
  {
    path: ['/:status(active|completed)?'],
    exact: true,
    component: () => <Todo />
  }
];

export default routes;
