import { Link } from 'react-router-dom';
const NavBar = () => (
  <nav className='m-5'>
    <ul className='w-1/4 menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box lg:mx-auto lg:flex'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>

      <li>
        <Link to='/articles'>Articles</Link>
      </li>
    </ul>
    <div className='divider'></div>
  </nav>
);
export default NavBar;
