import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function AdminButtons(props) {
  const { token } = props;
  const history = useNavigate();

  const editPost = () => {
    console.log('editPost funcionando');
    history.push('/admin/edit-post');
    // Implementar fetch
  }

  const deletePost = () => {
    console.log(' deletePost funcionando');
    history.push('/admin/delete-post');

    // Implementar fetch
  }

  return (
    <div className="admin-buttons">
    {
      token ? (
        <div>
          <button
            type="button"
            onClick={ editPost }
          >
            Editar Post
          </button>
          <button
            type="button"
            onClick={ deletePost }
          >
            Excluir Post
          </button>
        </div>
      ) : (
        <div></div>
      )
    }
  </div>
  )
}

AdminButtons.propTypes = {
    token: PropTypes.string,
};

export default AdminButtons;