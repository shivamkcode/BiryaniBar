import { Gallery, HappyHour, Hero, Reservations } from '@/components'
import React from 'react'

const page = () => {
  return (
    <div>
        <Hero title="Book A Table" subtitle="Booking" />
        <Reservations />
        <HappyHour />
        <Gallery />
    </div>
  )
}

export default page