import logo from './logo.svg';
import './App.css';
import TaskList from './components/lists/TaskList';
import Settings from './components/settings/Settings';

function App() {
  return (
    <div className="App">
      <TaskList />
      <Settings />
    </div>
  );
}

export default App;
