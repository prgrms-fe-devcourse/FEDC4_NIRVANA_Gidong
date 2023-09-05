import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Layout from './pages/layout';

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
    </Routes>
  );
}

export default App;
