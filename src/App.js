import { BrowserRouter, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import Home from './pages/Home';
import Table from './pages/Table';
import Picture from './pages/Picture';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <AppHeader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="table" element={<Table />}></Route>
          <Route path="pics" element={<Picture />}></Route>
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
