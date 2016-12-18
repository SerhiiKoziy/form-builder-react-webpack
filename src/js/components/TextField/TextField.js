import React, { PropTypes } from 'react';


const TextField = ({ id, data, activatorName, activatorValue, name, classNameBox, label, value, placeholder, onChange }) => {

  let isElementActive = data.map(item => {
    if (item.name == activatorName) {
      return item.value;
    }
  }).filter(item => !!item)[0];

  return activatorName ? (

    (isElementActive === activatorValue) ?
      (<div className={`input-box ${classNameBox}`}>
        <label className="label" htmlFor={id}>{label}</label>
        <input
          name={name}
          label={label}
          placeholder={placeholder}
          defaultValue={value}
          id={id}
          onChange={typeof onChange === 'function' ? onChange : false}/>
      </div>)
      : (null)


  ) : (
    <div className={`input-box ${classNameBox}`}>
      <label className="label" htmlFor={id}>{label}</label>
      <input
        name={name}
        label={label}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        onChange={typeof onChange === 'function' ? onChange : false}/>
    </div>
  );


};

// Make ESLint happy again: add validation to props
TextField.propTypes = {
  placeholder: PropTypes.string,
  errorVisible: PropTypes.bool,
  errorText: PropTypes.string,
  onChange: PropTypes.func,

};
TextField.defaultProps = {
  errorText: 'error',
  fieldType: 'input',
  placeholder: '',
  errorVisible: false,
  onChange: () => {
  },

};

export default TextField;
