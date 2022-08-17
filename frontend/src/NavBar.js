import { Link } from 'react-router-dom';
const NavBar = () => (
  <nav>
    <ul className='menu menu-vertical lg:menu-horizontal bg-base-100 rounded-box mb-5'>
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
  </nav>
);
export default NavBar;
