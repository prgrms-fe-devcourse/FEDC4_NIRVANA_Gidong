import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

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
import { Suspense } from 'react';
import { SkeletonPosts } from '@pages/posts/components/SkeletonPosts';

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
            path='/setting/password-update'
            element={<PasswordUpdate />}
          />
          <Route
            path='/meditation'
            element={<Meditation />}
          />
        </Route>
      </Route>
      <Route element={<PublicRoute />}>
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
      </Route>
      <Route element={<Layout headerStatus={'home'} />}>
        <Route
          path='/posts'
          element={
            <Suspense fallback={<SkeletonPosts />}>
              <Posts />
            </Suspense>
          }
        />
        <Route
          path='/posts/:postId'
          element={<PostDetail />}
        />
      </Route>
      <Route
        path='/404'
        element={<NotFound />}
      />
      <Route
        path='/*'
        element={<Navigate to='/404' />}
      />
    </Routes>
  );
};
export default PageRoutes;
