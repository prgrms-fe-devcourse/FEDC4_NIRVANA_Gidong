import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing';
import Layout from './pages/layout';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}></Route>
      <Route
        path='/'
        element={<LandingPage />}
      />
      <Route
        path='/landing'
        element={<LandingPage />}
      />
    </Routes>
  );
}

export default App;
