import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Mail from './Mail';
import EmailList from './EmailList';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="app_body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />}/>
            <Route path="/" element={<EmailList />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
