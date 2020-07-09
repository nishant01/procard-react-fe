import Link from 'next/link';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const DefaultNavBar = ({ props }) => {
  const { authState } = useContext(AuthContext);

  return !authState.isLoggedIn ? (
    <>
      <nav className='navbar bg-dark'>
        <h1>
          <a href='index.html'>
            <i className='fas fa-code'></i> DevConnector
          </a>
        </h1>
        <ul>
          <li>
            <Link href='/'>
              <a>Developers</a>
            </Link>
          </li>
          <li>
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </li>
          <li>
            <Link href='/register'>
              <a>Register</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  ) : (
    <>
      <nav className='navbar bg-dark'>
        <h1>
          <a href='index.html'>
            <i className='fas fa-code'></i> DevConnector
          </a>
        </h1>
        <ul>
          <li>
            <Link href='/setting'>
              <a>Setting</a>
            </Link>
          </li>
          <li>
            <Link href="/logout">
                <a>
                  Logout
                </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default DefaultNavBar;
