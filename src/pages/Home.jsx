import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { banenr,location,location2 } from '../assets/images';
const Home = () => {
  return (
    <>
      <section className='p-[20px]'>
        <div className="banner">
          <LazyLoadImage src={banenr} className='h-[850px] w-full rounded-[30px]' />
        </div>
      </section>

      <section className='pt-[70px] bg-[#F1F1F1] pb-[40px]'>
        <div className='container mx-auto flex items-center justify-center flex-col'>
            <div className="mt-[0px] mb-[30px]">
              <h1 className='text-[3.2rem] text-[#1b273d] font-[800] uppercase'>Özuşaqlarımız nə edir?</h1>
            </div>
            <div className="flex flex-wrap gap-[100px] items-center">
              <div className="flex flex-col items-center p-[20px] gap-3">
                  <LazyLoadImage src={location} />
                  <span className='text-[1.2rem] text-[#1b273d] font-[600] capitalize'>Baki daxili tur</span>
              </div>
              <div className="flex flex-col items-center p-[20px] gap-3">
                  <LazyLoadImage src={location} />
                  <span className='text-[1.2rem] text-[#1b273d] font-[600] capitalize'>Olke daxili tur</span>
              </div>
              <div className="flex flex-col items-center p-[20px] gap-3">
                  <LazyLoadImage src={location2} />
                  <span className='text-[1.2rem] text-[#1b273d] font-[600] capitalize'>Cafe / Restoranlarda görüş</span>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
