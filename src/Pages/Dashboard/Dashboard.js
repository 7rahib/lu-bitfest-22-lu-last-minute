import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Bus</Link></li>
                    <li><Link to='/dashboard/addBus'>Add Bus</Link></li>
                    <li><Link to='/dashboard/transport'>Transport Demand</Link></li>
                    <li> <Link to='/dashboard/route'>Routes</Link></li>
                    <li> <Link to='/dashboard/addroute'>Add Route</Link></li>
                    <li> <Link to='/dashboard/stafflist'>Staffs</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;