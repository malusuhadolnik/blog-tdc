import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LoadFullPost from "../components/LoadFullPost";

function PostDetails() {
    return (
        <main>
          <Header />
          <Navbar />
          <div >
            <LoadFullPost />
          </div>
        </main>
      );
}

export default PostDetails;