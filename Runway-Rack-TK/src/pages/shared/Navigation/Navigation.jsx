// import { Avatar, Dropdown, Navbar } from "flowbite-react";
// import {FaShoppingCart} from 'react-icons/fa';
// import { Link } from "react-router-dom";
import logo from '../../../assets/logo.jpg'


const Navigation = () => {
    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <img className="w-24" src={logo} alt="" />
    <a className="btn btn-ghost normal-case text-2xl">Runway Rack</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mx-4">Register</a>
    <a className="btn">Login</a>
  </div>
</div>
    //     <div>
    //         <Navbar
    //   fluid
    //   rounded
    // >
    //   <Navbar.Brand href="https://flowbite-react.com">
    //     <img
    //       alt=""
    //       className="mr-3 h-9 sm:h-24 rounded-full"
    //       src={logo}
    //     />
    //     <span className="self-center whitespace-nowrap text-2xl text-orange-900 font-bold dark:text-white">
    //       Runway <br />Rack
    //     </span>
    //   </Navbar.Brand>
    //   <Navbar.Collapse>
    //     <Link to='/'>Home</Link>
    //     <Link to='/instructors'>Instructors</Link>
    //     <Link to='/classes'>Classes</Link>
    //     {/* {user && <Link to='/dashboard/mycourse'>Dashboard</Link>} */}
    //   </Navbar.Collapse>
    //   {/* { user? */}
    //   <div className="flex md:order-2">
    //     <Link to='/'><button className="btn gap-2"><FaShoppingCart></FaShoppingCart>
    //     {/* <div className="badge badge-secondary">+{cart?.length || 0 }</div> */}
    //     </button></Link>
    //     <Dropdown
    //       inline
    //     //   label={<Avatar alt="User settings" img={user.photoURL} rounded />}
    //     >
    //       <Dropdown.Header>
    //         <span className="block text-sm">
    //           {/* {user.displayName} */}
    //         </span>
    //         <span className="block truncate text-sm font-medium">
    //           {/* {user.email} */}
    //         </span>
    //       </Dropdown.Header>
    //       <Dropdown.Item>
    //         Dashboard
    //       </Dropdown.Item>
    //       <Dropdown.Item>
    //         Settings
    //       </Dropdown.Item>
    //       <Dropdown.Item>
    //         Earnings
    //       </Dropdown.Item>
    //       <Dropdown.Divider />
    //       <Dropdown.Item>
    //         {/* <Link onClick={handleLogOut}>Sign Out</Link> */}
    //       </Dropdown.Item>
    //     </Dropdown>
    //     <Navbar.Toggle />
    //   </div>
    //   {/* : */}
    //   <Link to='/login'><button className="btn px-16 bg-lime-700 text-white">Login</button></Link>
    //   {/* } */}
      
    // </Navbar>
    //     </div>

    );
};

export default Navigation;