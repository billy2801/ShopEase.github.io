import React from 'react'
import { benefits } from '../assets/assets'

const Benefits= () => {

  const icons = {
    truck: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9L21 12h-4V9.5h2.5zM18 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5z"
        />
      </svg>
    ),

    return: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
        />
      </svg>
    ),

    secure: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),

    support: (
      <svg
        className="size-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 0 1-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    )
  }

  return (
    <section className="mt-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-40">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="flex flex-col items-center justify-center gap-4 p-6 text-center"
            >

              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-800">
                {icons[benefit.icon]}
              </div>

              <div>
                <h3 className="text-sm font-semibold text-zinc-900">
                  {benefit.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {benefit.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Benefits