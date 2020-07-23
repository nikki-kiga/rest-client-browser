import React, { Component } from 'react';
import Request from '../../containers/request/Request.jsx';
import Results from '../../containers/results/Results.jsx';
import DisplayHistory from '../../components/DisplayHistory/DisplayHistory.jsx';

import post from '../../services/postAPI.js';
import get from '../../services/getAPI.js';
import put from '../../services/putAPI.js';
import deleteReq from '../../services/deleteAPI.js';

export default class App extends Component {
  state = {
    url: '',
    history: []
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleHistory = (method, url) => {
    this.setState(state => {
      [...state.history, { method, url }];
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    
    if(this.state.requestType) {
      switch(this.state.requestType) {
        case 'get':
          get(this.state.url)
            .then(res => this.setState({ Results: res }))
            .then(this.handleHistory('get', this.state.url));
          break;
        case 'post':
          post(this.state.url, this.state.json)
            .then(res => this.setState({ response: res }))
            .then(this.handleHistory('post', this.state.url));
          break;
        case 'put':
          put(this.state.url, this.state.json)
            .then(res => this.setState({ response: res }))
            .then(this.handleHistory('put', this.state.url));
          break;
        case 'delete':
          deleteReq(this.state.url)
            .then(res => this.setState({ response: res }))
            .then(this.handleHistory('delete', this.state.url));
          break;
        default:
          this.setState({ error: 'Please check request settings' });
      }
    }  
  };

  render() {
    return (
      <>
        <Request url={this.state.url} json={this.state.json} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <DisplayHistory history={this.state.history}/>
        <Results response={this.state.response}/>
      </>
    );
  }

}
  
