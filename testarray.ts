import {option as O, readonlyArray as A} from  'fp-ts'
import { pipe } from 'fp-ts/lib/function'
interface Person{name: string, age: number, sexe: "male" | "female"}
const getChild = (b: Person): ReadonlyArray<Person> => []
const getAge = (c: Person) => c.age
// const getSexe = (g:Person) => g.sexe

const getGrandChildren = (a: Person) => {
    const son = getChild(a)
    return A.chain(getChild) (son)
}

const getGrandChildren4 = (a: Person) => 
    pipe(a, getChild , A.chain(getChild))

const getGrandChildrenAge = (a: Person) => 
    pipe(getGrandChildren(a), A.map(getAge))


// const getGender = (g: Person) => {
//     return (g.sexe == "male" ? "male" : "female")   
// }

// const isMale = people.filter((masc) => masc.sexe === 'male')

// const isFemale = people.filter((fem) => fem.sexe === 'female')

// const gender = (arrayof:Person[]) => {
//     return arrayof.filter(p => p.sexe === 'male')
// }

const people: Person[] = [
    { name: 'Mary', age: 8, sexe: 'female' },
    { name: 'Jerry', age: 26, sexe: 'male' },
    { name: 'Joe',age : 42, sexe: 'male' }
  ]

const getGender = (p:Person) => {
    pipe(
        people,
        A.filter(p => p.sexe === "male")
    )
}

export {getGrandChildren, getGender}