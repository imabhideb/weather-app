import axios from 'axios'
import React, { useState } from 'react'
import BG from '../assets/background.jpg'
import ClearDay from '../assets/clear-day.jpg'
import ClearNight from '../assets/clear-night.jpg'
import CloudyDay from '../assets/cloudy-day.jpg'
import CloudyNight from '../assets/cloudy-night.jpg'
import RainyDay from '../assets/rainy-day.jpg'
import RainyNight from '../assets/rainy-night.jpg'
import SnowyDay from '../assets/snow-day.jpg'
import SnowyNight from '../assets/snow-night.jpg'

const Home = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9581b43c85918b7538634a2656290a0e`

    const searchLocation = (event) => {
        if (event.key === 'Enter'){
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setData("")
        }
    }

    // let timeOftheDay


  return (
    <div className='bg-clearNight sm:flex sm:h-screen '>

        {/* Background Image */}
        {/* <img src={ClearDay} alt="" className='absolute object-cover sm:h-screen h-[500px] w-full '/> */}


        {/* First Column */}
        <div  className='sm:w-[55%] w-full relative text-white'>
            <img src="" alt="" className='object-cover'/>
            <div className='sm:flex sm:mt-[480px] mt-[200px] pl-[80px] items-center gap-8'>
                <div>
                    {data.main ? <h1 className='sm:text-9xl text-7xl '>{data.main.temp}°C</h1> : null}
                </div>
                <div>
                    <h3 className='text-5xl mt-2  '>{data.name}</h3>
                    <p className='text-2xl mt-2 pt-1 hidden sm:visible'>3.00am - Monday, 8 Dec-2022</p>
                </div>
            </div>
        </div>


        {/* second column */}
        <div className='sm:w-[45%] sm:mt-0 mt-[70px] flex relative'>
            <div className='sm:w-[80%] bg-gray-400 bg-opacity-60 sm:mt-[70px] mt-[20px] rounded-xl h-[800px]'>
                <div className='ml-[40px] sm:mt-[80px]'>
                    <input type="text" placeholder='Enter your city' value={location} onKeyDown={searchLocation} onChange={event => setLocation(event.target.value)}  className='bg-transparent placeholder:text-gray-300 font-semibold rounded-lg px-4 text-[35px] border border-none focus:outline-none  text-white w-[480px] h-[60px]' />
                    <hr className='mt-2 ml-3 w-[480px] my-4 mx-auto h-1 bg-gray-100 rounded border-0 '/>
                </div>
                <div className='mt-[80px] ml-14 text-white'>
                    <h2 className='text-[30px] font-semibold'>Weather Details</h2>
                    <div className='ml-[30px] mt-10'>
                        <div className='flex items-center justify-between'>
                            
                            <p className=' text-[25px]'>Cloudy</p>
                            {data.weather ? <p className='text-[25px] justify-center items-center mx-[120px]'>{data.weather[0].main}</p> : null}
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mt-8 text-[25px]'>Humidity</p>
                            {data.main ? <p className='mt-8 text-[25px] justify-center items-center mx-[120px]'>{data.main.humidity}%</p> : null}
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='mt-8 text-[25px]'>Wind</p>
                            {data.wind ? <p className='mt-8 text-[25px] justify-center items-center mx-[120px]'>{data.wind.speed} MPH</p> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>



    </div>
  )
}

export default Home