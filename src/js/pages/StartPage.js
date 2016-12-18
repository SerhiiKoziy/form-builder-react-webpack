import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Button from '../components/Button/Button';

import FormBox from '../components/Form/FormBox';


const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};
@connect(mapStateToProps, mapDispatchToProps)
export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }

    componentDidMount() {

    }

    changeForm( value) {
       // console.log(value)
        let data = {id, value};


    }
    onChange(name, e) {
        const value = e.target.value
        //console.log(name, value)
        this.props.actions.updateElement(name, value)
        //console.log(value)
        /*let data = {id, value};
         this.props.actions.changes(data)*/

    }
    render() {


        let data= this.props.data;


        return (

            <div className={`page start-page`}>

                    <div className="make-form">
                        <h3>New form</h3>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            {
                                data.map((item)=>{
                                    return(
                                        <FormBox
                                            data = {data}
                                            type={item.view}
                                            name={item.name}
                                            label={item.label}
                                            labelAlign={item.labelAlign}
                                            labelPosition={item.labelPosition}
                                            placeholder={item.placeholder}
                                            value={item.value}
                                            options={item.options || []}
                                            id={item.id}
                                            activatorName={item.activatorName || ''}
                                            activatorValue={item.activatorValue || ''}
                                            key = {item.id}
                                            onChange={this.onChange.bind(this, item.name)}
                                        />
                                    )

                                })
                            }


                        </form>

                    </div>


                </div>

        )
    }
};
