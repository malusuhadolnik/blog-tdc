import 'react-quill/dist/quill.snow.css';
import { useState, useEffect} from "react";
import TextEditor from "./TextEditor";
import '../styles/CreatePost.css';

function CreatePost() {
    const [content,setContent] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [selected, setSelected] = useState("organization");
    const [summary,setSummary] = useState('');
    const [file, setFile] = useState('');
    const [completeInfo, setCompleteInfo] = useState(false);

  const categoryOptions = ["Organização", "Criatividade", "Papelaria"];

  const submitPost = () => {
    console.log('funcionando');

    // Implementar fetch ao backend para fazer o POST
  }

  useEffect(() => {
    if (content && title && author && summary && file) {
      setCompleteInfo(true);
    } else {
      setCompleteInfo(false);
    }
}, [content,title,author,summary,file]);

  return (
    <form className='create-post-form'>
      <h2>Novo Post</h2>
      <label htmlFor="title-input" className='label-type1'>
        Título:
        <input
          name='title'
          type='title'
          value={ title }
          onChange={ event => setTitle(event.target.value) }
        />
      </label>
      <label htmlFor="author-input" className='label-type1'>
        Autoria:
        <input
          name='author'
          type='author'
          value={ author }
          onChange={ event => setAuthor(event.target.value) }
        />
      </label>
      <label htmlFor="category" className='label-type1'>
        Categoria:
        <select 
          id="category" 
          name="category" 
          className='container-category'
          value={ selected }
          onChange={ event => setSelected(event.target.value) }
        >
          {categoryOptions.map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
        </select>
      </label>
      <br />
      <label htmlFor="attach-file" className='label-type1'>
        Imagem de capa:
        <input
          type='file'
          onChange={event => setFile(event.target.files)}
        />
      </label>
      <label htmlFor="attach-summary"className='container-txt'>
        Resumo:
        <TextEditor value={ summary } onChange={ setSummary } />
      </label>
      <div className='container-txt'>
        <label htmlFor='container-text-editor'>
          Texto:
          <TextEditor value={ content } onChange={ setContent } />
        </label>
      </div>
      <button
        type="button"
        disabled={ !completeInfo }
        onClick={ submitPost }
      >Criar novo post</button>
    </form>
  );
}

export default CreatePost;