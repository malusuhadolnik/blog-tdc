import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import LoadPosts from "../components/LoadPosts";

function Home() {
    return (
      <main>
        <Header />
        <Navbar />
        <About />
        <LoadPosts />
      </main>
    );
}

export default Home;