import React from 'react'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const RecipeList = (props) => {
  const [show, setShow] = React.useState(false);
  const {recipeobj} = props;
  console.log(recipeobj);
    return (
      <React.Fragment>
      <Dialog open={show}>
      <DialogTitle id="alert-dialog-slide-title">Ingridients</DialogTitle>
      <DialogContent>
      <table>
      <thead>
      <th>Ingredients</th>
      <th>Weight</th>
      </thead>
      <tbody>
      {recipeobj.recipe.ingredients.map((ingredient) =>(
        <tr>
        <td>{ingredient.text}</td>
        <td>{ingredient.weight}</td>
        <img src={ingredient.image} alt="" />
        </tr>
      ))}
     
      </tbody>
      </table>
      </DialogContent>
      <DialogActions>
      <h5 className="green" onClick={()=>window.open(recipeobj.recipe.url)}>See more</h5>
      <h5  className="red" onClick={()=> setShow("")}>Close</h5>
      </DialogActions>
      </Dialog>
        <div className="flex_cards">
           <div className="card_box">
              <div className="recipe_img">
              <img src={recipeobj.recipe.image} alt="" />
              </div>

              <div className="recipe_des">
              <h3>{recipeobj.recipe.label}</h3>
              <h5 className="select_ingrdient" onClick={()=> setShow(true)}>Ingridients</h5>
              <h5 className="select_recipe" onClick={()=>window.open(recipeobj.recipe.url)}>See Complete Recipe</h5>
              </div>
           </div>
        </div>
      </React.Fragment>
    )
}

export default RecipeList
