import React from 'react';
import { Alignment, Button, InputGroup, Navbar, NavbarGroup } from '@blueprintjs/core';

import { tableSlice } from '../../store/reducers/TableSlice';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';

const Header: React.FC = () => {
  const { searchString } = useAppSelector((state) => state.tableReducer);
  const dispatch = useAppDispatch();
  const { addString, changeSearchString } = tableSlice.actions;

  const onAddString = () => {
    dispatch(addString(searchString));
    dispatch(changeSearchString(''));
  };
  return (
    <Navbar className="my-navbar">
      <NavbarGroup align={Alignment.LEFT}>
        <InputGroup
          className="my-input"
          type="search"
          placeholder="Enter word for search text"
          value={searchString}
          onChange={(e) => dispatch(changeSearchString(e.target.value))}
        />
        <Button className="my-button" icon="plus" onClick={onAddString} />
      </NavbarGroup>
    </Navbar>
  );
};

export default Header;
