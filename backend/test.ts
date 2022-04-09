// import { shallowEqual } from 'shallow-equal-object'

// abstract class ValueObject<T> {
//   readonly [key: string]: any

//   constructor() {
//     Object.freeze(this)
//   }

//   equals(vo: ValueObject<T>): boolean {
//     if (vo === null || vo === undefined) {
//       return false
//     }
//     return shallowEqual(this, vo)
//   }
// }

// class FullName {
//   private readonly _firstName: string;
//   private readonly _lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   equals(other: FullName) {
//     return this._firstName == other._firstName && this._lastName == other._lastName
//   }
  
// }

// // クラスで表現することで、インスタンス作成時の引数を間違いさえしなければ、確実にlastNameを表示することができる
// const fullNameA: FullName = new FullName("taro", "yamamoto");
// const fullNameB: FullName = new FullName("taro", "yamamoto"); 
// const fullNameC: FullName = new FullName("taro", "sasaki");

// console.log(fullNameA.equals(fullNameB)) // true
// console.log(fullNameA.equals(fullNameC)) // false
// class FullName {
//   private  _firstName: string;
//   private  _lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

//   changeLastName(name: string) {
//     this._lastName = name;
//   } 
// }

// let fullName = new FullName("taro","test");
// fullName.changeLastName("yamamoto")

// ○
// class FullName {
//   private readonly _firstName: string;
//   private readonly _lastName: string;

//   constructor(firstName: string, lastName: string) {
//     this._firstName = firstName;
//     this._lastName = lastName;
//   }

// }

// let fullName = new FullName("taro","yamamoto");
// fullName = new FullName("taro", "sasaki");

class User {
  private readonly id: string;
  private nicName: string;

  constructor(id: string,name: string) {
    this.id = id;
    this.nicName = name;
  }

  changeNicName() {
    //ニックネームを変更する処理
  }

  equals(other: User) {
    //識別子で同一ユーザかどうか判定する
    return this.id == this.id
  }

}