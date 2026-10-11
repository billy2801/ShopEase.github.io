
import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section
            id="cta"
            className="bg-gray-50 mt-24 min-h-100"
        >
            <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">

                <p className="font-medium text-gray-400 text-xs uppercase tracking-[0.24em]">
                    Curated for you
                </p>

                <h2 className="mt-4 font-semibold text-gray-950 text-4xl sm:text-5xl max-w-2xl mx-auto prata-regular">
                    Ready to elevate your everyday style?
                </h2>

                <p className="mt-5 text-sm max-w-lg mx-auto leading-relaxed text-gray-500 tracking-tight ">
                    Explore thoughtfully designed pieces made to last.
                    Contemporary silhouettes, premium quality, and effortless versatility.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">

                    <Link
                        to="/shop"
                        className="group bg-zinc-950 inline-flex gap-2 px-5 py-3 items-center justify-center text-white text-sm font-medium transition-colors hover:bg-zinc-800"
                    >
                        Shop Now

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </Link>

                    <Link
                        to="/categories"
                        className="inline-flex items-center justify-center px-5 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium transition-colors hover:bg-zinc-100"
                    >
                        Browse Categories
                    </Link>

                </div>

            </div>
        </section>
    )
}

export default CTA

