import { Hero, } from '@/components'
import Map from '@/components/Sections/MapView'
import ContactUs from '@/components/Sections/ContactUs'
import React from 'react'
import FAQ from '@/components/Sections/FAQ'

const page = () => {
  return (
    <div>
        <Hero title="Contact Us" subtitle="Contact Us" />
        <Map />
        <ContactUs />
        <FAQ />
    </div>
  )
}

export default page