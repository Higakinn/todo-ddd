import { ValueObject } from '../../../ddd_common/domain/ValueObject'

export class TodoContent extends ValueObject<TodoContent> {
  public readonly value: string

  constructor(content: string) {
    super()

    if (content.length < 2 || content.length > 100) {
      throw new Error('TODOの内容の長さが不正です')
    }
    this.value = content
  }
}