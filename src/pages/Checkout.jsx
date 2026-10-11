import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState('credit')
    const [shippingType, setShippingType] = useState('standard')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const { products, currency, cartItems, getCartAmount, setCartItems } = useContext(ShopContext)

    // Construction dynamique de la liste des produits dans le panier à partir du contexte
    const cartProductsList = []
    for (const itemId in cartItems) {
        for (const size in cartItems[itemId]) {
            if (cartItems[itemId][size] > 0) {
                const product = products.find((item) => String(item.id) === String(itemId))
                if (product) {
                    cartProductsList.push({
                        ...product,
                        size,
                        quantity: cartItems[itemId][size],
                        image: product.image?.[0] || product.image || product.images?.[0] || ''
                    })
                }
            }
        }
    }

    const subtotal = getCartAmount()
    const shippingFee = shippingType === 'express' ? 15.00 : 0
    const totalDue = subtotal + shippingFee

    const handleCompleteOrder = (e) => {
        e.preventDefault()
        setIsSubmitted(true)
        setCartItems({}) // Vendre/vider le panier après commande validée
    }

    // Affichage de la page de confirmation (Order Confirmed)
    if (isSubmitted) {
        return (
            <section className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 py-20 md:py-32 flex justify-center items-center bg-white">
                <div className="max-w-xl w-full bg-white border border-gray-100 shadow-sm p-8 sm:p-12 text-center rounded-2xl space-y-6">
                    <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                            <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                    </div>

                    <div>
                        <h1 className="text-2xl font-semibold text-gray-950 tracking-wide ">
                            Order Confirmed
                        </h1>
                        <p className="mt-2 text-xs font-medium tracking-widest uppercase text-gray-400">
                            ORDER #SE-84920
                        </p>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed px-4">
                        Thank you for your purchase! A confirmation receipt and dispatch tracking details have been sent to your email.
                    </p>

                    <div className="pt-4 space-y-3">
                        <Link
                            to="/"
                            className="w-full inline-block bg-zinc-950 hover:bg-zinc-800 text-white py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors rounded-xl text-center"
                        >
                            Back to Home
                        </Link>
                        <Link
                            to="/shop"
                            className="w-full inline-block bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 py-3.5 text-xs uppercase tracking-wider font-semibold transition-colors rounded-xl text-center"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 py-10 md:py-16 bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                {/* Formulaire de gauche (Contact, Adresse, Paiement) */}
                <form className="lg:col-span-7 space-y-10" onSubmit={handleCompleteOrder}>

                    {/* 1. Contact Information */}
                    <section className="bg-white p-6 sm:p-8 border border-gray-100 space-y-8 rounded-2xl">
                        <div>
                            <h1 className="font-semibold text-sm text-zinc-950 tracking-wide mb-4">
                                1. Contact information
                            </h1>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="email" className="block text-xs text-gray-500 mb-1">
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        className="w-full border px-3 py-2 text-xs border-gray-200 focus:border-zinc-950 focus:outline-none transition-colors"
                                        type="email"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 2. Shipping Address */}
                    <section className="bg-white p-6 sm:p-8 border border-gray-100 rounded-2xl">
                        <h1 className="font-semibold text-sm text-zinc-950 tracking-wide mb-4">
                            2. Shipping Address
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="block text-xs text-gray-500 mb-1">
                                    First Name
                                </label>
                                <input
                                    id="firstName"
                                    className="w-full border px-3 py-2 text-xs border-gray-200 focus:border-zinc-950 focus:outline-none transition-colors"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-xs text-gray-500 mb-1">
                                    Last Name
                                </label>
                                <input
                                    id="lastName"
                                    className="w-full border px-3 py-2 text-xs border-gray-200 focus:border-zinc-950 focus:outline-none transition-colors"
                                    type="text"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="streetAddress" className="block text-xs text-gray-500 mb-1">
                                    Street Address
                                </label>
                                <input
                                    id="streetAddress"
                                    className="w-full border px-3 py-2 text-xs border-gray-200 focus:border-zinc-950 focus:outline-none transition-colors"
                                    type="text"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="city" className="block text-xs text-gray-500 mb-1">
                                    City
                                </label>
                                <input
                                    id="city"
                                    className="w-full border px-3 py-2 text-xs border-gray-200 focus:border-zinc-950 focus:outline-none transition-colors"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="postalCode" className="block text-xs text-gray-500 mb-1">
                                    Postal / ZIP Code
                                </label>
                                <input
                                    id="postalCode"
                                    className="w-full border px-3 py-2 text-xs border-gray-200 focus:border-zinc-950 focus:outline-none transition-colors"
                                    type="text"
                                    required
                                />
                            </div>

                            <div className="sm:col-span-2 mt-6 border border-gray-100 p-4 space-y-4">
                                <label
                                    onClick={() => setShippingType('standard')}
                                    className={`transition-colors p-3.5 flex justify-between items-center border cursor-pointer ${shippingType === 'standard' ? 'border-zinc-950 bg-gray-50/50' : 'border-gray-200 bg-white'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input type="radio" checked={shippingType === 'standard'} onChange={() => setShippingType('standard')} name="shipping" />
                                        <div>
                                            <h1 className="text-sm font-medium text-zinc-950 tracking-wide">
                                                Standard Delivery (3-5 business days)
                                            </h1>
                                            <p className="text-zinc-400 text-xs">Tracked postal parcel</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-zinc-950 tracking-wide">Free</span>
                                </label>

                                <label
                                    onClick={() => setShippingType('express')}
                                    className={`transition-colors p-3.5 flex justify-between items-center border cursor-pointer ${shippingType === 'express' ? 'border-zinc-950 bg-gray-50/50' : 'border-gray-200 bg-white'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <input type="radio" checked={shippingType === 'express'} onChange={() => setShippingType('express')} name="shipping" />
                                        <div>
                                            <h1 className="text-sm font-medium text-zinc-950 tracking-wide">
                                                Express Courier (1-2 business days)
                                            </h1>
                                            <p className="text-zinc-400 text-xs">Priority expedited dispatch</p>
                                        </div>
                                    </div>
                                    <span className="text-sm font-semibold text-zinc-950 tracking-wide">{currency}15.00</span>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* 3. Payment Details */}
                    <section className="bg-white p-6 sm:p-8 border border-gray-100 rounded-2xl">
                        <h1 className="font-semibold text-sm text-zinc-950 tracking-wide mb-4">
                            3. Payment Details
                        </h1>
                        <div className="flex gap-2 mb-6">
                            <button
                                type="button"
                                onClick={() => setPaymentMethod('credit')}
                                className={`flex-1 px-6 py-2 text-sm cursor-pointer font-medium text-center transition-colors ${paymentMethod === 'credit'
                                        ? 'bg-zinc-950 text-white'
                                        : 'bg-white text-zinc-800 border border-gray-300'
                                    }`}
                            >
                                Credit
                            </button>
                            <button
                                type="button"
                                onClick={() => setPaymentMethod('apple')}
                                className={`flex-1 px-6 py-2 text-sm cursor-pointer font-medium text-center transition-colors ${paymentMethod === 'apple'
                                        ? 'bg-zinc-950 text-white'
                                        : 'bg-white text-zinc-800 border border-gray-300'
                                    }`}
                            >
                                Apple Pay
                            </button>
                            <button
                                type="button"
                                onClick={() => setPaymentMethod('paypal')}
                                className={`flex-1 px-6 py-2 text-sm cursor-pointer font-medium text-center transition-colors ${paymentMethod === 'paypal'
                                        ? 'bg-zinc-950 text-white'
                                        : 'bg-white text-zinc-800 border border-gray-300'
                                    }`}
                            >
                                PayPal
                            </button>
                        </div>

                        {paymentMethod === 'credit' && (
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="cardNum" className="block text-xs text-gray-500 mb-1">
                                        Card Number
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="cardNum"
                                            required
                                            className="w-full border border-gray-200 px-3 py-2 pr-10 text-sm font-mono focus:outline-none focus:border-gray-950"
                                            type="text"
                                            defaultValue="4532 •••• •••• 8912"
                                        />
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
                                            className="lucide lucide-credit-card absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                                            aria-hidden="true"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                            <line x1="2" x2="22" y1="10" y2="10"></line>
                                            <path d="M6 14h2"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="expiry" className="block text-xs text-gray-500 mb-1">
                                            Expiry Date
                                        </label>
                                        <input
                                            id="expiry"
                                            placeholder="MM/YY"
                                            required
                                            className="w-full border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:border-gray-950"
                                            type="text"
                                            defaultValue="08/28"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cvc" className="block text-xs text-gray-500 mb-1">
                                            Security Code (CVC)
                                        </label>
                                        <input
                                            id="cvc"
                                            placeholder="123"
                                            required
                                            className="w-full border border-gray-200 px-3 py-2 text-sm font-mono focus:outline-none focus:border-gray-950"
                                            type="text"
                                            defaultValue="392"
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {paymentMethod === 'apple' && (
                            <div className="mt-4 p-6 text-xs text-zinc-600 bg-gray-50 border border-gray-200 rounded-lg text-center">
                                You will be redirected to complete payment with Apple Pay securely.
                            </div>
                        )}

                        {paymentMethod === 'paypal' && (
                            <div className="mt-4 p-6 text-xs text-zinc-600 bg-gray-50 border border-gray-200 rounded-lg text-center">
                                You will be redirected to complete payment with PayPal securely.
                            </div>
                        )}
                    </section>
                </form>

                {/* Panneau de droite (Récapitulatif dynamique basé sur ShopContext) */}
                <div className="lg:col-span-5">
                    <div className="sticky bg-white top-24 p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h2 className="text-base font-semibold text-gray-950 pb-4 border-b border-gray-100">
                            In Your Bag ({cartProductsList.reduce((acc, item) => acc + item.quantity, 0)})
                        </h2>

                        <div className="divide-y divide-gray-100 max-h-80 overflow-y-auto">
                            {cartProductsList.length === 0 ? (
                                <p className="text-xs text-zinc-400 py-4 text-center">Your bag is empty</p>
                            ) : (
                                cartProductsList.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center py-4 gap-4">
                                        <div className="flex gap-3 items-center">
                                            <div className="relative overflow-hidden bg-gray-100 w-14 h-14 rounded-lg flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h1 className="text-zinc-950 font-medium text-xs tracking-wide">{item.name}</h1>
                                                <p className="text-zinc-400 tracking-wide text-xs mt-1">Qty: {item.quantity} · {item.size}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-xs font-medium text-zinc-950 tracking-wide">
                                                {currency}{(item.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        <dl className="mt-6 space-y-3 text-xs text-gray-600 border-t border-gray-100 pt-4">
                            <div className="flex justify-between items-center">
                                <span>Subtotal</span>
                                <span className="font-medium text-zinc-950">{currency}{subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Shipping</span>
                                <span className="font-medium text-zinc-950">
                                    {shippingType === 'express' ? `${currency}15.00` : 'Free'}
                                </span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Estimated Tax</span>
                                <span className="font-medium text-zinc-950">{currency}0.00</span>
                            </div>
                            <div className="pt-4 border-t border-gray-100 flex justify-between text-sm font-semibold text-gray-950">
                                <span>Total Due</span>
                                <span>{currency}{totalDue.toFixed(2)}</span>
                            </div>
                        </dl>

                        <button
                            type="button"
                            onClick={handleCompleteOrder}
                            className="w-full mt-6 bg-zinc-950 hover:bg-zinc-800 text-white py-3 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-xl"
                        >
                            Complete Order. &nbsp;
                            <span>{currency}{totalDue.toFixed(2)}</span>
                        </button>

                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-2 text-[11px] text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check" aria-hidden="true">
                                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                <path d="m9 12 2 2 4-4"></path>
                            </svg>
                            <span>SSL Encrypted Checkout Guaranteed</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Checkout