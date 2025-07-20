import React from 'react'
import useAuthUser from '../hooks/useAuthUser'
import { Link, useLocation } from 'react-router';
import { BellIcon, HomeIcon, ShipWheelIcon, UserIcon } from 'lucide-react';

function Sidebar() {

    const { authUser } = useAuthUser();
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <aside className='w-64 bg-base-200 border-r border-base-300 hidden lg:flex flex-col h-screen sticky top-0'>
            <div className='p-5 border-b border-base-300'>
                <Link to="/" className='flex items-center gap-2.5'>
                    {/* <ShipWheelIcon className='size-9 text-primary' /> */}
                    <svg className='size-9' viewBox="0 0 100 147" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="50" cy="94" rx="50" ry="53" className='fill-primary' />
                        <ellipse cx="25.7992" cy="91.4002" rx="13.5" ry="21.5" transform="rotate(-9.30643 25.7992 91.4002)" className='fill-base-300' />
                        <ellipse cx="72.0246" cy="91.9912" rx="13.5" ry="21.5" transform="rotate(13.0375 72.0246 91.9912)" className='fill-base-300' />
                        <circle cx="15.5" cy="15.5" r="15.5" className='fill-primary' />
                        <circle cx="84.5" cy="15.5" r="15.5" className='fill-primary' />
                        <rect x="8" y="15.6983" width="12" height="39" transform="rotate(-23.0495 8 15.6983)" className='fill-primary' />
                        <rect x="77.8413" y="20" width="12" height="39" transform="rotate(32.3027 77.8413 20)" className='fill-primary' />
                    </svg>

                    <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>Toksy</span>
                </Link>
            </div>

            <nav className='flex-1 p-4 space-y-1'>
                <Link to="/" className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/" ? "btn-active" : ""}`}>
                    <HomeIcon className='size-5 text-base-content opacity-70' />
                    <span>Home</span>
                </Link>

                <Link to="/friends" className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/friends" ? "btn-active" : ""}`}>
                    <UserIcon className='size-5 text-base-content opacity-70' />
                    <span>Friends</span>
                </Link>

                <Link to="/notifications" className={`btn btn-ghost justify-start w-full gap-3 px-3 normal-case ${currentPath === "/notifications" ? "btn-active" : ""}`}>
                    <BellIcon className='size-5 text-base-content opacity-70' />
                    <span>Notifications</span>
                </Link>
            </nav>

            {/* USER PROFILE SECTION */}
            <div className='p-4 border-t border-base-300 mt-auto'>
                <div className='flex items-center gap-3'>
                    <div className='avatar'>
                        <div className='w-10 rounded-full'>
                            <img src={authUser?.profilePic} alt='User Avatar' />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <p className='font-semibold text-sm'>{authUser?.fullName}</p>
                        <p className='text-xs text-success flex items-center gap-1'>
                            <span className='size-2 rounded-full bg-success inline-block' />
                            Online
                        </p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar