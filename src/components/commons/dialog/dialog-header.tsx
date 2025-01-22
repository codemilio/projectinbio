import { CircleX } from 'lucide-react'
type DialogHeaderProps = {
  title: string
}

export function DialogHeader({ title }: DialogHeaderProps) {
  return (
    <div className='w-full relative'>
      <h1 className="text-2xl font-bold text-content-heading"> {title} </h1>
      <button 
        className='absolute right-0 top-0 p-1 text-content-headline hover:text-content-heading'
        type='button'
      >
        <CircleX />
      </button>
    </div>
  )
}