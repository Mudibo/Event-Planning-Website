import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import About from './Components/aboutbody' ;
import SignUp from './Components/signup';
import Login from './Components/login';

function App() {
  return (
    <div>
      <Header />
      <About />
      <SignUp />
      <Login />
    </div>
  );
}

export default App;
