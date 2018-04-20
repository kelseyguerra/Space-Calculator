
class ageInput {

  constructor (birthDate) {
  this.birthDate = birthDate;
  }
  calculateSeconds(input) {
    return input * 3.154e+7;
  }
  convertMercuryAge() {
    return this.birthDate*.24;
  }
  convertVenusAge() {
    return this.birthDate*.62;
  }
  convertMarsAge() {
    return this.birthDate*1.88;
  }
  convertJupiterAge() {
    return this.birthDate*11.86;
  }
}


export { ageInput };
