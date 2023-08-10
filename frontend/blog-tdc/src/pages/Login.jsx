import { useEffect, useState, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import { requestLogin, setToken } from '../services/requests'; // para quando backend estiver pronto
import AppContext from '../context/AppContext';
import '../styles/Login.css';

function Login() {
  const { email, setEmail, } = useContext(AppContext); // incluir depois: setUserName, token, setToken 
  const [password, setPassword] = useState('');
  const [loginValidation, setloginValidation] = useState(false);
  const [failedTryLogin, setFailedTryLogin] = useState(false);
//   const history = useHistory();
  
  const handleEmailChange = ({ target }) => {
    setEmail(target.value);
    console.log(email);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  useEffect(() => {
    const regex = /\S+@\S+\.\S+/;
    const isEmailValid = regex.test(email);
    const minLength = 6;

    if (isEmailValid && password.length >= minLength) {
      setloginValidation(true);
    } else {
      setloginValidation(false);
    }

    setFailedTryLogin(false);
  }, [email, password]);


// FUNÇÃO QUE REALIZA O FETCH DO USUÁRIO PARA O DB
//   const login = async (event) => {
//     event.preventDefault();

//     try {
//       const data = await requestLogin('/login', { email, password }); 
//       const token = data.key;
//       setToken(token);
//       localStorage.setItem('token', token);

//       if (token) {
//         const { userName } = data;
//         setUserName(userName);

//         return history.push('/admin');
//       }
//     } catch (error) {
//       setFailedTryLogin(true);
//       console.log(error);
//     }
//   };

return (
    <div className='login-form'>
      <form>
        <label htmlFor="email-input">
          Login
          <input
            name="email"
            type="email"
            value={ email }
            onChange={ handleEmailChange }
            placeholder="email@gmail.com"
          />
        </label>
        <label htmlFor="password-input">
          Senha
          <input
            name="password"
            type="password"
            data-testid="common_login__input-password"
            value={ password }
            onChange={ handlePasswordChange }
            placeholder="******"
          />
        </label>
        <button
          type="button"
          disabled={ !loginValidation }
        //   onClick={ (event) => login(event) }
        >
          LOGIN
        </button>
        {
          (failedTryLogin)
            ? (
              <p data-testid="common_login__element-invalid-email">
                O endereço de e-mail ou a senha são inválidos.
              </p>
            )
            : null
        }
      </form>
    </div>
  );
}

export default Login;