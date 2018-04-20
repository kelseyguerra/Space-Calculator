import { calculateSeconds } from "./../src/space-class.js";

  describe('calculateSeconds', function() {
  it('Should convert years to seconds', function() {
    expect(calculateSeconds(26)).toEqual(820040000);
    })
  });
