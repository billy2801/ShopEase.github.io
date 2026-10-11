import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    getCartAmount,
    setCartItems,
  } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  // Transformation de la structure d'objet cartItems en tableau plat pour le rendu
  useEffect(() => {
    if (!products || products.length === 0) return

    const tempData = []
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find(
            (item) => String(item.id) === String(itemId)
          )
          if (product) {
            tempData.push({
              id: product.id,
              name: product.name,
              category: product.category,
              price: product.price,
              image: product.images?.[0] || '',
              color: product.color || product.colors?.[0]?.name || 'Standard',
              size: size,
              quantity: cartItems[itemId][size],
            })
          }
        }
      }
    }
    setCartData(tempData)
  }, [cartItems, products])

  // Vider complètement le panier
  const clearCart = () => {
    setCartItems({})
  }

  // Calculs financiers
  const subtotal = getCartAmount()
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-10 py-10 md:py-16">
      <div className="min-h-screen flex flex-col bg-white">

        {/* En-tête du Panier */}
        <div className="flex flex-col sm:flex-row gap-10 justify-between sm:items-end pb-10 border-b border-gray-200">
          <div>
            <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
              Review your bag
            </p>
            <h1 className="mt-2 text-3xl md:text-4xl prata-regular font-semibold tracking-tight text-gray-950">
              Shopping Bag
            </h1>
          </div>

          <div className="flex gap-4 text-xs font-medium text-zinc-400 tracking-wider items-center">
            <span>
              {cartData.length} {cartData.length === 1 ? 'item' : 'items'}
            </span>
            {cartData.length > 0 && (
              <button
                type="button"
                onClick={clearCart}
                className="cursor-pointer hover:text-red-500 transition-colors uppercase"
              >
                Clear Bag
              </button>
            )}
          </div>
        </div>

        {/* Contenu principal : Liste des produits / Récapitulatif */}
        {cartData.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

            {/* Colonne Gauche : Liste des articles */}
            <div className="lg:col-span-8 divide-y divide-gray-100">
              {cartData.map((item, index) => (
                <article
                  key={`${item.id}-${item.size}-${index}`}
                  className="py-6 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
                >
                  <div className="flex items-start gap-5">
                    <Link
                      to={`/product/${item.id}`}
                      className="relative size-24 shrink-0 overflow-hidden bg-gray-100 rounded-none"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 h-full w-full object-cover hover:scale-105 transition-transform"
                      />
                    </Link>
                    <div>
                      <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-gray-400">
                        {item.category}
                      </p>
                      <h3 className="mt-1 text-base font-medium text-gray-950">
                        <Link to={`/product/${item.id}`} className="hover:underline">
                          {item.name}
                        </Link>
                      </h3>
                      <div className="mt-1.5 flex flex-wrap gap-2 text-xs text-gray-500">
                        <span>Color: {item.color}</span>
                        <span>· Size: {item.size}</span>
                      </div>
                      <p className="mt-3 text-sm font-semibold text-gray-950 sm:hidden">
                        {currency}
                        {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Boutons Quantité, Prix & Suppression */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto">

                    {/* Contrôle de quantité */}
                    <div className="flex items-center gap-3 border border-gray-200 px-2 py-1.5 bg-white">
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity - 1)
                        }
                        className="p-1 text-gray-400 hover:text-gray-950 transition-colors cursor-pointer"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-center text-xs font-medium text-gray-950 min-w-4">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() =>
                          updateQuantity(item.id, item.size, item.quantity + 1)
                        }
                        className="p-1 text-gray-400 hover:text-gray-950 transition-colors cursor-pointer"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    {/* Prix Total pour l'article courant */}
                    <p className="hidden sm:block text-sm font-semibold text-gray-950 w-20 text-center">
                      {currency}
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    {/* Supprimer cet article spécifique */}
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.size, 0)}
                      aria-label="Remove item"
                      className="p-1.5 text-gray-400 hover:text-red-600 transition-colors cursor-pointer"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </article>
              ))}

              <div className="pt-6">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-gray-500 hover:text-gray-950 transition-colors"
                >
                  <span>← Continue Shopping</span>
                </Link>
              </div>
            </div>

            {/* Colonne Droite : Order Summary */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 bg-gray-100 border border-gray-100 p-6 sm:p-8 rounded-2xl">
                <h2 className="text-lg font-semibold text-gray-950 pb-4 border-b border-gray-200 prata-regular">
                  Order Summary
                </h2>

                <dl className="mt-6 space-y-3.5 text-xs text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-950">
                      {currency}
                      {subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Shipping</span>
                    <span className="font-medium text-gray-950">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Tax (8%)</span>
                    <span className="font-medium text-gray-950">
                      {currency}
                      {tax.toFixed(2)}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-gray-200 flex justify-between text-sm font-semibold text-gray-950">
                    <span>Total</span>
                    <span>
                      {currency}
                      {total.toFixed(2)}
                    </span>
                  </div>
                </dl>

                <form
                  className="mt-6 pt-6 border-t border-gray-200"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <label
                    htmlFor="promo"
                    className="block text-[11px] font-medium uppercase tracking-wider text-gray-500 mb-2"
                  >
                    Discount Code
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="promo"
                      placeholder="e.g. WELCOME15"
                      className="w-full bg-white border border-gray-200 px-3 py-2 text-xs uppercase placeholder:normal-case placeholder:text-gray-400 focus:outline-none focus:border-gray-950"
                      type="text"
                    />
                    <button
                      type="submit"
                      className="shrink-0 bg-gray-200 hover:bg-gray-300 text-gray-900 px-4 py-2 text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
                    >
                      Apply
                    </button>
                  </div>
                </form>

                <Link
                  to="/checkout"
                  className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gray-950 text-white py-3.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-black transition-colors"
                >
                  Proceed to Checkout →
                </Link>
              </div>
            </div>

          </div>
        ) : (
          /* Vue Panier Vide */
          <div className="py-24 text-center">
            <h2 className="text-3xl font-semibold text-gray-950 prata-regular">
              Your shopping bag is empty
            </h2>
            <p className="mt-2 text-sm text-gray-500 ">
              Discover our collection and add your favorite pieces.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-block bg-zinc-950 text-white px-6 py-3 text-xs uppercase tracking-widest hover:bg-zinc-800 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}

export default Cart