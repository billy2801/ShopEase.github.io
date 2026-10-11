
import React, { useState } from 'react'
import { faq } from '../assets/assets'

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0)

    return (
        <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">

            <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">

                <div>
                    <p className="font-medium text-gray-400 text-xs uppercase tracking-[0.24em]">
                        Help & Support
                    </p>

                    <h2 className="mt-3 font-semibold text-gray-950 text-2xl sm:text-3xl prata-regular">
                        Frequently asked questions.
                    </h2>
                </div>

                <p className="max-w-sm text-sm leading-6 text-gray-600">
                    Find quick answers to common questions about orders,
                    shipping, returns, and materials.
                </p>

            </div>

            <div className="border-t border-gray-200 divide-y divide-gray-200"> 

                {faq.map((item, index) => (
                    <div key={item.id}>

                        <button
                            type="button"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? -1 : index)
                            }
                            aria-expanded={openIndex === index}
                            className="w-full flex items-center justify-between gap-4 text-left text-gray-900 py-6 transition-colors hover:text-gray-600 cursor-pointer"
                        >
                            <span className="text-sm font-medium">
                                {item.question}
                            </span>

                            <span
                                className={`shrink-0 flex items-center justify-center rounded-full size-7 border border-gray-200 text-gray-500 text-sm transition-transform duration-300 ${
  openIndex === index ? 'rotate-45' : ''
} `}
                                aria-hidden="true"
                            >
                                +
                            </span>
                        </button>

                        {openIndex === index && (
                            <div className="pb-4 pr-8 text-gray-500 text-sm leading-6">
                                {item.answer}
                            </div>
                        )}

                    </div>
                ))}

            </div>

            <div className='bg-gray-50 mx-auto p-6 flex items-center justify-between mt-10 '>
              <div>
            <h1 className='text-zinc-950 text-sm tracking-[0.02] font-medium'>Still have a question?</h1>
            <p className='text-zinc-400 text-xs font-medium mt-1 '>Our customer experience team is ready to assist you.</p>
              </div>
            
          <a
            to="/contact"
            className="group cursor-pointer inline-flex items-center justify-center gap-2 text-sm font-medium text-zinc-950"
          >
            CONTACT SUPPORT

            <span className="flex items-center justify-center overflow-hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </a>



            </div>

        </section>
    )
}

export default FAQ

