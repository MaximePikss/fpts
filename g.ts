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

// const getGender = (g: Person) => {
//     return (g.sexe == "male" ? "male" : "female")   
// }

const people: Person[] = [
    { name: 'Mary', age: 8, sexe: 'female' },
    { name: 'Jerry', age: 26, sexe: 'male' },
    { name: 'Joe',age : 42, sexe: 'male' }
  ]

// const isMale = (g:Person) => {
//     const masculin = getChild(g)
//     return A.chain(getChild) (masculin)
// }

// const isFemale = (g:Person) => {
//     const feminin = getChild(g)
//     return A.chain(getChild) (feminin)
// }

// const isMale = people.filter((masc) => masc.sexe === 'male')

// const isFemale = people.filter((fem) => fem.sexe === 'female')

const gender = (g:Person) => {
    pipe(
        people,
        A.filter(masculin => g.sexe == "male"),
        A.filter(feminin => g.sexe == "female")
    )
}

export {getGrandChildren, gender}