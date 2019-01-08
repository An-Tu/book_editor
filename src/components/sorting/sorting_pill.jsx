import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';

const b = bemCl('pill');

class Pill extends React.PureComponent {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    value: PropTypes.any.isRequired,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.value);
  }

  render() {
    return (
      <button type="button" className={b()} onClick={this.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Pill;
