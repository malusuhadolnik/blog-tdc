import PropTypes from 'prop-types';

function FullPostTemplate(props) {
  const {
    title,
    author,
    mainCategory,
    summary,
    text,
    mainImage,
  } = props;

  return (
    <div className='full-post-container'>
      <p className='category-tag'>{ mainCategory }</p>
      <img 
        src= { mainImage }
        alt={ title }
      />
      <h2>{ title }</h2>
      <h4>{ summary }</h4>
      <p className='author'>{ author }</p>
      <p className='text'>{ text }</p>
    </div>
  )
}

FullPostTemplate.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  mainCategory: PropTypes.string,
  summary: PropTypes.string,
  text: PropTypes.string,
  mainImage: PropTypes.string,
}

export default FullPostTemplate;