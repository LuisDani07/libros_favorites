import {useState, useEffect} from 'react'
import { API_URL } from '../API'
import axios from 'axios'
import {useAppContext} from './context/App_context';
import {useNavigate} from 'react-router-dom';

function BookList() {
    const [books, setBooks]=useState([]);

    const  {favorites,addToFavorites,removeFromFavorites}=useAppContext();

    const navigate=useNavigate();

   const favoriteChecker=(id)=>{
       const boolean=favorites.some((book)=>book.id===id);
       return boolean;
   }
     
    useEffect(()=>{
        axios.get(API_URL).then(res=>{
            console.log(res.data);
            setBooks(res.data)

        }).catch(err=>console.log(err))
    },[])
  return (
    <div className='book-list'>
         {books.map((book)=>(
             <div key={book.id} className='book'>
                <div><h4>{book.title}</h4></div>
                <div><img src={book.image_url} alt="#" onClick={()=>navigate(`/book/${book.id}`)}/></div>
                {favoriteChecker(book.id) ? (
                <div><button onClick={()=>removeFromFavorites(book.id)}>Remove from favorites</button></div>
                )
                :  (<div><button onClick={()=>addToFavorites(book)}>Add to favorites</button></div>
                )
              }
             </div>
         ))}
    </div>
  )
}

export default BookList