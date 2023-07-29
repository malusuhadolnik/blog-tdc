import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='link-one'>
          <Link to="/organizacao-pessoal">
            Organização Pessoal
          </Link>  
        </div>
        <div  className='link-two'>
          <Link to="/criatividade">
            Criatividade
          </Link>  
        </div>
        <div  className='link-three'>
          <Link to="/papelaria">
            Papelaria
          </Link>  
        </div>
    </nav>
  )
} 

export default Navbar