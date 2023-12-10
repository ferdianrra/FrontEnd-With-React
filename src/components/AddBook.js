import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();

    const saveBook = async (e) =>{
        e.preventDefault();
        try{
            await axios.post('http://localhost:5000/books',{
                author,
                title,
                genre
            });
            navigate("/");
        } catch (error){
            console.log(error);
        }
    }
  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveBook}>

                <div className="field">
                    <label className='label'>Author</label>
                    <div className="control">
                        <input 
                        type="text" 
                        className='input' 
                        value={author}
                        onChange={(e)=> setAuthor(e.target.value)} 
                        placeholder='Author'/>
                    </div>
                </div>
                
                <div className="field">
                    <label className='label'>Title</label>
                    <div className="control">
                        <input type="text" className='input' value={title}
                        onChange={(e)=> setTitle(e.target.value)}  placeholder='Title'/>
                    </div>
                </div>

                <div className="field">
                    <label className='label'>Genre</label>
                    <div className="control">
                        <input type="text" className='input' value={genre}
                        onChange={(e)=> setGenre(e.target.value)} placeholder='Genre'/>
                    </div>
                </div>

                <div className="field">
                   <button type='submit' className='button is-success'>Save</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default AddBook