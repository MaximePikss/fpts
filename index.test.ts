
import { some, none } from 'fp-ts/lib/Option'

describe('Get grand daughter of', () => {
  test('if received is a None', () => {
    expect(none).toBeOption();
  });
  test('if received is a Some', () => {
    expect(some('Female')).toBeOption();
  });
  test('if received is a "female" with this expected value', () => {
    expect(some('Female')).toEqualSome('Female');
  });
})

describe('Get grand son of daughters', () => {
  test('if received is a "male" with this expected value', () => {
    expect(some('Male')).toEqualSome('Male');
  });
})

describe('has not both daughter and son', () => {
  it('if received a none', () => {
    expect(none).toBeOption()
  })
})

// describe('Gender', () => {
//   it('My grandchild is male', () => {
//     expect('Male').toEqual('Male')
//   })
//   it('My grandchild is female', () => {
//     expect('Female').toEqual('Female')
//   })
// })
