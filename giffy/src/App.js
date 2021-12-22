import React, { Suspense } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";
import SearchResults from "../src/pages/SearchResults";
import Detail from "../src/pages/Detail";
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

import "./App.css";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {

  return (
    <StaticContext.Provider value={
      {
        name: 'Carmen',
        suscribeteAlCanal: true
      }
    }>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to='/'><img className="App-logo" alt='giffy logo' src='/logo.png' /></Link>
            <GifsContextProvider>
              <Route component={HomePage} path="/" />
              <Route component={SearchResults} path="/search/:keyword/:rating?" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={() => <h1>404 ERROR :(</h1>} path='/404'/>
              <Route path="/search/:keyword" component={ListOfGifs} />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
