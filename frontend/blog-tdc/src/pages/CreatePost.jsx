import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import TextEditor from "../components/TextEditor";

function CreatePost() {
    const [content,setContent] = useState('');

//   const isInfoComplete = () => {

//   }

//   const submitPost = () => {

//   }

  return (
    <form>
      <input type='title' placeholder={'Title'}/>
      <input type='author' placeholder={'Author'}/>
      <label htmlFor="category">Categoria:</label>
      <select id="category" name="category">
        <option value="organization">Organização Pessoal</option>
        <option value="creativity">Criatividade</option>
        <option value="stationary">Papelaria</option>
      </select>
      <input type='image'/>
      <input type='summary' placeholder={'Summary'}/>
      <TextEditor value={ content } onChange={ setContent } />
      <button
        type="button"
        // disabled={ !isInfoComplete }
        // onClick={ submitPost }
      >Submeter novo post</button>
    </form>
  );
}

export default CreatePost;