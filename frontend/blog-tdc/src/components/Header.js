import { Link } from 'react-router-dom';

function Header() {
    return (
      <div className='header-home'>
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
        {/* <img
          className="banner"
          src={ urlImage }
          alt="banner blog do atelie teoria das cores"
        /> */}
      </div>
    );
}

export default Header