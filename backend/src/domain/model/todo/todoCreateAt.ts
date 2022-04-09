import { ValueObject } from '../../../ddd_common/domain/ValueObject'

export class TodoCreatedAt extends ValueObject<TodoCreatedAt> {
  public readonly value: string

  constructor() {
    super()

    const ts = Date.now();
    const date_ob = new Date(ts);
    const date = date_ob.getDate();
    const month = date_ob.getMonth() + 1;
    const year = date_ob.getFullYear();

    // NOTE: YYYY-MM-DD
    this.value = year + "-" + month + "-" + date;
  }

}