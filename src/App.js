import React, { Suspense } from 'react'
import './App.css';
import { Route, Link } from 'wouter'
import Home from './pages/Home/index'
import SearchResults from './pages/SearchResults/index'
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';


const HomePage = React.lazy(() => import('./pages/Home/index'))

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <Link to='/'>
          <h1>GIFFY</h1>
        </Link>
        <Suspense fallback={null}>
          <section className="App-body">
            <GifsContextProvider>
              <Route component={HomePage} path='/'></Route>
              <Route component={SearchResults} path='/search/:keyword'></Route>
              <Route component={Detail} path='/gif/:id'></Route>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );

}

export default App;
