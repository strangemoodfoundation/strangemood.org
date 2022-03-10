import { getPersonaPrimaryColor } from "../lib/persona";
import { useLocalStorage } from "../lib/useLocalStorage";

const tabs = [
   { name: '🕹️ Game Player', href: '#', value: "gamer" },
   { name: '🧑‍💻 Game Maker', href: '#', value: "maker" },
   { name: '📹 Content Creator', href: '#', value: "creator" }
]

function classNames(...classes: string[]) {
   return classes.filter(Boolean).join(' ')
}

type CharacterProps = {
   setPersona: (input: string) => void;
   persona: string;
}

export default function Character({setPersona, persona}: CharacterProps) {
   const color = getPersonaPrimaryColor(persona);
   
   return (
      <div>
         <div className="mx-auto max-w-lg px-4 pt-12 text-center sm:max-w-4xl sm:px-6 lg:max-w-8xl lg:px-8">
            <h2 
               className={`text-base font-bold uppercase tracking-wider text-${color}-500`}
            >
               Choose your character:
            </h2>
            <div className={`relative z-0 rounded-lg shadow flex divide-x divide-gray-200`} aria-label="Tabs">
               {tabs.map((tab, tabIdx) => (
                  <a
                     key={tab.value}
                     href={tab.href}
                     className={classNames(
                        tab.value === persona ? 'text-gray-900 font-bold' : 'text-gray-500 hover:text-gray-700',
                        tabIdx === 0 ? 'rounded-tl-lg' : '',
                        tabIdx === tabs.length - 1 ? 'rounded-tr-lg' : '',
                        'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
                     )}
                     onClick={() => setPersona(tab.value)}
                     aria-current={tab.value === persona ? 'page' : undefined}
                  >
                     <span>{tab.name}</span>
                     <span
                        aria-hidden="true"
                        className={classNames(
                           tab.value === persona ? (`bg-${color}-500`) : 'bg-transparent',
                           'absolute inset-x-0 bottom-0 h-0.5'
                        )}
                     />
                  </a>
               ))}
            </div>
         </div>
      </div>
   )
}
