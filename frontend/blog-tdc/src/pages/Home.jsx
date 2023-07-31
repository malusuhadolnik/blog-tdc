import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import LoadPosts from "../components/LoadPosts";
import '../styles/Home.css';

function Home() {
    return (
      <main>
        <Header />
        <Navbar />
        <div className="body">
          <About />
          <LoadPosts />
        </div>
      </main>
    );
}

export default Home;