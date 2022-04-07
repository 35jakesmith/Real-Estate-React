import { Route, Router } from 'react-router-dom';
import './App.css';
import Landing from './Componets/Landing';
import Main from './Componets/Main';
// import Links from './Componets/Links';

function App() {
  return (
    <div className="App">
      <Main />
      <Landing />
      {/* <Links /> */}
      
    </div>
  );
}

export default App;
