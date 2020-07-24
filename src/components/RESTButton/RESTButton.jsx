import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ reqType, onChange  }) => (
  <div className = 'radio'>
    <label>
      <input 
        type= 'radio'
        name= 'requestType'
        value={reqType}
        onChange={onChange}
        className='request-type'
      />
      {reqType.toUpperCase()}
    </label>
  </div>
);

Button.propTypes = {
  reqType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Button;
