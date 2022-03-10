/* This example requires Tailwind CSS v2.0+ */
import { CodeIcon, XIcon } from '@heroicons/react/outline'
import { getPersonaPrimaryColor } from '../lib/persona';

type BannerProps = {
   persona: string;
}

export default function Banner({persona}: BannerProps) {
  const color = getPersonaPrimaryColor(persona);
  return (
    <div className={`bg-${color}-600 shadow-md shadow-${color}-300`}>
      <div className="max-w-6xl mx-auto py-3 px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  flex-wrap">
          <div className="w-0 flex-1 flex items-center">
            <span className={`flex p-2 rounded-lg bg-${color}-800`}>
              <CodeIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 my-0 py-0 font-medium text-white truncate">
              <span>Developer? Checkout our docs!</span>
            </p>
          </div>
          <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="#"
              className={`flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-${color}-600 bg-white hover:bg-${color}-50`}
            >
              Explore Docs
            </a>
          </div>
          <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
            <button
              type="button"
              className={`-mr-1 flex p-2 rounded-md hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2`}
            >
              <span className="sr-only">Dismiss</span>
              <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
