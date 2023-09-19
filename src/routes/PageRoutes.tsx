import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import LandingPage from '@pages/landing';
import Layout from '@pages/layout';
import Profile from '@pages/profile';
import SignUp from '@pages/signup';
import LogIn from '@pages/login';
import Posting from '@pages/posting';
import Meditation from '@pages/meditation';
import Setting from '@pages/setting/Setting';
import PasswordUpdate from '@pages/password-update';

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout />}>
          <Route
            path='/profile/:userId'
            element={<Profile />}
          />
          <Route
            path='/posting'
            element={<Posting />}
          />
          <Route
            path='/setting'
            element={<Setting />}
          />
          <Route
            path='/setting/password-update'
            element={<PasswordUpdate />}
          />
        </Route>
      </Route>
      <Route element={<Layout />}>
        <Route
          path='/meditation'
          element={<Meditation />}
        />
      </Route>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/signup'
        element={<SignUp />}
      />
      <Route
        path='/login'
        element={<LogIn />}
      />
    </Routes>
  );
};
export default PageRoutes;
