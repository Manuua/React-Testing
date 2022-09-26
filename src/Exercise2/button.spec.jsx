import { fireEvent,render,screen } from "@testing-library/react";
import React from "react";
import { Exercise2 } from "./button";

function setup(){
    return render(<Exercise2/>);
}
    
describe('Exercise 2',() => {
    setup();
    const checkbox = screen.getByRole('checkbox');
    const button = screen.getByRole('button');

    it ('should disable button when checkbox clicked', () => {
        fireEvent.click(checkbox);
        expect(button).toBeDisabled();

        
    });

 it('Checkbox disables button on first click and enables on second click', () => {
 setup();

    const checkbox = screen.getByRole('checkbox');
    const colorButton = screen.getByRole('button');
    
    fireEvent.click(checkbox);
    expect(colorButton).toBeDisabled();
    
    fireEvent.click(checkbox);
    expect(colorButton).toBeEnabled();
   });
});