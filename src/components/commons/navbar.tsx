import Image from 'next/image'

import { Button } from '../ui/button'

import Logo from '../../assets/app-logo.svg'

export function Options() {
  return (
      <ul className="flex flex-row space-x-8 text-content-heading ">
        <li className="font-bold"> Início </li>
        <li className="text-content-headline"> Preço </li>
        <li className="text-content-headline"> FAQ </li>
      </ul>
  )
}

export function Navbar() {
  return (
    <div className='absolute top-0 left-0 w-full px-4 py-8'>
      <div className="flex flex-row justify-between items-center text-xl">
        <Options />
        <Image priority src={Logo} alt="Project in Bio" />
        <Button className='px-16 py-2'> Login </Button>
      </div>
    </div>
  )
}
