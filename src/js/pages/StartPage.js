import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fecha from 'fecha';
import Button from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';
import DropdownList from 'react-widgets/lib/DropdownList';

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


    render() {


        let data= this.props.data;



        return (

            <div className={`page start-page`}>

                    <div className="search-form">
                        <h3>New form</h3>
                        <form onSubmit={(e)=>e.preventDefault()}>
                            {
                                data.map((item)=>{
                                    return(
                                        <FormBox
                                            type={item.view}
                                            name={item.name}
                                            label={item.label}
                                            labelAlign={item.labelAlign}
                                            labelPosition={item.labelPosition}
                                            placeholder={item.placeholder}
                                            value={item.value}
                                            options={item.options || []}
                                            id={item.id}
                                            key = {item.id}

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
