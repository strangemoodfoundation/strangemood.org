export default function Hero() {
   return (
      <>
         <div className="relative">
            <div className="mt-12 max-w-6xl mx-auto sm:px-6 lg:px-8">
               <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                  <div className="absolute inset-0">
                     <img
                        className="h-full w-full object-cover"
                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                        alt="People working on laptops"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                     <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">It's like Steam,</span>
                        <span className="block text-indigo-200">but as a co-op</span>
                     </h1>
                     <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                        Strangemood is a protocol for buying and selling games on the
                        internet. 1% of every transaction goes to a community treasury.
                        Votes that control that treasury are distributed to game developers
                        as they sell.
                     </p>
                     <form action="#" className="mx-auto mt-12 sm:max-w-lg sm:w-full sm:flex">
                        <div className="min-w-0 flex-1">
                           <label htmlFor="hero-email" className="sr-only">
                              Email address
                           </label>
                           <input
                              id="hero-email"
                              type="email"
                              className="block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                              placeholder="Enter your email"
                              typeof="text"
                           />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3">
                           <button
                              type="submit"
                              className="block w-full rounded-md border border-transparent px-5 py-3 bg-indigo-600 text-base font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:px-10"
                           >
                              Get Started
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
