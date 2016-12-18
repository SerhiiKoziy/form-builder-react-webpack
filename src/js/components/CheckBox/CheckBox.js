import React from 'react';

const CheckBox = ({ name, id, labelPosition, labelInside, type, onChange, label, defaultChecked }) => (
  <div className={`checkbox-wr ${labelPosition}`}>
    <input type={type}
           id={id}
           name={name}
           defaultChecked={defaultChecked}
           value={labelInside}
           onChange={typeof onChange === 'function' ? onChange : false}
    />
    <label htmlFor={id}>{labelInside}</label>
  </div>
);

CheckBox.propTypes = {
  type: React.PropTypes.string,
  onChange: React.PropTypes.func,
  label: React.PropTypes.string,
  answerId: React.PropTypes.number,
  name: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  labelInside: React.PropTypes.string,
  labelPosition: React.PropTypes.string,
  options: React.PropTypes.array,
  value: React.PropTypes.string,
  defaultChecked: React.PropTypes.bool,

};

CheckBox.defaultProps = {
  type: 'radio',
  defaultChecked: false,
};

export default CheckBox;