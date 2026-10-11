import React, { useState } from 'react'

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign In') // 'Sign In' ou 'Sign Up'

  const handleSubmit = (e) => {
    e.preventDefault()
    // Traitement de l'authentification ici
  }

  return (
    <section className="flex-1 max-w-7xl mx-auto w-full px-6 lg:px-8 py-12 md:py-20 bg-gray-100 flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-md bg-white p-8 sm:p-10 border border-gray-100 rounded-2xl shadow-sm">

        {/* En-tête */}
        <div className="text-center mb-8">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gray-400">
            {currentState === 'Sign In' ? 'Welcome Back' : 'Create Account'}
          </p>
          <h1 className="mt-2 text-2xl sm:text-3xl font-semibold text-zinc-950  font-sans">
            {currentState === 'Sign In' ? 'Sign in to ShopEase' : 'Join ShopEase'}
          </h1>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {currentState === 'Sign Up' && (
            <div>
              <label htmlFor="name" className="block text-xs text-gray-500 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                required
                className="w-full border border-gray-200 px-3 py-2 text-xs text-zinc-950 focus:border-zinc-950 focus:outline-none transition-colors rounded-lg"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-xs text-gray-500 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              required
              className="w-full border border-gray-200 px-3 py-2 text-xs text-zinc-950 focus:border-zinc-950 focus:outline-none transition-colors rounded-lg"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1">
              <label htmlFor="password" className="block text-xs text-gray-500">
                Password
              </label>
              {currentState === 'Sign In' && (
                <a href="#forgot" className="text-[11px] text-gray-400 hover:text-zinc-950 transition-colors">
                  Forgot password?
                </a>
              )}
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              required
              className="w-full border border-gray-200 px-3 py-2 text-xs text-zinc-950 focus:border-zinc-950 focus:outline-none transition-colors rounded-lg"
            />
          </div>

          {/* Bouton Noir Principal */}
          <button
            type="submit"
            className="w-full mt-2 bg-zinc-950 hover:bg-zinc-800 text-white py-3 text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer rounded-xl"
          >
            {currentState === 'Sign In' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        {/* Bascule entre Sign In et Sign Up */}
        <div className="mt-8 pt-6 border-t border-gray-100 text-center">
          {currentState === 'Sign In' ? (
            <p className="text-xs text-gray-500">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setCurrentState('Sign Up')}
                className="font-semibold text-zinc-950 hover:underline cursor-pointer ml-1"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p className="text-xs text-gray-500">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setCurrentState('Sign In')}
                className="font-semibold text-zinc-950 hover:underline cursor-pointer ml-1"
              >
                Sign in
              </button>
            </p>
          )}
        </div>

      </div>
    </section>
  )
}

export default Login