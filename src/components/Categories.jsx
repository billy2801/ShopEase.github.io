
import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../assets/assets'

const Categories = () => {
  return (
    <section
      id="categories"
      className="max-w-7xl mx-auto px-6 lg:px-30 pt-24 pb-24 md:pb-24 mt-24"
    >
      <div className="flex items-end justify-between mb-9">
        <div>
          <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400">
            Browse
          </p>

          <h2 className="mt-2 text-2xl prata-regular md:text-3xl font-semibold tracking-tight text-gray-950">
            Shop by category
          </h2>
        </div>

        <Link
          to="/shop"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-gray-950 transition-colors"
        >
          View all products
          <span>→</span>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/shop?category=${ encodeURIComponent(category.name) } `}
            className="group block"
          >
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              <img
                src={category.image}
                alt={category.name}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>

            <div className="flex items-start justify-between gap-4 pt-4">
              <div>
                <h3 className="text-base font-medium text-gray-950">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-gray-500">
                  {category.products} Products
                </p>
              </div>

              <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400 pt-1">
                Shop
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Categories
