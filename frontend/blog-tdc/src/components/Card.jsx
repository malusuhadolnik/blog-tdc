import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Card(props) {
  const {
    title,
    mainCategory,
    summary,
    mainImage,
    id,
  } = props;

  return (
    <div className='post-card'>
      <img 
        src= { mainImage }
        alt={ title }
      />
      <h3>{ title }</h3>
      <h4>{ mainCategory }</h4>
      <p>{ summary }</p>
      <div>
            <Link
            to={ `/posts/${id}` }
            >
              Leia mais
           </Link>  
          </div>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  mainCategory: PropTypes.string,
  summary: PropTypes.string,
  mainImage: PropTypes.string,
  id: PropTypes.number, 
}

export default Card;
