import './App.css';
import Counter from './Components/Counter/Counter';
import { Route, Routes } from 'react-router-dom';
import FetchData from './Components/FetchData/FetchData';

function App() {
  return (
    <Routes>
      <Route path='/counter' element={<Counter />}/>
      <Route path='/fetchData' element={<FetchData />}/>
    </Routes>
  );
}

export default App;
