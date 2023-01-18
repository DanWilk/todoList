import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import NoteListItem from './components/NoteListItem'

function App() {
  return (
    <div className="App">
      <Header />
      <NoteListItem />
    </div>
  );
}

export default App;
