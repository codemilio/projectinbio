import Image from 'next/image'

import { Options } from "./options"
import { Button } from '../Button'

import Logo from '../../assets/app-logo.svg'

export function Navbar() {
  return (
    <div className='absolute top-0 left-0 w-full px-4 py-8'>
      <div className="flex flex-row justify-between items-center text-xl">
        {/* <Options /> */}
        <Image priority src={Logo} alt="Project in Bio" />
        <Button className='px-8'> Login </Button>
      </div>
    </div>
  )
}