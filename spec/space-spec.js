import { ageInput } from "./../src/space-class.js";

  describe('ageCalculator', function() {
  
  it('will convert users input from years to seconds', function() {
    let ageInput = new Age(26);
    expect(ageInput.calculateSeconds()).toEqual(820040000);

  });

  it('will convert users input from Earth years to Mercury years', function() {
    let ageInput = (26);
    ageInput.convertMercuryAge();
    expect(ageInput.birthDate()).toEqual(820040000);
    })
  })


  // it('should convert input age from Earth years to Mercury  years', function() {
  //   expect(mercuryAge(26)).toEqual(6.266);
  // })
