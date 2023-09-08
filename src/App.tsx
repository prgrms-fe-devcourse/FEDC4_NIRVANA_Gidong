import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LandingPage from './pages/landing';
import Layout from './pages/layout';
import Profile from './pages/profile';
import SignUp from './pages/signup';
import { queryClient, QueryClientProvider } from './apis/queryClient';
import Meditation from '@pages/meditation';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path='/meditation'
                element={<Meditation />}
              />
              <Route
                path='/profile/:userId'
                element={<Profile />}
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
              path='/profile/:userId'
              element={<Profile />}
            />
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
