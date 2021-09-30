import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import Friends from './Component/Friends/Friends';
import About from './Component/About/About';
import NotFound from './Component/NotFound/NotFound';
import { BrowserRouter, Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
<Route path ="/home">
  <Home></Home>
</Route>

<Route path="/about">
  <About></About>

</Route>

<Route path="/friends">
<Friends></Friends>
</Route>


<Route exact path="/">
<Home></Home>
</Route>

<Route>
  <NotFound></NotFound>
</Route>

      </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
