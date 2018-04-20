import { ageInput } from "./../src/space-class.js";

  describe('ageCalculator', function() {
    let ageInput;

  beforeEach(function(){
    ageInput = new ageInput();
    ageInput.age = new Age(26);
  });
  it('will convert users input from years to seconds', function() {
    let ageInput = new Age(26)
    expect(ageInput.calculateSeconds()).toEqual(820040000);
    })
  })


  // it('should convert input age from Earth years to Mercury  years', function() {
  //   expect(mercuryAge(26)).toEqual(6.266);
  // })
