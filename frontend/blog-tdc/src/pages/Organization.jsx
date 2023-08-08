import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoadPosts from "../components/LoadPosts";
import Footer from "../components/Footer";
import './../styles/PostsByCategory.css'

function Organization() {
    return (
      <main>
        <Header />
        <Navbar />
        <div className='posts-by-category-container'>
          <h1>Organização Pessoal</h1>
          <LoadPosts />
        </div>
        <Footer />
      </main>
    );
}

export default Organization;