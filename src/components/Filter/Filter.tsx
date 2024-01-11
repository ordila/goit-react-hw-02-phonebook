import { FC } from 'react';
import { IFilterProps } from './Filter.types';

const Filter: FC<IFilterProps> = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
    ></input>
  );
};
export default Filter;
