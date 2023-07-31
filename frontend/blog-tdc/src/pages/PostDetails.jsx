import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoadFullPost from "../components/LoadFullPost";
import '../styles/PostDetails.css';

function PostDetails() {
    return (
        <main>
          <Header />
          <Navbar />
          <div className="full-post-container">
            <LoadFullPost />
          </div>
        </main>
      );
}

export default PostDetails;