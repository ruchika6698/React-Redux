import React from 'react';
import Dashboard from './Dashboard';


export const Message = React.createContext()

function Context() {
  return (
    <div className="App">
        <Message.Provider value={'Welcome to Dashboard'}>
              <Dashboard />
        </Message.Provider>
    </div>
  );
}

export default Context;
