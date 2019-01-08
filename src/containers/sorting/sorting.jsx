import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDirection, setField } from 'src/store/sorting/actions';
import { getSorting } from 'src/store/sorting/selectors';
import { fields } from 'src/store/sorting/constants';
import Sorting from 'src/components/sorting';

const sortingFields = Object.values(fields);

@connect(
  state => ({
    sorting: getSorting(state),
  }),
  {
    setDirection,
    setField,
  }
)
class SortingContainer extends React.PureComponent {
  static propTypes = {
    setDirection: PropTypes.func.isRequired,
    setField: PropTypes.func.isRequired,
    sorting: PropTypes.shape({
      field: PropTypes.string,
      direction: PropTypes.number,
    }).isRequired,
  };

  constructor(props) {
    super(props);

    this.setDirection = this.setDirection.bind(this);
    this.setField = this.setField.bind(this);
  }

  setDirection(direction) {
    if (this.props.sorting.direction === direction) {
      return;
    }
    this.props.setDirection(direction);
  }

  setField(field) {
    if (this.props.sorting.field === field) {
      return;
    }
    this.props.setField(field);
  }

  render() {
    return (
      <Sorting
        sorting={this.props.sorting}
        handleDirection={this.setDirection}
        handleField={this.setField}
        sortingFields={sortingFields}
      />
    );
  }
}

export default SortingContainer;
