/* This example requires Tailwind CSS v2.0+ */
import { LinkIcon } from '@heroicons/react/outline'

export default function Protocol() {
   return (
      <>
         <div className="relative pt-16 sm:pt-24 lg:pt-32">
            <div className="lg:mx-auto lg:max-w-6xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
               <div className="px-4 py-0 max-w-xl mx-auto sm:px-6 lg:max-w-none lg:mx-0 lg:px-0">
                  <div>
                     <div className='flex flex-row items-center gap-3'>
                        <span className="h-12 w-12 rounded-md flex items-center justify-center bg-indigo-600">
                           <LinkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                        <h2 className="my-0 py-0 text-3xl font-extrabold tracking-tight text-gray-900">
                           Wait, its a protocol?
                        </h2>
                     </div>
                     <p className="mt-4 text-lg text-gray-500">
                        Yeah, like Email. No one <i>owns</i> Email and no-one owns
                        Strangemood. That means anyone can have their <i>own</i> games
                        store, just like anyone can make an email app. It doesn't matter if
                        you bought the game from your favorite Twitch streamer's store, the
                        money still goes to the game developer, and the game still shows up
                        in your library.
                     </p>
                     <p className="mt-4 text-lg text-gray-500">
                        You can make a store with a bit of javascript (or your favorite
                        language).
                     </p>
                  </div>
               </div>
               <div className="mt-12 sm:mt-16 lg:mt-0">
                  <div className="flex flex-col justify-around pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                     <div className='align-center bg-indigo-700 rounded-xl p-5 text-white font-mono'>
                        <p>import &#123; </p>
                        <p>&nbsp;&nbsp;&nbsp; purchaseListing,</p>
                        <p>&nbsp;&nbsp;&nbsp; fetchStrangemoodProgram </p>
                        <p>&#125; from "@strangemood/strangemood;</p>
                        <br></br>
                        <p>const program = await fetchStrangemoodProgram(...);</p>
                        <p>await purchaseListing(program, ...);</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
