import React from  'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import PokeList from './pages/pokeList'


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path='all' element={<PokeList />}></Route>
        </Routes>
      </BrowserRouter>
  );
}
  
  export default App;