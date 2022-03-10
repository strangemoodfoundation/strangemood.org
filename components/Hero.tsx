import { getPersonaPrimaryColor } from "../lib/persona";

type HeroProps = {
   persona: string;
}

export default function Hero({ persona }: HeroProps) {
   const color = getPersonaPrimaryColor(persona);
   var content = {
      titleFirst: "",
      titleSecond: "",
      body: "",
      button: "",
      imageSrc: "",
   }
   switch (persona) {
      case "gamer":
         content.titleFirst = "Buy games,";
         content.titleSecond = "support creators";
         content.body = `
            Strangemood is a protocol for buying and selling games that takes 
            just 1% for every transaction. That means more money for game devs
            and content creators, and none for the middlemen.
         `;
         content.button = "Browse Games";
         content.imageSrc = "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
         break;
      case "maker":
         content.titleFirst = "Make more money,";
         content.titleSecond = "own the platform";
         content.body = `
            Strangemood is a protocol for buying and selling games that takes 
            just 1% for every transaction. Get rewarded with ownership over the 
            protocol when your games generate sales.
         `;
         content.button = "List a Game";
         content.imageSrc = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3132&q=80";
         break;
      case "creator":
         content.titleFirst = "Happier wallet,";
         content.titleSecond = "happier fans";
         content.body = `
         Strangemood is a protocol for buying and selling games that takes 
         just 1% for every transaction. Anyone can run a store, including 
         you, and keep a portion of the sales they generate.
         `;
         content.button = "Setup a Store";
         content.imageSrc = "https://images.unsplash.com/photo-1630797160666-38e8c5ba44c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80";
         break;
      default:
         break;
   }
   return (
      <>
         <div className="relative">
            <div className="mt-0 max-w-6xl mx-auto sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
               <div className={`relative shadow-xl shadow-${color}-200 sm:rounded-2xl sm:overflow-hidden`}>
                  <div className="absolute inset-0">
                     <img
                        className="h-full w-full object-cover brightness-75"
                        src={`${content.imageSrc}`}
                        alt="People working on laptops"
                     />
                     <div className={`absolute inset-0 bg-gradient-to-r from-purple-900 to-${color}-800 mix-blend-multiply`} />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                     <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">{content.titleFirst}</span>
                        <span className={`block text-${color}-100`}>{content.titleSecond}</span>
                     </h1>
                     <p className={`mt-6 max-w-lg mx-auto text-center text-xl text-${color}-100 sm:max-w-3xl`}>
                        {content.body}
                     </p>
                     <form action="#" className="mx-auto mt-12 sm:max-w-lg sm:w-full sm:flex">
                        <div className="min-w-0 flex-1">
                           <label htmlFor="hero-email" className="sr-only">
                              Email address
                           </label>
                           <input
                              id="hero-email"
                              type="email"
                              className={`block w-full border border-gray-300 rounded-md px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-${color}-500 focus:ring-${color}-500`}
                              placeholder="Enter your email"
                              typeof="text"
                           />
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-3">
                           <button
                              type="submit"
                              className={`block w-full rounded-md border border-transparent px-5 py-3 bg-${color}-600 text-base font-medium text-white shadow hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 sm:px-10`}
                           >
                              {content.button}
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
