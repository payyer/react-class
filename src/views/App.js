import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import ListToDo from './ToDoList/ListToDo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListToDo />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
