import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayHistory.css';

const DisplayHistory = ({ history }) => {
  console.log(history);
  console.log('first', history[0]);
  const historyList = history.map(search => (
    <li key={search.url}className={search.method}>
      <span className={styles.method}>{search.method}</span>
      <button className={styles.url}>{search.url}</button>
    </li>
  ));

  return (
    <ul className={styles.history}>
      <p>This is a test</p>
      {historyList}
    </ul>
  );

};

DisplayHistory.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    method: PropTypes.string,
    url: PropTypes.string
  }))
};

export default DisplayHistory;
