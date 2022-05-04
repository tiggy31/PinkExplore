
import './App.scss';
import Home from './components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import Notfound from './components/Notfound/Notfound'
import Shop from './components/pages/shop/shop'
import SingleProduct from './components/singleproduct/singleproduct'
import CartContextProvider from './context/cartcontext';
import CartPage from './components/cartpage/cartpage'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shop' component={Shop}/>
      <Route path= '/product/:id' component={SingleProduct}/>
      <Route path='/cart' component={CartPage}/>
      <Route path='*' component={Notfound}/>
      </Switch>
<CartContextProvider />

    </div>
  );
}

export default App;
