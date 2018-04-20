class ageInput {
  constructor() {
    this.birthDate = birthDate;
    this.presentDate = presentDate;
    this.mercuryAge = convertMercuryAge();
    this.venusAge = convertVenusAge();
    this.marsAge = convertMarsAge();
    this.jupiterAge = convertJupiterAge();
}
calculateSeconds() {
  return this.birthDate * 3.154e+7;
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

export { ageInput }
