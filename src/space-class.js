export function calculateSeconds(inputAge) {
return inputAge * 3.154e+7;
}

class ageInput {
    constructor (birthDate) {
    this.birthDate = new Date (birthDate);
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
