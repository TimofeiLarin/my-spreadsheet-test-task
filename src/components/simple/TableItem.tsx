import React from 'react';
import { Card, Elevation } from '@blueprintjs/core';

interface TableItemProps {
  text: string;
  index: number;
}

const TableItem: React.FC<TableItemProps> = ({ index, text }) => {
  return (
    <Card className="my-table-item" interactive={true} elevation={Elevation.TWO}>
      <p>{index + 1}</p>
      <p>{text}</p>
    </Card>
  );
};

export default TableItem;
