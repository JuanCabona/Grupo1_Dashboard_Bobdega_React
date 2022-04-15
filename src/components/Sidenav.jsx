import { Link } from 'react-router-dom';

import LogoDH from "../images/logo-DH.png";

function Sidenav (props) {
  return (
    <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
        <div className="sidebar-brand-icon">
          <img className="w-100" src={LogoDH} alt="Digital House"/>
        </div>
      </a>
      <hr className="sidebar-divider my-0" />


      <li className="nav-item active">
        <Link to="/" className="nav-link" >
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Home</span>
        </Link>
      </li>
            
    </ul>
  )
}

export default Sidenav;