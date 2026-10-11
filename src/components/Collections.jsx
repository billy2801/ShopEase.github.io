
import React from 'react'

const Collections = () => {
    return (
        <section
            id="collections"
            className="max-w-7xl mx-auto px-6 lg:px-30 pt-24 md:pt-32"
        >

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

                <div>

                    <p className="text-[11px] font-medium tracking-[0.25em] uppercase text-gray-400">
                        Explore the collection
                    </p>

                    <h2 className="mt-4 text-4xl prata-regular md:text-5xl font-semibold tracking-[-0.035em] text-gray-950">
                        Find your style.
                    </h2>

                </div>

                <p className="max-w-sm text-sm leading-6 text-gray-500">
                    From everyday essentials to statement pieces, discover collections
                    curated for modern living.
                </p>

            </div>


            {/* Collections grid */}
            <div className="grid md:grid-cols-3 gap-5">

                {/* Denim */}
                <a
                    href="#products"
                    className="group relative md:row-span-2 min-h-100 md:min-h-135 overflow-hidden bg-gray-100"
                >

                    <img
                        src="https://images.unsplash.com/photo-1713256683892-5bab22f76be0?q=100&w=1170&auto=format&fit=crop"
                        alt="New denim collection"
                        loading="lazy"
                        decoding="async"
                        className="absolute h-full w-full inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">

                        <p className="text-[10px] tracking-[0.2em] uppercase opacity-75">
                            New collection
                        </p>

                        <div className="flex items-end justify-between gap-4 mt-2">

                            <h3 className="text-xl md:text-2xl font-medium">
                                Denim Edit
                            </h3>

                            <span
                                className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </div>

                    </div>

                </a>


                {/* Welcome Offer */}
                <div className="relative flex flex-col justify-between min-h-70 bg-gray-950 text-white p-6 md:p-8">

                    <div className="flex items-center justify-between">

                        <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">
                            Welcome offer
                        </span>

                        <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">
                            01
                        </span>

                    </div>


                    <div>

                        <p className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">
                            20%
                        </p>

                        <p className="mt-3 max-w-xs text-sm leading-6 text-white/60">
                            Get 20% off your first order when you join our community.
                        </p>

                        <a
                            href="#products"
                            className="group inline-flex items-center gap-3 mt-6 text-xs font-medium tracking-[0.18em] uppercase"
                        >
                            Shop now

                            <span
                                className="transition-transform group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </a>

                    </div>

                </div>


                {/* Lookbook */}
                <a
                    href="#products"
                    className="group relative min-h-70 overflow-hidden bg-gray-100"
                >

                    <img
                        src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=85"
                        alt="Lookbook collection"
                        loading="lazy"
                        decoding="async"
                        className="absolute h-full w-full inset-0 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    <div className="absolute bottom-6 left-6 right-6 text-white">

                        <p className="text-[10px] tracking-[0.2em] uppercase opacity-75">
                            Lookbook 2026
                        </p>

                        <div className="flex items-end justify-between gap-4 mt-2">

                            <h3 className="text-xl md:text-2xl font-medium">
                                The Edit
                            </h3>

                            <span
                                className="text-xl transition-transform duration-300 group-hover:translate-x-1"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </div>

                    </div>

                </a>


                {/* Everyday Essentials */}
                <div className="group relative min-h-70 bg-gray-100/70 p-6 md:p-8 md:col-span-2 flex flex-col justify-between">

                    <div className="flex items-center justify-between">

                        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400">
                            Curated for you
                        </span>

                        <span className="text-[10px] tracking-[0.15em] uppercase text-gray-400">
                            02
                        </span>

                    </div>


                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                        <div>

                            <p className="text-3xl font-bricolage md:text-4xl font-semibold tracking-[-0.04em] text-gray-950">
                                Everyday essentials.
                            </p>

                            <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
                                Thoughtfully selected pieces made for everyday moments,
                                effortless style, and modern living.
                            </p>

                        </div>


                        <a
                            href="#products"
                            className="group/link inline-flex items-center gap-3 text-xs font-medium tracking-[0.18em] uppercase text-gray-950"
                        >
                            Explore collection

                            <span
                                className="transition-transform group-hover/link:translate-x-1"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </a>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Collections
