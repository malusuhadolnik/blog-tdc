import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/Card.css'

function Card(props) {
  const {
    title,
    mainCategory,
    summary,
    mainImage,
    id,
    createdAt,
  } = props;

  return (
    <div className='post-card'>
      <img 
        src= { mainImage }
        alt={ title }
      />
      <h3>{ title }</h3>
      <p className='category-tag'>{ mainCategory }</p>
      <p className='date-time'>Publicado em { createdAt }</p>
      <p>{ summary }</p>
      <div className='read-more-container'>
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
  createdAt: PropTypes.string,
}

export default Card;
