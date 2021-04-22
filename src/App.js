import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/home';
import Product from './pages/product';
import Card from './pages/card';
import OneProdut from './components/OneProduct';
import Nav from './nav';
import store from './store/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className="">
      <BrowserRouter>
      <Nav/>
        <Switch>
          <Route path='/' exact component={Product} />
          <Route path='/product' exact component={Product} />
          <Route path='/card' exact component={Card} />
          <Route path='/product/:id' exact component={OneProdut} />
        </Switch>
      </BrowserRouter>
    </div>
    </Provider>
    
  );
}

export default App;
