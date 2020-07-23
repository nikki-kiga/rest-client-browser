import React from 'react';
import PropTypes from 'prop-types';

const DisplayHistory = ({ history }) => (
  <>
  
    {
      history.length > 0 ? 
        history.map(({ method, url }) => {
          <span className='history-list'>
            <h3>{method}</h3>
            <h3>{url}</h3>
          </span>;
        }) : null

    }

  </>
);

DisplayHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string,
    url: PropTypes.string
  }))
};

export default DisplayHistory;
