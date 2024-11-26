
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import SignUp from './login_signUp/SignUp';  
import Login from './login_signUp/Login';  

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;