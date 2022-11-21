import Image from 'next/image'
import React from 'react'

export default function DevicecureLogo() {
  return (
    <div className='text-3xl font-bold underline inline-block'>
      <Image src="/logo-blue.png"  width={40} height={40}/>
    </div>
  )
}
