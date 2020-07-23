import React from 'react';
import PropTypes from 'prop-types';
import RESTButton from '../../components/RESTButton/RESTButton.jsx';

const Request = ({ url, json, onChange, onSubmit }) => {
  const buttonTypes = ['get', 'post', 'put', 'delete'];
  const buttons = buttonTypes.map(type => (<RESTButton key={type} reqType={type} onChange={onChange}/>));
  return (
    <form onSubmit={onSubmit}>
      <input name='url' value={url} onChange={onChange} placeholder='http://api.url.here'/>
      <button className='submit'>
                  Go!
      </button>
      {buttons}
      <input name='json' value={json} onChange={onChange}/>
    </form>
  );
};

Request.propTypes = {
  url: PropTypes.string.isRequired,
  json: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Request;
