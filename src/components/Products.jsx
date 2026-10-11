import React from 'react'
import { Link } from 'react-router-dom'
import { products } from '../assets/assets'

const Products = () => {
    return (
        <section id="products" className="bg-white">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 md:py-32">

                <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
                    <div>
                        <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-400 mb-3">
                            Curated for you
                        </p>

                        <h2 className="text-3xl md:text-4xl font-bricolage font-medium tracking-tight text-gray-950">
                            Featured pieces.
                        </h2>
                    </div>

                    <Link
                        to="/shop"
                        className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-gray-950 hover:text-gray-500 transition-colors"
                    >
                        View all products
                        <span className="transition-transform duration-300 hover:translate-x-1">
                            →
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
                    {products.slice(0, 4).map((product) => (
                        <article key={product.id} className="group">

                            <div className="relative aspect-square overflow-hidden bg-gray-100">

                                <Link
                                    to={`/product/${product.id}`}
                                    className="block relative w-full h-full"
                                    aria-label={`View details for ${product.name}`}
                                >
                                    <img
                                        src={product.images[0]}
                                        alt={product.name}
                                        loading="lazy"
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5"></div>
                                </Link>

                                {product.discount ? (
                                    <span className="pointer-events-none absolute top-4 left-4 z-10 text-[10px] font-medium tracking-[0.15em] uppercase text-gray-900 bg-white px-3 py-1.5 shadow-xs">
                                        -{product.discount}%
                                    </span>
                                ) : product.badge ? (
                                    <span className="pointer-events-none absolute top-4 left-4 z-10 text-[10px] font-medium tracking-[0.15em] uppercase text-gray-900 bg-white px-3 py-1.5 shadow-xs">
                                        {product.badge === 'NEW SEASON' ? 'New' : product.badge}
                                    </span>
                                ) : null}

                                <button
                                    type="button"
                                    aria-label="Add to wishlist"
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
                                            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                                        />
                                    </svg>
                                </button>

                            </div>

                            <div className="pt-4">
                                <p className="text-[10px] font-medium tracking-[0.18em] uppercase text-gray-400">
                                    {product.category}
                                </p>

                                <div className="flex items-start justify-between gap-3 mt-1.5">
                                    <h3 className="text-sm font-medium text-gray-950">
                                        <Link to={`/product/${product.id}`}>
                                            {product.name}
                                        </Link>
                                    </h3>

                                    <div className="flex items-center gap-2 shrink-0">
                                        {product.oldPrice && (
                                            <span className="text-xs text-gray-400 line-through">
                                                ${product.oldPrice.toFixed(2)}
                                            </span>
                                        )}

                                        <span className="text-sm font-medium text-gray-950">
                                            ${product.price.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </article>
                    ))}
                </div>

                <div className="mt-10 sm:hidden">
                    <Link
                        to="/shop"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-950"
                    >
                        View all products
                        <span>→</span>
                    </Link>
                </div>

            </div>
        </section>
    )
}

export default Products