import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { navLinks } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const { getCartCount } = useContext(ShopContext);
    const cartCount = getCartCount();

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-zinc-100">
            <div className="w-full h-16 px-4 sm:px-6 lg:px-10 grid grid-cols-2 md:grid-cols-3 items-center">

                {/* Navigation */}
                <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 text-sm">
                    {navLinks.map((link, index) => (
                        <NavLink
                            key={index}
                            to={link.path}
                            className="text-zinc-900 font-medium transition-colors hover:text-zinc-500"
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </nav>

                {/* Logo */}
                <div className="hidden md:flex justify-center">
                    <Link to="/">
                        <svg
                            width="170"
                            height="34"
                            viewBox="0 0 176 34"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <text
                                x="0"
                                y="24"
                                fill="currentColor"
                                fontSize="22"
                                fontWeight="700"
                            >
                                SHOPEASE
                            </text>
                        </svg>
                    </Link>
                </div>

                {/* Icons */}
                <div className="flex items-center justify-end gap-4 text-zinc-500">

                    {/* Search */}
                    <Link
                        to="/shop"
                        className="transition-colors hover:text-zinc-950"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="m21 21-4.34-4.34" />
                            <circle cx="11" cy="11" r="8" />
                        </svg>
                    </Link>

                    {/* Cart */}
                    <Link
                        to="/cart"
                        className="relative transition-colors hover:text-zinc-950"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M16 10a4 4 0 0 1-8 0" />
                            <path d="M3.103 6.034h17.794" />
                            <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" />
                        </svg>

                        {cartCount > 0 && (
                            <span className="absolute -top-1.5 -right-2 flex size-4 items-center justify-center rounded-full bg-gray-950 text-[10px] text-white font-medium">
                                {cartCount}
                            </span>
                        )}
                    </Link>

                    {/* Account */}
                    <Link
                        to="/login"
                        className="transition-colors hover:text-zinc-950"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </Link>

                </div>

            </div>
        </header>
    )
}

export default Navbar