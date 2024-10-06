import Menu from './Menu'
import Add from './Add';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Edit from './Edit';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route element={<Menu/>} path='/home' />
            <Route element={<Add/>} path='/add' />
            <Route element={<Edit/>} path='/edit' />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;