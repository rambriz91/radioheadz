import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function DropDown({ onSelectCity }) {
  const handleCitySelect = (selectedCity) => {
    onSelectCity(selectedCity);
  };
  return (
    <Menu
      as='div'
      className='justify-self-start relative inline-block text-left'
    >
      <div>
        <Menu.Button className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-[#505458] px-3 py-2 text-lg font-semibold text-[#ff622e] shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          City
          <ChevronDownIcon
            className='-mr-1 h-5 w-5 text-[#ffa62e]'
            aria-hidden='true'
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='py-1'>
            <Menu.Item>
              {({ active }) => (
                <button
                  role='button'
                  onClick={() => handleCitySelect('San Diego')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-lg'
                  )}
                >
                  San Diego
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  role='button'
                  onClick={() => handleCitySelect('Los Angeles')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-lg'
                  )}
                >
                  Los Angeles
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
