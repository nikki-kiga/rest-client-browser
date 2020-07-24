import React from 'react';
import PropTypes from 'prop-types';

const Result = (response) => {
  return (
    <textarea id='results' rows='10' cols='30' value={response} readOnly>
    </textarea>        
  );
};

Result.propTypes = {
  response: PropTypes.string
};

export default Result;
