import { Routes, Route } from 'react-router';
import { General } from './pages/General';

function App() {
  return (
    <>
      <Routes>
        <Route path='*' element={<General />} />
      </Routes>
    </>
  );
}

export default App;
