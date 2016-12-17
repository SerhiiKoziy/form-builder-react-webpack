import React, {PropTypes} from 'react';


const TextField = ({id, name, label, value, placeholder, onChange, ...otherProps}) => {
    placeholder = placeholder || label;
    return (
        <div className={`input-box`}>
            <input
                name = {name}
                label = {label}
                placeholder = {placeholder}
                value = {value}
                id={id}
                onChange={typeof onChange == 'function' ? onChange : false}/>

            <label className="label" htmlFor={id}>{label}</label>
        </div>
    )
};

// Make ESLint happy again: add validation to props
TextField.propTypes = {
    //id:PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    errorVisible:PropTypes.bool,
    errorText:PropTypes.string,
    onChange:PropTypes.func,

};
TextField.defaultProps = {
    errorText:'error',
    fieldType:'input',
    placeholder:'',
    errorVisible:false,
    onChange:()=>{},

};

export default TextField;
