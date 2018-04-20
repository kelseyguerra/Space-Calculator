export { ageInput }

class ageInput {
  constructor() {
    this.birthDate;
    // this.presentDate = presentDate;
    // this.mercuryAge = convertMercuryAge();
    // this.venusAge = convertVenusAge();
    // this.marsAge = convertMarsAge();
    // this.jupiterAge = convertJupiterAge();
    // this.ageInSeconds = calculateSeconds();
}
calculateSeconds() {
  return this.birthdate * 3.154e+7;
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
