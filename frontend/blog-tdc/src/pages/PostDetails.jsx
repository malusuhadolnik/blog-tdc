import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoadFullPost from "../components/LoadFullPost";
import Footer from "../components/Footer";
import '../styles/PostDetails.css';

function PostDetails() {
    return (
        <main>
          <Header />
          <Navbar />
          <div className="full-post-container">
            <LoadFullPost />
          </div>
          <Footer />
        </main>
      );
}

export default PostDetails;