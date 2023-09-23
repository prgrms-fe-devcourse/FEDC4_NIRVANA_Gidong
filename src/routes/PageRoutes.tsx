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
import PostDetail from '@pages/postDetail/PostDetail';

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
            path='/posts'
            element={<Posts />}
          />
          <Route
            path='/setting/password-update'
            element={<PasswordUpdate />}
          />
          <Route
            path='/*'
            element={<Navigate to='/404' />}
          />
          <Route
            path='/notice'
            element={<Notice />}
          />
          <Route
            path='/posts/:postId'
            element={<PostDetail />}
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
        path='/404'
        element={<NotFound />}
      />
      <Route
        path='/*'
        element={<Navigate to='/404' />}
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
