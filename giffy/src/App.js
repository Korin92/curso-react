import React, { Suspense } from 'react';
import ListOfGifs from './components/ListOfGifs';
import Header from './components/Header';
import { Link, Route, Switch } from "wouter";
import Login from './pages/Login';
import SearchResults from "../src/pages/SearchResults";
import Detail from "../src/pages/Detail";
import Register from './pages/Register';
import { UserContextProvider } from './context/UserContext';
import { GifsContextProvider } from './context/GifsContext';

import "./App.css";

const HomePage = React.lazy(() => import("./pages/Home"));

function App() {

  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <Link to='/'><img className="App-logo" alt='giffy logo' src='/logo.png' /></Link>
            <GifsContextProvider>
              <Route component={HomePage} path="/" />
              <Route component={SearchResults} path="/search/:keyword/:rating?" />
              <Route component={Detail} path="/gif/:id" />
              <Route component={Login} path='/login' />
              <Route component={Register} path='/register' />
              <Route component={() => <h1>404 ERROR :(</h1>} path='/404' />
              <Route path="/search/:keyword" component={ListOfGifs} />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}

export default App;
