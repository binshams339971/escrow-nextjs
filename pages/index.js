import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Landings.module.css';
import Reason from '../components/ui/landings/Reason.js';
import Safety from '../components/ui/landings/Safety.js';
export default function Home() {
  return (
    <div className='' >
      <div className="bg-[url('../public/assets/landings/topBackground.png')] h-[40rem] bg-center bg-no-repeat bg-cover">
        <div className='flex justify-around pt-10'>
          <div className='text-3xl text-white font-bold'>ESCROW</div>
          <div className="mt-2">
            <ul className='hidden md:flex text-sm text-white'>
              <li className='mx-6 cursor-pointer'>Consumer</li>
              <li className='mx-6 cursor-pointer'>Boardless Account</li>
              <li className='mx-6 cursor-pointer'>Business</li>
              <li className='mx-6 cursor-pointer'>Help</li>
              <button className='mx-6 border border-white px-6 bg-white text-black text-xs py-1 rounded-full hover:bg-[#27426f] hover:text-white transition ease-in-out'>Login</button>
            </ul>
          </div>
        </div>
        <div className='mt-24 md:mt-40'>
          <p className='w-64 md:w-80 mx-auto text-3xl font-semibold text-white text-center align-middle'>A secure, reliable way to transact your money</p>
          <p className='w-80 md:w-[36rem] mx-auto text-md font-light mt-4 text-white text-center align-middle'>It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout. The point of using Lorem Ipsum is </p>
        </div>
      </div>
      <div className='flex justify-center items-center -mt-44 z-50'>
        <div className="w-4/5 md:w-2/3 p-3">
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden h-auto shadow shadow-lg">
            <img className="block h-64 md:h-auto w-full md:w-2/4 flex-none bg-cover" src="/assets/landings/humanImage.png" />
            <div className="bg-white -ml-4 rounded-b lg:rounded-b-none lg:rounded-r px-8 py-8 flex flex-col justify-between leading-normal">
              <p className="text-xl text-gray-500">What is a</p>
              <p className="text-3xl font-bold text-blue-900 md:-mt-4">Secure transaction?</p>
              <p className="text-xs text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is </p>
              <p className="text-xs text-gray-500 mt-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is </p>
              <button className='w-2/4 md:w-1/4 py-4 mt-4 rounded-lg text-center border border-orange-500 text-orange-500 font-semibold text-xs hover:text-white hover:bg-orange-500 transition ease-in-out'>Learn More..</button>
            </div>
          </div>
        </div>
      </div>
      <Reason />
      <Safety />
      <div className='h-96 bg-blue-900'></div>
    </div>
  )
}
