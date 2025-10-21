// import logo from './logo.svg';

import { useEffect, useReducer } from 'react';
import { AuthContext } from './services/auth/authContext.js';
import { authReducer } from './services/auth/authReducer.js';
import { AppRouter } from './routers/AppRouter.js';
import './App.scss';

const init = () => { return JSON.parse(sessionStorage.getItem('user') ) || { logged: false}; }

function App() {
  const [ user, dispatch ] = useReducer( authReducer, {}, init );

  useEffect( () => {
    if( !user ) return;
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user] );

  return (
    <AuthContext.Provider value={{ user,dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default App;