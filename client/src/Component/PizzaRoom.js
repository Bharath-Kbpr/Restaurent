import React from 'react'
import {BaseCheese,
    basil,
    mashRoom,
    olive,
    pineApple,
    pizzaBase,
    pizzaMan,
    tomato,
    pizzaLogo} from '../Assets/Images'
    
   
const PizzaRoom = ({ingredients, setIngredients}) => {
    const onChange = (event, name) => {
        console.log(localStorage);
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
      };
    return (
        <div>
        <nav>
        <h1>pizza room 🍕</h1>
        </nav>
        {JSON.stringify(ingredients)}
        <div className="pizza_box">
             <div className="ingrediants">
              
              <img src={BaseCheese} className="topIns"/>
              <img src={basil} className="topIns"/>
              <img src={mashRoom} className="topIns"/>
              <img src={olive} className="topIns"/>
              <img src={pineApple} className="topIns"/>
              <img src={tomato} className="topIns"/>
              <img src={pizzaBase}/>
             </div>
             <div className="check_box">
             <label className="container-checkbox">
          Pineapple
          <input
            type="checkbox"
            checked={ingredients["pineapple"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "pineapple")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Basil
          <input
            type="checkbox"
            checked={ingredients["basil"]}
            onChange={(event) => onChange(event.currentTarget.checked, "basil")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Olive
          <input
            type="checkbox"
            checked={ingredients["olive"]}
            onChange={(event) => onChange(event.currentTarget.checked, "olive")}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Tomato
          <input
            type="checkbox"
            checked={ingredients["tomato"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "tomato")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Mushroom
          <input
            type="checkbox"
            checked={ingredients["mushroom"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "mushroom")
            }
          />
          <span className="checkmark"></span>
        </label>
        <label className="container-checkbox">
          Cheese
          <input
            type="checkbox"
            checked={ingredients["cheese"]}
            onChange={(event) =>
              onChange(event.currentTarget.checked, "cheese")
            }
          />
          <span className="checkmark"></span>
          </label>
             </div>
        </div>
             
        </div>
           
        
    )
}

export default PizzaRoom
