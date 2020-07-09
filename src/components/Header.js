import Link from 'next/link';

const Header = () => {
  return (<header id='site_header' className='header mobile-menu-hide'>
    <div className='header-content'>
      <div className='site-title-block mobile-hidden'>
        <div className='site-title'>
          Nishant <span>Sinha</span>
        </div>
      </div>

      <div className='site-nav'>
        <ul id='nav' className='site-main-menu'>
          <li>
            <Link href='/'>
              <a className='pt-trigger'>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='pt-trigger'>Resume</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='pt-trigger'>Services</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='pt-trigger'>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='pt-trigger'>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/'>
              <a className='pt-trigger'>Contact</a>
            </Link>
          </li>
          <li>
            <Link href='/logout'>
              <a className='pt-trigger'>Signout</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </header>)
};
export default Header;
