import React from 'react';


const CheckBox = ({name, id, labelInside, type, onClick, label, answerId ,defaultChecked }) => (
    <div className={`checkbox-wr`}>
      <input type={type}
             id={id}
             name ={name}
             defaultChecked={defaultChecked}
             onClick={typeof onClick === 'function' ? onClick : false}
      />
      <label htmlFor={id}>{labelInside}</label>
    </div>
);

// Make ESLint happy again: add validation to props
CheckBox.propTypes = {
  type: React.PropTypes.string,
  onClick: React.PropTypes.func,
  label: React.PropTypes.string,
  answerId: React.PropTypes.number
};

CheckBox.defaultProps = {
    type: 'radio',
    //defaultChecked:false
};

export default CheckBox;