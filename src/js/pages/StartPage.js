import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import fecha from 'fecha';
import Button from '../components/Button/Button';
import Spinner from '../components/Spinner/Spinner';
import DropdownList from 'react-widgets/lib/DropdownList';


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





        return (

            <div className={`page start-page`}>

                    <div className="search-form">
                        <h3>New form</h3>
                        <form onSubmit={(e)=>e.preventDefault()}>

                            {/* <div className="input-box">
                                    <input
                                        type="text"
                                        onKeyUp={::this.saveName}
                                        placeholder="Artist name"
                                        autoFocus
                                    />
                                </div>
                                <DropdownList
                                    name="currentCategory"
                                    data={categories}
                                    valueField="id"
                                    textField="name"
                                    placeholder="Category"
                                    defaultValue={'all'}
                                    onChange={value => this.setState({currentCategory: value, currentEntity:''})}

                                />
                                <Button type={'white'}
                                    onClick={::this.searchForm}
                                    children="search"/>*/}
                        </form>

                    </div>


                </div>

        )
    }
};
