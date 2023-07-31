import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext'; // a ser criado
// import { requestAllData } from '../services/requests'; // a ser criado
import Card from './Card';
import mockPosts from '../mocks/mockPosts';

function LoadPosts() {
  const { dbPosts, setdbPosts } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);

// Para usar quando o back-end estiver pronto
//   const postsList = async () => {
//     try {
//       const data = await requestAllData('/posts'); // endpoint para o fetch dos posts no db, a ser criado
//       setdbPosts(data);
//       setIsLoading(false);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

// Para o teste com os post mockados:
  const postsList = () => {
    setdbPosts(mockPosts)
    setIsLoading(false);
  }

  useEffect(() => {
    if (isLoading === true) postsList();
  }, []);

  return (
    <div className="container-products">
      <h2>Últimos posts</h2>
      {
        !isLoading ? (
          <div className="posts-container">
            {dbPosts.length > 0 && dbPosts.map((post) => (<Card
              key={ post.id }
              title={ post.title }
              mainCategory={ post.category }
              summary={ post.summary }
              mainImage={ post.mainImage }
              id={ post.id }
            />))}
          </div>
        ) : (
          <h1>Loading...</h1>
        )
      }
    </div>

  );
}

export default LoadPosts;