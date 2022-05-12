import Image from 'next/image'

export default function Safety() {
    return (
        <div className="mt-48">
            <p className="text-2xl font-bold text-center text-blue-900">Safely buy and sell products and servicess</p>
            <p className="text-2xl font-bold text-center text-blue-900">from $100 to $10 million or more</p>
            <div className='grid sm:grid-cols-3  grid-cols-1 gap-8 px-[5rem] py-8'>
                <div className="col-span-1 shadow-md px-8 py-8 rounded-lg">
                    <img className="" src="/assets/landings/secure.png" />
                    <p className='text-2xl text-blue-800 font-bold my-2'>Secure payments</p>
                    <p className='text-xs mt-4'>It is a long established fact that a reader will be distracted by the readable. t that a reader will be distracted by the readable</p>
                    <p className='text-sm mt-4 font-bold cursor-pointer'>View details +</p>
                </div>
                <div className="col-span-1 shadow-md px-8 py-8 rounded-sm bg-orange-600">
                    <img className="" src="/assets/landings/api.png" />
                    <p className='text-2xl text-white font-bold my-2'>Escrow API</p>
                    <p className='text-white text-xs mt-4'>It is a long established fact that a reader will be distracted by the readable. t that a reader will be distracted by the readable</p>
                    <p className='text-sm mt-4 font-bold text-white cursor-pointer'>View details +</p>
                </div>
                <div className="col-span-1 shadow-md px-8 py-8 rounded-lg">
                    <img className="" src="/assets/landings/api.png" />
                    <p className='text-2xl text-blue-800 font-bold my-2'>Escrow API</p>
                    <p className='text-xs mt-4'>It is a long established fact that a reader will be distracted by the readable. t that a reader will be distracted by the readable</p>
                    <p className='text-sm mt-4 font-bold cursor-pointer'>View details +</p>
                </div>
            </div>
        </div>
    )
}