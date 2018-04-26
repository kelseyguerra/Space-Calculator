import { ageInput } from "./../src/space-class.js";

describe('age', function() {
  // const age = new Age(age);

  beforeEach(function() {
    this.age = ('26');
    age.calculateSeconds();
  //   age.convertMercuryAge();
  //   age.convertVenusAge();
  //   age.convertMarsAge();
  //   age.convertJupiterAge();
  // });

  console.log(convertMercuryAge);

  it('will convert users input from years to seconds', function() {
    expect (age.calculateSeconds(26)).toEqual(820040000);
  });

  it('will convert users input from Earth years to Mercury years', function() {
    expect(age.mercuryAge(26)).toEqual(820040000);
  });
});
// describe('ageInput', function() {
//   it('will convert users input from Earth years to Venus years', function() {
//     let age = new Age(26);
//     expect(age.venusAge(26)).toEqual(42.3);
//   });
// })
// });
// describe('ageInput', function() {
//   it('will convert users input from Earth years to Mars years', function() {
//     let age = new Age(26);
//     expect(age.marsAge(26)).toEqual(42.3);
//   })
// })
//
// describe('ageInput', function() {
//   it('will convert users input from Earth years to Jupiter years', function() {
//     let age = new Age(26);
//     expect(age.jupiterAge(26)).toEqual(42.3);
//   })
})
