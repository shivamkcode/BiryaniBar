import images from '@/public/constants/images'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Map = () => {
  return (
    <div className='paddingX paddingY'>
      <Link href="https://www.google.com/maps/place/Biryani+Bar+Restaurant-+%7C+Indian+Cuisine%7C+Assorted+Sweets+%26+Desserts%7C+LLBO/@43.3949861,-80.273641,17z/data=!3m1!4b1!4m6!3m5!1s0x882b877c6e91c559:0xc914310527832eab!8m2!3d43.3949861!4d-80.273641!16s%2Fg%2F11v_9v2zlh?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D" target='_blank'>
        <Image className='w-full border-golden/70 border-2' src={images.map} alt="map" />
      </Link>
    </div>
  )
}

export default Map