import React from 'react';


const CheckBox = ({name, id, classNameBox, labelInside, type, onChange, label, answerId ,defaultChecked }) => (
    <div className={`checkbox-wr ${classNameBox}`}>

          <input type={type}
                 id={id}
                 name ={name}
                 defaultChecked={defaultChecked}
                 value={labelInside}
                 onChange={typeof onChange === 'function' ? onChange : false}
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