import {option as O, readonlyArray as A} from  'fp-ts'
import { pipe } from 'fp-ts/lib/function'
interface Person{name: string, age: number, sexe: "male" | "female"}
const getChild = (b: Person): ReadonlyArray<Person> => []
const getAge = (c: Person) => c.age

const getGrandChildren = (a: Person) => {
    const child = getChild(a)
    return A.chain(getChild) (child)
}

const getGrandChildren4 = (a: Person) => 
    pipe(
        getChild(a),
        A.chain(getChild)
    )

const getGrandChildrenAge = (a: Person) => 
    pipe(
        getGrandChildren(a),
        A.map(getAge)
    )

const people: Person[] = [
    { name: 'Mary', age: 8, sexe: 'female' },
    { name: 'Jerry', age: 26, sexe: 'male' },
    { name: 'Joe',age : 42, sexe: 'male' }
  ]

const isMale = (m:Person) => {
    pipe(
        people,
        A.filter(m => m.sexe === "male")
    )
}

const isFemale = (f:Person) => {
    pipe(
        people,
        A.filter(f => f.sexe === "female")
    )
}
