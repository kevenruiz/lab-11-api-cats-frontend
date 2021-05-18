import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import CatsPage from '../cats/CatsPage';
import CatDetailPage from '../cat/CatDetailPage';
import CatAddPage from '../cat-edit/CatEditPage';
import CatEditPage from '../cat-edit/CatEditPage';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header/>
          <main>

            <Switch>
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps}/>
                )}
              />

              <Route path="/cats" exact={true}
                render={routerProps => (
                  <CatsPage CatsPage {...routerProps} />
                )}
              />
              <Route path="/cats/add" exact={true}
                render={routerProps => (
                  <CatAddPage {...routerProps} />
                )}
              />

              <Route path="/cats/:id"
                render={routerProps => (
                  <CatDetailPage {...routerProps} />
                )}
              />

              <Route path="/cats/:id/edit" exact={true}
                render={routerProps => (
                  <CatEditPage {...routerProps} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer/>
        </Router>
      </div>
    );
  }

}

export default App;
