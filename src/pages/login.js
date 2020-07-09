import { useContext } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import DefaultNavBar from '../components/DefaultNavBar';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import useForm from '../hooks/useForm';
import validate from '../helpers/FormValidation';
import { AuthContext } from '../contexts/AuthContext';
import { authActions } from '../actions/authActions';

const initialFormValues = { email: '', password: '' };

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const { values, handleChange, handleSubmit, errors } = useForm(
    initialFormValues,
    login,
    validate
  );
  const router = useRouter();

  async function login() {
    try {
      const loginResp = await authActions.login(values);
      dispatch(loginResp);
      if (loginResp.response.is_configured === false) {
        Router.push('/');
      } else {
        Router.push(router.pathname);
      }
    } catch (error) {
      dispatch({ type: 'USERS_LOGIN_FAILURE', error });
    }
  }

  return (
    <DefaultLayout>
      <DefaultNavBar></DefaultNavBar>
      <section className='login-section'>
        <div className='container'>
          {/* {errors.map(error => <div className='alert alert-danger'>{{error}}</div>)} */}

          <h1 className='large text-primary'>Sign In</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Sign into Your Account
          </p>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                className={`input ${errors.email && 'is-danger'}`}
                type='email'
                placeholder='Email Address'
                name='email'
                value={values.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className='help is-danger'>{errors.email}</p>}
            </div>
            <div className='form-group'>
              <input
                className={`input ${errors.password && 'is-danger'}`}
                type='password'
                placeholder='Password'
                name='password'
                value={values.password}
                onChange={handleChange}
                required
              />
              {errors.password && (
                <p className='help is-danger'>{errors.password}</p>
              )}
            </div>
            <input type='submit' className='btn btn-primary' value='Login' />
          </form>
          <p className='my-1'>
            Don't have an account?{' '}
            <Link href='/register'>
              <a>Sign Up</a>
            </Link>
          </p>
        </div>
      </section>
      <style jsx>{`
        section {
          background-image: url('/images/home.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .lead {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #ccc;
        }
        @media (min-width: 992px) {
          .login-section {
            min-height: 100vh;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
        }
      `}</style>
    </DefaultLayout>
  );
};

export default Login;
