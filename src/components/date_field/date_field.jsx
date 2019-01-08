import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './date_field.scss';

const minDate = new Date(1800, 0, 1);

class DateField extends React.PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    id: PropTypes.string.isRequired,
  };

  static defaultProps = {
    value: null,
  };

  constructor(props) {
    super(props);

    const date = props.value ? new Date(props.value) : null;
    this.state = {
      date,
    };

    this.onChange = this.onChange.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const date = nextProps.value ? new Date(nextProps.value) : null;

    if (date !== prevState.date) {
      return { date };
    }

    return null;
  }

  onChange(date) {
    this.setState({
      date,
    });
    const timestemp = date != null ? date.getTime() : date;
    this.props.onChange(timestemp);
  }

  render() {
    return (
      <DatePicker
        placeholderText={this.props.placeholder}
        onChange={this.onChange}
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        selected={this.state.date}
        minDate={minDate}
        dateFormat="dd/MM/yyyy"
        id={this.props.id}
        className={this.props.className}
      />
    );
  }
}

export default DateField;
