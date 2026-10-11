import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import {
  Truck,
  Undo2,
  ShieldCheck,
  Minus,
  Plus,
  ShoppingBag,
  Check,
} from 'lucide-react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/assets'

const Product = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const { currency = '$', addToCart } = useContext(ShopContext) || {}
  const productData = products.find(
    (item) => String(item.id) === String(productId)
  )
  const [image, setImage] = useState('')
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('Highlights')
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    if (productData) {
      setImage(productData.images?.[0] || '')
      setSelectedColor(
        productData.color || productData.colors?.[0]?.name || ''
      )
      setSelectedOption(
        productData.defaultOption || productData.options?.[0] || ''
      )
      setQuantity(1)
      setActiveTab('Highlights')
      setIsAdded(false)
    }
  }, [productData])

  if (!productData) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center gap-4 px-6">
        <h1 className="text-2xl prata-regular text-gray-950">
          Product not found
        </h1>
        <p className="text-sm text-gray-500">
          Aucun produit ne correspond à cet identifiant : {productId}
        </p>
        <button
          type="button"
          onClick={() => navigate('/shop')}
          className="px-5 py-2.5 bg-gray-950 text-white text-xs hover:bg-gray-800"
        >
          Back to shop
        </button>
      </div>
    )
  }

  const images = productData.images || []
  const options = productData.options || []
  const colors = productData.colors?.length
    ? productData.colors
    : productData.color
      ? [{ name: productData.color }]
      : []

  const getColorValue = (color) => {
    const name = typeof color === 'string' ? color : color.name
    const hex = typeof color === 'string' ? null : color.hex
    if (hex) return hex
    const colorMap = {
      'Chalk White': '#f4f4f5',
      'Obsidian Black': '#09090b',
      'Desert Sand': '#d6c7b2',
      'Matte Black': '#18181b',
      'Saddle Tan': '#b77945',
      'Space Gray': '#71717a',
      'Oatmeal Heather': '#c4b5a5',
      'Terracotta Clay': '#c27855',
      'Dark Brown': '#78350f',
      'Cloud Gray': '#d4d4d8',
      'Natural Beige': '#e7d9c5',
      'Midnight Black': '#09090b',
      'Indigo Blue': '#3730a3',
      'Warm White': '#f5f5f4',
      'Tortoiseshell': '#78350f',
      'Espresso Brown': '#451a03',
      'Olive Green': '#556b2f',
      Graphite: '#52525b',
      'Off White': '#fafaf9',
      'Sage Green': '#87977c',
      Silver: '#c0c0c0',
      'Sand Beige': '#d6c7b2',
      White: '#ffffff',
      Black: '#09090b',
      Brown: '#78350f',
      Beige: '#d6c7b2',
      Navy: '#1e3a8a',
    }
    return colorMap[name] || '#d4d4d8'
  }

  const addProductToCart = () => {
    if (typeof addToCart !== 'function') return
    for (let i = 0; i < quantity; i++) {
      addToCart(productData.id, selectedOption)
    }

    // Déclenchement de l'effet visuel "Added to bag"
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const handleBuyNow = () => {
    if (typeof addToCart !== 'function') return
    addProductToCart()
    navigate('/cart')
  }

  const formatPrice = (price) =>
    `${currency}${Number(price).toFixed(2)} `

  const tabs = ['Highlights', 'Specifications', 'Delivery']

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-30 py-10 md:py-16">
      <div className="mb-5 flex flex-wrap items-center gap-2 text-xs text-gray-500">
        <Link
          to="/shop"
          className="inline-flex items-center gap-1.5 transition-colors hover:text-gray-950"
        >
          <span>←</span>
          <span>Back to shop</span>
        </Link>
        <span className="text-gray-300">/</span>
        <Link
          to="/"
          className="transition-colors hover:text-gray-950"
        >
          Home
        </Link>
        <span className="text-gray-300">/</span>
        <Link
          to="/shop"
          className="transition-colors hover:text-gray-950"
        >
          Shop
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:overflow-x-hidden shrink-0">
            {images.map((img, index) => (
              <button
                key={`${img}-${index}`}
                type="button"
                onClick={() => setImage(img)}
                aria-label={`View product image ${index + 1}`}
                className={`relative size-18 md:size-20 shrink-0 overflow-hidden bg-gray-100 border transition-all ${image === img
                    ? 'border-gray-950 opacity-100'
                    : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
              >
                <img
                  src={img}
                  alt={`${productData.name} preview ${index + 1}`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          <div className="relative w-full min-w-0 h-[400px] md:h-[560px] overflow-hidden bg-gray-100">
            {image && (
              <img
                src={image}
                alt={productData.name}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-300"
              />
            )}
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col">
          <p className="text-zinc-400 text-[10px] tracking-[0.22em] font-medium uppercase">
            {productData.category}
          </p>
          <h1 className="mt-1 text-2xl sm:text-3xl xl:text-4xl leading-tight prata-regular text-gray-950">
            {productData.name}
          </h1>
          <div className="inline-flex gap-3 items-center mt-2 text-xs text-gray-500">
            <span className="text-orange-500 tracking-wider">
              {'★'.repeat(
                Math.max(0, Math.min(5, Math.round(productData.rating || 0)))
              )}
              {'☆'.repeat(
                5 - Math.max(0, Math.min(5, Math.round(productData.rating || 0)))
              )}
            </span>
            <span>{productData.reviews || 0} customer reviews</span>
          </div>

          <div className="mt-3 flex flex-wrap items-baseline gap-2.5">
            <span className="text-2xl font-semibold text-zinc-950">
              {formatPrice(productData.price)}
            </span>
            {productData.oldPrice != null && (
              <span className="text-sm text-gray-400 line-through">
                {formatPrice(productData.oldPrice)}
              </span>
            )}
            {productData.discount != null && (
              <span className="text-[10px] font-medium text-orange-600">
                {productData.discount}% OFF
              </span>
            )}
          </div>

          <p className="mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
            {productData.description}
          </p>

          <div className="mt-4 pt-4 border-t border-gray-100 space-y-4">
            {colors.length > 0 && (
              <div>
                <div className="flex justify-between items-center text-xs gap-2">
                  <span className="font-medium text-gray-900">Color</span>
                  <span className="text-gray-500">{selectedColor}</span>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  {colors.map((color, index) => {
                    const colorName =
                      typeof color === 'string' ? color : color.name
                    return (
                      <button
                        key={`${colorName}-${index}`}
                        type="button"
                        title={colorName}
                        aria-label={colorName}
                        onClick={() => setSelectedColor(colorName)}
                        className={`size-7 rounded-full border-2 p-0.5 transition-all ${selectedColor === colorName
                            ? 'border-gray-950 scale-110'
                            : 'border-transparent hover:scale-105'
                          }`}
                      >
                        <span
                          className="block size-full rounded-full border border-black/10"
                          style={{
                            backgroundColor: getColorValue(color),
                          }}
                        />
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {options.length > 0 && (
              <div>
                <div className="flex justify-between items-center text-xs gap-2">
                  <span className="font-medium text-gray-900">
                    Size / Option
                  </span>
                  <span className="text-gray-500">{selectedOption}</span>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {options.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setSelectedOption(option)}
                      className={`px-3 py-2 cursor-pointer text-[11px] font-medium border transition-colors ${selectedOption === option
                          ? 'border-gray-950 bg-gray-950 text-white'
                          : 'border-gray-200 text-gray-800 hover:border-gray-400 bg-white'
                        }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-2.5">
              <div className="flex items-center justify-between border border-gray-200 px-3 py-2 sm:w-28">
                <button
                  type="button"
                  aria-label="Decrease quantity"
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="p-1 text-gray-500 hover:text-gray-950 cursor-pointer"
                >
                  <Minus size={13} />
                </button>
                <span className="text-xs font-medium text-gray-950">
                  {quantity}
                </span>
                <button
                  type="button"
                  aria-label="Increase quantity"
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="p-1 text-gray-500 hover:text-gray-950 cursor-pointer"
                >
                  <Plus size={13} />
                </button>
              </div>

              {/* Bouton Add to Bag avec animation et changement de couleur (Bleu nuit : bg-indigo-950) */}
              <button
                type="button"
                onClick={addProductToCart}
                className={`flex-1 min-h-10 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-all duration-300 cursor-pointer ${isAdded
                    ? 'bg-indigo-950 text-white scale-[1.02]'
                    : 'bg-gray-950 text-white hover:bg-gray-800'
                  }`}
              >
                {isAdded ? <Check size={14} /> : <ShoppingBag size={14} />}
                {isAdded ? 'Added to bag ✓' : 'Add to Bag'}
              </button>
            </div>

            <button
              type="button"
              onClick={handleBuyNow}
              className="w-full min-h-10 border border-gray-300 bg-gray-50 text-gray-950 px-4 py-2.5 text-[10px] font-medium tracking-[0.12em] uppercase hover:bg-gray-100 cursor-pointer hover:border-gray-950 transition-colors"
            >
              Buy It Now
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 text-center">
            <div className="flex flex-col items-center gap-1 text-gray-600">
              <Truck size={16} className="text-gray-900" />
              <span className="text-[9px] sm:text-[10px]">Free Shipping $50+</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-600">
              <Undo2 size={16} className="text-gray-900" />
              <span className="text-[9px] sm:text-[10px]">30-Day Returns</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-gray-600">
              <ShieldCheck size={16} className="text-gray-900" />
              <span className="text-[9px] sm:text-[10px]">Authentic Guarantee</span>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-100">
            <div className="flex flex-wrap gap-x-5 border-b border-gray-100 text-[10px] sm:text-[11px] uppercase tracking-wider font-medium">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 transition-colors ${activeTab === tab
                      ? 'text-gray-950 border-b-2 border-gray-950 cursor-pointer'
                      : 'text-gray-400 hover:text-gray-700 cursor-pointer'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="pt-3 text-[11px] sm:text-xs text-gray-600 leading-relaxed">
              {activeTab === 'Highlights' && (
                <ul className="space-y-1 list-disc list-inside">
                  {productData.highlights?.length > 0 ? (
                    productData.highlights.slice(0, 4).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))
                  ) : (
                    <li>{productData.description}</li>
                  )}
                </ul>
              )}
              {activeTab === 'Specifications' && (
                <ul className="space-y-1">
                  <li>
                    <span className="font-medium text-gray-900">Category: </span>
                    {productData.category}
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Color: </span>
                    {selectedColor || 'Not specified'}
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Option: </span>
                    {selectedOption || 'Not specified'}
                  </li>
                  <li>
                    <span className="font-medium text-gray-900">Rating: </span>
                    {productData.rating || 0}/5
                  </li>
                </ul>
              )}
              {activeTab === 'Delivery' && (
                <ul className="space-y-1 list-disc list-inside">
                  <li>Free shipping on orders over $50.</li>
                  <li>30-day return policy.</li>
                  <li>Secure checkout and authentic products.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product