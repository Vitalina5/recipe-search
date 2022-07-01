
import { useEffect, useState } from 'react';
import MyRecipesComponent from './MyRecipesComponent';
import './App.css';
import video from './food.mp4';

<script src="https://developer.edamam.com/attribution/badge.js"></script>

function App() {
  
  const MY_ID = "0f312fb2";
  const MY_KEY = "af987d28a416d64ddfc13d2dc30dcd05";

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('coconut');

  useEffect(() => {
    async function getRecipes() {
      const response = await fetch(`https://api.edamam.com/search?q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      console.log(data.hits);
      setMyRecipes(data.hits)
   
  }
    getRecipes();
}, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }


  return (
    <div className="App">
      <div className='container'>
        <video autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input placeholder='Search...' className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={finalSearch}>
          <img src='https://img.icons8.com/material-rounded/34/clear-search.png' alt='icon' />
        </button>
      </div>
      < div className='cont'>
        {myRecipes.map((element, index) => (
          <MyRecipesComponent 
          key={index}
          label={element.recipe.label} 
          image={element.recipe.image} 
          calories={element.recipe.calories} 
          ingredients={element.recipe.ingredientLines}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
 
