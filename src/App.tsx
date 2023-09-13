import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import PrivateRoute from '@utils/PrivateRoute';
import LandingPage from './pages/landing';
import Layout from './pages/layout';
import Profile from './pages/profile';
import SignUp from './pages/signup';
import LogIn from './pages/login';
import Meditation from './pages/meditation';
import { queryClient, QueryClientProvider } from './apis/queryClient';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path='/meditation'
                element={<PrivateRoute path='/meditation' element={Meditation} />}
              />
              <Route
                path='/profile/:userId'
                element={<PrivateRoute path='/profile/userId' element={Profile} />}
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
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
