import React from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './components/navbar/NavBar';
import AboutPage from './containers/about/AboutPage';
import HomePage from './containers/home/HomePage';
import TeamPage from './containers/team/TeamPage';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/team' element={<TeamPage />}/>
        <Route path='/about' element={<AboutPage />}/>
      </Routes>
    </>
  );
}

export default App;
