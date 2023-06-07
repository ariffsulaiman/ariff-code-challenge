import Image from 'next/image'
import { Inter } from 'next/font/google'
import Experience from './experienceComponent'
import Education from './educationComponent'
import Skills from './skillsComponent'
import Objective from './objectiveComponent'
import Address from './addressComponent'
import Reference from './referenceComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  return (
    <div className='flex flex-col my-20'>

      <section className="flex flex-col md:flex-row md:justify-center md:items-center md:-space-x-4 mx-auto">
        <Image
          src="/fotor_2023-3-17_15_50_31.png"
          alt=""
          width={300}
          height={300}
          className="z-10 w-60 rounded-full ring-8 ring-red-500 ring-offset-4 mx-auto md:mx-0"
          priority={true}/>

        <div className="bg-red-500 w-[90vw] md:w-[39vw] mx-auto md:mx-0 py-4 px-4 md:pt-12 md:pr-6 mt-6 md:mt-0 rounded-md md:rounded-none">
          <div className="text-center md:text-right font-bold md:text-3xl">
            MUHAMAD ARIFF BIN SULAIMAN
          </div>
          <div className="text-center md:text-right font-bold text-xs md:text-base">
            32 YEARS-OLD | HTTPS://ARIFFSULAIMAN.DEV
          </div>
          <div className="text-center md:text-right font-bold text-xs md:text-base">
            +60176355270 | ARIFF_SULAIMAN91@YAHOO.COM.MY
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row space-x-0 md:space-x-10 mx-auto mt-10">
        <div className="w-[70vw] md:w-[16vw] mx-auto">

          <Objective />

          <Skills />

          <Address />

          <Reference />

        </div>

          {/* RIGHT SIDE */}
        <div className="w-[70vw] md:w-[36vw] mx-auto mt-8">

          <Experience />
          <Education />

        </div>

      </section>

    </div>
  )
}
