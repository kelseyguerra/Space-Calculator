import { calculateSeconds } from "./../src/space-class.js";
import { ageInput } from "./../src/space-class.js";

  describe('ageInput', function() {
  }

    it('Should convert years to seconds', function() {
      expect(calculateSeconds(26)).toEqual(820040000);
    });
  });

  it('should convert input age from Earth years to Mercury  years', function() {
    let inputAge = new inputAge(26)
    expect(inputAge.convertMercuryAge()).toEqual(6.24);
  });
});
