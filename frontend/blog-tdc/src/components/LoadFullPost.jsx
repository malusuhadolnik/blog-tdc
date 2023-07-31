import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
// import AppContext from '../context/AppContext';
import mockPosts from '../mocks/mockPosts';

function LoadFullPost() {
//   const { postDetails, setPostDetails } = useContext(AppContext);
  const [postDetails, setPostDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  // Teste com dados mockados!
  useEffect(() => {
    if (isLoading === true) {
      const targetIndex = id - 1;
      setPostDetails(mockPosts[targetIndex]);
      setIsLoading(false);
    }
  }, [])

  return (
    <div className="main-details-container">
      {
        !isLoading ? (
          <div className="details-container">
            <p className='category-tag'>Categoria: { postDetails.mainCategory }</p>
            <h2>{ postDetails.title }</h2>
            <img 
              src= { postDetails.mainImage }
              alt={ postDetails.title }
            />
            <p className='author'>Por { postDetails.author }</p>
            <h4>{ postDetails.summary }</h4>
            <p className='text'>{ postDetails.text }</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </div>
  );
}

export default LoadFullPost;