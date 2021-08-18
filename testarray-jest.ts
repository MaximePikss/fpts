
import {option as O, readonlyArray as A} from  'fp-ts'
import { pipe } from 'fp-ts/lib/function'
interface Person{name: string, age: number, sexe: "male" | "female"}
const getChild = (b: Person): ReadonlyArray<Person> => []


const people: Person[] = [
  { name: 'Mary', age: 8, sexe: 'female' },
  { name: 'Jerry', age: 26, sexe: 'male' },
  { name: 'Joe',age : 42, sexe: 'male' }
]

describe('.toBeOption should pass', () => {
  test('if received is a None', () => {
    expect(none).toBeOption();
  });
  test('if received is a Some', () => {
    expect(some('Some')).toBeOption();
  });
  test('if ', () => {
    expect(some('Some')).toEqual(expect.toBeOption());
  });
});
