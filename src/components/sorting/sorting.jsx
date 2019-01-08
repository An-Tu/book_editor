import React from 'react';
import PropTypes from 'prop-types';
import bemCl from 'bem-cl';
import Pill from 'src/components/pill';
import { directions, fields } from 'src/store/sorting/constants';
import './sorting.scss';

const b = bemCl('sorting');

const fieldsMap = {
  [fields.title]: 'По заголовку',
  [fields.releaseDate]: 'По году',
};

const Sorting = ({ sorting, sortingFields, handleDirection, handleField }) => (
  <div className={b()}>
    <ul className={b('controls-wrapper').mix(b('fields'))}>
      {sortingFields.map(field => (
        <li
          key={field}
          className={b('control').mix(b('field', { active: sorting.field === field }))}
        >
          <Pill value={field} onClick={handleField}>
            {fieldsMap[field]}
          </Pill>
        </li>
      ))}
    </ul>
    <div className={b('controls-wrapper').mix(b('directions'))}>
      <div
        className={b('control').mix(
          b('direction', { active: sorting.direction === directions.desc })
        )}
      >
        <Pill value={directions.desc} onClick={handleDirection}>
          По убыванию
        </Pill>
      </div>
      <div
        className={b('control').mix(
          b('direction', { active: sorting.direction === directions.asc })
        )}
      >
        <Pill value={directions.asc} onClick={handleDirection}>
          По возрастанию
        </Pill>
      </div>
    </div>
  </div>
);

Sorting.propTypes = {
  sorting: PropTypes.shape({
    field: PropTypes.string,
    direction: PropTypes.number,
  }).isRequired,
  sortingFields: PropTypes.arrayOf(PropTypes.string),
  handleDirection: PropTypes.func,
  handleField: PropTypes.func,
};

Sorting.defaultProps = {
  sortingFields: [],
  handleDirection: () => {},
  handleField: () => {},
};

export default Sorting;
