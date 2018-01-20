import React from 'react';
import Form from "./Form";
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

const SubmitButton = () => (
  <div>
    <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleFormSubmit}/>
    <RaisedButton label="Create New User" secondary={true} style={style}/>
  </div>
);

export default SubmitButton;