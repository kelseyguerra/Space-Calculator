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
    let ageInSeconds = age * 3.154e+7;
    return ageInSeconds;
  }
  convertMercuryAge(age) {
    let mercuryAge = this.age * .24;
    return Math.round(mercuryAge);
  }
}
  convertVenusAge(age) {
    let venusAge = birthDate * .62;
    return Math.round(venusAge);
  }
  convertMarsAge(age) {
    let marsAge = birthDate * 1.88;
    return Math.round(marsAge);
  }
  convertJupiterAge(age) {
    let jupiterAge = birthDate* 11.86;
    return Math.round(jupiterAge);
  }
