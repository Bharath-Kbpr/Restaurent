import RecipeSearch from './Component/RecipeSearch'
import PizzaRoom from './Component/PizzaRoom'
import Checkout from './Component/Checkout'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

function App() {
  const [ingredients, setIngredients] = useState({
    basil: false,
    mashRoom:false,
    olive:false,
    pineApple:false,
    tomato:false
  });
  return (
    <div className="App">
    <Router>
      <Switch>
      <Route path="/" exact>
      <RecipeSearch  />
      </Route>
      <Route path="/pizza" exact>
      <PizzaRoom  ingredients={ingredients} setIngredients={setIngredients}/>
      </Route>
      <Route path="/chechout">
      <Checkout />
      </Route>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
