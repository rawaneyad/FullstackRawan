// import logo from './logo.svg';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';
import Posts from './components/Posts';
import ProductDetails from './components/ProductDetails';
import Products from './components/Products';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavBar />
        <Switch>

        <Route path='/product/:id' component={ProductDetails}/>
        <Route path='/products' render={(props)=><Products {...props}/>}/>
        <Route path='/posts' component={Posts}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/notFound' component={NotFound}/>
        <Route path='/' component={Home} exact/>
        <Redirect to='/notFound'/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
