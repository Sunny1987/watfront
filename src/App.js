import logo from './logo.svg';
import './App.css';
import LoginForm from './form/Login'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>WAT</h1>
        <p>
          <LoginForm/>
        </p>
      </header>
    </div>
  );
}

export default App;
