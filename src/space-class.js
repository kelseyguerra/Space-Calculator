export { ageCalculator };
export function calculateSeconds(inputAge) {
return inputAge * 3.154e+7;
}

class ageCalculator {

    constructor (birthDate, presentDate) {
    this.birthDate = new Date (birthDate);
    this.presentDate = new Date (presentDate);
    this.mercuryAge = this.convertMercuryAge();
    this.venusAge = this.convertVenusAge();
    this.marsAge = this.convertMarsAge();
    this.jupiterAge = this.convertJupiterAge();
    this.difference = this.convertedAge();
    }

  convertMercuryAge(inputAge) {
    return inputAge*.241;
  }
}
