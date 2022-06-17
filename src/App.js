import logo from './logo.svg';
import './App.css';
import answers from './answers';
import EightBall from './eightBall';

function App() {
  return (
    <div className="App">
      <h1 className="App-h1">Magic Eight Ball</h1>

      <div className = "App-content">
        <EightBall/>
      </div>

    </div>
  );
}

export default App;
