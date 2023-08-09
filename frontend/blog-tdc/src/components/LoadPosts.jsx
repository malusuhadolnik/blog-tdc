import { useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import AppContext from '../context/AppContext';
// // import { requestAllData } from '../services/requests'; // a ser criado
import Card from './Card';
import mockPosts from '../mocks/mockPosts';
import '../styles/LoadPosts.css';

function LoadPosts() {
  const { dbPosts, setdbPosts } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

// Para usar quando o back-end estiver pronto
//   const postsList = async () => {
//     try {
  // IMPORTANTE: CRIAR LÒGICA PARA LIMITAR O NÙMERO DE POSTS RECUPERADOS LÀ NO BACKEND
  // Fazer chamada para o endpoint dependente do pathname
//       const data = await requestAllData('/posts'); // endpoint para o fetch dos posts no db, a ser criado
//       setdbPosts(data);
//       setIsLoading(false);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

  // useEffect(() => {
  //   if (isLoading === true) postsList();
  // }, []);
  
// Teste com dados mockados!
  useEffect(() => {
    let postData = mockPosts;
    switch (pathname) {
      case '/organizacao-pessoal':
        postData = [mockPosts[0]];
        break;
      case '/criatividade':
        postData = [mockPosts[1]];
        break;
      case '/papelaria':
        postData = [mockPosts[2]];
        break;
      default:
        postData = mockPosts;
    }
 
    if (isLoading === true) {
      setdbPosts(postData);
      setIsLoading(false);
    }
  }, [])


  return (
    <div className="main-container">
      <h1>Últimos posts</h1>
      {
        !isLoading ? (
          <div className="posts-container">
            {dbPosts.length > 0 && dbPosts.map((post) => (<Card
              key={ post.id }
              title={ post.title }
              mainCategory={ post.mainCategory }
              createdAt={ post.createdAt }
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