import '../styles/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header className="site-header">
    <h1 className="site-title">Math Magicians</h1>
    <nav className="main-navigation">
      <ul className="menu">
        <li><NavLink to="/" className="menu-item" exact>Home</NavLink></li>
        {' | '}
        <li><NavLink to="/calculator" className="menu-item">Calculator</NavLink></li>
        {' | '}
        <li><NavLink to="/quote" className="menu-item">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
