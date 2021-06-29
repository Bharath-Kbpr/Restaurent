import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import axios from "axios";
import RecipeList from './RecipeList'
import TextAnimation from './TextAnimation'

const APP_ID= "b44a0021";
const APP_KEY = "67e00f04d227e677b26acaf0c9625fbd";

const RecipeSearch = () => {
  
  const [timeOutId, setTimeOutId] = useState();
  const [recipeList, setRecipeList] = useState([])

   const fetchData = async (searchString) => {
     const response = await axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`
     )
     setRecipeList(response.data.hits);
   }


  const onType = (e) => {
    clearTimeout(timeOutId);
    const timeout = setTimeout(() => fetchData(e.target.value), 500);
    setTimeOutId(timeout);
    // setTimeOutId({...timeOutId, [e.target.name]:e.target.value});
    // console.log(setTimeOutId)
  }
    return (
      <div>
        <div className="nav-bar">
           <div className="logo">
           <img src="https://webtoolfeed.files.wordpress.com/2012/06/foodmobile1.gif" alt="" />
           <span>Recipe <span style={{color:"yellow",fontStyle:"italic"}}>Finder</span></span>
           
           </div>
           
           <div className="search_box">
           <SearchIcon style={{color:"#000",background:"#fff",display:"flex",justifyContent:"center",alignItems:"center",marginRight:"-1px",padding:"6px",borderRadius:"20px 0px 0px 20px"}}/>
           <input type="text" placeholder="Recipe search..." name="search" onChange={onType}/>
           </div>
          
        </div>
        <div className="recipe_display">
        {recipeList.length ? recipeList.map((recipeobj) => <RecipeList recipeobj={recipeobj} />): <TextAnimation />}
        
        </div>
       
      </div>
    )
}

export default RecipeSearch
