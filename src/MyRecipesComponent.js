
export default function MyRecipesComponent({label, image, calories, ingredients}) {
    
    return(<div>
        <div className='container pa'>
            <h2>{label}</h2>
        </div>
        <div className='container'>
            <img className="tasty" src={image} alt='dish' width='350px' />
        </div >
        <div className='container'>
            <p>{calories.toFixed()} calories</p>
        </div>
        <div key={ingredients} className='container'>
        <ul>
            {ingredients.map((ingredient, index) => (
                <li key={index}><img src='https://img.icons8.com/small/20/double-tick.png' alt='recipe' />{ingredient}</li>
            ))}
        </ul>
        </div>
    </div>
    );
 }

/*<p>{showMore ? ingredients : ingredients.substring(0, 150)}
<button onClick={() => setShowMore(!showMore)}>{showMore ? 'Show less' : 'Show more'}</button></p>*/