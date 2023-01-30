import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index';
import NoteListItem from './components/NoteListItem';
import NoteEditor from './components/NoteEditor';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NoteListItem />
        <NoteEditor />
      </main>
    </div>
  );
}

export default App;
