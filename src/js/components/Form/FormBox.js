import React from 'react';

import CheckBox from '../CheckBox/CheckBox';
import TextField from '../TextField/TextField';

const FormBox = (props) => {
  const { data, type, name, label, labelAlign, labelPosition, onChange, placeholder, value, activatorValue, id, activatorName, options } = props;

  let component;
  switch (type) {
    case 'text':
      component = (
        <TextField
          fieldType="text"
          data={data}
          name={name}
          label={label}
          labelAlign={labelAlign}
          classNameBox={labelPosition}
          placeholder={placeholder}
          value={value}
          id={id}
          activatorName={activatorName}
          activatorValue={activatorValue}
          onChange={onChange}
        />
      );
      break;
    case 'radio':
      component = (
        <div className={`checkbox-wrapper ${labelPosition}`}>
          <p>{label}</p>
          <div className="checkbox">
            {options.map((item, i) => {
              return (
                <CheckBox
                  id={`radio-${id + i}`}
                  type="radio"
                  name={name}
                  labelInside={item}
                  onChange={onChange}
                  key={`radio-${id + i}`}
                />
              );
            })}
          </div>


        </div>
      );
      break;
    default:
      throw new Error('unresolved type');
  }
  return (
    React.cloneElement(component)
  );

};

FormBox.propTypes = {
  type: React.PropTypes.string,
  data: React.PropTypes.array,
  name: React.PropTypes.string,
  labelAlign: React.PropTypes.string,
  labelPosition: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  activatorValue: React.PropTypes.string,
  activatorName: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  label: React.PropTypes.string,
  answerId: React.PropTypes.number,
};
FormBox.defaultProps = {};

export default FormBox;
