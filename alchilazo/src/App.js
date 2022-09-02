import './Styles/App.scss';
import { Route, Routes } from 'react-router-dom';

//Component's import
import { Start } from './Components/Start';
import { Login } from './Components/Login';
import { NotFound } from './Components/NotFound';
import { Register } from './Components/Register';

//Page not found

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />}></Route>
      <Route path="/Login" element={<Login />}></Route>
      <Route path="/Register" element={<Register />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
