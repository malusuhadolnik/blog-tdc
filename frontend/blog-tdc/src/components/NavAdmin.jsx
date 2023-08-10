import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import logo from '../images/tartaruga-logo.jpg';
import '../styles/NavAdmin.css';

function NavAdmin() {
  const { userName, setUserName, setToken } = useContext(AppContext); 

  const clearCredentials = () => {
    localStorage.clear();
    setUserName('');
    setToken('');
  };

  return (
    <div className="admin-panel-container">
      <img src={ logo } alt='Logo tdc'/>
      <h3>Painel do Administrador</h3>
      <h2>Bem-vinda(o), { userName }</h2>
      <div>
        <Link to="/admin/allpost"> 
          Ver todas as publicações
        </Link>
      </div>
      <label htmlFor="serachInput" className='serachInput'>
        Buscar publicação:
        <input
          name="serachInput"
          type="serachInput"
          // value={ searchInput }
          // onChange={ handleSearch }
          placeholder="keyword"
        />
      </label>
      {/* <div  className='link-to-create-panel'>
          <Link to="/admin">
            Criar novo post
          </Link>  
      </div> */}
      {/* <div  className='link-to-edit-panel'>
          <Link to="/admin/edit-post">
            Editar um post
          </Link>  
      </div>
      <div  className='link-to-delete-panel'>
          <Link to="/admin/delete-post">
            Deletar um post
          </Link>  
      </div> */}
      <div>
        <Link to="/" onClick={ clearCredentials }>
          Logout
        </Link>
      </div>

    </div>
  );
}

export default NavAdmin;