import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className=" text-blue-950 p-4">
      <ul className="flex space-x-6 justify-center text-lg">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'underline' : ''}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/demos" className={({ isActive }) => isActive ? 'underline' : ''}>
            Demos
          </NavLink>
        </li>
        <li>
          <NavLink to="/inquire" className={({ isActive }) => isActive ? 'underline' : ''}>
            Inquire
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms" className={({ isActive }) => isActive ? 'underline' : ''}>
            T&C
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}