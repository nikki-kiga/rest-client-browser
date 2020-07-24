import React, { Component } from 'react';
import Request from '../../containers/request/Request.jsx';
import Results from '../../containers/results/Results.jsx';
import DisplayHistory from '../../components/DisplayHistory/DisplayHistory.jsx';

import requestAPI from '../../services/requestAPI.js';


require('./App.css');

export default class App extends Component {
  state = {
    url: '',
    history: [],
    results: {}
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleHistory = (method, url) => {
    this.setState(state => ({
      history: [...state.history, { method: method, url: url }]
    }));
  }

  handleSubmit = e => {
    e.preventDefault();
    
    if(this.state.requestType) {
      requestAPI(this.state.url, this.state.requestType, this.state.json)
        .then(res => this.setState({ results: res }))
        .then(() => this.handleHistory(this.state.requestType, this.state.url));
    }  
  };

  render() {
    return (
      <>
        <Request url={this.state.url} json={this.state.json} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <main>
          <DisplayHistory history={this.state.history}/>
          <Results response={this.state.results}/>
        </main>
      </>
    );
  }

}
  
