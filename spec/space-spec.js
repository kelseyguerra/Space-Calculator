import { ageInput } from "./../src/space-class.js";

describe('ageInput', function() {
  it('will convert users input from years to seconds', function() {
    let age = new Age(26);
    expect(age.calculateSeconds(26)).toEqual(820040000);
  })
})

describe('ageInput', function() {
  it('will convert users input from Earth years to Mercury years', function() {
    let age = new Age(26);
    expect(age.mercuryAge(26)).toEqual(820040000);
  })
})

describe('ageInput', function() {
  it('will convert users input from Earth years to Venus years', function() {
    let age = new Age(26);
    expect(age.venusAge(26)).toEqual(42.3);
  })
})

describe('ageInput', function() {
  it('will convert users input from Earth years to Mars years', function() {
    let age = new Age(26);
    expect(age.marsAge(26)).toEqual(42.3);
  })
})

describe('ageInput', function() {
  it('will convert users input from Earth years to Jupiter years', function() {
    let age = new Age(26);
    expect(age.jupiterAge(26)).toEqual(42.3);
  })
})
