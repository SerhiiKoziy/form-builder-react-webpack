import React, { Component } from 'react';
import { updateElement } from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FormBox from '../components/Form/FormBox';


const mapStateToProps = (state) => {
  return { data: state };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateElement }, dispatch);
};
@connect(mapStateToProps, mapDispatchToProps)
export default class StartPage extends Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
    updateElement: React.PropTypes.func.isRequired,
    type: React.PropTypes.string,
    name: React.PropTypes.string,
    label: React.PropTypes.string,
    labelAlign: React.PropTypes.string,
    labelPosition: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    options: React.PropTypes.array,
    id: React.PropTypes.number,
    activatorName: React.PropTypes.string,
    activatorValue: React.PropTypes.string,
  };

  onChange(name, e) {
    const value = e.target.value;
    this.props.updateElement(name, value);
  }

  renderElements() {
    let data = this.props.data;
    return (
      this.props.data.map((item) => {
        return (
          <FormBox
            data={data}
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
            key={item.id}
            onChange={this.onChange.bind(this, item.name)}
          />
        );
      }
      )
    );
  }

  render() {
    return (
      <div className={'page start-page'}>
        <div className="make-form">
          <h3>New form</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            {this.renderElements()}
          </form>

        </div>


      </div>

    );
  }
}
