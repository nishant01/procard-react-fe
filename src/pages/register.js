import DefaultLayout from '../components/DefaultLayout';
import DefaultNavBar from '../components/DefaultNavBar';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import useForm from '../hooks/useForm';
import validate from '../helpers/FormValidation';
import { authActions } from '../actions/authActions';

const initialFormValues = {
  username: '',
  email: '',
  password: '',
  confirm_password: '',
};

const Register = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(
    initialFormValues,
    register,
    validate
  );
  const router = useRouter();

  async function register() {
    try {
      const registerResp = await authActions.register(values);
      Router.push('/login');
    } catch (error) {
      console.log('register fail');
      console.log(error);
    }
  }

  return (
    <DefaultLayout>
      <DefaultNavBar></DefaultNavBar>
      <section className='login-section'>
        <div className='container'>
          <h1 className='large text-primary'>Sign Up</h1>
          <p className='lead'>
            <i className='fas fa-user'></i> Create Your Account
          </p>
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                className={`input ${errors.username && 'is-danger'}`}
                type='text'
                placeholder='Username'
                name='username'
                value={values.username}
                onChange={handleChange}
                required
              />
              {errors.username && (
                <p className='help is-danger'>{errors.username}</p>
              )}
            </div>
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
              <small className='form-text'>
                This site uses Gravatar so if you want a profile image, use a
                Gravatar email
              </small>
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
                minLength='6'
                required
              />
              {errors.password && (
                <p className='help is-danger'>{errors.password}</p>
              )}
            </div>
            <div className='form-group'>
              <input
                className={`input ${errors.confirm_password && 'is-danger'}`}
                type='password'
                placeholder='Confirmed Password'
                name='confirm_password'
                value={values.confirm_password}
                onChange={handleChange}
                minLength='6'
                required
              />
              {errors.password && (
                <p className='help is-danger'>{errors.confirm_password}</p>
              )}
            </div>
            <input type='submit' className='btn btn-primary' value='Register' />
          </form>
          <p className='my-1'>
            Already have an account?{' '}
            <Link href='/login'>
              <a>Sign In</a>
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

export default Register;
