import {useState, useEffect} from 'react'
import { API_URL } from '../API'
import axios from 'axios'
function BookList() {
    const [books, setBooks]=useState([]);
    useEffect(()=>{
        axios.get(API_URL).then(res=>{
            console.log(res.data);
            setBooks(res.data)
        }).catch(err=>console.log(err))
    },[])
  return (
    <div className='book-list'>BookList
        <h1>hi</h1>
        <h1>hi2</h1>
        <h1>hi3</h1>
    </div>
  )
}

export default BookList