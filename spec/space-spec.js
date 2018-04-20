import { calculateSeconds } from "./../src/space-class.js";
import { ageCalculator } from "./../src/space-class.js";

  describe('ageCalculator', function() {
  }

    it('Should convert years to seconds', function() {
      expect(calculateSeconds(26)).toEqual(820040000);
    });
  });

  it('should convert input age from Earth years to Mercury  years', function() {
    expect(convertMercuryAge(26)).toEqual(6.24);
  });
});
