import { ageInput } from "./../src/space-class.js";

  describe('ageInput', function() {

    it('Should convert years to seconds', function() {
      // let age = new ageInput(26);
      expect(calculateSeconds(26)).toEqual(820040000);
    });
//
//     it('should convert input age from Earth years to Mercury        years', function() {
//       let age = new ageInput(26);
//       expect(age.convertMercuryAge()).toEqual(6.24);
//   });
// });
