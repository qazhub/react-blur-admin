import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

import {Select} from './select';

export class EditableSelect extends React.Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.node,
    placeholder: PropTypes.string,
    maxHeight: PropTypes.string,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
        ]),
        label: PropTypes.node,
      }),
    ),
    onSearch: PropTypes.func, // if label is a ReactElement, we recommend you pass in an onSearch function
    onRenderValue: PropTypes.func, // if label is a ReactElement, we recommend you pass in an onRenderValue function
    isSearchable: PropTypes.bool,
    disabled: PropTypes.bool,
    isBeingEdited: PropTypes.bool,
  }

  static defaultProps = {
    value: '',
    placeholder: 'No Value',
  }

  constructor(props) {
    super(props);
    this.state = {
      isBeingEdited: this.props.isBeingEdited || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value && ! nextProps.hasOwnProperty('isBeingEdited')) {
      this.setState({isBeingEdited: false});
    } else if (nextProps.isBeingEdited !== this.props.isBeingEdited) {
      this.setState({isBeingEdited: nextProps.isBeingEdited});
    }
  }

  onSetEditing(isBeingEdited) {
    if (this.props.disabled) {
      return false;
    }

    return this.setState({isBeingEdited});
  }

  onChange(value) {
    this.setState({isBeingEdited: false});
    this.props.onChange(value);
  }

  renderValue(option) {
    if (this.props.value && this.props.onRenderValue) { // User can format the value how they want it
      return this.props.onRenderValue(this.props.value);
    } else if (option && option.label) { // Otherwise display the label
      return option.label;
    }

    return this.props.placeholder;
  }

  render() {
    if (! this.state.isBeingEdited) {
      const option = _.find(this.props.options, {value: this.props.value});
      return (
        <span className={`editable editable-click ${this.props.disabled ? 'disabled' : ''}`} onClick={e => this.onSetEditing(true)}>
          {this.renderValue(option)}
        </span>
      );
    }

    return (
      <form className='form-inline editable-wrap editable-text' role='form' onSubmit={e => e.preventDefault()}>
        <div className='editable-controls form-group'>
          <Select
            isOpen={true}
            {...this.props}
            onChange={value => this.onChange(value)}
            onToggleOpen={isOpen => this.onSetEditing(isOpen)}
            className='editable-has-buttons editable-input' />
        </div>
      </form>
    );
  }
}
