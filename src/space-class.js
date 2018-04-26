class ageInput {

  constructor(age) {
    this.age = age;
    // this.presentDate = presentDate;
    // this.mercuryAge = convertMercuryAge();
    // this.venusAge = convertVenusAge();
    // this.marsAge = convertMarsAge();
    // this.jupiterAge = convertJupiterAge();
    // this.ageInSeconds = calculateSeconds();
  }
  calculateSeconds(age) {
    return age * 3.154e+7;
  }
  // convertMercuryAge(age) {
  //   return Math.round(this.age/.24);
  // }
//   convertVenusAge(age) {
//     return this.age * .62;
//   }
//   convertMarsAge(age) {
//     return this.age * 1.88;
//   }
//   convertJupiterAge(age) {
//     return = this.age * 11.86;
//   }
}
export {ageInput}
