import { Todo } from "../../domain/model/todo/todo";
import ITodoRepository from "../../infrastructure/repository/ItodoRepository";
import { v4 as uuidv4 } from "uuid";

class TodoApplicationService {
  private todoRepository: ITodoRepository;

  constructor(todoRepository: ITodoRepository) {
    this.todoRepository = todoRepository
  }

  createTask(taskName: string) {
    const taskId = uuidv4()
    const task = new Todo({"id":taskId, "done":false, "content":taskName});
    this.todoRepository.store(task);
  }
}