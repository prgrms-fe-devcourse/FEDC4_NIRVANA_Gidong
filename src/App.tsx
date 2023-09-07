import { Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import LandingPage from './pages/landing';
import Layout from './pages/layout';
import Profile from './pages/profile';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './apis/queryClient';

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Routes>
            <Route element={<Layout />}>
              <Route
                path='/landing'
                element={<LandingPage />}
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
          </Routes>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
