import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";
import EditBook from "./components/EditBook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="add" element={<AddBook/>}/>
        <Route path="edit/:id" element={<EditBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
