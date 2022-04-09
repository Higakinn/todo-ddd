import { Todo } from "../../domain/model/todo/todo";
interface ITodoRepository {
  findById(): Todo | null
  updateTodoContent(): void
  deleteTodo(): void
  store(todo: Todo): void
}

export default ITodoRepository;