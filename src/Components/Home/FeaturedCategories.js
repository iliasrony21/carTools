import React from 'react'
import fe1 from '../../images/featured.jpg'
import fe2 from '../../images/featured1.jpg'
import fe3 from '../../images/featured2.jpg'
import fe4 from '../../images/featured3.jpg'
import fe5 from '../../images/featured4.jpg'
import fe6 from '../../images/featured5.jpg'

const FeaturedCategories = () => {
  const catagories = [
    {
      name: 'Body Parts',
      desc1: 'Body shell',
      desc2: 'Bumper grille',
      desc3: 'Cowl panel',
      desc4: 'Crash guard or bullbar',
      img: fe1
    },
    {
      name: 'Lighting',
      desc1: 'Headlight Visor ',
      desc2: 'Headlight Assembly.',
      desc3: 'Tail Light Glass.',
      desc4: 'Fog Light Cover.',
      img: fe3
    },
    {
      name: 'Turbo Systems',
      desc1: 'the bearing housing',
      desc2: 'the turbine housing',
      desc3: 'the compressor wheel',
      desc4: 'the turbine wheel  ',
      img: fe5
    },
    {
      name: 'Brake Parts',
      desc1: 'ABS Control Module',
      desc2: 'Brake Booster',
      desc3: ' Disc Brakes',
      desc4: 'Drum Brakes',
      img: fe2
    },
    {
      name: 'Moto Oil',
      desc1: 'Mobil',
      desc2: 'MOTUL',
      desc3: 'Liqui MOLY',
      desc4: 'Castrol',
      img: fe4
    },
    {
      name: 'Wheels & Tires',
      desc1: 'BFGOODRICH',
      desc2: ' Dunlop Tires',
      desc3: 'General Tire.',
      desc4: ' Goodyear',
      img: fe6
    }
  ]
  return (
    <div className='bg-[#F1F1F1] pb-20'>
      <h1 className='text-4xl text-black font-bold ml-20 pt-12 pb-5 '>
        Featured <span className='text-primary'>Categories</span>
        <span className='divider w-8/12 ml-96  mt-[-20px]'></span>
      </h1>

      <div className='grid grid-cols-3 bg-white ml-20 mr-12'>
        {catagories.map(catagory => (
          <div className='flex mt-5 ml-5 '>
            <div className='categoriesImage'>
              <img src={catagory.img} alt='' />
            </div>
            <div className='categoriesText'>
              <p className='ml-5 font-bold'>{catagory.name}</p>
              <p className='ml-5 cursor-pointer hover:text-primary'>
                {catagory.desc1}
              </p>
              <p className='ml-5 cursor-pointer hover:text-primary'>
                {catagory.desc2}
              </p>
              <p className='ml-5 cursor-pointer hover:text-primary'>
                {catagory.desc3}
              </p>
              <p className='ml-5 cursor-pointer hover:text-primary'>
                {catagory.desc4}
              </p>
            </div>
            <button className='btn btn-sm btn-secondary mt-24 '>
              SHOP NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedCategories
