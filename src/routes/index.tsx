import { Home } from '../pages/home';
import { Todo } from '../pages/todo';

const routes = [
  {
    path: ['/'],
    exact: true,
    component: () => <Home />
  },
  {
    path: ['/todo'],
    exact: true,
    component: () => <Todo />
  }
];

export default routes;
