import {option as O} from  'fp-ts'
import { pipe } from 'fp-ts/lib/function'
interface Personne{name: string, age: number}
const getChild = (b: Personne): O.Option <Personne> => O.none

const getGrandChildren = (a: Personne) => {
    const son = getChild(a)
    return (son._tag == "None") ? O.none : getChild(son.value)
}

const getGrandChildren2 = (a: Personne) => {
    const son = getChild(a)
    return O.isNone (son) ? O.none : getChild(son.value)
}

const getGrandChildren3 = (a: Personne) => {
    const son = getChild(a)
    return O.chain(getChild) (son)
}

const getGrandChildren4 = (a: Personne) => 
    pipe(getChild(a), O.chain(getChild))

const getGrandChildrenAge = (a: Personne) => 
    pipe(getGrandChildren(a), O.map(p => p.age))  

