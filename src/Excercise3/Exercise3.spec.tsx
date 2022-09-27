import React from "react";
import { replaceCamelWithSpaces } from "./Exercise3";

describe('spaces before de camel-case capital letters', () => {
    it('should works for no inner capital letters', () => {
      expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });

    it('should works for onwe innwr capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });
    it('should works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });

})