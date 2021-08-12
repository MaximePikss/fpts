import {option as O, readonlyArray as A} from  'fp-ts'
import { pipe } from 'fp-ts/lib/function'
interface Person{name: string, age: number, sexe: "male" | "female"}
const getChild = (b: Person): ReadonlyArray<Person> => []

const getGrandChildren = (a: Person) => {
    const son = getChild(a)
    return A.chain(getChild) (son)
}

const getGrandChildren4 = (a: Person) => 
    pipe(a, getChild , A.chain(getChild))


//gender function

const people = (g:Person[]) => [
    { name: 'Mary', age: 8, sexe: 'female' },
    { name: 'Jerry', age: 26, sexe: 'male' },
    { name: 'Joe',age : 42, sexe: 'male' }
  ]


const getGender = (g: Person) => {
    return (g.sexe == "male" ? "male" : "female")   
}

// const isFemale = (g:Person) => {
//     const feminin = getChild(g)
//     return A.chain(getChild) (feminin)
// }


// const getGender = pipe(
//     people,
//     A.filter(isMale),
//     A.filter(isFemale),
// )

const isMale = people.fitler(getGender)