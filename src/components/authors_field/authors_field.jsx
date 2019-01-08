import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import { FieldArray } from 'react-final-form-arrays';
import Button from 'src/components/button';
import { authorFields } from 'src/store/books_list/constants';
import FormField from 'src/components/form_field';
import './authors_field.scss';

const b = bemCl('authors-field');

const MIN_AUTHORS_COUNT = 1;
const MAX_AUTHORS_COUNT = 10;

class AuthorsField extends React.PureComponent {
  static propTypes = {
    push: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
    validate: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    namePlaceholder: PropTypes.string.isRequired,
    lastnamePlaceholder: PropTypes.string.isRequired,
    initData: PropTypes.arrayOf(PropTypes.object),
    label: PropTypes.string,
  };

  static defaultProps = {
    initData: [undefined],
    label: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      fieldsNumber: props.initData.length,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.renderAuthors = this.renderAuthors.bind(this);
  }

  increment() {
    this.props.push(this.props.name, undefined);
    this.setState(({ fieldsNumber }) => ({
      fieldsNumber: fieldsNumber + 1,
    }));
  }

  decrement() {
    this.props.pop(this.props.name);
    this.setState(({ fieldsNumber }) => ({
      fieldsNumber: fieldsNumber - 1,
    }));
  }

  renderAuthors({ fields }) {
    const { validate, namePlaceholder, lastnamePlaceholder } = this.props;
    return fields.map(name => (
      <div className={b('author-fields')} key={name}>
        <FormField
          name={`${name}.${authorFields.name}`}
          validate={validate}
          placeholder={namePlaceholder}
        />
        <FormField
          name={`${name}.${authorFields.lastname}`}
          validate={validate}
          placeholder={lastnamePlaceholder}
        />
      </div>
    ));
  }

  render() {
    const { validate, label } = this.props;
    const { fieldsNumber } = this.state;
    return (
      <div className={b().mix(b('authors'))}>
        {label == null ? null : <span className={b('label')}>{label}:</span>}
        <div className={b('authors-fields-wrapper')}>
          <FieldArray name={this.props.name} validate={validate}>
            {this.renderAuthors}
          </FieldArray>
        </div>
        <div className={b('authors-btns-wrapper')}>
          <Button
            className={String(b('author-btn'))}
            type="button"
            onClick={this.increment}
            disabled={fieldsNumber === MAX_AUTHORS_COUNT}
          >
            +
          </Button>
          <Button
            className={String(b('author-btn'))}
            type="button"
            onClick={this.decrement}
            disabled={fieldsNumber === MIN_AUTHORS_COUNT}
          >
            -
          </Button>
        </div>
      </div>
    );
  }
}

export default AuthorsField;
