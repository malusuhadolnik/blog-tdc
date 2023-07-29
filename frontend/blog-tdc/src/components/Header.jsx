import { Link } from 'react-router-dom';
import banner from '../images/banner-header.jpg'
import './../styles/Header.css'

function Header() {
    return (
      <div className='header-home'>
        <div className='header-links'>
          <div>
            <Link
            to="/"
            >
              Página Inicial
           </Link>  
          </div>
          <div>
            <Link
            to="/login"
            >
              Área do Admin
            </Link>  
          </div>
        </div>
        <img
          className="banner"
          src={ banner }
          alt="banner blog do atelie teoria das cores"
        />
      </div>
    );
}

export default Header