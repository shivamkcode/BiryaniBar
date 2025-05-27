import images from '@/public/constants/images'
import Image from 'next/image'
import React from 'react'

const Sign = ({direction="right"}: {direction?: 'left' | 'right'}) => {
  return (
    <Image className={`absolute -top-10 ${direction === 'left' ? 'left-10 lg:left-20' : 'right-10 lg:right-20'} w-20 h-20 lg:-top-18 lg:w-36 lg:h-36 object-contain`} src={images.logo} alt="sign" />
  )
}

export default Sign