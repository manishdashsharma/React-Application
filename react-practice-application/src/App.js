import './App.css';
import Counter from './Components/Counter/Counter';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/counter' element={<Counter />}/>
    </Routes>
  );
}

export default App;
