import React from 'react';
import PropTypes from 'prop-types';
import RESTButton from '../../components/RESTButton/RESTButton.jsx';
import Header from '../../components/Header/Header.jsx';
import styles from './Request.css';

const Request = ({ url, json, onChange, onSubmit }) => {
  const buttonTypes = ['get', 'post', 'put', 'delete'];
  const buttons = buttonTypes.map(type => (<RESTButton  key={type} reqType={type} onChange={onChange}/>));
  return (
    <>
      <Header/>
      <form onSubmit={onSubmit}>
        <div>
          <input type='text'name='url' value={url} onChange={onChange} placeholder='http://api.url.here'/>
          <button className={styles.submit}>Go!</button>
        </div>

        <div className={styles.methods}>
          {buttons}
          <textarea name='json' value={json} onChange={onChange}/>
        </div>
        
      </form>
    </>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  json: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;
