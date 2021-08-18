import {option as O} from  'fp-ts'
import { pipe } from 'fp-ts/lib/function'
interface Personne{name: string, age: number}
const getChild = (b: Personne): O.Option <Personne> => O.none

const getGrandChildren = (a: Personne) => {
    const child = getChild(a)
    return (child._tag == "None") ? O.none : getChild(child.value)
}

const getGrandChildren2 = (a: Personne) => {
    const child = getChild(a)
    return O.isNone (child) ? O.none : getChild(child.value)
}

const getGrandChildren3 = (a: Personne) => {
    const child = getChild(a)
    return O.chain(getChild) (child)
}

const getGrandChildren4 = (a: Personne) => 
    pipe(getChild(a), O.chain(getChild))

const getGrandChildrenAge = (a: Personne) => 
    pipe(getGrandChildren(a), O.map(p => p.age))  



