import React, {PropTypes} from 'react';

import CheckBox from '../CheckBox/CheckBox'
import TextField from '../TextField/TextField'

const FormBox = ({data, type, name, label, labelAlign, labelPosition, onChange, placeholder ,value,activatorValue, id, activatorName, options}) => {
  let component;
  switch (type) {
    case 'text':
      component = (
          <TextField
              fieldType="text"
              data = {data}
              name = {name}
              label = {label}
              labelAlign = {labelAlign}
              classNameBox = {labelPosition}
              placeholder = {placeholder}
              value = {value}
              id = {id}
              activatorName={activatorName}
              activatorValue={activatorValue}
              onChange={onChange}
          />
      );
      break;


    case 'radio':
      component = (
          <div className="">
            <p>{label}</p>
              {options.map((item, i) => {
                  //console.log(item)
                  return (
                        <CheckBox
                            id={`radio-${id + i}`}
                            type='radio'
                            name = {name}
                            labelInside={item}
                            classNameBox = {labelPosition}
                            onChange={onChange}
                            key={`radio-${id + i}`}
                        />
                    )
              })}
          </div>
      )
      break;


    default:
      throw new Error('unresolved type');
      return false
      break;
  }
  return (
      React.cloneElement(component)
  );

}

FormBox.propTypes = {};
FormBox.defaultProps = {};

export default FormBox;
