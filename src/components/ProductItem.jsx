
import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({ product }) => {
  return (
      <Link to={`/product/${product.id}`} className="group block min-w-0">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.images?.[0]}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <span className="pointer-events-none absolute top-3 left-3 flex flex-col gap-2">
          {product.badge === 'NEW SEASON' && (
            <span className="w-fit whitespace-nowrap bg-white px-3 py-1.5 text-[9px] font-medium tracking-[0.15em] uppercase text-gray-900">
              NEW
            </span>
          )}

          {product.discount != null && Number(product.discount) > 0 && (
            <span className="w-fit whitespace-nowrap bg-white text-black px-3 py-1.5 text-[9px] font-medium tracking-[0.15em] uppercase">
              -{product.discount}%
            </span>
          )}
        </span>

        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={(event) => {
            event.preventDefault()
            event.stopPropagation()
          }}
          className="absolute top-4 right-4 z-10 flex size-9 items-center justify-center bg-white transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 cursor-pointer shadow-xs text-gray-500 hover:text-gray-950"
        >
          <svg
            className="size-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            />
          </svg>
        </button>
      </div>

      <span className="inline-block mt-4 text-[10px] tracking-[0.15em] uppercase text-gray-400">
        {product.category}
      </span>

      <div className="flex items-start justify-between gap-3 pt-2 min-w-0">
        <div className="min-w-0">
          <h3 className="text-sm font-medium text-gray-950 truncate">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2 shrink-0 whitespace-nowrap">
          <span className="text-xs text-gray-950">
            ${Number(product.price).toFixed(2)}
          </span>

          {product.oldPrice != null && (
            <span className="text-[10px] text-gray-400 line-through">
              ${Number(product.oldPrice).toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}

export default ProductItem
