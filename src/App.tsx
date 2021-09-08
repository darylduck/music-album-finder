import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import SideBar from './components/shared/layout/SideBar/SideBar';
import TopBar from './components/shared/layout/TopBar/TopBar';
import SearchStart from './pages/SearchStart/SearchStart';
import SearchResultsPage from './pages/SearchResults/SearchResultsPage';

import './App.scss';

function App() {
  return (
    <Router>
      <SideBar />
      <main>
          <TopBar />
          <Switch>
            <Route path="/search/results/:searchTerm">
              <SearchResultsPage />
            </Route>
            <Route path="/search/start" component={SearchStart} />
            <Route path="/">
              <Redirect to="/search/start" />
            </Route>
          </Switch>      
      </main>
    </Router>
  );
}

export default App;
