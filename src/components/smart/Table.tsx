import React from 'react';

import useAppSelector from '../../hooks/useAppSelector';
import TableItem from '../simple/TableItem';

const Table: React.FC = () => {
  const { arrStrings, searchString } = useAppSelector((state) => state.tableReducer);
  return (
    <div className="my-table">
      <h1>Table</h1>
      {arrStrings
        .filter((string) => string.toLowerCase().includes(searchString.toLowerCase()))
        .map((string, index) => (
          <TableItem key={index} text={string} index={index} />
        ))}
    </div>
  );
};

export default Table;
