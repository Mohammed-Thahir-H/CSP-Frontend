import './App.css';
// import { Register } from './Register';
import Forms from './components/Forms';
import RegistrationForm from './components/Register';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom" 
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path='/signup' element={<Forms/>} />
      <Route exact path='/login' element={<Login/>} />
    </Routes>
    </Router>
    
  );
}

export default App;
