import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';
import '../styles/Home.css'

function AppProvider({ children }) {
  const [dbPosts, setdbPosts] = useState([]);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('usuária(o)');

  // const mockToken1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
  const mockToken2 = '';
  const [token, setToken] = useState(mockToken2);
  
  const values = useMemo(() => ({
    dbPosts,
    setdbPosts,
    email,
    setEmail,
    userName,
    setUserName,
    token,
    setToken,
  }), [
    dbPosts,
    email,
    userName,
    token,
  ]);

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = ({
    children: PropTypes.node,
  }).isRequired;
  
export default AppProvider;