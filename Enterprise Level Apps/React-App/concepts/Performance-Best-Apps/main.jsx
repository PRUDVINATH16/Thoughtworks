import { createRoot } from "react-dom/client";
import TodoList from './CustomHooks-Todolist/TodoList';

createRoot(document.querySelector('#root')).render(
  <TodoList />
)