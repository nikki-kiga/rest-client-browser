import React from 'react';
import PropTypes from 'prop-types';
import styles from './RESTButton.css';

const Button = ({ reqType, onChange  }) => (
  <>
    
    <input 
      type= 'radio'
      name= 'requestType'
      id={reqType}
      value={reqType}
      onChange={onChange}
      className={styles.method}
    />
    
    <label htmlFor={reqType}>{reqType.toUpperCase()}</label>
  </>
);

Button.propTypes = {
  reqType: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Button;
