import Image from 'next/image'

import { Options } from "./options"
import { Button } from '../Button'

import Logo from '../../assets/app-logo.svg'

export function Navbar() {
  return (
    <div className="flex flex-1 flex-row justify-between items-center text-xl">
      <Options />
      <Image priority src={Logo} alt="Project in Bio" />
      <Button> Login </Button>
    </div>
  )
}