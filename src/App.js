import logo from './logo.svg';
import './App.css';
import App1 from './App1';
import A2 from './A2';
import A3 from './A3';
import Books from './Books';
import Books2 from './Books2';
import Users from './Users';

function App() {
  return (
    <div className="App">
      <App1></App1>
      <A2></A2>
      <A3></A3>
      <Books></Books>
      <Books2></Books2>
      <Users name1="Jon" email="j@k.com" color="green"></Users>
      <Users name1="Mark" email="m@k.com" color="black"></Users>
      <Users name1="Mor" email="mor@k.com" color="pink"></Users>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
