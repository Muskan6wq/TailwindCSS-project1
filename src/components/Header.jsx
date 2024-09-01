import React from 'react'
import { FaBars } from 'react-icons/fa'
const Header = () => {
    return (
        <div className="flex justify-between " >
            <div className="flex items-center justify-center gap-2 lg:flex-1">
                <img src="./assets/Logo.svg" alt="logo" />
                <button className="bg-gradient-to-r from-orange-500  to-red-500 text-xs text-white px-2.5 py-1  rounded-2xl">Hoster is hiring!</button>
            </div>

            <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-4 ">
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>
            </ul>
            <div className="hidden lg:flex  justify-center items-center font-lato gap-6 lg:flex-1">
                <a href="#" className="text-gray-400">Sign In</a>
                <button className="rounded-md px-4 py-3 bg-blue-500 hover:bg-blue-300 text-white">Join Wishlist</button>
            </div>


            <div className="lg:hidden">
                <FaBars />
            </div>
        </div>





    )
}
export default Header