import logo from './logo.svg';
import './App.css';
import TimesList from './components/TimesList';
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="App">
      <Toaster richColors />
        <h1>Lista de Times de Futebol</h1>
      <TimesList/>
    </div>
  );
}

export default App;
