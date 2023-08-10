import NavAdmin from "../components/NavAdmin";
import CreatePost from "../components/CreatePost";
import '../styles/Admin.css';

function Admin() {
  return (
    <div className="admin-page">
      <NavAdmin />
      <CreatePost />
    </div>
  );
}

export default Admin;