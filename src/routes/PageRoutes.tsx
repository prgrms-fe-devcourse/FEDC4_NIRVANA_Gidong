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
import Posts from '@pages/posts';
import Notice from '@pages/notice';

const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route element={<Layout headerStatus={'back'} />}>
          <Route
            path='/profile/:userId'
            element={<Profile />}
          />
          <Route
            path='/notice'
            element={<Notice />}
          />
        </Route>
      </Route>
      <Route element={<Layout headerStatus={'home'} />}>
        <Route
          path='/posting'
          element={<Posting />}
        />
        <Route
          path='/setting'
          element={<Setting />}
        />
        <Route
          path='/posts'
          element={<Posts />}
        />
        <Route
          path='/setting/password-update'
          element={<PasswordUpdate />}
        />
      </Route>
      <Route element={<Layout headerStatus={'home'} />}>
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
