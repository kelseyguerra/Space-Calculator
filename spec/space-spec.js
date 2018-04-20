import { ageInput } from "./../src/space-class.js";

  describe('ageInput', function() {
  it('Should convert years to seconds', function() {
    expect(calculateSeconds(26)).toEqual(820040000);
    })
  })

  // it('should convert input age from Earth years to Mercury  years', function() {
  //   expect(mercuryAge(26)).toEqual(6.266);
  // })
