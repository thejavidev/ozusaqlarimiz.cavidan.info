import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
import { banenr,location,location2, user } from '../assets/images';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

      <section className='pt-[70px] pb-[70px] background'>
        <div className="container mx-auto">
            <div className="flex items-center justify-center">
                <h2 className='text-[3.2rem] text-[#fff] font-[800] uppercase'>Qrupun təsisçiləri</h2>
            </div>
            <div className="">
              <Row>
                <Col lg={4}>
                  <div className="bg-[#fff] picture-box p-[1.6rem] rounded-[16px] shadow-css-2 relative transitions overflow-hidden">
                    <figure className='figure relative m-0 '>
                    <LazyLoadImage src={user} />
                      <figcaption className='figcaption bg-[--color1] absolute bottom-[0] left-[0] w-[90%] h-[90%] text-center rounded-[8px] opacity-[0] pt-[.8rem] pb-[.8rem] z-[3] transition2'>
                        <div className="absolute bottom-[5px] z-[99] w-full text-left pt-[1.5rem] pb-[1.5rem] pl-[2rem] pr-[2rem]"></div>
                      </figcaption>
                    </figure>
                  </div>
                </Col>
                <Col lg={4}>

                </Col>
                <Col lg={4}>

                </Col>
              </Row>
            </div>
        </div>
      </section>
    </>
  )
}

export default Home
