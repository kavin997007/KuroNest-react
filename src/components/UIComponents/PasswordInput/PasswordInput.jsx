import React, { useState } from 'react';

const PasswordInput = ({ 
  id, 
  value, 
  onChange, 
  placeholder = '••••••••', 
  label = 'Password', 
  required = true 
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault(); // Prevent form submission
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-group password-input-container">
      <label htmlFor={id}>{label}</label>
      <div className="password-input-wrapper" style={{ position: 'relative' }}>
        <input 
          id={id}
          type={showPassword ? 'text' : 'password'} 
          placeholder={placeholder} 
          required={required}
          value={value}
          onChange={onChange}
          style={{ paddingRight: '46px' }} // Make space for the eye icon button
        />
        <button 
          type="button" 
          onClick={togglePasswordVisibility}
          className="password-toggle-btn"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '4px',
            fontSize: '18px'
          }}
        >
          {showPassword ? (
            <i className="ri-eye-off-line"></i>
          ) : (
            <i className="ri-eye-line"></i>
          )}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
