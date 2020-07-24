import React from 'react';
import PropTypes from 'prop-types';
import styles from './Results.css';

const Result = ({ response }) => {
  return (
    <section className={styles.results}>
      <h2>Results</h2>
      {
        Object.entries(response).length === 0 ? null : <p>{JSON.stringify(response, null, 2)}</p>
      }    
    </section>
  );
};

Result.propTypes = {
  response: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
};

export default Result;
