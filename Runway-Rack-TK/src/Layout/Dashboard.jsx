// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { useAuth } from '../components/Hooks/useAuth';

import { NavLink, Outlet } from 'react-router-dom';
import { GiTeacher } from 'react-icons/gi';
import { IoMdSchool } from 'react-icons/io';
import { BiSelectMultiple} from "react-icons/bi";


const Dashboard = () => {

    // will be used after creating backend

    // const { user } = useAuth();
    // const [currentUser, setCurrentUser] = useState({})

    // useEffect(() => {
    //     axios.get(`${import.meta.env.VITE_BASE_URL}/current-user?email=${user.email}`)
    //         .then(res => {
    //             if (res.data) {
    //                 setCurrentUser(res.data);
    //               }
                
    //         })
    // }, [user.email])

    return (
        <div className="drawer lg:drawer-open mt-8">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                <Outlet />
                <label htmlFor="my-drawer-2" className="button drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side rounded-sm">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
              
                {
                    currentUser.role === 'admin' && (
                        <ul className="menu p-4 w-80 h-full bg-blue-500 text-white">
                            {/* Sidebar content here */}
                            <li><NavLink className='font-bold text-base flex items-center' to='/dashboard/manage-flights'>Manage Flights</NavLink></li>
                            <li><NavLink className='font-bold text-base flex items-center' to='/dashboard/manage-users'> Manage Users</NavLink></li>
                            <div className='w-full px-3 border my-10'></div>
                            <li><NavLink className='font-bold text-base flex items-center' to='/'>Home</NavLink></li>
                            <li><NavLink className='font-bold text-base flex items-center' to='/flights'><GiTeacher className='mr-3' />All-Flights</NavLink></li>
                        </ul>
                    )
                }
                {
                    currentUser.role === 'customer' && (
                        <ul className="menu p-4 w-80 h-full bg-blue-500 text-white">
                            {/* Sidebar content here */}
                            <li><NavLink className='font-bold text-base flex items-center' to='/dashboard/my-selected-flights'><BiSelectMultiple className='mr-3' />My Cart</NavLink></li>
                            <li><NavLink className='font-bold text-base flex items-center' to='/dashboard/my-flights'>My Flights</NavLink></li>
                            <li><NavLink className='font-bold text-base flex items-center' to='/dashboard/payment-history'>Payment History</NavLink></li>
                            <div className='w-full px-3 border my-10'></div>
                            <li><NavLink className='font-bold text-base flex items-center' to='/'><FaHome className='w-5 h-5 mr-3' />Home</NavLink></li>
                            <li><NavLink className='font-bold text-base flex items-center' to='/flights'><IoMdSchool className='w-5 h-5 mr-2' />All-Flights</NavLink></li>
                        </ul>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard;