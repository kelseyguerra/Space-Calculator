export class ageInput {
  constructor(age) {
    this.age = age;
  }

    // this.presentDate = presentDate;
    // this.mercuryAge = convertMercuryAge();
    // this.venusAge = convertVenusAge();
    // this.marsAge = convertMarsAge();
    // this.jupiterAge = convertJupiterAge();
    // this.ageInSeconds = calculateSeconds();
  calculateSeconds(age) {
    let ageInSeconds = this.age * 3.154e+7;
    return ageInSeconds;
  }
  convertMercuryAge(age) {
    let mercuryAge = this.age * .24;
    return Math.round(mercuryAge);
  }
  convertVenusAge(age) {
    let venusAge = this.age * .62;
    return Math.round(venusAge);
  }
  convertMarsAge(age) {
    let marsAge = this.age * 1.88;
    return Math.round(marsAge);
  }
  convertJupiterAge(age) {
    let jupiterAge = this.age * 11.86;
    return Math.round(jupiterAge);
  }
}
