import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route,BrowserRouter,Routes} from 'react-router-dom'
import Login from './Components/login';
import Signup from './Components/signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
