import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductItem from '../components/ProductItem'
import { products } from '../assets/assets'

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const categories = [
    'All',
    'Accessories',
    'Footwear',
    'Bags',
    'Electronics',
    'Fashion',
    'Lifestyle',
  ]

  const urlCategory = searchParams.get('category')
  const isSalePage = urlCategory?.toLowerCase() === 'sale'

  const selectedCategory =
    categories.find(
      (category) =>
        category.toLowerCase() === urlCategory?.toLowerCase()
    ) || 'All'

  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [saleOnly, setSaleOnly] = useState(false)

  const handleCategoryChange = (category) => {
    if (category === 'All') {
      setSearchParams({})
    } else {
      setSearchParams({ category })
    }
  }

  const filteredProducts = products
    .filter((product) => {
      // Vérifie si le produit est en solde via le badge, le discount ou l'ancien prix
      const isDiscounted =
        product.badge?.toUpperCase() === 'SALE' ||
        (product.discount != null && Number(product.discount) > 0) ||
        (product.oldPrice != null && Number(product.oldPrice) > Number(product.price))

      // Si on est sur la page Sale, on ne garde que les produits en solde.
      // Sinon, on filtre par catégorie sélectionnée (si ce n'est pas 'All').
      const matchesCategory = isSalePage
        ? isDiscounted
        : selectedCategory === 'All' ||
        product.category?.toLowerCase() === selectedCategory.toLowerCase()

      const search = searchTerm.trim().toLowerCase()

      const matchesSearch =
        !search ||
        product.name?.toLowerCase().includes(search) ||
        product.category?.toLowerCase().includes(search) ||
        product.description?.toLowerCase().includes(search) ||
        product.color?.toLowerCase().includes(search)

      const matchesSale = isSalePage || !saleOnly || isDiscounted

      return matchesCategory && matchesSearch && matchesSale
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return Number(a.price) - Number(b.price)

        case 'price-high':
          return Number(b.price) - Number(a.price)

        case 'name-asc':
          return a.name.localeCompare(b.name)

        case 'name-desc':
          return b.name.localeCompare(a.name)

        case 'newest':
          return Number(b.id) - Number(a.id)

        default:
          return 0
      }
    })

  const resetFilters = () => {
    setSearchParams({})
    setSearchTerm('')
    setSortBy('featured')
    setSaleOnly(false)
  }

  const hasActiveFilters =
    isSalePage ||
    selectedCategory !== 'All' ||
    searchTerm !== '' ||
    sortBy !== 'featured' ||
    saleOnly

  return (
    <section className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 py-12 md:py-20">

      <div className="flex flex-col md:flex-row gap-6 justify-between md:items-end pb-10 border-b border-gray-100">
        <div>
          <p className="text-zinc-400 text-[11px] tracking-[0.25rem] font-medium uppercase">
            {isSalePage ? 'special offers' : 'the full collection'}
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl prata-regular font-semibold tracking-tight text-gray-950">
            {isSalePage ? 'Sale Pieces' : 'Shop All Pieces'}
          </h1>
        </div>
        <div>
          <p className="max-w-sm text-sm leading-6 text-gray-500">
            {isSalePage
              ? 'Discover our selected pieces at special prices.'
              : 'Thoughtfully designed, premium everyday essentials made to elevate your routine.'}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between items-stretch mt-8 gap-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrolle-none">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 font-medium text-xs whitespace-nowrap transition-colors cursor-pointer ${selectedCategory === category && !isSalePage
                  ? 'bg-zinc-950 text-white'
                  : 'bg-zinc-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}

          <button
            type="button"
            onClick={() => {
              if (isSalePage) {
                handleCategoryChange('All')
                setSaleOnly(false)
              } else {
                handleCategoryChange('Sale')
                setSaleOnly(false)
              }
            }}
            className={`border px-4 py-2 font-medium text-xs whitespace-nowrap transition-colors cursor-pointer ${isSalePage || saleOnly
                ? 'bg-zinc-950 border-zinc-950 text-white'
                : 'bg-white border-gray-200 text-gray-600 hover:border-gray-400'
              }`}
          >
            Sale Only
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="flex-1 relative w-full sm:w-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            >
              <path d="m21 21-4.34-4.34" />
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search catalog..."
              aria-label="Search products"
              className="border border-gray-200 rounded-none pl-10 pr-4 py-2 w-full bg-white text-xs text-gray-700 outline-none focus:border-zinc-500 transition-colors placeholder:text-gray-400"
            />
          </div>

          <div className="relative w-full sm:w-52">
            <select
              value={sortBy}
              onChange={(event) => setSortBy(event.target.value)}
              aria-label="Sort products"
              className="appearance-none border border-gray-200 px-4 py-2 pr-10 w-full bg-white text-xs text-gray-600 outline-none focus:border-zinc-500 transition-colors cursor-pointer"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="newest">Newest Arrivals</option>
            </select>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5 text-xs text-gray-500">
        <span className="tracking-wide">
          Showing{' '}
          <span className="font-medium text-zinc-950">
            {filteredProducts.length}
          </span>{' '}
          {filteredProducts.length === 1 ? 'item' : 'items'}
        </span>
        <button
          type="button"
          onClick={resetFilters}
          disabled={!hasActiveFilters}
          className="text-gray-400 hover:text-zinc-950 underline underline-offset-4 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Reset filters
        </button>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-12">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <h2 className="text-xl prata-regular text-gray-950">
              No products found
            </h2>
            <p className="mt-3 text-sm text-gray-500">
              Try another search or change your filters.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 bg-zinc-950 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

    </section>
  )
}

export default Shop