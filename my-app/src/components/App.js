import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import { FormGroup } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

import './App.css';
// import * as action from '../actions';

class App extends Component {
  render() {
    return (
      <div>
        <Typography variant="display1" gutterBottom>
          My todo list
        </Typography>
        <Grid item xs={12} sm={6}>
          <FormGroup row>
            <TextField id="task" label="New task" />
            <Button variant="raised" color="primary">
              Add
            </Button>
          </FormGroup>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { ...state };
};

export default connect(mapStateToProps)(App);
