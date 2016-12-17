import React, {PropTypes} from 'react';

import CheckBox from '../CheckBox/CheckBox'
import TextField from '../TextField/TextField'

const FormBox = ({type, name, label, labelAlign, labelPosition, onChange, placeholder ,value, id , options}) => {
  let component;
  switch (type) {
    case 'text':
      component = (
          <TextField
              fieldType="text"
              name = {name}
              label = {label}
              labelAlign = {labelAlign}
              labelPosition = {labelPosition}
              placeholder = {placeholder}
              value = {value}
              id = {id}

              onChange={onChange}
          />
      );
      break;


    /*case 'opinion':
      component = (
          <CheckBox
                {...props}
                type='radio'
                name = {name}
                label={label}
                labelAlign = {labelAlign}
                labelPosition = {labelPosition}
                onChange={onChange.bind(this,i+1)}
          />

      )
      break;*/


    default:
      throw new Error('unresolved type of answer');
      return false
      break;
  }
  return (
      React.cloneElement(component)
  );

}

// Make ESLint happy again: add validation to props
FormBox.propTypes = {};
FormBox.defaultProps = {};

export default FormBox;
