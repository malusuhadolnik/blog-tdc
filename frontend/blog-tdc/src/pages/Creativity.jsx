import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoadPosts from "../components/LoadPosts";

function Creativity() {
  return (
    <main>
      <Header />
      <Navbar />
        <div className='posts-by-category-container'>
          <h1>Criatividade</h1>
          <LoadPosts />
        </div>
    </main>
  );
}

export default Creativity;