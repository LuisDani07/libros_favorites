
import {useAppContext} from './context/App_context';

function Favorites() {
  
  const  {favorites,addToFavorites,removeFromFavorites}=useAppContext();

  const favoriteChecker=(id)=>{
      const boolean=favorites.some((book)=>book.id===id);
      return boolean;
  }
  return (
    <div className='favorites'>
             {favorites.length>0 ?favorites.map((book)=>(
             <div key={book.id} className='book'>
                <div><h4>{book.title}</h4></div>
                <div><img src={book.image_url} alt="#"/></div>
                {favoriteChecker(book.id) ? (
                <div><button onClick={()=>removeFromFavorites(book.id)}>Remove from favorites</button></div>
                )
                :  (<div><button onClick={()=>addToFavorites(book)}>Add to favorites</button></div>
                )
              }
             </div>
         )):<h1>you do not have any favorite book</h1>}
    </div>
  )
}

export default Favorites