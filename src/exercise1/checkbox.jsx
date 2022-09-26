import { useState } from 'react';


export const CheckboxTest = () => {

  const [ buttonColor, setButtonColor ] = useState('red');
  const [ disabled, setDisabled ] = useState(false);
  
  
  const newButtonColor = buttonColor === 'green' ? 'blue' : 'green';

    return (
   
    <div> 
        <form method="post">
    <div>
        <label for="terms_and_conditions">I agree to the Terms of Service:</label>
        <input 
         type="checkbox"
         id="disable-button-checkbox"
         defaultChecked={disabled}
         aria-checked={disabled}
         onChange={(e) => setDisabled(e.target.checked)}
         
/>
    </div>
    <div>
        <button 
       style={{backgroundColor: disabled ? 'gray' : buttonColor }}
       onClick={() => setButtonColor(newButtonColor)}
       disabled={disabled}
        >Sign Up {newButtonColor}</button>
    </div>
</form>
    </div>

    );
}