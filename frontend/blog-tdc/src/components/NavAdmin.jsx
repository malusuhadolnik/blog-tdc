import { Link } from 'react-router-dom';

function NavAdmin() {
  return (
    <div className="dmin-panel-container">
      <img 
        // src={ logo }
        alt='Logo tdc'
      />
      <h3>Painel do Administrador</h3>
      <div  className='link-to-create-panel'>
          <Link to="/admin">
            Criar novo post
          </Link>  
      </div>
      <div  className='link-to-edit-panel'>
          <Link to="/admin/edit-post">
            Editar um post
          </Link>  
      </div>
      <div  className='link-to-delete-panel'>
          <Link to="/admin/delete-post">
            Deletar um post
          </Link>  
      </div>
  
    </div>
  );
}

export default NavAdmin;