import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import LandingPage from '@pages/landing';
import Layout from '@pages/layout';
import Profile from '@pages/profile';
import SignUp from '@pages/signup';
import LogIn from '@pages/login';
import Posting from '@pages/posting';
import Meditation from '@pages/meditation';
import PasswordUpdate from '@pages/password-update';
import NotFound from '@pages/NotFound';
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
        <Route element={<Layout headerStatus={'home'} />}>
          <Route
            path='/posting'
            element={<Posting />}
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
        path='/404'
        element={<NotFound />}
      />
      <Route
        path='/signup'
        element={<SignUp />}
      />
      <Route
        path='/login'
        element={<LogIn />}
      />
      <Route
        path='/*'
        element={<Navigate to='/404' />}
      />
    </Routes>
  );
};
export default PageRoutes;
