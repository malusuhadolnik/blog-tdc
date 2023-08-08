import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import LoadPosts from "../components/LoadPosts";
import Footer from "../components/Footer";
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
        <Footer />
      </main>
    );
}

export default Home;