import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Link} from "react-router-dom";

export const BookList = () => {
    const [books, setBook] = useState([]);

    useEffect(()=>{
        getBooks();
    }, []);

    //Method untuk fetch data
    const getBooks = async() => {
        const response = await axios.get('http://localhost:5000/books');
        setBook(response.data);
    }

    const deleteBook = async (id)=>{
        try{
            await axios.delete(`http://localhost:5000/books/${id}`)
            getBooks();
        } catch (error){
            console.log(error);
        }
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <Link to={`add`} className="button is-success">Add Book</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>No</th>
                    <th>Author</th>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book,index)=>(
                <tr key={book.id}>
                <td>{index+1}</td>
                <td>{book.author}</td>
                <td>{book.title}</td>
                <td>{book.genre}</td>
                <td>
                    <Link to={`edit/${book.id}`} className='button is small is-info'>Edit</Link>
                    <button onClick={()=> deleteBook(book.id)} className='button is small is-danger'>Delete</button>
                </td>
            </tr>
                ))}
            </tbody>
        </table>
        </div>
    </div>
  );
};

export default BookList