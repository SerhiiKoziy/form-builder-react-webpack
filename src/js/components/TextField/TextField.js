import React, {PropTypes} from 'react';


const TextField = ({id,data, activatorName, activatorValue, name, classNameBox, label, value, placeholder, onChange}) => {
    placeholder = placeholder || label;

    let selectRadioValue = data.map(item => {
        if(item.name == activatorName){
            return item.value;
        }
    }).filter(item => !!item)[0]


    console.log(selectRadioValue, activatorValue, name)
    return (
        <div>
            {
                activatorName && (
                    <div
                        className={`input-box ${classNameBox} ${selectRadioValue === activatorValue ? 'active' : ''} ${activatorName ? 'hidden' : ''} `}>
                        <label className="label" htmlFor={id}>{label}</label>
                        <input
                            name={name}
                            label={label}
                            placeholder={placeholder}
                            defaultValue={value}
                            id={id}
                            onChange={typeof onChange == 'function' ? onChange : false}/>
                    </div>
                )
            }
            {
                !activatorName && (
                    <div className={`input-box ${classNameBox} ${selectRadioValue === activatorValue ? 'active' : ''} ${activatorName ? 'hidden' : ''} `}>
                        <label className="label" htmlFor={id}>{label}</label>
                        <input
                            name = {name}
                            label = {label}
                            placeholder = {placeholder}
                            defaultValue = {value}
                            id={id}
                            onChange={typeof onChange == 'function' ? onChange : false}/>
                    </div>
                )
            }


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
