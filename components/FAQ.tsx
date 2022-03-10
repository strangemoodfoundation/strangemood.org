const faqs = [
   {
     id: 1,
     question: "How does it work?",
     answer:
       "Strangemood is built on Solana; an environmentally friendly blockchain with fees less than a penny. A transaction uses 3.8 million times less energy than Bitcoin; or about the energy cost of making a google search. I know, I know, crypto, oof. It's just the best way to ensure that the treasury is owned by members of the co-op, and not a company who could use its position to fleece game developers. In other words, the Strangemood Foundation is a Decentralized Autonomous Organization, or DAO. To join the DAO, sell a game on the protocol or build a client application, like a marketplace.",
   },
   {
      id: 2,
      question: "Why are fees so low?",
      answer:
        "Strangemood is built on Solana; an environmentally friendly blockchain with fees less than a penny. ",
    },
    {
      id: 3,
      question: "What kind of games can I sell?",
      answer:
        "Strangemood is built on Solana; an environmentally friendly blockchain with fees less than a penny. ",
    },
    {
      id: 4,
      question: "How do sellers control the protocol?",
      answer:
        "Strangemood is built on Solana; an environmentally friendly blockchain with fees less than a penny. ",
    },
 ]
 
 export default function FAQ() {
   return (
     <div className="bg-gray-50">
       <div className="max-w-6xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
         <h2 className="text-3xl font-extrabold text-gray-900">Frequently asked questions</h2>
         <div className="mt-8">
           <dl className="divide-y divide-gray-200">
             {faqs.map((faq) => (
               <div key={faq.id} className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8">
                 <dt className="text-base font-medium text-gray-900 md:col-span-5">{faq.question}</dt>
                 <dd className="mt-2 md:mt-0 md:col-span-7">
                   <p className="text-base text-gray-500">{faq.answer}</p>
                 </dd>
               </div>
             ))}
           </dl>
         </div>
       </div>
     </div>
   )
 }
 