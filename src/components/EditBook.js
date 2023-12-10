import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';


const EditUser = () => {
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        getBookById();
    },[]);

    const updateBook = async (e) =>{
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:5000/books/${id}`,{
                author,
                title,
                genre
            });
            navigate("/");
        } catch (error){
            console.log(error);
        }
    }

    const getBookById = async() =>{
        const response = await axios.get(`http://localhost:5000/books/${id}`)
        setAuthor(response.data.author);
        setTitle(response.data.title);
        setGenre(response.data.genre);
    }

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={updateBook}>

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
                   <button type='submit' className='button is-success'>Update</button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default EditUser;