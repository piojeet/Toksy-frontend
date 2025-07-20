import React from 'react'
import useAuthUser from '../hooks/useAuthUser';
import { Link, useLocation } from 'react-router';
import { BellIcon, LogOutIcon, ShipWheelIcon } from 'lucide-react';
import useLogout from '../hooks/useLogout';
import ThemeSelector from './ThemeSelector.jsx';

function Navbar() {

    const { authUser } = useAuthUser();
    const location = useLocation();
    const isChatPage = location.pathname?.startsWith("/chat");

    //   const queryClient = useQueryClient();
    //   const { mutate: logoutMutation } = useMutation({
    //     mutationFn: logout,
    //     onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
    //   });

    const { logoutMutation } = useLogout();

    return (
        <nav className='bg-base-200 border-b border-base-300 sticky top-0 z-30 h-16 flex items-center'>
            <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-end w-full'>
                    {/* LOGO - ONLY IN THE CHAT PAGE */}
                    {isChatPage && (
                        <div className='pl-5'>
                            <Link to="/" className='flex items-center gap-2.5'>
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
                    )}
                    {!isChatPage && (
                        <div className='pl-5 lg:hidden'>
                            <Link to="/" className='flex items-center gap-2.5'>
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
                    )}

                    <div className='flex items-center gap-3 sm:gap-4 ml-auto'>
                        <Link to="/notifications">
                            <button className='btn btn-ghost btn-circle'><BellIcon className='size-6 text-base-content opacity-70' /></button>
                        </Link>
                    </div>

                    <ThemeSelector />

                    <div className='avatar'>
                        <div className='size-9 rounded-full'>
                            <img src={authUser?.profilePic} alt="User Avatar" rel='noreferrer' />
                        </div>
                    </div>

                    {/* Logout button */}
                    <button className='btn btn-ghost btn-circle' onClick={logoutMutation}>
                        <LogOutIcon className='size-6 text-base-content opacity-70' />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar