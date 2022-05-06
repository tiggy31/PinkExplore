
import './App.scss';
import Home from './components/Home/Home'
import {Switch, Route} from 'react-router-dom'
import Notfound from './components/Notfound/Notfound'
import Shop from './components/pages/shop/shop'
import SingleProduct from './components/singleproduct/singleproduct'
import CartContextProvider from './context/cartcontext';
import CartPage from './components/cartpage/cartpage'
import Checkout from './components/checkout/checkout'
import Success from './components/stripe-checkout/success'
import Cancel from './components/stripe-checkout/canceled'
import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/shop' component={Shop}/>
      <Route path= '/product/:id' component={SingleProduct}/>
      <Route path='/cart' component={CartPage}/>
      <Route path='/checkout' component={Checkout}/>
      <Route path='/success' component={Success}/>
      <Route path='/canceled' component={Cancel}/>
      <Route path="/sign-up" component={Signup}/>
      <Route path="/sign-in" component={Signin}/>
      <Route path='*' component={Notfound}/>
      </Switch>
<CartContextProvider />

    </div>
  );
}

export default App;
