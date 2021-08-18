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

// const isMale = people.filter((masc) => masc.sexe === 'male')

// const isFemale = people.filter((fem) => fem.sexe === 'female')

// const getGender = (arrayof:Person[]) => {
//     return arrayof.filter(p => p.sexe === 'male')
// }

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

// Voici le besoin:
// Je te propose de mettre ca en unit test et de faire le dev par la suite (mode TDD)

const getGrandDaughterOf = (persons: Person[]) => (p: Person) =>{
    pipe(
        getGrandChildren(p),
        A.chain(getGrandChildren),
        A.map(isFemale)
    )
}
// doit retourner toutes les petites filles de p

const getGrandSonOfDaughters = (persons: Person[]) => (p: Person) => {
    pipe(
        getGrandChildren(p),
        A.chain()
    )
}
// doit retourner tous les fils des filles de p

// et un extra:

const hasNotBothDaughterAndSon = (persons: Person[]) => {}
// retourne toutes les personnes n'ayant pas à la fois AU MOINS un fils ET une fille (attention aux cas particuliers)

// module.exports = { getGrandDaughterOf, getGrandSonOfDaughters, hasNotBothDaughterAndSon };

export {getGrandChildren,getGrandChildren4,getGrandChildrenAge, isMale, isFemale, getGrandDaughterOf, getGrandSonOfDaughters, hasNotBothDaughterAndSon}