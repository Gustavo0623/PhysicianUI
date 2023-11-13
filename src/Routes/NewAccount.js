import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewAccount = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        accountType: 'physician',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        organizationName: ''
    });
    const passwordRequirements = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.'
    const [confirmPW, setConfirmPW] = useState('')

    const [passwordStrength, setPasswordStrength] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true); // Initially, passwords match

    const [accountType, setAccountType] = useState('physician'); // Default to physician

    const handleAccountTypeChange = (e) => {
        setAccountType(e.target.value);
        handleInputChange(e)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    const checkPasswordStrength = (password) => {
        // Define the criteria
        const minLength = 8; // Minimum length of 8 characters
        const minUppercase = 1; // Minimum number of uppercase letters
        const minLowercase = 1; // Minimum number of lowercase letters
        const minDigits = 1; // Minimum number of digits
        const minSpecialChars = 1; // Minimum number of special characters (e.g., !@#$%^&*)
      
        // Initialize the strength label as "Weak"
        let strengthLabel = 'Weak';
      
        // Test the criteria
        if (password.length >= minLength) {
            const hasMinUppercase = (password.match(/[A-Z]/g) || []).length >= minUppercase;
            const hasMinLowercase = (password.match(/[a-z]/g) || []).length >= minLowercase;
            const hasMinDigits = (password.match(/\d/g) || []).length >= minDigits;
            const hasMinSpecialChars = (password.match(/[!@#$%^&*]/g) || []).length >= minSpecialChars;
        
            // Calculate the overall strength
            const criteriaMet = [
                hasMinUppercase,
                hasMinLowercase,
                hasMinDigits,
                hasMinSpecialChars,
            ].filter((criterion) => criterion).length;
        
            // Update the strength label based on criteria met
            if (criteriaMet === 4) strengthLabel = 'Very Strong';
            else if (criteriaMet === 3) strengthLabel = 'Strong';
            else if (criteriaMet === 2) strengthLabel = 'Moderate';
            else if (criteriaMet === 1) strengthLabel = 'Weak';
        }
      
        // Update the state with the strength label
        setPasswordStrength(strengthLabel);
    };
      
      

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        checkPasswordStrength(password)
        if (checkPasswordStrength(password) !== 'Weak') {
            setFormData({
            ...formData,
            password,
            });
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        setPasswordMatch(confirmPassword === formData.password);
        setConfirmPW(confirmPassword)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (formData.password !== confirmPW) {
            alert("Passwords do not match. Please check and try again.");
        } else if (passwordStrength === 'Weak' || passwordStrength === 'Moderate') {
            console.log(passwordStrength)
            alert('Password strength is too low!')
        } else {
            // Continue with form submission or other actions
            // Hash PW Before Sending Data To Server
            console.log(formData)
            navigate('/login')
        }
    };

    return (
        <div className="formPage">
        <div className="formContainer">
            <h1 className="header">New {accountType === 'physician' ? 'Physician' : 'Community Partner'} Account</h1>
            <form onSubmit={handleSubmit}>

                <div className="comAccCreateRow">
                    <div className="formFieldContainer">
                    <p className="formLabel">Account Type</p>
                    <div className='AccType'>
                        <label>
                        <input
                            className='type'
                            type="radio"
                            name="accountType"
                            value="physician"
                            checked={accountType === 'physician'}
                            onChange={handleAccountTypeChange}
                        />
                        Physician
                        </label>
                        <label>
                        <input
                            className='type'
                            type="radio"
                            name="accountType"
                            value="communityPartner"
                            checked={accountType === 'communityPartner'}
                            onChange={handleAccountTypeChange}
                        />
                        Community Partner
                        </label>
                    </div>
                    </div>
                </div>
                <div className="comAccCreateRow"> 
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor='firstName'>First Name</label>
                        <input className="formInput formSmallInput" name='firstName' type="text" id='firstName' onChange={handleInputChange} required/>                        
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor='lastName'>Last Name</label>
                        <input className="formInput formSmallInput" name='lastName' type="text" id='lastName' onChange={handleInputChange} required/>
                    </div>
                </div>
                <div className="comAccCreateRow"> 
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor='email'>Email</label>
                        <input className="formInput formSmallInput" autoComplete='on' id='email' name='email' type="email" onChange={handleInputChange} required/>                        
                    </div>
                </div>
                <div className="comAccCreateRow">
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor='password'>Password</label>
                        <input
                            className="formInput formSmallInput"
                            type="password"
                            id='password'
                            name="password"
                            title={passwordRequirements}
                            value={formData.password}
                            onChange={handlePasswordChange}
                            required
                        />
                        <div className="password-strength">{passwordStrength}</div>
                    </div>
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor='confirmPassword'>Confirm Password</label>
                        <input
                            className="formInput formSmallInput"
                            type="password"
                            id='confirmPassword'
                            name='confirmPassword'
                            onChange={handleConfirmPasswordChange}
                            required
                        />
                        {passwordMatch ? null : (
                            <div className="password-mismatch">Passwords do not match</div>
                        )}
                    </div>
                </div>
                <div className="comAccCreateRow"> 
                    <div className="formFieldContainer">
                        <label className="formLabel" htmlFor='organizationName'>Organization Name</label>
                        <input className="formInput formSmallInput" id='organizationName' name='organizationName' onChange={handleInputChange} type="text" required/>                        
                    </div>
                </div>
                <button className="formSubmitButton" type="submit">
                    Sign Up
                </button>
                <p className="comLoginSubtext">
                    Already have an account? <a href="./login">Login</a>
                </p>
            </form>
        </div>
        </div>
    );
};
