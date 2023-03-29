import './App.css';
import Calculator from './components/Calculator';
import FetchQuotes from './components/FetchApi';

function App() {
  return (
    <div className="App">
      <Calculator />
      <FetchQuotes />
    </div>
  );
}

export default App;
