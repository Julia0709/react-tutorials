import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
// import * as action from '../actions';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <header>
          <h1>My todo list</h1>
        </header>
        <form>
          <label>
            Add new task:
            <input type="text" name="task" />
          </label>
          <input type="submit" value="Add" onClick />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
