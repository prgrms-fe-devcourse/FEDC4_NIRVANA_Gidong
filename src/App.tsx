import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Layout from './pages/layout';
import Profile from './pages/profile';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path='/landing'
          element={<LandingPage />}
        />
      </Route>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/profile'
        element={<Profile />}
      />
    </Routes>
  );
}

export default App;
