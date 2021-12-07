import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import { Link, Route } from "wouter";
import SearchResults from "../src/pages/SearchResults";
import Detail from "../src/pages/Detail";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'><img className="App-logo" alt='giffy logo' src='src\logo.png' /></Link>
        <Route component={HomePage} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
        <Route path="/search/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
