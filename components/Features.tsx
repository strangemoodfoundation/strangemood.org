import {
  CashIcon,
  CursorClickIcon,
  LibraryIcon,
  LockClosedIcon,
  ScaleIcon,
  SearchIcon,
  ShoppingBagIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/outline'
import { getPersonaPrimaryColor } from '../lib/persona';

const features = [
  {
    name: 'Low Fees',
    description: 'Transactions fees are just 1%. This number can be lowered by the community in the future.',
    icon: CashIcon,
  },
  {
    name: 'Community Controlled',
    description: 'In addition to the normal cash, sellers receive voting power to control the future of the protocol.',
    icon: ScaleIcon,
  },
  {
    name: 'Distribution Included',
    description: 'Sellers set a % of a listings price as a bounty for generating sales.',
    icon: SpeakerphoneIcon,
  },
  {
    name: 'Infinite Storefronts',
    description: 'Anyone can setup a storefront and earn bounties from its sales.',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Unified Library',
    description: 'Games purchased from any storefront using Strangemood are available in a unified library.',
    icon: LibraryIcon,
  },
  {
    name: 'Incentivized Security',
    description: 'Storefronts risk loosing their revenue if they break rules set by sellers.',
    icon: LockClosedIcon,
  },
]

type FeaturesProps = {
  persona: string;
}

export default function Features({ persona }: FeaturesProps) {
  const color = getPersonaPrimaryColor(persona);

  var features: any[] = [];
  switch (persona) {
    case "gamer":
      features = [
        {
          name: 'Support Developers',
          description: 'Transaction fees are just 1%. That means the money goes to the people who make the game, not Steam.',
          icon: CashIcon,
        },
        {
          name: 'Support Creators',
          description: 'Your favorite creator can setup their own store. When you shop there they keep a portion of the revenue.',
          icon: VideoCameraIcon,
        },
        {
          name: 'Unified Library',
          description: 'Games purchased from any storefront using our protocol are available in a unified library.',
          icon: LibraryIcon,
        },
      ];
      break;
    case "maker":
      features = [
        {
          name: 'Low Fees',
          description: 'Transactions fees are just 1% and can be lowered by the community.',
          icon: CashIcon,
        },
        {
          name: 'Community Controlled',
          description: 'Get rewarded with voting power when your games sell.',
          icon: ScaleIcon,
        },
        {
          name: 'Distribution Included',
          description: 'Set a % of a listing\'s price as a bounty for generating sales.',
          icon: SpeakerphoneIcon,
        }
      ];
      break;
    case "creator":
      features = [
        {
          name: 'Your Store',
          description: 'Create a store and keep a portion of its sales.',
          icon: ShoppingBagIcon,
        },
        {
          name: 'Curated Selection',
          description: 'Fill your store with games that your audience will like.',
          icon: SearchIcon,
        },
        {
          name: 'Better than Ads',
          description: 'Don\'t waste time showing fans products they don\'t want.',
          icon: CursorClickIcon,
        }
      ];
      break;
    default:
      break;
  }

  return (
    <div className="relative bg-white sm:pb-12 lg:pb-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-6xl lg:px-8">
        <h2 className={`mt-12 text-base font-semibold uppercase tracking-wider text-${color}-600`}>Benefits</h2>
        <div className="mt-6">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-6">
                  <div className="-mt-6">
                    <div>
                      <span className={`inline-flex items-center justify-center rounded-md bg-${color}-500 p-3 shadow-lg`}>
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-4 mb-0 text-lg font-bold tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-0 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
