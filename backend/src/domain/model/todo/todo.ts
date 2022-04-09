import { Entity } from '../../../ddd_common/domain/Entity'
import { TodoContent } from './todoContent'
import { TodoCreatedAt } from './todoCreateAt'

export interface TodoProps {
  id: number
  done: boolean
  content: string
}

export class Todo extends Entity<Todo> {
  public readonly id: number
  private done: boolean
  private content: TodoContent
  private created_at: TodoCreatedAt

  constructor(props: TodoProps) {
    super()
    this.id = props.id
    this.done = props.done
    this.content = new TodoContent(props.content)
    this.created_at = new TodoCreatedAt()
  }

  
}