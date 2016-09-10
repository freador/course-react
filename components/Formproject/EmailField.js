import React from 'react';
import s from './EmailField.css';

class EmailField extends React.Component{
  onChange: function(e){

  },
  render(){
    return(
      <div className="form-group">
        <input className="form-control" onChange={this.onChange} placeholder="Email" />
      </div>
    )
  }

}

export default EmailField;
