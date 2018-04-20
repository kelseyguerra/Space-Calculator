export class ageInput {
  constructor(age) {
    this.age = age;

    // this.presentDate = presentDate;
    // this.mercuryAge = convertMercuryAge();
    // this.venusAge = convertVenusAge();
    // this.marsAge = convertMarsAge();
    // this.jupiterAge = convertJupiterAge();
    // this.ageInSeconds = calculateSeconds();
  }
  calculateSeconds() {
    let ageInSeconds = age * 3.154e+7;
    return ageInSeconds;
  }
  convertMercuryAge() {
    let mercuryAge = age * .24;
    return Math.round(mercuryAge);
  }
  convertVenusAge() {
    return this.birthDate * .62;
  }
  convertMarsAge() {
    return this.birthDate * 1.88;
  }
  convertJupiterAge() {
    return this.birthDate * 11.86;
  }
}
