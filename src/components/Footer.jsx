
import React from 'react'
import { Link } from 'react-router-dom'
import {
  footerShopLinks,
  footerCompanyLinks,
  footerHelpLinks
} from '../assets/assets'

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-24 min-h-90">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-10">

          <div className="col-span-2">

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

            <p className="text-gray-500 text-sm tracking-relaxed mt-5 max-w-xs">
              Thoughtfully selected products for modern everyday living.
              Quality, simplicity and great design in one place.
            </p>

          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-zinc-950 mb-5 uppercase">
              Shop
            </h4>

            <ul className="space-y-3 text-sm text-gray-500 list-none">
              {footerShopLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-zinc-950 mb-5 uppercase">
              Company
            </h4>

            <ul className="space-y-3 text-sm text-gray-500 list-none">
              {footerCompanyLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold tracking-widest text-zinc-950 mb-5 uppercase">
              Help
            </h4>

            <ul className="space-y-3 text-sm text-gray-500 list-none">
              {footerHelpLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-black transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} ShopEase. All rights reserved.
          </p>

          <p>
            Designed for everyday life.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer

