import React from 'react';

import Header from './components/smart/Header';
import Table from './components/smart/Table';

import './styles/app.scss';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Table />
    </div>
  );
};

export default App;
