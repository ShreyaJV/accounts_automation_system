// ProtectedRoute.jsx

/*import React from 'react';
import { Route, Navigate } from 'react-router-dom';
//import {isAuthenticated} from '../utils/auth';
import { useAuth } from '../context/AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuth();

  // Redirect to login if user is not authenticated
  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;*/

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
//import {isAuthenticated} from '../utils/auth';
import { useAuth } from '../context/AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) =>
//         isAuthenticated() ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/login" />
//         )
//       }
//     />
//   );
// };

const ProtectedRoute = ({ element, ...rest }) => {
  const { user } = useAuth();
  return user ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/Login" replace />
  );
};

export default ProtectedRoute;
