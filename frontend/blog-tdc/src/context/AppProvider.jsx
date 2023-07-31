import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [dbPosts, setdbPosts] = useState([])
  
  const values = useMemo(() => ({
    dbPosts,
    setdbPosts,
  }), [
    dbPosts
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